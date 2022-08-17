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
    useState, useReducer,      
    useLayoutEffect, useEffect,
    useCallback, useMemo, useDeferredValue,  useContext, 
    useImperativeHandle,   
    useTransition, 
    useDebugValue ,
} from "react";          
import { usingInterval, useIntervalDeferredValue } from "./usingTimeoutOrInterval"; 
import { 
    useCanForceRefresh , 

    useRefreshByInterval1 ,  
    useRefreshByInterval ,  
 
} from "./usingIntervalRefresh";      
import { useDepsChgCount } from "./usingComponentMountRenderStat";      


  
       
  
const [] = [] ;
/**  
 * note that this does not provide `deps` ;   
 * `deps` will be unnecessary for this, due to how {@link useRefreshByInterval} works
*/  
type RealTimeQueryIntervalUsageArgs<A> = [
    properties : (
        {                      
            f: () => A ;                          
            /**       
             * if left unset, then the resulting intervals would be defined solely by `timeoutInterval`.       
             * to achieve that, the default value would be `[]` (empty array) .           
             *  */   
            deps ?: React.DependencyList ;                    
            // defaultVl ?: A ;                         
                      
            strictInterval ?: boolean ;          
                         
            LE ?: (         
                NonNullable<(
                    NonNullable<(
                        (
                            Parameters<typeof useRefreshByInterval1 >[2 ]
                        ) 
                    )>["LE"]
                )>
            ) ;     
            catchupPolicy ?: (    
                NonNullable<(     
                    NonNullable<(
                        (
                            Parameters<typeof useRefreshByInterval1 >[2 ]
                        ) 
                    )>["catchupPolicy"]
                )>
            ) ;
    
        } | (() => A )      
    ) , 
    timeoutMillis: number  ,       
] ;        
/**    
 * 
 */
