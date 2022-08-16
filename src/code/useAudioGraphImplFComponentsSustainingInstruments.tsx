
import { 
   interpolateBetweenTwo ,   
} from "./polynomialsC";       
import { IterableOps } from "./generalUse11";  
import React, { useReducer, useState } from "react";   
import { K , NUMERIC } from "./commonElements";               
import { CBC } from "./useStateInCallback";      
import { useRealTimeQueryInterval1 } from "./useNonHookValue";  
              

        
// domain-imports           
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";      
import { Consm as NdRefConsm  } from "./useAudioGraphImplCurrentDestNdRefCtx";           
import {                
   CHalfSecndBeep1 , CPersistingBeep , CWhiteNoise ,    
   CAmpModulated, CAmpModulated0 , CBiquadFilterModulated ,  CFreqDmAnalyF , 
   CConstantValue ,  CFnValue1 , 
   CAmpSlideDown ,              
} from "./useAudioGraphImplFComponents"; 
import { CWaveTable1 } from "./useAudioGraphImplFComponents";
import { 
   WithAutoUnmount as WithAutoUnmount0 ,    
   WithAutoStopmount as WithAutoStopmount0 ,  
} from "./useAudioGraphImplFComponentsSlapCompAutoUnmounting";    
     
  






; 
const clampWithinZeroAndOne = (      
    function (v: number) {
        return IterableOps.clamp(v, 0, 1 ) ;
    }   
) ;  
const { max, min, } = Math ;     
       
const {       
    currentTCtx , 
    currentTScaleCtx ,        
    currentTInfCtx ,    
  
    CurrentTDisplay , 
    WithDelay ,           
    LoopingWithPeriod ,        
} = tCtxs ;
const WithAutoUnmount = (
    WithAutoUnmount0              
);    

const standardSnareDrumInstrumentAmp : number = 2 ** -2 ;

const CContinuousSnareDrumSound = (
   function ({ minimumFreq, dbg1 } : { minimumFreq: number ; dbg1 ?: false | 1 ; }) {        
      ;
      const freqArgumSupposedGraph = (
          <CConstantValue value={minimumFreq / 44100 } />
      ) ;  
      return (
          <CBiquadFilterModulated   
          type="highpass"    
          freqArgumentInterpretation="timedomain-normalised"     
          freqArgument={(
              !dbg1 ? freqArgumSupposedGraph : <CConstantValue value={2 ** -1 } /> 
          )}              
          >    
              <CWhiteNoise 
              value={{ volume: standardSnareDrumInstrumentAmp }} 
              />
          </CBiquadFilterModulated> 
      )  ;
  }
) ;
         








export {
   standardSnareDrumInstrumentAmp , 

   CContinuousSnareDrumSound ,
} ;