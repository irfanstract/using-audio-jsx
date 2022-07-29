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




    


/**  
 * for {@link useEffect} or {@link useLayoutEffect }
 * 
 * @returns the cleanup functor      
*/   
const usingTimeout = (      
    (NEXT: () => void, periodInMillis: number ): ReturnType<React.EffectCallback> => {
        const timeoutSchdRef = (
            setTimeout(() => NEXT() , periodInMillis )         
        ) ;        
        return () => {
            clearTimeout((    
                timeoutSchdRef            
            )) ;
        } ;
    }                                         
) ;                              
export { usingTimeout } ;     
/**  
 * for {@link useEffect} or {@link useLayoutEffect }    
 *          
 * @returns the cleanup functor          
*/   
const usingInterval = (                      
    function Interval(     
        callback : (() => true ) | (() => void ), 
        periodMillis: NonNullable<Parameters<typeof setTimeout >[1] >  ,                     
        {   catchupPolicy , } : (        
            {      
                /**       
                 * specifies how delays shall be handled
                 * */               
                catchupPolicy : IntervalUsageAcceptableCatchupPolicy ;           
            } &                             
            Partial<{                      
            }>                          
        ) = {  
            catchupPolicy: "MAINTAIN_FIXED_PACE" ,   
        } ,      
    ): ReturnType<React.EffectCallback> {
        let closed: boolean = false ;    

        const GET_CURRENT_T = (
            () => performance.now() // MILLISECONDS                
        ) ;
        (function scheduleAgain(    
            {
                nextSchTMillis: currentTurnSupposedTMilllis ,       
            } : {  
                nextSchTMillis : number ;      
            } ,          
        ): true {                                         
            if (closed) {
                return true ;        
            }       
            setTimeout((): void => { 
                if (closed) {
                    return ;             
                }               
                callback() ;        
                if (closed) {
                    return ;     
                }             
                const nextSchTMillis = (
                    ((): number => { 
                        const strictFixedCompletionRateCaseReturnValue: number = (       
                            currentTurnSupposedTMilllis + periodMillis          
                        ) ;
                        const loosyCaseReturnValue: number = (       
                            GET_CURRENT_T() + periodMillis     
                        ) ;                
                        switch (catchupPolicy || false ) {    
                            case "MAINTAIN_FIXED_COMPLETION_RATE" :   
                                return ( 
                                    strictFixedCompletionRateCaseReturnValue             
                                ) ;                                
                            case "MAINTAIN_FIXED_PACE" :       
                                return ( 
                                    Math.max(                          
                                        loosyCaseReturnValue + (-1 * 1000 ), 
                                        strictFixedCompletionRateCaseReturnValue ) 
                                ) ;                
                            case false :       
                                break ;   
                            default :          
                                intervalUsageCatchupPolicyEmitErrorOnce(catchupPolicy ) ;
                                break ; 
                        }
                        return ( 
                            loosyCaseReturnValue
                        ) ;
                    })()     
                ) ;            
                scheduleAgain({        
                    nextSchTMillis: (
                        nextSchTMillis
                    ) ,           
                }) ;                                            
            } , (
                currentTurnSupposedTMilllis - GET_CURRENT_T()           
            ) ) ; 
            return true ;      
        })({
            nextSchTMillis: GET_CURRENT_T() + periodMillis , 
        }) ;   

        return () => {
            closed = true ;
        } ;
    }         
) ;
export { usingInterval } ;
const useIntervalDeferredValue = (
    function <A>({ tMillis } : { tMillis: number } , v0 : A ): A {  
        const r1 = (
            useRef<A >(v0 )                
        ) ;                     
        r1.current = v0 ;  

        const [v2, setV2] = (       
            useState<A>(v0 )
        ) ;     
        useEffect(() => {
            return (
                usingInterval(() => {
                    setV2(r1.current ) ;
                    return true ;    
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
 * memoisation only for a fraction of a second  
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
type EventEmSubArgs<A1 extends readonly [        
    Parameters<EventTarget["addEventListener"] >[0] | Parameters<EventEmitter["on"] >[0] , 
    EventListenerOrEventListenerObject | Function | null , 
    ...unknown[] ,          
] > = readonly [                               
    A1[0],             
    A1[1]  ,                                                    
    React.DependencyList | undefined ,                                                                                           
] ;                        
const useEventListener = (         
    function <A extends EventTarget >(a: A , ...[evtNm, cb, deps ]: (
        EventEmSubArgs<Parameters<A["addEventListener"] > >
    ) ) {
        useLayoutEffect(() => {        
            a.addEventListener(evtNm, cb, ) ;                                      
            return () => {         
                a.removeEventListener(evtNm, cb ) ;                                 
            } ;            
        } , deps ) ;                                                                  
    }                       
) ;             
const useEventTarget = (
    useEventListener   
) ;
const useEventEmitter = (                    
    function <A extends EventEmitter >(a: A , ...[evtNm, cb, deps ]: (
        EventEmSubArgs<Parameters<A["on"] > >
    ) ) {    
        useLayoutEffect(() => {   
            a.on(evtNm, cb, ) ;               
            return () => {                   
                a.off(evtNm, cb ) ;                         
            } ;        
        } , deps ) ;                                                               
    }                            
) ;                        
const usePagePreUnloadEvt = (   
    function () { 
        useEventTarget<Window>(window, "beforeunload" , (evt) => {
            ;                   
        }, [] ) ;  
    }      
) ;  
export {             
    useAnimationFrameRefreshEffect ,     
    useEventListener ,       
    useEventTarget ,  
    useEventEmitter ,

    useMillisecondsMemo ,   
} ;