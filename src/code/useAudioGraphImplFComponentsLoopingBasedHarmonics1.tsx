
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
 






  
   
                       
type HarmonicsSpec = (
   readonly [
      SupportedFShiftAmtInterpretation,  
      readonly (
         readonly [number, { gain: number ; } ] 
      )[] ,
   ]
) ;
// TODO
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
            useDeferredRecompute(() => (
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
                        <code className="long-enough">
                        { JSON.stringify({ ...ctx , gainFac } , null, 2 ) }   
                        </code> 
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
            ) )
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