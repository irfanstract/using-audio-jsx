
import { BoundedIdentityFunction, } from "./generalUse11";
import React, { 
    useState, useReducer,      
    useLayoutEffect, useEffect,
    useCallback, useMemo, useDeferredValue,  useContext, 
    useImperativeHandle,   
    useTransition, 
    useDebugValue ,
} from "react"; 
import { usingInterval, useIntervalDeferredValue } from "./usingTimeoutOrInterval";   







enum ModularIncrementativeSignificance {
    KEEP = "keep",
    DROP = "drop",
}
/**    
 * `period` must be *larger-than-zero* yet can be non-integral.
 * 
 * the value will roll back as it reaches `period`; 
 * if there were excess, `rollbackTimeRemainder` defines handling of the remainder.
 */
const useModularIncrementation = (
    function (props : { 
        /**   
         * *the upper-bound*
         */
        period : number ;
        /**   
         * handling for *excess*
         */
        rollbackTimeRemainder ?: ModularIncrementativeSignificance ;
    }) {        
        const { 
            period : modN , 
            rollbackTimeRemainder = (
                ModularIncrementativeSignificance.KEEP
            ) ,
        } = props ;
         
        if (!(0 < modN )) {
            throw (
                TypeError(`invalid period ${modN }, it does not larger than zero.`)
            ) ;  
        } else {
            return (
                useReducer((v: number) => (
                    (rollbackTimeRemainder === ModularIncrementativeSignificance.DROP ) 
                    ?
                    ((v: number) => (
                        modN <= v 
                        ? 
                        0 : v 
                    ))(v + 1 )
                    : 
                    ((v + 1 ) % modN )
                ) , 0 )  
            ) ;      
        }  
    }
) ;   

/**   
 * this `useYyy` 
 * provides support for (en)forcing {@link React.FC *component-level*} {@link React.useReducer *refresh*}.
 * 
 * this method 
 * should only be used as last resort when no other alternatives like `useRealTimeQueryInterval` were applicable.
 * - {@link React.DependencyList}
 * - {@link React.useMemo } and {@link React.useCallback }.
 * - {@link React.useLayoutEffect} and {@link React.useEffect }.
 *   also {@link React.useInsertionEffect}.
 * - `useRealTimeQueryInterval`.
 */
const useCanForceRefresh = (            
    (...[{ modN = 0x100 } = { } ] : [
        properties ?: { modN ?: number } ,    
    ]) => {
        const [ c , forceRefresh ] = ( 
            useModularIncrementation({ period : modN })
        ) ;          
        useDebugValue({ c }) ;     
        return ( 
            useMemo(() => ({         
                forceRefresh ,  
                /**   
                 * this `number` 
                 * can be passed as element of {@link React.useEffect `deps` } to enforce dispatch
                 */
                c,  
            }), [c, forceRefresh ])
        );
    }       
) ;    

/**    
 * this invokes 
 * periodic {@link useCanForceRefresh refresh} 
 * with given *milliseconds of interval* and *characteristics*.
 */
const useRefreshByInterval1 = (      
    (...args1 : [                                      
        _1 : true ,        
        periodMillis: number ,                    
        properties ?: (
            {

                /**   
                 * React has three variations of `useEffect`, 
                 * it's `useEffect` itself as well as `useLayoutEffect` and `useInsertionEffect` .  
                 * in general `useEffect` is strongly preferred for high-level (sub)modules, but  
                 * `useEffect` is prone to timing distortion and therefore 
                 * in timing-sensitive apps `useLayoutEffect` shall be used instead.
                 * 
                 * there's also `useInsertionEffect`, but 
                 * it can't be used for `dispatch(...)` or `setState(...)` and hence not applicable. 
                 * 
                 * *this argument shall never change for the Component lifetime as 
                 * React does not support succh change*.   
                 */
                LE ?: (           
                    keyof Pick<typeof React, "useLayoutEffect" | "useEffect">         
                ) ; 
    
            }
            &
            Partial<(
                NonNullable<(
                    Parameters<typeof usingInterval >[2]
                )>
            ) >
        ) ,
    ]) => {    
        /**   
         * extract some variables
         */
        const [      
            ,                   
            requestedPeriodMillis ,             
            args1P = {} ,      
        ] = args1 ;       
        /**   
         * extract some variables,
         * with defaults based on previously-obtained variables.
         * 
         * {@link React.useLayoutEffect} is preferred over {@link React.useEffect},
         * except if {@link requestedPeriodMillis } were large enough.
         */
        const { 
            LE = (2500 < requestedPeriodMillis ) ? "useEffect" : "useLayoutEffect"  , 
            catchupPolicy ,
        } = args1P ; 
        ;         
        /**  
         * this will be 
         * the primary way to invoke *component-level* *refresh*.
         */
        const {    
            forceRefresh ,       
            c ,                                       
        } = (                                   
            useCanForceRefresh()                 
        ) ;        
        /**    
         * the `intervalMillis` will be an element of `dependencies`, but
         * rapid changes to it will disrupt proper execution.
         * must switch to this {@link useDeferredValue }-emitted value instead.
         */
        const accceptedPeriodMillis = (
            useDeferredValue(requestedPeriodMillis)    
        ) ;       
        /**   
         * the core part --
         * a `useYyyEffect` call in turn invoking {@link usingInterval}!
         */
        React[LE ](() => {   
            return (    
                usingInterval(() => {         
                    forceRefresh() ;         
                    return true ;
                } , accceptedPeriodMillis, ...(
                    catchupPolicy ? [{ catchupPolicy }] : [] 
                ) ) 
            ) ;   
        }, [accceptedPeriodMillis ] ) ;  
        const r1 = {  
            forceRefresh ,          
            c ,    

            LE ,   
            periodMillis : requestedPeriodMillis ,    
        } ;              
        /** 
         * {@link useDebugValue }.
         */
        useDebugValue(r1 ) ;          
        // return
        return(     
            r1  
        ) ;    
    }            
) ;                               
/**    
 * {@link useRefreshByInterval1 }.
 */
const useRefreshByInterval = (      
    (...a: Parameters<typeof useRefreshByInterval1 > ): ({} & {} ) => { 
        useRefreshByInterval1(...a ) ;                    
        return JSON ;    
    }    
) ;      
const useIncrementByInterval = (      
    (...a: Parameters<typeof useRefreshByInterval1 > ): ({} & {} ) => { 
        const {
            c ,
        } = useRefreshByInterval1(...a ) ;                    
        return c ;    
    }    
) ;
 










export {
    ModularIncrementativeSignificance ,
    useModularIncrementation , 
  
    useCanForceRefresh ,  

    useRefreshByInterval1 , 
    useRefreshByInterval , 
    useIncrementByInterval ,
} ;