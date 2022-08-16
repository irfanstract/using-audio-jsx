
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







const useModularIncrementation = (
    function ({ period : modN } : { period : number ; }) {        
        if (!(0 < modN )) {
            throw TypeError(`invalid period ${modN }, it does not larger than zero.`) ;  
        } else {
            return (
                useReducer((v: number) => ((v + 1 ) % modN ) , 0 )  
            ) ;      
        }  
    }
) ;   

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

const useRefreshByInterval1 = (      
    (...args1 : [                                      
        // _ignored1: true ,      
        // periofMillis: number ,    
        _1 : true ,        
        periodMillis: number ,                    
        properties ?: {

            /**   
             * React has two variations of `useEffect`, it's `useEffect` itself as well as `useLayoutEffect` .  
             * in general `useEffect` is strongly preferred for high-level (sub)modules, but  
             * `useEffect` is prone to timing distortion and therefore in timing-sensitive apps `useLayoutEffect` shall be used instead.
             * 
             * there's also `useInsertionEffect`, but 
             * it can't be used for `dispatch(...)` or `setState(...)` and hence not applicable. 
             * 
             * *this argument shall never change for the Component lifetime as React does not support succh change*.   
             */
            LE ?: (           
                keyof Pick<typeof React, "useLayoutEffect" | "useEffect">         
            ) ; 

            catchupPolicy ?: (
                NonNullable<(
                    NonNullable<(
                        Parameters<typeof usingInterval >[2]
                    )>["catchupPolicy"]
                )>
            ) ;
        } ,
    ]) => {    
        const [      
            ,                   
            requestedPeriodMillis ,             
            args1P = {} ,      
        ] = args1 ;       
        const { 
            LE = (2500 < requestedPeriodMillis ) ? "useEffect" : "useLayoutEffect"  , 
            catchupPolicy ,
        } = args1P ; 
        ;         
        const {    
            forceRefresh ,       
            c ,                                       
        } = (                                   
            useCanForceRefresh()                 
        ) ;        
        const accceptedPeriodMillis = (
            useDeferredValue(requestedPeriodMillis)    
        ) ;       
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
        useDebugValue(r1 ) ;          
        return(     
            r1  
        ) ;    
    }            
) ;                               
const useRefreshByInterval = (      
    (...a: Parameters<typeof useRefreshByInterval1 > ): ({} & {} ) => { 
        useRefreshByInterval1(...a ) ;                    
        return JSON ;    
    }    
) ;      
 










export {
    useModularIncrementation , 
  
    useCanForceRefresh ,  

    useRefreshByInterval1 , 
    useRefreshByInterval , 
} ;