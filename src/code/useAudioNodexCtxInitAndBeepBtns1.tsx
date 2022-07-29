import {   
    IterableOps ,   
    BoundedIdentityFunction,                    
} from "./generalUse11" ; 
import React, {      
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { useEfectToMap } from "./useEffectToMap";  


         
import { useAudioCtxCurrentTime, useAudioCtxWithInitBtn } from "./useAudioNodexCtxInitBtn";    
import { useCanAudioCtxUpdateCurrentT } from "./useAudioNodexCtxInitBtn";     
import { useBeep } from "./useAudioNodesBasicUseBeep";     



 

const useAudioCtxWithInitBtn1 = (() => {
    return (          
        (prps : Parameters<typeof useAudioCtxWithInitBtn>[0] = {} ) => {  
            ;  
            const [aCtx, aCtxInitBtn ] = (    
                useAudioCtxWithInitBtn(prps )             
            ) ;                                    
            const t1 = ( 
                useEfectToMap                       
            )(aCtx, c => (c ? c.destination.context.currentTime : 0.01 ) ) ;                                     
            const [t2, beepAgain ] = (                                                    
                useCanAudioCtxUpdateCurrentT(aCtx && aCtx.destination.context || null )                                    
            ) ;          
            // (RE)ACTIVATIONAL BEEP 
            useBeep(aCtx ? aCtx.destination : null , {            
                t: Math.max(t1, t2, aCtx ? aCtx.lastReactivativeTime : -1 ) + 0.15 ,       
            } as const ) ;       
            return (   
                [({ ...(aCtx && ({ ...aCtx } ) || ({ } ) ) , t1, lastBeepT: t2, beepAgain } as const ) , aCtxInitBtn ] as const 
            );      
        }               
    ) ;     
})() ;           



















export {
    useEfectToMap as useEffectToMap ,      

    useAudioCtxWithInitBtn1 ,             
} ;
