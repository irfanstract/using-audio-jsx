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
    useGainElas , 
    useConstantParamSrcElas ,
     
} from "./useAudioNodesBasicFixedElas";                  
import {   
    ctxFrameRateOf,
    useNormalisedArgumentativeChnl1 , 
    
} from "./useAudioNodesBasicNormalisation1";         
import { WaveTableNodeProps } from "./useAudioGraphImplBasicFltAutomableProps";    
   
         
  
          
    


     




         
/**              
 * CAVEAT .         
 * these are {@link AudioParam}s rather than being {@link AudioNode}s .          
 */       
 const useOinModulatedWaveTable = (() => {
    // DEPENDENCIES  
    const useOscilltorNodeF = (
        useOscilltorNodeWithGivenFadeoutTimeConstant1    
    ) ;
    type WaveTableNodeProps1 = (
        WaveTableNodeProps           
    ) ;          
    const useNormalisedArgumentativeChnl11 = (
        useNormalisedArgumentativeChnl1      
    ) ;
    ;
    function setPeriodicWave1(...[nd1, wvTable] : (
        [
            NonNullable<(         
                ReturnType<(
                    typeof useOscilltorNodeF  
                )>  
            ) > ,            
            NonNullable<WaveTableNodeProps1["type"] > ,         
        ]                  
    )) {
        return (
            ((wvTable instanceof PeriodicWave ) && (nd1.setPeriodicWave(wvTable), true )  )   
            ||
            (typeof wvTable !== "object" && (nd1.type = wvTable , true ) )  
            ||
            (void 0 )          
        ) ;       
    };
    return (                  
        function useWVT(...[nd0 , mainOptions11 = {} ] : [
            dest : AudioNode | null ,               
            properties ?: {                
                /**    
                 * 
                 */
                waveTable ?: NonNullable<WaveTableNodeProps1["type"] > ;   

                /**    
                 * specifies,   
                 * how much ({@link OscillatorNode *hundredth-of-semitone(s)* }) implied by input `1.0` increment  
                 *  */                   
                detuneScale1 ?: number ;          
                      
                /**        
                 * specifies,   
                 * the multiplying value (usually `440`) for input of `1.0`     
                 *  */      
                freqArgumentNormalValue ?: number ;    
            } ,         
        ] ) {                                  
            const {  
                waveTable: wvTable = "sine",    

                detuneScale1 = (12 * 100 ) ,          

                freqArgumentNormalValue = 440 ,      

            } = mainOptions11 ;    
            const freqCtrlAbsoluteIntrinsicValue: number = (
                1E-10
            ) ;
            const nd1 = (    
                useOscilltorNodeF(nd0, 0.5 )   
            ) ;                  
            /**   
             * `type`     
             */
            React[AUDIONODES_USE_AUDIONODEEFFECT](() => {         
                nd1 && ( 
                    setPeriodicWave1(nd1, wvTable )          
                ) ;                 
            } , [nd1 ]) ;                        
            /**                    
             * assigns initial value(s).      
             */
            React[AUDIONODES_USE_AUDIONODEEFFECT](() => {  
                nd1 && (        
                    /**   
                     * using `yy.value = (...)` is not an option here, as    
                     * - {@link useWVT }    
                     *   - does not provide `freq` parameter and instead 
                     *   - leaves the responsibility to calling code     
                     * - using `currentTime` as `t` (which `value = (..)` exactly does )
                     *   would interfere with subsequent calls
                     */ 
                    nd1.frequency.setValueAtTime(( 
                        // TODO         
                        freqCtrlAbsoluteIntrinsicValue
                    ), 0 ) 
                ) ;             
            } , [nd1 ]) ;                  
            // debugging
            {
                ;
                //      
                React[AUDIONODES_USEEFFECT](() => {      
                    if (nd1 ) {   
                        if (!(((nd1 as any ).BASICBEEPMODULATIONXNOREPEA += "+" ) === "undefined+" ) ) {
                            console.error(TypeError(`double initialisation detected` ) , { nd1 }) ;;
                        }    
                    }                 
                }, [nd1 ] ) ;       
            }   
            /**      
             * present the `AudioParams` as specified    
             */
            const {
                frqx ,     
                detunex: detunx ,              
            } = {                                        
                frqx : (       
                    useNormalisedArgumentativeChnl11<(
                        Pick<OscillatorNode, "frequency">      
                    )>(nd1 , "frequency", (       
                        // TODO    
                        // ( nd1 ? ctxFrameRateOf(nd1.context ) : 48000  )      
                        freqArgumentNormalValue        
                    ) , {             
                        // TODO        
                        destNdIntrinsicValue: freqCtrlAbsoluteIntrinsicValue  ,   

                        // TODO 
                        postInitDisconnectiveDebug : false , 
                    } )       
                )         ,             
                detunex : (             
                    useNormalisedArgumentativeChnl11<(       
                        Pick<OscillatorNode, "detune">     
                    )>(nd1 , "detune", (  
                        // TODO        
                        detuneScale1
                    ) , {
                        // TODO            
                        destNdIntrinsicValue: 0 ,   
                    } )     
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
})() ;       









export {
    useOinModulatedWaveTable as useOinModulatedWaveTable1 , 
} ;