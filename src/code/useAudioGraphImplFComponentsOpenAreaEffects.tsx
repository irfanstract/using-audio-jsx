 
import { 
   interpolateBetweenTwo ,   
} from "./polynomialsC";       
import { Iterable, IterableOps } from "./generalUse11";
import React, { useReducer, useState } from "react";   
import {     } from "./commonElements";     
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
    MetronomeCheckAndExpandingElem ,

} from "./useAudioGraphImplFComponents";                    
import {         
} from "./useAudioGraphImplFComponentsSlapDrumKit1" ;

               
         
  
  
            


   



    
const CAmbientNoise = (
   () => (
      <>
         <CBiquadFilterModulated  
            type="lowpass"
            freqArgumentInterpretation="timedomain-normalised"
            freqArgument={( 
               <CConstantValue value={ 20000 / 48000 } />
            )}
         >
            <CWhiteNoise value={{ volume: 2 ** -9 }} />
         </CBiquadFilterModulated>
         
         <CBiquadFilterModulated  
            type="lowpass"
            freqArgumentInterpretation="timedomain-normalised"
            freqArgument={( 
               <CConstantValue value={ 400 / 48000 } />
            )}
         >
            <CWhiteNoise value={{ volume: 2 ** -9 }} />
         </CBiquadFilterModulated>
         
         <CBiquadFilterModulated  
            type="lowpass"
            freqArgumentInterpretation="timedomain-normalised"
            freqArgument={( 
               <CConstantValue value={ 55 / 48000 } />
            )}
         >
            <CWhiteNoise value={{ volume: 2 ** -2 }} />
         </CBiquadFilterModulated>
      </>
   )
) ;






export { 
   CAmbientNoise ,
}  