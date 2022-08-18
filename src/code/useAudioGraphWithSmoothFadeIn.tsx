 
import { 
   interpolateBetweenTwo ,   
} from "./polynomialsC";       
import { Iterable, IterableOps } from "./generalUse11";
import React, { useReducer, useState } from "react";   
import {    useEnumConstantPicker } from "./commonElements";     
import { K, ComponentProps, ContextReturnType } from "./commonElements";    
 
    
           
// domain-imports           
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";    
// import {     
//     // TIME-DOMAIN SOUrCES
//     CConstantValue ,  CFnValue1 ,      

//     // SIMPLE-OR-COMMON AUDIO SOURCES
//     CHalfSecndBeep1 , CPersistingBeep , CWhiteNoise ,   
//     CWaveTable1 ,        
//     CBassDrumKick1 , 
//     CBassDrumKickFluidly1 , 
//     CPitchdownBassDrumKickFluidly1 ,                
//     CSnareDrum1,  
//     CSnareDrumFluidly1 ,         
    
//     // ISOTEMPORAL FILTERS        
//     CAmpModulated, CAmpModulated0 , CBiquadFilterModulated ,  CFreqDmAnalyF , 
//     CAmpSlideDown ,                   

//     // TIME-DILATING FILTERS, INCLUDING LOOPING  
//     LoopingWithPeriod ,   
//     MetronomeCheckAndExpandingElem ,

// } from "./useAudioGraphImplFComponents";      
import { CFnValueFromRelativeT as CFnValue1 } from "./useAudioGraphImplFMathComponentsSupport11";
import { CBiquadFilterModulated } from "./useAudioGraphImplCurrentDestNdRefCtxC";              
import {         
} from "./useAudioGraphImplFComponentsSlapDrumKit1" ;

               
         
  
  
            


   



    
const WithNSecondsFadeInBF = (
   function ({ children } : Required<React.PropsWithChildren<{}> > ) {
      const maxFreq : number = 44100;
      const minFreq : number = 16 ;
      return (
         <CBiquadFilterModulated  
            type="lowpass"
            freqArgumentInterpretation="timedomain-normalised"
            freqArgument={(
               <CFnValue1 
               value={({ ctxT: t }) => (
                  IterableOps.clamp((
                     2 ** (
                        Math.log2(minFreq ) + t * 0.5 
                     ) 
                  ) , minFreq , maxFreq ) 
                  / 
                  maxFreq
               ) }
               />
            )}
         >
            { children }
         </CBiquadFilterModulated>
      ) ;;       
   }
) ;






export {
   WithNSecondsFadeInBF , 
} ;