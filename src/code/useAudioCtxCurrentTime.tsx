import {  
    // Unix , 
    IterableOps ,      
    // util ,  
    memoize,    
    BoundedIdentityFunction,   
} from "./generalUse11" ; 
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { usingInterval } from "./usingTimeoutOrInterval";  
import { useCanForceRefresh, useRealTimeQueryInterval1, useRefreshByInterval } from "./useNonHookValue";
// const isWindowActive = (() => {           
//     let F : boolean = false ;               
//     window.addEventListener("pointerdown" , () => { F = true  ; } ) ;    
//     window.addEventListener("mousedown" , () => { F = true  ; } ) ;     
//     window.addEventListener("keydown" , () => { F = true  ; } ) ;                 
//     window.addEventListener("focus" , () => { F = true  ; } ) ;                                 
//     window.addEventListener("blur"  , () => { F = false ; } ) ;                           
//     return (
//         () => (
//             F        
//         )        
//     ) ;                                                                                    
// })() ;     
// const useWindowActivityStatus = (
//     () => {
//         const [s, setS] = (
//             useState<boolean>(false )    
//         ) ;  

//         const REFRESH = () => {        
//             setTimeout(() => {
//                 ;
//                 const f = ( 
//                     isWindowActive()                      
//                 ) ;              
//                 console.log({ f  }) ;    
//                 setS(() => f ) ;         
//             } , 250 ) ;                            
//         };  

//         useEffect(() => {
//             REFRESH() ;  
//             const focusAndBlurListener : {             
//                 onFocus : () => void ; 
//                 onBlur: () => void ; 
//             } = {             
//                 onFocus: REFRESH ,  
//                 onBlur: REFRESH ,  
//             } ;                                              
//             {      
//                 ;              
//                 window.addEventListener("focus", focusAndBlurListener.onFocus ) ;          
//                 window.addEventListener("blur" , focusAndBlurListener.onBlur  ) ;                   
//             }  
//             return () => {
//                 ;                                              
//                 {       
//                     ;              
//                     window.removeEventListener("focus", focusAndBlurListener.onFocus ) ;          
//                     window.removeEventListener("blur" , focusAndBlurListener.onBlur  ) ;                   
//                 }        
//             } ;
//         }, [] ) ;

//         return {
//             isWindowOnFocus : s ,
//         } as const ;
//     }    
// ) ;
import { isWindowActive, useWindowActivityStatus } from "./useWindowFocusState";        







const useAudioCtxCurrentTime1 = (  
    (...[c, { periodMillis }, refreshIntervalProperties] : [
        BaseAudioContext | undefined | null ,
        {
            periodMillis : number ;  
        },
        Required<(
            Parameters<typeof useRefreshByInterval >
        )>[2] ,
    ] ) => {    
        const { isWindowOnFocus } = (         
            useWindowActivityStatus()        
        ) ;    

        const vl = (    
            useRealTimeQueryInterval1({
                f: () => (    
                    c ? 
                    c.currentTime
                    : null        
                ) , 
                ...refreshIntervalProperties , 
            } , (
                (      
                    ((c && c.state === "running") ? periodMillis : 1500 )    
                )  
            ) )
        ) ;

        return (() => {           
            return (          
                vl  
            ) ;
        })() ;
    }
) ;
/**   
 * switch to the mangled variant ; 
 * this non-mangled variant does not allow precisive config.
 * 
 * @deprecated
 */
const useAudioCtxCurrentTime = (  
    (c: BaseAudioContext | undefined | null ) => {
        const vl = (
            useAudioCtxCurrentTime1(c , {
                periodMillis : (
                    (     
                        // 0.19          
                        // (1 / 3 )
                        // (isWindowOnFocus ? 0.11 : 0.5 )  
                        ((c && c.state === "running") ? 0.11 : 1.5 )    
                    ) * 1000
                ) , 
            } , { LE: "useLayoutEffect" } )
        ) ; 
        return (
            (typeof vl === "number" ) ?
            vl : undefined
        ) ;
    }
);
/**      
 *     
 * @deprecated  
 * use {@link useAudioCtxCurrentTime } instead        
*/
const useCanAudioCtxUpdateCurrentT = (
    (c: BaseAudioContext | null ) => {
        const [t, setT ] = (
            useState<number>(-1 )        
        ) ;          
        const update = (  
            useCallback((       
                () => {  
                    console.log("c.currentT", c?.currentTime ) ;
                    setT((oldV: number ) => {
                        if (c ) {      
                            const { currentTime } = c ;
                            console.info({ currentTime }) ;
                            return currentTime ;
                        }
                        return oldV ;   
                    } ) ;
                }   
            ), [setT, c ])
        ) ;
        return [t, update] as const ;
    }
) ;     
export {
    useAudioCtxCurrentTime , 
    useAudioCtxCurrentTime1,
    useCanAudioCtxUpdateCurrentT ,      
} ;