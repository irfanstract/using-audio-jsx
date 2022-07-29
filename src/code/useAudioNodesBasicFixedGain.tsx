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
    useBiquadFilterNodeWithGivenFadeoutTimeConstant1,
    useConstantParamSrcNodeWithGivenFadeoutTimeConstant1,
    useGainNodeWithGivenFadeoutTimeConstant1, 
    useOscilltorNodeWithGivenFadeoutTimeConstant1 , 
    useWhiteNoiseNodeWithGivenProps ,     

    useParamNodeWithGiven ,   
  
} from "./useAudioNodesMounting11"; 
import { YyyUsable, YyyUsageDest, usePersistingBeep, useEternalBeep, useWhiteNoise1 } from "./useAudioNodesBasicFlt1";   
import {      
    useGainElas , 
    useConstantParamSrcElas ,
   
} from "./useAudioNodesBasicFixedElas";                  
import { 
    ctxFrameRateOf,
    useNormalisedArgumentativeChnl1 , 

} from "./useAudioNodesBasicNormalisation1";         
import { WaveTableNodeProps } from "./useAudioGraphImplBasicFltAutomableProps";    

         
  
          
    


 
const useFixedGain: (                        
    YyyUsable<(         
        number                 
    ) , { asDest: AudioNode | null ; }["asDest"]   >        
) = (
    (dest, value ) => (
        useGainElas(dest, { value })
    )            
); 
/**   
 * CAVEAT .     
 * these are {@link AudioParam}s rather than being {@link AudioNode}s . 
 * this `useYyy` will initialise `gain` to `initialValue` (`0`) ; calling-code can then subsequently    
 */
const useGainModulatedPt = (
    function (nd0: AudioNode | null ) {               
        const initialValue : 0 = ( 
            0    
        );
        const nd1 = (
            useGainNodeWithGivenFadeoutTimeConstant1(nd0, 0.5 )   
        ) ;             
        React.useLayoutEffect(() => {   
            nd1 && (nd1.gain.value = initialValue ) ;       
        } , [nd1 ]) ; 
        ;    
        return {       
            main : (nd1 as (AudioNode | null ) ) || null ,            
            ampCtrl : nd1?.gain || null ,  
        } as const ;    
    }  
) ;              
/**              
 * CAVEAT .         
 * these are {@link AudioParam}s rather than being {@link AudioNode}s .          
 */         
const useOinModulatedWaveTable = (                 
    function (...[nd0 , { waveTable: wvTable = "sine" } = {} ] : [
        dest : AudioNode | null ,  
        props ?: {          
            waveTable ?: NonNullable<WaveTableNodeProps["type"] > ;
        } ,    
    ] ) {   
        const initialValue : number = ( 
            440          
        );                
        const nd1 = (   
            useOscilltorNodeWithGivenFadeoutTimeConstant1(nd0, 0.5 )   
        ) ;           
        /**   
         * `type`        
         */
        React.useLayoutEffect(() => {         
            nd1 && (
                ((wvTable instanceof PeriodicWave ) && (nd1.setPeriodicWave(wvTable), true )  )   
                ||
                (typeof wvTable !== "object" && (nd1.type = wvTable , true ) )  
                ||
                (void 0 )
            ) ;          
        } , [nd1 ]) ;                    
        /**   
         * assigns initial value   
         */
        React.useLayoutEffect(() => {
            nd1 && (nd1.frequency.value = initialValue ) ;           
        } , [nd1 ]) ;               
        /**   
         * present the `AudioParams` as specified    
         */
        const {
            frqx ,                
            detunx ,        
        } = {               
            frqx : (    
                useNormalisedArgumentativeChnl1<(
                    Pick<OscillatorNode, "frequency">     
                )>(nd1 , "frequency", (
                    // TODO 
                    nd1 ? ctxFrameRateOf(nd1.context ) : 48000 
                ) )       
            )         ,             
            detunx : (    
                useNormalisedArgumentativeChnl1<(
                    Pick<OscillatorNode, "detune">     
                )>(nd1 , "detune", (  
                    // TODO  
                    12 * 100   
                ) )     
            )       ,          
        } ;   
        ;             
        return {       
            main : (nd1 as (AudioNode | null ) ) || null ,            
            // frequency : nd1?.frequency || null ,            
            // detune    : nd1?.detune    || null ,            
            frequency : frqx.gnBeforeMul    ,            
            detune    : detunx.gnBeforeMul  ,  
        } as const ;    
    }             
) ;     

const useWhiteNoise = (       
    (dest: AudioNode | null , { volume } : { volume : number ; } ) => {                                            
        const gNd1 = (       
            useFixedGain(dest, volume )                                           
        ) ;                                     
        useWhiteNoiseNodeWithGivenProps(gNd1, {} );
        return {} ;                                                        
    }           
) ;    









 





export {
    useFixedGain ,    
    useGainModulatedPt ,     
    useOinModulatedWaveTable , 

    useWhiteNoise ,  
} ;      