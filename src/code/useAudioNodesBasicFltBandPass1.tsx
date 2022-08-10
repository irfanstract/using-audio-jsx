import {   
    IterableOps ,   
    BoundedIdentityFunction,                    
} from "./generalUse11" ; 
import React, {      
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { useEfectToMap } from "./useEffectToMap";  

  
    
import { AUDIONODES_USEEFFECT, AUDIONODES_USE_AUDIONODEEFFECT } from "./useAudioNodesParamChgEffect1";    
import { useFixedGain } from "./useAudioNodesBasicFixedGain";   
import { useParamModulation } from "./useAudioNodesParamAutomative1";      
import { 
    useBiquadFilterNodeWithGivenFadeoutTimeConstant1,
    useConstantParamSrcNodeWithGivenFadeoutTimeConstant1,
    useGainNodeWithGivenFadeoutTimeConstant1, 
    useOscilltorNodeWithGivenFadeoutTimeConstant1 ,  
  
    useParamNodeWithGiven ,        

} from "./useAudioNodesMounting11";        
import {
    useBiquadFltNdFreqArgumentChnl , 
    useNormalisedArgumentativeChnl , 
    
} from "./useAudioNodesBasicNormalisation1";





   

          
   
/**   
 *   
 * CAVEAT .  
 * these are {@link AudioParam}s rather than being {@link AudioNode}s . 
 * this `useYyy` does not itself initialise the AudioParam(s) to any default value ; 
 * it's the calling-code responsibility for that      
 */ 
const useBqFltPtModulated = (           
    function (nd0: AudioNode | null , tpe1: BiquadFilterType ) {
        const nd1 = (
            useBiquadFilterNodeWithGivenFadeoutTimeConstant1(nd0, 0.5 )   
        ) ;       
        ;             
        React[AUDIONODES_USE_AUDIONODEEFFECT](() => {        
            nd1 && (nd1.type = tpe1 ) ;
        } , [nd1, tpe1 ]);        
        const mf1 = (       
            useBiquadFltNdFreqArgumentChnl       
        )(nd1 , { type: "frequency" }  ) ;
        return {                
            main : (nd1 || null ) as (AudioNode | null ) ,               
            mGainValue : (   
                (         
                    false   
                    || tpe1 === "lowpass"      
                    || tpe1 === "highpass"        
                    || tpe1 === "allpass"            
                ) ? null : (nd1?.gain || null )   
            ) ,   
            mFrequencyValue : (  
                // never ignored 
                mf1.gnBeforeMul    
            ) ,       
        } as const ;
    }     
) ;  

      








 


export {
    useBqFltPtModulated , 
    useNormalisedArgumentativeChnl , 
} ;   