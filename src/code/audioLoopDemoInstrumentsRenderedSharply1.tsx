
import { 
   BoundedIdentityFunction ,
   OptionsCouldBeOmittedAltogether ,
   EitherBothSetOrBothUnset ,
   EitherSetAndOthersUnset ,
   EitherSetOrBothUnset ,
   IterableOps, 
   Iterable, 
 
} from "./generalUse11";
import { clamp, floorBy, round, } from "./commonMathRounding1";
import { linearSlidingStateAtT } from "./timeDomainClosedGradientSampling1";
import { SupportedFShiftAmtInterpretation } from "./audioFreqShiftInterpretation1";
import { periodicTRestrictedLinearlyApproachedValueAtT1 } from "./audioTDomainPeriodicPlotSamplingAtT1";
import React, { useReducer, useState } from "react";   
import { K, ComponentProps, ContextReturnType } from "./commonElements";      
import { CBC } from "./useStateInCallback";
import { 
    useOneWayCompletiveState ,      
            
} from "./useCompletion";    
import { useAsyncMemo } from "./useAsyncMemo";          
import { useRealTimeQueryInterval1, } from "./usingTimeoutOrIntervalScannedValue";

     
   
// domain-imports         
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";   
import TPTC from "./audioLoopDemoTimingCtxComponents";
import { 
    CHalfSecndBeepAtAbsoluteT ,     
} from "./useAudioGraphImplFromUseYyyNodes1";  
import {            
    CurrentCtxTInfoDisplay ,    
    Prv1 ,                
    useADestNdRefCtx1 , 
    Consm as WithCurrentDestNdRef ,
    
} from "./useAudioGraphImplCurrentDestNdRefCtx";     
import { WGD_DIV } from "./useAudioGraphImplCurrentDestNdRefCtx";             
import { 
    CFnValue1 ,
    
    CHalfSecndBeep1 , CPersistingBeep , CWaveTable1 , CWhiteNoise ,    
    CBassDrumKickFluidly1 ,
    CSnareDrumFluidly1 , 
    
    CAmpModulated , CBiquadFilterModulated ,  CFreqDmAnalyF ,  CConstantValue , CAmpModulated0 ,    

    CmInHarmonics ,
    MetronomeAndResponseGraph , 
    
} from "./audioLoopDemoComponents1"; 
import { CGrandPianeSound1, } from "./audioLoopDemoGrandPianoI1";
import { CBriefHiHatFluidly } from "./useAudioGraphImplFComponentsCymbals";
import * as BBVR from "./audioLoopDemoSpecimens";  
import {
    CBassDrumLoop , 
    CAmbientNoise , 
    WithNSecondsFadeInBF ,     

} from "./audioLoopDemoSpecimens1";
import { CSnareDrumJammer, } from "./useAudioGraphForSnareDrumJammer1";
import { CBassLineByTimeDomainArgs, } from "./audioLoopDemoSpecimens1";

    

const {
   currentTCtx , 
   currentTScaleCtx ,         
   currentTInfCtx ,    

   CurrentTDisplay , 
   WithDelay ,     
   WithSlowdown,
   LoopingWithPeriod , 

   AsGVis ,
   WithSpecifiedGVisTarget ,
} = tCtxs ;
const { //
   TCP ,
   TP ,
   withADestCtxTCompletionStatCtx ,
   WithADestCtxTCompletionStatCtx ,
} = TPTC ;
const cAsSharply = (
  function <P extends {} > (...csArgs : [
    React.FC<P>,  
    ... OptionsCouldBeOmittedAltogether<{ }> , 
  ] ) {
    const [C0, {} = {}, ] = csArgs ;
    const CAsSharply: React.FC<P> = (
      function (props : P ) {
        return (
          <TCP>
          { ({ t, }) => (
            <K key={t }>
              <WithDelay value={0.075 } >
                <C0 {...props } />
              </WithDelay>
            </K>
          ) }
          </TCP>
        ) ;
      }
    ) ;
    CAsSharply.displayName = (
      `${C0.displayName || "" }_AsSharply`
    ) ;
    return CAsSharply ;
  }
) ;
/**    
 * `t` at `0`
 * 
 */
const CGrandPianeSoundSharply1 = (
  cAsSharply((
    /* HOC(s) will not enjoy the automatic naming.  */
    function CGrandPianeSoundSharplyC1(props : ComponentProps<typeof CGrandPianeSound1> ) {
      return (
        <CAmpModulated0  
        value={(
            <CFnValue1 
            value={({ ctxT: t, }) => (
              (0 <= t ) ?
              ((...[t0, ] : [t: number, ]): number => {
                /**    
                 * 
                 */
                const t1 = -0.5 + t0;
                return (2 ** -t1 ) ;
              })(t, )
              : 2E-32
            ) } 
            />
        )}>
          <K>
          <CBassDrumKickFluidly1 
          />
          <CGrandPianeSound1
          {...props }
          />
          </K>
        </CAmpModulated0>
      ) ;
    }
  ))
) ;














export {
  CGrandPianeSound1 ,
  CGrandPianeSoundSharply1 ,
  cAsSharply ,
} ;