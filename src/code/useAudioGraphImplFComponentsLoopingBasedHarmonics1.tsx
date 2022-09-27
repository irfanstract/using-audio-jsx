
import { 
   Iterable,
   IterableOps , 
    
} from "./generalUse11";     
import { 
   AudioTrackConcatClippingMode , 
   avTrackConcatShallPropagate, 
   OmitOrPropagate,          

} from "./timelineConcatClippingMode";    
import {
   SupportedFShiftAmtInterpretation ,
   translateFShiftR ,
} from "./audioFreqShiftInterpretation1";
import React, { useReducer, useState } from "react";  
import { useDeferredRecompute } from "./usingDeferredRecompute";
import { ComponentProps } from "./commonElementsTypes";
import { K } from "./commonElements";         
import { DictDisplayElement, } from "./usingJsonStringifyingElement1";
import { CBC } from "./useStateInCallback";  
import { useRealTimeQueryInterval1 } from "./usingNonHooksValues";   

          

// domain-imports        
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";        
import {
   WithDelay ,              
   LoopingWithPeriod as LoopingWithPeriodSimple ,  
   LwpPayloadCallback , 
    
   WithCurrentTInfo as WithCurrentScheduledTInfo ,              
                 
   //  
} from "./useAudioGraphImplAbsoluteTCtx1";      
import {
   Consm as WithCurrentDestNdRef , 
   useWithCurrentSideTapPtRef , 

} from "./useAudioGraphImplCurrentDestNdRefCtx";           
import { //
   useANdRefCtxTBasedMemo1,
   WithinANdRefCtxTBasedMemo1 ,
} from "./useAudioGraphImplCurrentDestNdRefCtxTBasedMemo1";
import { 
   PreFTAndPostFTProps ,
   WithAutoUnmount , 
   withAutoUnmount , 
   passageStateBy1 ,   

} from "./useAudioGraphImplFComponentsSlapCompAutoUnmounting";   
import { CAmpModulatedTimeDomain } from "./useAudioGraphImplFComponentsAmpStabilisation1";
import { CConstantValue } from "./useAudioGraphImplFMathComponentsSupport1";

// CSS imports
         
  

// destructuring  
const {         
} = tCtxs ;         
 






  
   
                       
/**    
 * TBD; this remains subject to change.
 * 
 */
type HarmonicsSpec = (
   readonly [
      SupportedFShiftAmtInterpretation,  
      readonly (
         readonly [number, { gain: number ; } ] 
      )[] ,
   ]
) ;
// TODO
/**    
 * this Component is intended for high-level harmonics.
 * for low-level synth, where possible, 
 * use {@link PeriodicWave } with `CWaveTable` instead .
 * 
 * will require a callback, in turn given current-index denoting which index it's for .
 * 
 */
const CmInHarmonics : (
   React.FC<(
      { 
         /**   
          * this would define the harmonics sequence.
          */
         value : HarmonicsSpec ; 
         /**   
          * payload
          */
         children : (
            (ctx: ReturnType<typeof translateFShiftR >[number ] & {} ) => (
               React.ReactElement
            )
         ) ;
      }
   )>
) = (() => {
   function hSpecExpand(...[value] : [HarmonicsSpec ] ) {
         const [mFInterpr , mValues10 ] = value ;
         const mFreqShiftValuesRaw = (
            mValues10
            .map(([fS , { gain }]) => fS )
         ) ;
         const mGainValues = (
            mValues10
            .map(([fS , { gain }]) => gain )
         ) ;
         return {
            mFInterpr ,
            mFreqShiftValuesRaw ,
            mGainValues ,
         } ;
   } ;
   return (
      function CmInHarmonicsC({ value, children: payload }) {
         const {
            mFInterpr ,
            mFreqShiftValuesRaw ,
            mGainValues ,
         } = (
            hSpecExpand(value )
         ) ; //
         const e = (
            useANdRefCtxTBasedMemo1(() => (
               translateFShiftR([
                  mFInterpr ,
                  mFreqShiftValuesRaw ,
               ] )
               .map((ctx, i: number, ): React.ReactElement => {
                  const gainFac : number = (
                     mGainValues[i ]
                     || 0
                  ) ;
                  const infoPanel = (
                     <p> 
                        Harmonic ; 
                        <DictDisplayElement 
                        value={{ ...ctx , gainFac } }
                        />
                     </p>
                  ) ;
                  return (
                     <div 
                     key={ctx.detuneOctaves as number } 
                     >
                     { null && infoPanel }
                     <CAmpModulatedTimeDomain 
                     value={(
                        <CConstantValue value={Math.max(2E-30, gainFac ) } />
                     ) } 
                     >
                        { payload(ctx ) }
                     </CAmpModulatedTimeDomain>
                     </div >
                  ) ;
               } )
            ) , { rerunFreq: 2, } ) // TODO
         ) ;
         return (
            <div >
            { e }
            </div >
         ) ;
      }
   ) ;
})() ;





export {
   CmInHarmonics ,
} ;