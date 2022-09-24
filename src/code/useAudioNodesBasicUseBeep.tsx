import {   
    IterableOps ,   
    BoundedIdentityFunction,                    
} from "./generalUse11" ; 
import React, {      
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { useEfectToMap } from "./useEffectToMap";  

 
          
    
import { AUDIONODES_USEEFFECT, AUDIONODES_USE_AUDIONODEEFFECT } from "./useAudioNodesParamChgEffect1";      
import {     
    useBiquadFilterNodeWithGivenFadeoutTimeConstant1,
    useConstantParamSrcNodeWithGivenFadeoutTimeConstant1,
    useGainNodeWithGivenFadeoutTimeConstant1, 
    useOscilltorNodeWithGivenFadeoutTimeConstant1 , 
    useWhiteNoiseNodeWithGivenProps ,     
 
    useParamNodeWithGiven ,   
  
} from "./useAudioNodesMounting11"; 
import { YyyUsable, YyyUsageDest, usePersistingBeep, useEternalBeep, useWhiteNoise1 } from "./useAudioNodesBasicFlt1";  
import { 
    useFixedGain ,     
    useGainModulatedPt ,   
    useOinModulatedWaveTable ,   
    useWhiteNoise ,   

} from "./useAudioNodesBasicFixedGain";     
import { useBqFltPtModulated } from "./useAudioNodesBasicFltBandPass1";        
import { useParamModulation } from "./useAudioNodesParamAutomative1"; 
import { useGainELasParamImpl , GEParam } from "./useAudioNodesParamAutomativeElas";        
import { //
    usingAudioParamSimuatePressAndRelease, 
} from "./useAudioNodesParamShutAndOpenState1";
import { 
    useGainElas , 
    useConstantParamSrcElas ,  

} from "./useAudioNodesBasicFixedElas";                    










/**   
 * {@link usingAudioParamSimuatePressAndRelease }.
 * *the range will always be [0, 1,]*.
 * this is to support using {@link GainNode}s to simulate *open-shut* anims.
 * 
 */
const usingOpenShutAmpNodeSmoothPressRelease = (
    function (...[dest , { t, duration, } , ] : (
        Parameters<typeof usingAudioParamSimuatePressAndRelease > extends [infer Dest, ...(infer OtherArgs ) ] ?
        [
            Dest , 
            { t : number ; duration : number ; } , 
        ]
        : never
    ) ): ReturnType<typeof usingAudioParamSimuatePressAndRelease > {
        const valRange = (
            [0, 1] as const
        ) ;
        return (
            usingAudioParamSimuatePressAndRelease((
                dest
            ) , { valRange , duration , t , } , )
        ) ;
    }
) ;
const useHalfSecondPassAtT : (         
    YyyUsable<(                      
        Readonly<{
            t: number;          
        } >      
    ) , { asDest: AudioNode | null ; }["asDest"]   >
) = (    
    (nd0, { t } ) => {  
        const nd1 = (
            useGainNodeWithGivenFadeoutTimeConstant1(nd0, 0.5 )   
        ) ;    
        React[AUDIONODES_USE_AUDIONODEEFFECT ](() => {
            if (nd1) {                   
                return (         
                    usingAudioParamSimuatePressAndRelease 
                )(nd1.gain , { valRange: [0, 1] as const, duration: 0.5, t: t } ) ;                      
            };          
        } , [nd1, t ]);     
        ;                 
        return {            
            asDest: nd1 ,        
        }.asDest ;     
    }     
) ;            
/**   
 * {@link useParamModulation}
 * 
 * @deprecated         
 * NAMING
 */
const usePModulating = (
    useParamModulation
) ;         
const useAudioNodeParamModula = (
    useGainELasParamImpl   
) ; 
// // TODO       
const useHalfSecondBeep: (          
    YyyUsable<(                       
        Readonly<{
            t: number;
            toneFreq?: number | undefined;
        } >   
    )> 
) = (   
    function (nd0, { t, toneFreq = 440 } ) {    
        const nd1 = (
            useHalfSecondPassAtT(nd0, { t })      
        ) ;
    
        const nd2 = (
            usePersistingBeep(nd1, { toneFreq } )
        ) ;           

        return { } ;   
    } 
) ;             


 




 


 

   
/**   
 * {@link useHalfSecondBeep }
 * 
 * @deprecated 
 * NAMING 
 */    
const useBeep : (
    (typeof useHalfSecondBeep )
    |
    (typeof usePersistingBeep )
) = useHalfSecondBeep ;
export {
     useBeep , 
    useHalfSecondBeep ,    
    usePersistingBeep , 
    useEternalBeep ,    
    useWhiteNoise , 
    useWhiteNoise1 ,  
  
    usingOpenShutAmpNodeSmoothPressRelease ,
    useHalfSecondPassAtT ,   
    useGainElas , 
    useFixedGain , 
    useConstantParamSrcElas ,  
    useBqFltPtModulated ,           
    useGainModulatedPt ,   
    useOinModulatedWaveTable ,  
 
    useParamModulation ,   
    usePModulating ,     
    useAudioNodeParamModula ,   

} ;                                        