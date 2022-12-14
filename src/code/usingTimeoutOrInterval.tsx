// import util from "util" ;     
import { IterableOps } from "./generalUse11";
import EventEmitter from "events";      
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react";
// import { isWindowActive, useWindowActivityStatus } from "./useWindowFocusState" 
import {           
    IntervalUsageAcceptableCatchupPolicy, 
    intervalUsageCatchupPolicyEmitErrorOnce  ,

} from "./timeoutOrIntervalPolicy";       
import { usingTimeout } from "./usingTimeoutB";
import {
    usingInterval ,
    useIntervalEffect ,
} from "./usingInterval1" ;




    


export { usingTimeout } ;     
export { usingInterval, useIntervalEffect } ;   
/**    
 * 
 */
const useIntervalDeferredValue = (
    function <A>(...[{ tMillis }  , v0 ] : [
        { tMillis: number } , 
        A ,      
    ] ): A {    
        const r1 = (
            useRef<A >(v0 )                
        ) ;                     
        r1.current = v0 ;  

        const [v2, setV2] = (       
            useState<A>(v0 )
        ) ;     
        /**    
         * `useLayoutEffect`-level of synchronicity becomes unnecessary here, since 
         * calls to the callbacks will only come from within the `RAF` call-back(s)    
        */     
        useEffect(() => {
            return (
                usingInterval((): void => {
                    setV2(r1.current ) ;
                } , tMillis )
            ) ;
        }, [r1 ] );

        return v2 ;
    }
) ;  
/**     
 * {@link Object.is } and React .  
 * intentionally excluding the primitive-types since they should be passed directly                   
*/
const useJsonStringificativeMemo = (                                
    function <A extends (object | (readonly unknown[] ) )> (a: A ): A {
        return (
            useMemo<A>(() => a, useDeferredValue<NonNullable<React.DependencyList > >([JSON.stringify(a)]) )
        ) ;                           
    }                 
) ;             
export { useIntervalDeferredValue } ;   
export { useJsonStringificativeMemo } ;        


    


     
const noAnimationFrameSupport = (
    IterableOps.memoize((      
        (): boolean => {                       
            return (         
                (                       
                    typeof requestAnimationFrame === "undefined"  
                ) 
                ?      
                (console.error("'requestAnimationFrame' is not defined ") , true ) 
                :
                false
            ) ;        
        }                              
    ))
) ;
/**     
 * {@link requestAnimationFrame}.
 * only available in HTML5 ctx, and unavailable in *server-side* ctx.
 */
function useAnimationFrameRefreshEffect(                                    
    callback: FrameRequestCallback ,                
    deps: React.DependencyList ,      
) : void {
    /**    
     * `useLayoutEffect`-level of synchronicity becomes unnecessary here, since 
     * calls to the callbacks will only come from within the `RAF` call-back(s)    
    */                  
    useEffect(() => {    
        let EXIT : boolean = false ;    
        if ((     
            noAnimationFrameSupport()        
        )) {            
            return ;
        };
        (function scheduleAgain () {                    
            if (EXIT === false ) {                 
                requestAnimationFrame((...rfArgs ) => {
                    if (EXIT === false ) {          
                        /**   
                         * note -           
                         * in case of 'exception's, 
                         * avoid further calls
                         * */             
                        {                            
                            callback(...rfArgs ) ;    
                            if (EXIT === false ) {
                                scheduleAgain() ;    
                            }       
                        }      
                    }
                }) ;
            }      
        } )() ;                               
        return () => {                                      
            EXIT = true ;                     
        } ;                                                            
    }, deps ) ;          
    useState(() => (                    
        console.info((              
            [             
                `This is not an error. However,  `       ,           
                `'${useAnimationFrameRefreshEffect.name || "" }' will not automatically throttle upon tab/window leave, ` ,
                `your code shall take control that. ` ,
            ]  
            .join("\n ")
        )) 
    )) ;        
}             
/**       
 * memoisation only for a fraction of a second.
*/
const useMillisecondsMemo: (
    <A> (f: () => A ) => A
) = (
    1 
    ?     
    function <A> (f: () => A ) : A {
        {
            const storeR = (  
                useRef<() => A >(f)          
            ) ;                        
            return (                                                   
                useRef((                       
                    IterableOps.throttle((f : () => A ): A => {
                        // re-assign the ref, and return it
                        return (
                            (
                                storeR.current = f
                            )()
                        ) ;            
                    } , 0.5 * 1000 , { leading: true } )
                ))  
                .current
                (f )      
                ||
                (storeR.current)() 
            ) ;
        }                                                                
    }  
    :        
    function <A> (f: () => A ) : A { 
        return (
            useDeferredValue<() => (A | undefined) >(IterableOps.throttle(f, 0.5 * 1000, { leading: true } ) ) 
            ()  
        ) || f() ;                                                                     
    }           
) ;            
/**    
 * this is to warn changes to `deps`.  
 * certain `useYyy`s is designed for invariant arguments for component lifetime
 * (for example, {@link React.useImperativeHandle} ).
 */
function useWarnOnChange <A>(...[f , options = {} ] : [
    A ,         
    { 
        name ?: (
            string
        ) ; 
        severity ?: (
            keyof (
                Pick<Console, "debug" | "log" | "info" | "warn" | "error">
            )
        ) ; 
    } ?  ,         
]) {  
    ;    
    const { name = 'value' , severity = "error" } = options ;
    ;   
    const cb = React.useState<A>(f )[1 ]                                          
    React.useEffect(() => {
        (       
            cb         
            ((v0: A ) => (           
                (                       
                    (f === v0 )                    
                    ||         
                    console[severity ]((
                        TypeError(`detected change in '${name}'. this likely is not what you expect. ` )  
                    ) , [v0, f ] as const )     
                ) 
                ,
                v0 
            ))       
        )  ;
    } , [f ] )       ;       
}       
export * from "./usingTimeoutEventEmitter";
export {             
    useAnimationFrameRefreshEffect ,    

    useMillisecondsMemo ,    

    useWarnOnChange ,       
} ;