import {   
    OptionsCouldBeOmittedAltogether,
    IterableOps ,       
    memoize, 
    BoundedIdentityFunction,   
} from "./generalUse11" ; 
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { usingInterval } from "./usingTimeoutOrInterval";  
import { 
    // useCanForceRefresh, useRefreshByInterval ,
} from "./useNonHookValue";
import { useUserGestureDependentResource } from "./useUserGestureDependentResource"; 
import { 
    useWindowActivityStatus , 
    isWindowActive ,  
} from "./useWindowFocusState";           




// Domain Imports and CSS Imports
import {  
    useAudioCtxCurrentTime , 
    useCanAudioCtxUpdateCurrentT ,

} from "./useAudioCtxCurrentTime" ;















const useAudioCtxWithInitBtnB = (
    (...[{ preAllocatedUnit: aCtxGiven , } , ] : [
        {
            preAllocatedUnit : null ;
        } ,
    ] ) => {
        ;
        const {                         
            INIT,                
            s ,              
            // setS ,                    
            CLOSE  ,    
        } = (         
            useUserGestureDependentResource           
        )<AudioContext>({                      
            NEW: () => (new AudioContext() ) ,                  
            aCtxGiven ,            
        }) ;                
        const [lastReactivativeTime, setLastReactivativeT] = (
            useState<number>(-1 )  
        ) ;
        const RESUME = (
            () => {                                  
                if (s) {  
                    ;      
                    s.resume() ;         
                    setLastReactivativeT(() => s.currentTime ) ;   
                }      
            }                         
        ) ;            
        ;
        return BoundedIdentityFunction<(
            {}
            & ReturnType<typeof useUserGestureDependentResource >
            & {
                RESUME : () => void ;
            }
        )>()({
            INIT ,
            s ,
            CLOSE ,
            
            RESUME ,
            lastReactivativeTime ,
            /**   
             * @deprecated
             * 
             */
            pretendLastReactivativeT : setLastReactivativeT , 
            
        }) ; 
    } 
) ;
/**  
 *          
*/    
const useAudioCtxWithInitBtn = (         
    (mainProps : Readonly<(
        {          
            aCtx ?: null ;     
                
        }                                 
        &
        Partial<(   
            {      
                shallAutoStart : false   ;            
                suspendOnWindowBlur : false    ;          
            } |         
            {          
                shallAutoStart : 1   ;
                suspendOnWindowBlur : true    ;          
            }  
        )>
    )> = {} ) => {                     
        const { aCtx: aCtxGiven = null , shallAutoStart = 1 , suspendOnWindowBlur = false } = mainProps ;
        ;
        const {                         
            INIT,                
            s ,              
            // setS ,                    
            CLOSE  ,    
            RESUME ,
            lastReactivativeTime ,
        } = (         
            useAudioCtxWithInitBtnB           
        )({                      
            //                        
            preAllocatedUnit: aCtxGiven ,            
        }) ;                
        const initBtn = (           
            <button type="button" disabled={!!s } onClick={() => INIT() } >
                INIT AUDIO CTX   
            </button>
        ) ;         
        // TODO      
        useEffect(() => {       
            return () => {
                CLOSE() ;                  
            } ;
        }, [] ) ;      
        const optionallyAutostart = (   
            () => (     
                shallAutoStart && RESUME()    
            )
        ) ;
        useLayoutEffect(() => {                                
            if (s) {                   
                /**   
                 * *not strictly {@link window} "focusin" evt, but
                 * roughly the {@link window} element found focused*.
                 * 
                 */
                const onWindowFocusin = (
                    (): void => void (
                        optionallyAutostart()
                    ) 
                ) ;
                if ((
                    // TODO      
                    isWindowActive() 
                )) {
                    ;       
                    onWindowFocusin() ;   
                }
                const focusAndBlurListener : {
                    onFocus : () => void ;                         
                    onBlur: () => void ;                    
                } = {        
                    onFocus : () => onWindowFocusin() ,       
                    onBlur : () => (suspendOnWindowBlur && s.suspend() ) ,                                      
                } as const ;                                                      
                {    
                    ;              
                    window.addEventListener("focus", focusAndBlurListener.onFocus ) ;          
                    window.addEventListener("blur" , focusAndBlurListener.onBlur  ) ;                   
                }
                return () => {
                                                          
                    {     
                        ;              
                        window.removeEventListener("focus", focusAndBlurListener.onFocus ) ;                                          
                        window.removeEventListener("blur" , focusAndBlurListener.onBlur  ) ;                   
                    }     
                } ;
            }
        } , [s ] ) ;
        const s1 = (           
            useMemo(() => (
                s && (() => {
                    const { 
                        destination: destination ,     
                    } = s ;
                    return (     
                        {                                     
                            destination, 
                            resume: () => s.resume() , 
                            lastReactivativeTime ,  
                        } as const       
                    ) ;                                
                })()
            ) , [s , lastReactivativeTime ] )                      
        ) ;
        return [s1, initBtn] as const ;             
    }
) ; 

















export { useAudioCtxWithInitBtn } ;   
export {
    useAudioCtxCurrentTime , 
    useCanAudioCtxUpdateCurrentT ,       
} ;  
export default {
    useAudioCtxWithInitBtn , 
} ;

