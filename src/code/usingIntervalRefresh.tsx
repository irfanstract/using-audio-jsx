
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
            throw TypeError(`invalid period it does not larger than zero : ${modN } `) ;  
        }
        return (
            useReducer((v: number) => ((v + 1 ) % modN ) , 0 )
        ) ;        
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
             * there's also `useInsertionEffect`, but it does not define parameter `deps` and hence not applicable
             */
            LE ?: (
                keyof Pick<typeof React, "useLayoutEffect" | "useEffect">
            ) ; 
        } ,
    ]) => {    
        const [      
            ,                   
            periofMillis ,             
            { LE = (2500 < periofMillis ) ? "useEffect" : "useLayoutEffect"  } = {} ,      
        ] = args1 ;        
        ;         
        const {    
            forceRefresh ,       
            c ,                                       
        } = (                                   
            useCanForceRefresh()                 
        ) ;               
        React[LE ](() => {   
            return (
                usingInterval(() => {         
                    forceRefresh() ;    
                    return true ;
                } , periofMillis ) 
            ) ;   
        }, [useDeferredValue(periofMillis) ] ) ;  
        const r1 = {  
            forceRefresh ,          
            c ,    

            LE ,   
            periodMillis : periofMillis ,    
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