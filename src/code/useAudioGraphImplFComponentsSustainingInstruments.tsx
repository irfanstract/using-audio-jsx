
import { 
   interpolateBetweenTwo ,   
} from "./polynomialsC";       
import { IterableOps } from "./generalUse11";  
import React, { useReducer, useState } from "react";   
import { K , NUMERIC } from "./commonElements";               
import { CBC } from "./useStateInCallback";      
import { useRealTimeQueryInterval1 } from "./usingNonHooksValues";  
              

        
// domain-imports           
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";      
import { Consm as NdRefConsm  } from "./useAudioGraphImplCurrentDestNdRefCtx";           
import { CWhiteNoise } from "./useAudioGraphImplFComponentsWhiteNoise";
import { CAmpModulatedTimeDomain as CAmpModulated0 } from "./useAudioGraphImplFComponentsAmpFilters1";
import { CConstantValue } from "./useAudioGraphImplFMathComponentsSupport1";
import { CBiquadFilterModulated } from "./useAudioGraphImplFComponentsAmpFilters1";
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
          <CBiquadFilterModulated   
          type="lowpass"    
          freqArgumentInterpretation="timedomain-normalised"     
          freqArgument={(
              <CConstantValue value={110 / 48000 } />
          )}              
          >
          <CAmpModulated0
          value={(
            <CConstantValue value={2 ** 3 } />
          )} //
          >
              <CWhiteNoise 
              value={{ volume: standardSnareDrumInstrumentAmp }} 
              />
          </CAmpModulated0>
          </CBiquadFilterModulated>
          </CBiquadFilterModulated> 
      )  ;
  }
) ;
const CContinuousCymbalSound = (
   function (p : Parameters<typeof CContinuousSnareDrumSound>[0 ] ) {
      return (
         <CAmpModulated0 
         value={<CConstantValue value={ 2 ** -3 } />}
         >
            <CContinuousSnareDrumSound {...p } />
         </CAmpModulated0>
      ) ;
   }
) ;
         








export {
   standardSnareDrumInstrumentAmp , 

   CContinuousSnareDrumSound ,
   CContinuousCymbalSound ,
} ;