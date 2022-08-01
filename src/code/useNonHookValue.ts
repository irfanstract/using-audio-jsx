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
    (...[{ modN = 0x100 } = { } ] : [
        properties ?: { modN ?: number } ,    
    ]) => {
        const [ c , forceRefresh ] = (
            useReducer((v: number) => ((v + 1 ) % modN ) , 0 )
        ) ;          
        useDebugValue({ c }) ;
        return ( 
            useMemo(() => ({ c, forceRefresh }), [c, forceRefresh ])
        );
    }       
) ;  
const useRefreshByInterval1 = (      
    (...[      
        ,                   
        periofMillis ,             
        { LE = "useEffect" as "useEffect" } = {} ,      
    ] : [                                      
        // _ignored1: true ,      
        // periofMillis: number ,    
        _1 : true ,        
        periodMillis: number ,                    
        properties ?: {
            LE ?: (
                keyof Pick<typeof React, "useLayoutEffect" | "useEffect">
            ) ; 
        } ,
    ]) => {            
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
/**  
 * note that this does not provide `deps` ;   
 * `deps` will be unnecessary for this, due to how {@link useRefreshByInterval} works
*/  
type RealTimeQueryIntervalUsageArgs<A> = [
    properties : (
        {        
            // deps: React.DependencyList ;                 
            // defaultVl ?: A ;                
            f: () => A ;                                   
                
            strictInterval ?: boolean ;          
                     
            LE ?: (         
                NonNullable<(
                    (
                        Parameters<typeof useRefreshByInterval1 >[2 ]
                    ) 
                )>["LE"]
            ) ;
    
        } | (() => A )      
    ) , 
    timeoutMillis: number  ,                   
] ;        
/**         
 * {@link RealTimeQueryIntervalUsageArgs } . 
 * utility for reliably interpret the argument.   
*/        
const REFQUER_CALL_ARG_UPGRDE = (() => {  
    return (    
        (function <A> (props: (          
            // {                                       
            //     f: () => A ;                           
                  
            // } | (() => A )                             
            RealTimeQueryIntervalUsageArgs<A>[0 ]        
        ) ) {        
            type Return = (
                Pick<(                 
                    Required<(   
                        Exclude<(                 
                            RealTimeQueryIntervalUsageArgs<A>[0 ]   
                        ),  (...Args : never[] ) => void >     
                    )>   
                ), "f" | "LE">   
            ) ;            
            const DEFAULT_LE : Return["LE"] = (
                "useLayoutEffect"
            ) ;   
            return (   
                function REFQUER_ () : Return  {       
                    if ("f" in props) {                
                        const {                                         
                            // defaultVl ,               
                            f ,        
                            LE = DEFAULT_LE ,                                                                           
                        } = props ;    
                        return { f, LE } as const ;     
                    } else {              
                        const f = (
                            BoundedIdentityFunction<() => A>()(props )    
                        ) ;               
                        const LE = DEFAULT_LE ;     
                        return { f, LE } ;        
                    }      
                }
            )() ;      
        })                          
    ) ;   
})() ;      
/**  
 * both {@link useRealTimeQueryInterval } and {@link useRealTimeQueryInterval1 }  
 * are based on {@link Window.setInterval } . 
 * however,          
 * {@link useRealTimeQueryInterval } will not restrict calls to the tick-tock(s), while
 * {@link useRealTimeQueryInterval1} will 
 * 
 * note that this does not provide `deps` ;   
 * `deps` will be unnecessary for this, due to how {@link useRefreshByInterval} works
*/  
const useRealTimeQueryInterval = (       
    function <A>(...[props, timeoutMillis ] : RealTimeQueryIntervalUsageArgs<A> ): A {             
        const { f, LE } = (                
            REFQUER_CALL_ARG_UPGRDE(props )                                                            
        ) ;                 
        const { c } = (           
            useRefreshByInterval1(true, timeoutMillis, { LE } )   
        ) ;                                          
        const vl = (               
            (function useM(): A {     
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
    function <A>(...[props, timeoutMillis ] : RealTimeQueryIntervalUsageArgs<A> ): A {             
        const { f, LE } = (              
            REFQUER_CALL_ARG_UPGRDE(props )                                                             
        ) ;                 
        const { c } = (           
            useRefreshByInterval1(true, timeoutMillis, { LE } )   
        ) ;                    
        const vl = React.useMemo(() => f() , [c] ) ;
        useDebugValue({ c, vl }) ;
        return vl ;   
    }                   
) ;                      
const {
    useNumericDigest , 
    useNumericDigestWith ,   

} = (() => {
    return new (class {
        useNumericDigestWith = (
            function useNumericDigestWith(...[        
                v0,   
                { inertialCoef: coef , timeoutMillis } , 
                { debug1 = false } = { debug1: false, } ,    
            ] : [
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
                const digest = (
                    function () {
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
                    }    
                );        
                (            
                    useRealTimeQueryInterval1(()  => { 
                        return digest() ;    
                    } , timeoutMillis  ) 
                ) ;          
                const c1 = {
                    timeoutMillis ,     
                    timeoutSeconds , 
                    coef ,   
                    perRefreshCoef ,     
                    v0 , 
                    v1 ,       
                } ;
                useDebugValue(c1 ) ;  
                return c1 ;    
            }       
        ) ;      
        useNumericDigest = (
            (...args : Parameters<typeof this.useNumericDigestWith > ) => {
                const { v1 } = (
                    this.useNumericDigestWith(...args )    
                ) ;  
                return v1 ;
            }   
        );
    }) ;
})() ;
export {
    useCanForceRefresh ,        
    useRefreshByInterval ,        
    useRefreshByInterval1 ,   
    useRealTimeQueryInterval ,           
    useRealTimeQueryInterval1 ,     
    useIntervalDeferredValue as useIntervalDeferredValue1 ,  

    useNumericDigest ,  
    useNumericDigestWith , 
} ;        