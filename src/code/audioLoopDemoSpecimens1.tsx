 
import { 
   interpolateBetweenTwo ,   
} from "./polynomialsC";       
import { Iterable, IterableOps } from "./generalUse11";
import { SupportedFShiftAmtInterpretation } from "./audioFreqShiftInterpretation1";
import React, { useReducer, useState } from "react";   
import {    useEnumConstantPicker } from "./commonElements";     
import { K, ComponentProps, ContextReturnType } from "./commonElements";    
 
    
           
// domain-imports           
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";   
import { useACtxMtWithoutAnyFilter1 } from "./useAudioNodexCtxInitAndBeepNcaOnce1";
import {     
    // TIME-DOMAIN SOUrCES
    CConstantValue ,  CFnValue1 ,      

    // SIMPLE-OR-COMMON AUDIO SOURCES
    CHalfSecndBeep1 , CPersistingBeep , CWhiteNoise ,   
    CWaveTable1 ,        
    CBassDrumKick1 , 
    CBassDrumKickFluidly1 , 
    CPitchdownBassDrumKickFluidly1 ,                
    CSnareDrum1,  
    CSnareDrumFluidly1 ,         
    
    // ISOTEMPORAL FILTERS        
    CAmpModulated, CAmpModulated0 , CBiquadFilterModulated ,  CFreqDmAnalyF , 
    CAmpSlideDown ,                   

    // TIME-DILATING FILTERS, INCLUDING LOOPING  
    LoopingWithPeriod ,   
    MetronomeAndResponseGraph ,

} from "./useAudioGraphImplFComponents";                    
import {         
} from "./useAudioGraphImplFComponentsSlapDrumKit1" ;
import { CBassDrumLoop } from "./useAudioGraphForBassDrumLoop1";
import { WithNSecondsFadeInBF } from "./useAudioGraphWithSmoothFadeIn";
import { CAmbientNoise } from "./useAudioGraphImplFComponentsOpenAreaEffects";
import { CmInHarmonics } from "./useAudioGraphImplFComponentsLoopingBasedHarmonics1";  

               
         
  
  
            


   



    
;
type Harmonics = (
   Required<(
      ComponentProps<typeof CmInHarmonics >
   )>["value"]
) ;
// TODO
const CBassLineByTimeDomainArgs: (
   React.FC<(
      Pick<(
         ComponentProps<typeof CWaveTable1>
      ) , "freqArgument" | "detune">
   )>
) = (
   function ({
      freqArgument = (
         <CConstantValue value={220 / 440 } />
      ) ,
      detune = (
         <></>
      ) ,
   } ) {
      const type1 : Extract<OscillatorType, "sine" | "triangle"> = "sine" ;
      return (
         <CAmpModulated0  
         value={<CConstantValue value={2 ** -1 } /> }
         >
         <CmInHarmonics 
         value={[
            SupportedFShiftAmtInterpretation.OCTAVE_SHIFT , 
            [
               [0, { gain: 2 **  0.0 }] as const , 
               [1, { gain: 2 ** -1.5 }] as const ,
               [2, { gain: 2 ** -3.0 }] as const ,
               [3, { gain: 2 ** -4.0 }] as const ,
            ] ,
         ] as Harmonics } 
         >
         { ({ detuneOctaves }) => (
            <K >
            <CWaveTable1 
            type={type1 }
            //
            freqArgumentInterpretation="timedomain-normalised"
            freqArgument={freqArgument }
            //
            detuneInterpretation="timedomain-normalised"
            detune={(
               <K>
                  { detune }
                  <CConstantValue value={detuneOctaves } />
               </K>
            ) }
            //
            />
            </K >
         ) }
         </CmInHarmonics>
         </CAmpModulated0>
      ) ;
   }
) ;






export * from "./useAudioGraphImplFComponents" ;
export { 
   CBassLineByTimeDomainArgs ,
   CBassDrumLoop ,  
   WithNSecondsFadeInBF , 
   CAmbientNoise ,
}  