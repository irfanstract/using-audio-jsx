import {   
    IterableOps ,   
    BoundedIdentityFunction,                    
} from "./generalUse11" ; 
import React, {      
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { useEfectToMap } from "./useEffectToMap";   


          
          
import { AUDIONODES_USEEFFECT } from "./useAudioNodesParamChgEffect1"; 
import { 
    useGainNodeWithGivenFadeoutTimeConstant1, 
    useOscilltorNodeWithGivenFadeoutTimeConstant1 , 
    useWhiteNoiseNodeWithGivenProps  ,
     
} from "./useAudioNodesMounting11"; 
 
type YyyUsageDest = (             
    AudioNode | null 
) ;                              
type YyyUsable<P extends NonNullable<unknown> , R = { } > = (        
    (dest: YyyUsageDest, p: P ) => R       
) ;
const usePersistingBeep: (   
    YyyUsable<(                    
        Readonly<{ 
            toneFreq ?: number | undefined;
        } >    
    ) , (
        // AudioNode 
        EventTarget 
    ) | null >               
) = (     
    function (nd1, { toneFreq = 440 } ) {
        const nd2 = (
            useOscilltorNodeWithGivenFadeoutTimeConstant1(nd1 , 0.5 )   
        ) ;                
        React[AUDIONODES_USEEFFECT ](() => {
            if (nd2) {    
                nd2.frequency.value = toneFreq ;       
            } ;                    
        } , [ ]) ;                     
        React[AUDIONODES_USEEFFECT ](() => {   
            if (nd2) {    
                /**            
                 * {@link nd2.frequency.value } , smoothly   
                 */   
                nd2.frequency.setTargetAtTime(toneFreq, (
                    // TODO 
                    0 
                ), 0.5 ) ;
            } ;               
        } , [nd2, toneFreq, 0 ]) ; 
        ;
        return nd2 ;     
    }   
) ;               
const useWhiteNoise1 = ( 
    function (...a: Parameters<typeof useWhiteNoiseNodeWithGivenProps> ): void {
        //
        (
            useWhiteNoiseNodeWithGivenProps(...a )  
        ); 
    }
) ;



















    




export type {
    YyyUsable , 
    YyyUsageDest , 
} ;
export {
    usePersistingBeep , 
    usePersistingBeep as useEternalBeep , 
    useWhiteNoise1 , 
} ;