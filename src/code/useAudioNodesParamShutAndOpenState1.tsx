import {   
   IterableOps ,   
   BoundedIdentityFunction,                    
} from "./generalUse11" ; 
import React, {      
   useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { useEfectToMap } from "./useEffectToMap";  


         
   
import { AUDIONODES_USEEFFECT, AUDIONODES_USE_AUDIONODEEFFECT } from "./useAudioNodesParamChgEffect1";      
import { YyyUsable, YyyUsageDest, usePersistingBeep, useEternalBeep, useWhiteNoise1 } from "./useAudioNodesBasicFlt1";  
import { 
   useFixedGain ,     
   useGainModulatedPt ,   
   useOinModulatedWaveTable ,   
   useWhiteNoise ,   

} from "./useAudioNodesBasicFixedGain";     
import { useParamModulation } from "./useAudioNodesParamAutomative1"; 
import { useGainELasParamImpl , GEParam } from "./useAudioNodesParamAutomativeElas";        
import { 
   useGainElas , 
   useConstantParamSrcElas ,  

} from "./useAudioNodesBasicFixedElas";         










const SPR_NEGATIVEARGUMENT_LOG = (
    IterableOps.throttle((      
        (...a : Parameters<Console["error"]> ) => (      
            console.warn(...a )     
            ,              
            undefined 
        )    
    ) , 3 * 60 * 1000 , { leading: true , } )  
) ;
/**    
 * *it doesn't need to be {@link GainNode.gain }*;
 * *it could be any linear param, and `valRange` will dictate the two ends*.
 * 
 */
function usingAudioParamSimulateOpenAndClose( ...[
    p,  
    { valRange: [minv, maxv] , duration, t, coef = 2 ** -8 } ,
] : [
    AudioParam,
    { 
        valRange: (
            Readonly<(
                [shutStateVal: number, openStateVal: number]          
            )>            
        ) ; 
        duration : number ;              
        t: number ;                           
              
        coef ?: number ;                      
    }  ,              
]): ReturnType<React.EffectCallback > {   
    ;                  
    p.cancelScheduledValues(0 ) ;         
    {         
        const errorC : number = 0.001 ;            
        ;
        p.setValueAtTime(minv, 0, ) ;  
        ;                          
        if ((    
            (0 <= t || SPR_NEGATIVEARGUMENT_LOG((
                `SPR -- negative 't' detected, this is propably not what you want ` 
            )) ) 
            && 
            (0 < duration )    
        )) {           
            ;    
            p.setTargetAtTime(maxv, errorC + t                    , coef ) ;   
            p.setTargetAtTime(minv, errorC + t + duration + errorC, coef ) ;
        }               
    }              
    return () => {
        ;
        if (0 ) {
            ;
            p.cancelScheduledValues(0 ) ;                   
        }
    } ;    
}     




export {
  usingAudioParamSimulateOpenAndClose ,
  usingAudioParamSimulateOpenAndClose as usingAudioParamSimuatePressAndRelease ,
} ;