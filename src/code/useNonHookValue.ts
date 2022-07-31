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
const useRefreshByInterval1 = (      
    (_ignored1: true , periofMillis: number) => {
        ;
        const {    
            forceRefresh ,       
            c ,                                  
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
        return {
            c ,   
        } ;    
    }            
) ;                               
const useRefreshByInterval = (      
    (...a: Parameters<typeof useRefreshByInterval1 > ): ({} & {} ) => { 
        useRefreshByInterval1(...a ) ;                    
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

        strictInterval ?: boolean ;          

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
/**         
 * note that this does not provide `deps` ;   
 * `deps` will be unnecessary for this, due to how {@link useRefreshByInterval} works
*/  
const useRealTimeQueryInterval1 = (     
    function <A>(props : {        
        // deps: React.DependencyList ;                          
        // defaultVl ?: A ;             
        f: () => A ;                                              
           
        strictInterval ?: boolean ;       

    } | (() => A ) , timeoutMillis: number ): A {        
        const { f } = (            
            REFQUER_CALL_ARG_UPGRDE(props )  
        ) ;               
        const { c } = (    
            useRefreshByInterval1(true, timeoutMillis )   
        ) ;           
        const vl = React.useMemo(() => f() , [c] ) ;
        return vl ;   
    }                  
) ; 
const useNumericDigest = (
    function (...[v0, { inertialCoef: coef , timeoutMillis } , { debug1 = false } = { debug1: false, } ] : [
        presentlySrcValue : number ,          
        config : {     
            /**     
             * in range `[0 EXCLUSIVE, 1 INCLUSIVE ]`
             */  
            inertialCoef : number ;                
                 
            timeoutMillis : number ;         
        } ,                            
        debug ?: {
            debug1 ?: boolean ;      
        } ,  
    ] ) {         
        const timeoutSeconds = (  
            timeoutMillis / 1000 
        ) ;     
        const perRefreshCoef = ( 
            coef ** timeoutSeconds   
        ) ;             
        const [v1, setV1] = (    
            React.useState<number >(v0 )   
        ) ;                       
        (            
            useRealTimeQueryInterval1(()  => {
                if (debug1 === false ) {
                    ;
                    setV1(function (vLocally: number) {
                        return (  
                            // TODO    
                            (perRefreshCoef * vLocally )     
                            +
                            ((1 + -perRefreshCoef ) * v0 )  
                        ) ;    
                    }) ;       
                } else { 
                    // TODO  
                }
            } , timeoutMillis  ) 
        ) ;  
        return v1 ;        
    }
) ;
export {
    useCanForceRefresh ,        
    useRefreshByInterval ,        
    useRefreshByInterval1 ,   
    useRealTimeQueryInterval ,           
    useRealTimeQueryInterval1 ,     
    useIntervalDeferredValue as useIntervalDeferredValue1 ,  

    useNumericDigest ,  
} ;        