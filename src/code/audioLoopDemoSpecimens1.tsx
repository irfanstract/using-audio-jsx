 
import { 
   interpolateBetweenTwo ,   
} from "./polynomialsC";       
import { Iterable, IterableOps } from "./generalUse11";
import React, { useReducer, useState } from "react";   
import {    useEnumConstantPicker } from "./commonElements";     
import { K, ComponentProps, ContextReturnType } from "./commonElements";    
 
    
           
// domain-imports           
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";   
import { useACtxMtWithoutAnyFilter1 } from "./useAudioNodexCtxInitAndBeepNcaOnce1";
import { CHalfSecndBeepAtAbsoluteT } from "./audioLoopDemoCurrentDestNdRefCtx";  
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

               
         
  
  
            


   



    
// TODO define some speciments
const CBassDrumLoop = (() => { 
   const BD : (typeof CBassDrumKickFluidly1) = (
      CBassDrumKickFluidly1
   );
   return (
      function CMetronomousBassDrumKickLoopC({ instrumentProps = {}, metronomeProps = {} } : {   
         instrumentProps ?: (
            Omit<(
               ComponentProps<typeof BD  > 
            ) , "children">
         ) ; 
         metronomeProps ?: (
            Omit<(
               ComponentProps<typeof MetronomeCheckAndExpandingElem >
            ), "children">
         ) ;
      }) {      
         return (       
            <MetronomeCheckAndExpandingElem
            preFT={2 }
            postFT={3 }
            >  
               { ({ }) => (                   
                  <BD {...instrumentProps } />       
               ) }
            </MetronomeCheckAndExpandingElem>
         ) ;
      }
   ) ;  
})() ;     
const xTValueLogging = (
   IterableOps.throttle((v: number) => {
      console.log(`AudioLoopDemoDebug TValue` , { v } ) ; 
   } , 5 * 1000 , { leading: true } )
);
const WithNSecondsFadeInBF = (
   function ({ children } : Required<React.PropsWithChildren<{}> > ) {
      return (
         <CBiquadFilterModulated  
            type="lowpass"
            freqArgumentInterpretation="timedomain-normalised"
            freqArgument={(
               <CFnValue1 
               value={({ ctxT: t }) => ( IterableOps.clamp(2 ** (4 + t * 0.5 )  , 16 , 44100 ) / 44100 ) }
               />
            )}
         >
            { children }
         </CBiquadFilterModulated>
      ) ;;       
   }
) ;
const CAmbientNoise = (
   () => (
      <>
         <CBiquadFilterModulated  
            type="lowpass"
            freqArgumentInterpretation="timedomain-normalised"
            freqArgument={( 
               <CConstantValue value={ 4000 / 48000 } />
            )}
         >
            <CWhiteNoise value={{ volume: 2 ** -6 }} />
         </CBiquadFilterModulated>
      </>
   )
) ;






export * from "./useAudioGraphImplFComponents" ;
export { 
   CBassDrumLoop ,  
   WithNSecondsFadeInBF , 
   CAmbientNoise ,
}  