const useRealtimeQueryIntervalUsageArgsParse = (
    function <A>(...[props, timeoutMillis ] : RealTimeQueryIntervalUsageArgs<A> ) {
        ;     
        const { f, LE, catchupPolicy, deps = [] } = (                 
            REFQUER_CALL_ARG_UPGRDE(props )                                                                 
        ) ;                             
        ;   
        const { c, forceRefresh } = (           
            useRefreshByInterval1(true, timeoutMillis, { LE, catchupPolicy } )   
        ) ;                                     
        React[LE ](() => forceRefresh() , deps )  ;
        ;    
        return {                            
            props ,        
            timeoutMillis ,  

            LE ,             
            f ,          
            c ,   
             
            forceRefresh ,              
        } ;
    }
) ;
const useRealtimeQueryIntervalUsageArgsParse1 = (
    function <A>(...[props, timeoutMillis ] : RealTimeQueryIntervalUsageArgs<A> ) {
        ;     
        const { f, LE, catchupPolicy = "MAINTAIN_FIXED_PACE", deps = [] } = (                 
            REFQUER_CALL_ARG_UPGRDE(props )                                                                 
        ) ;                             
        ;   
        const [{ value: vl, count: c }, setVl] = (
            (function useSt () {
                type State = { value: A, count: number ; } ;
                return (
                    React.useReducer((
                        (...[{ count: c0 }, newValue ] : [State, A ]): State => {
                            return { 
                                count: (c0 + 1 ) % 256 , 
                                value: newValue ,
                            } ;
                        } 
                    ) , { count: 0, value: f() } as State )
                ) ;
            })()
        ) ;
        React[LE](() => (
            usingInterval((
                (): void => { 
                    const newValue = f() ;
                    setVl(newValue ) ;
                }
            ), timeoutMillis, { catchupPolicy })
        ) , deps ); 
        // TODO
        const forceRefresh = (
            () => {}
        );
        ;  
        return {                            
            props ,        
            timeoutMillis ,  

            LE ,             
            f ,          
            c ,   
             
            forceRefresh ,         
            
            vl , 
        } ;
    } /* */
) ;
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
                &
                Partial<(          
                    Pick<(                                   
                        Required<(         
                            Exclude<(                 
                                RealTimeQueryIntervalUsageArgs<A>[0 ]                    
                            ),  (...Args : never[] ) => void >     
                        )>   
                    ), "deps" | "catchupPolicy">           
                )>           
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
                            catchupPolicy ,                                                                      
                        } = props ;    
                        return { f, LE, catchupPolicy } as const ;     
                    } else {               
                        const f = (
                            BoundedIdentityFunction<() => A>()(props )    
                        ) ;               
                        const catchupPolicy = undefined ;
                        const LE = DEFAULT_LE ;     
                        return { f, LE, catchupPolicy } ;        
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
 * {@link useRealTimeQueryInterval } will generalise the dispatch to even outside the tick-tock(s), while 
 * {@link useRealTimeQueryInterval1} will limit the dispatch to the tick-tock(s) .
 * 
 * some critial problems :  
 * - in variation {@link useRealTimeQueryInterval } of `useRealtimeQuery` , 
 *   dispatches will not be restricted to regular intervals and instead generalised to every refresh and therefore 
 *   unexpected behaviour will arise.       
 * - in case the invocand would be performance-heavy, 
 *   {@link useRealTimeQueryInterval } will hog CPU usage.  
 * - use the closely-named {@link useRealTimeQueryInterval1 } instead .   
 * 
 * note that this does not provide `deps` ;   
 * `deps` will be unnecessary for this, due to how {@link useRefreshByInterval} works
 * 
 * @deprecated       
*/  
const useRealTimeQueryInterval = (       
    function <A>(...args1 : RealTimeQueryIntervalUsageArgs<A> ): A {             
        const {
            props ,    
            timeoutMillis ,           
      
            LE ,             
            f ,          
            c ,   
            
            forceRefresh ,            
        } = useRealtimeQueryIntervalUsageArgsParse(...args1 ) ;                                  
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
 * 
 * both {@link useRealTimeQueryInterval } and {@link useRealTimeQueryInterval1 }  
 * are based on {@link Window.setInterval } . 
 * however,          
 * {@link useRealTimeQueryInterval } will generalise the dispatch to even outside the tick-tock(s), while 
 * {@link useRealTimeQueryInterval1} will limit the dispatch to the tick-tock(s)  
 * 
 * note that this does not provide `deps` ;       
 * `deps` will be unnecessary for this, due to how {@link useRefreshByInterval} works
*/  
const useRealTimeQueryInterval1 = (     
    function <A>(...args1 : RealTimeQueryIntervalUsageArgs<A> ): A {             
        const {
            props ,    
            timeoutMillis ,           
      
            LE ,             
            f ,          
            c ,   
            
            forceRefresh ,            

            vl , 
        } = useRealtimeQueryIntervalUsageArgsParse1(...args1 ) ;    
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
                    useRealTimeQueryInterval1({
                        f : ()  => { 
                            return digest() ;    
                        } ,  
                        LE : "useLayoutEffect" , 
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
        /**   
         * {@link useNumericDigestWith } yet only gives `vl` (*the value*).
         */
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
const {
    useLogScaleNumericDigest , 
} = (() => {
    type UNDW0 = typeof useNumericDigestWith ;
    const AS_UNDW = (
        function <R extends number, A extends readonly unknown[] >(useNumericDigest : (...args : [number, ...A ] ) => R ) {
            return (
                function useLogScaleNumericDigest(...[v00, ...args ] : (
                    Parameters<typeof useNumericDigest>
                ) ) {          
                    const v0 = (                                
                        Math.log2(1E-5 + v00 )            
                    ) ;            
                    const v1 = (                     
                        useNumericDigest(v0, ...args )  
                    ) ;    
                    const v11 = (                 
                        2 ** v1 
                    );     
                    return v11 ;
                }              
            ) ;
        }      
    ) ;    
    return {         
        useLogScaleNumericDigest : (   
            AS_UNDW(useNumericDigest )           
        ) ,      
    } ;
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
    useLogScaleNumericDigest ,     
} ;        