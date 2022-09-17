 
import { 
   interpolateBetweenTwo ,   
} from "./polynomialsC";       
import { 
   Iterable, 
   IterableOps, 
   EitherBothSetOrBothUnset,
 } from "./generalUse11";
import React, { useReducer, useState } from "react";   
import {    useEnumConstantPicker } from "./commonElements";     
import { K, ComponentProps, ContextReturnType } from "./commonElements";    
 
    
           
// domain-imports           
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";    
import { 
   CFnValueByRelativeT ,
   
   CHalfSecndBeep1 , CPersistingBeep , CWaveTable1 , CWhiteNoise ,    
   CBassDrumKickFluidly1 ,
   CSnareDrumFluidly1 , 
   
   CAmpModulatedTimeDomain ,
   CAmpModulated , CBiquadFilterModulated ,  CFreqDmAnalyF ,  CConstantValue , CAmpModulated0 ,    

   MetronomeAndResponseGraph , 
   
} from "./useAudioGraphImplFComponents";    

               
         
  
  
            



/**   
 * this filter 
 * is intended for emotionally-intensive sounds (like high-frequency snare-drum jammers ) and
 * is to help prevent psychiatric detriments by imposing relevant fade-in effect at relative *t*.
 * this could be `lowpass fade-in` or `amp fade-in`.
 * 
 * `lowpass fade-in` feels preferable as 
 * it filters out *high-frequencies* whilst leaving *low-frequencies* through .
 * 
 */
const WithSnInitialFadeInC: (
   React.FC<{
      children : React.ReactNode & object ;
   }>
) = (
   ({ children: payload, }) => (
      <CBiquadFilterModulated
      type="lowpass"
      freqArgumentNormalValue={44100 }
      freqArgumentInterpretation="timedomain-normalised"
      freqArgument={(
         <CFnValueByRelativeT 
         value={({ ctxT: t }) => (
            IterableOps.clamp((
               2 ** ((t / 6 ) * 10 )
            ) , 20 , 44100, )
            /
            44100
         ) }
         />
      )}
      >
         { payload }
      </CBiquadFilterModulated>
   )
) ;
const CSnareDrumJammer = (() => { 
   const BD : (typeof CBassDrumKickFluidly1) = (
      CBassDrumKickFluidly1
   );
   const SnrD : (typeof CSnareDrumFluidly1) = (
      CSnareDrumFluidly1
   );
   return (
      function CSNJ({ 
         instrumentProps = {}, 
         metronomeProps = {
            value : {
               tickTockPeriod: 1 / 4 ,
            } ,
         }, 
         cmPeriod = 1 ,
      } : (
         {   
            instrumentProps ?: (
               Omit<(
                  ComponentProps<typeof SnrD  > 
               ) , "children">
            ) ; 
         }
         &
         EitherBothSetOrBothUnset<{
            metronomeProps : (
               Omit<(
                  ComponentProps<typeof MetronomeAndResponseGraph >
               ), "children">
            ) ;
            cmPeriod : number ;
         }>
      )) {      
         return (       
            <WithSnInitialFadeInC>
            <MetronomeAndResponseGraph
            {...{ preFT: 2, postFT: 2, ...metronomeProps, } }
            >  
               { ({ t }) => (                   
                  <>
                  { (0 < t % cmPeriod ) && <SnrD {...instrumentProps } />   }
                  </>
               ) }
            </MetronomeAndResponseGraph>
            </WithSnInitialFadeInC>
         ) ;
      }
   ) ;  
})() ;




export {
   WithSnInitialFadeInC ,
   CSnareDrumJammer ,
} ;