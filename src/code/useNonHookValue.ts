/** 
 * concerned with the React-friendly usage of real-time-changing values     
 */
// import util from "util" ;
// try {
//     const em1 = { v: 3 } as const ;
//     const em2 : {} = em1 ;
//     const em3 : { v ?: () => 5 } = em2 ;
//     const em31 = ("v" in em3 ) && (() => { const e = (em3.v ) ; return e && e() ; } )() ;
//     console.info({ em1, em2, em3, em31 }) ;     
// } catch (e ) { 
//     console.info(e ) ;    
// }
import { BoundedIdentityFunction, } from "./generalUse11";
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useImperativeHandle, useTransition, useDebugValue ,
} from "react"; 
import { usingInterval, useIntervalDeferredValue } from "./usingTimeoutOrInterval";   



  

const useCanForceRefresh = (       
    () => {
        const [ c , forceRefresh ] = (
            useReducer((v: number) => ((v + 1 ) % 0x100 ) , 0 )
        ) ;          
        useDebugValue({ c }) ;
        return ( 
            useMemo(() => ({ c, forceRefresh }), [c, forceRefresh ])
        );
    }
) ;
const useRefreshByInterval = (      
    (_ignored1: true , periofMillis: number): ({} & {} ) => {
        ;
        const {
            forceRefresh ,                             
        } = (                                   
            useCanForceRefresh()                 
        ) ;             
        useEffect(() => {   
            return (
                usingInterval(() => {         
                    forceRefresh() ;    
                    return true ;
                } , periofMillis ) 
            ) ;   
        }, [useDeferredValue(periofMillis) ] ) ;                       
        return JSON ;    
    }  
) ;      
/**     
 * utility for reliably interpret the argument
*/
const REFQUER_CALL_ARG_UPGRDE = (
    (function <A> (props: {                                       
        f: () => A ;                           
        
    } | (() => A ) ) : { f: () => A } {
        if ("f" in props) {           
            const {               
                // defaultVl ,    
                f ,                                                                                     
            } = props ;
            return { f } as const ;     
        } else {         
            const f = (
                BoundedIdentityFunction<() => A>()(props )    
            ) ;                
            return { f } ;
        }    
    })                          
) ;    
/**  
 * note that this does not provide `deps` ;   
 * `deps` will be unnecessary for this, due to how {@link useRefreshByInterval} works
*/  
const useRealTimeQueryInterval = (     
    function <A>(props : {        
        // deps: React.DependencyList ;                          
        // defaultVl ?: A ;
        f: () => A ;                           

    } | (() => A ) , timeoutMillis: number ): A {      
        useRefreshByInterval(true, timeoutMillis ) ;                      
        const vl = (         
            (function useM(): A {                                  
                const { f } = (            
                    REFQUER_CALL_ARG_UPGRDE(props )                                                 
                ) ;
                useDebugValue({ f }); 
                return f() ;
            })()    
        ) ;       
        return vl ;   
    }               
) ;
export {
    useCanForceRefresh ,  
    useRefreshByInterval ,       
    useRealTimeQueryInterval ,        
    useIntervalDeferredValue as useIntervalDeferredValue1 , 
} ;