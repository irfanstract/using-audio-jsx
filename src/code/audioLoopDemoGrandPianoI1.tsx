
import { 
  BoundedIdentityFunction ,
  OptionsCouldBeOmittedAltogether ,
  EitherBothSetOrBothUnset ,
  EitherSetAndOthersUnset ,
  EitherSetOrBothUnset ,
  IterableOps, 
  Iterable, 

} from "./generalUse11";
import { SupportedFShiftAmtInterpretation } from "./audioFreqShiftInterpretation1";
import React, { useReducer, useState } from "react";   
import { K, ComponentProps, ContextReturnType, } from "./commonElements";      
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
import { CBriefHiHatFluidly, } from "./useAudioGraphImplFComponentsCymbals";

    

/**    
 * this 
 * shall cache {@link OscillatorNode `PeriodicWave` } instance simulating the European-or-Broadwegian "piano" instrument.
 * 
 * we deliberately {@link PeriodicWaveConstraints.disableNormalization disable normalisation }.
 * normalisation 
 * would cause {@link BaseAudioContext.createPeriodicWave gains to any row } to att other rows, undesirable for this usage.
 * instead,
 * there should be extra att at higher level (by decorate with {@link CAmpModulated0 } or {@link CBiquadFilterModulated } ).
 * 
 */
const usePpw = (() => {
  function usePpwImpl(c : BaseAudioContext ) : PeriodicWave ;
  function usePpwImpl(c : null ) : null ;
  function usePpwImpl(c: null | BaseAudioContext ) {
    const cacheKey = (
      useRealTimeQueryInterval1(() => (
        /**   
         * *avoid `Math.random()` (despite its cryptographic properties )
         * in favour of `Symbol()` which is semantically more accurate*.
         * 
         */
        Symbol()
      ) , 64 * 1000 )
    ) ;
    return (
      /**   
       * *the only variable would be {@link c }*.
       * 
       */
      React.useMemo(() => (
        c &&
        c.createPeriodicWave(... (() => {
          const d = (
            Iterable.Range(1, 128, )
            .map((i): number => {
              if (i === 1 || i === 2 ) {
                if (i === 1 ) {
                  return 2 ** 0.7 ;
                }
                if (i === 2 ) {
                  return 2 ** 1 ;
                }
                return 2 ** 0 ;
              }
              if (i < 64 ) {
                if (Math.log2(i ) % 1 == 0 ) {
                  return 2 ** (
                    Math.log2(i ) 
                    * -1
                  ) ;
                }
              }
              if (i <= 32 ) {
                if (i === 3 ) {
                  return 2 ** -0.5 ;
                }
                if (0 ) {
                  ;
                  if (i === 3 || i === 5 || i === 6 ) {
                    return 2 ** -2.5 ;
                  }
                }
                if ((i <= 128 )   ) {
                  const vx = i / 3 ;
                  if ( (Math.log2(vx ) % 1 == 0 ) ) {
                    return 2 ** (-1 + (Math.log2(vx ) * -1 ) ) ;
                  }
                }
              }
              if (1) {
                ;
                if ((i <= 128 )   ) {
                  const vx = i / 5 ;
                  if ( (Math.log2(vx ) % 1 == 0 ) ) {
                    return 2 ** (-2 + (Math.log2(vx ) * -1.5 ) ) ;
                  }
                }
              }
              return 0 ;
            } )
          ) ; 
          return [d, d, ] as const ;
        })(), { disableNormalization: true, }, )
      ) , [cacheKey, c, ] )
    ) ;
  } ;
  return (
    usePpwImpl
  ) ;
})() ;









const CGrandPianeSound1 = (() => {
  ;
  /**   
   * can't simply use {@link Omit } since 
   * {@link Omit } {@link Record flattens type-unions }.
   * use the so-called "T extends T ?" magic instead.
   * 
   */
  type Props<A extends {} = ComponentProps<typeof CWaveTable1 > > = (
    // 
    A extends {} ?
    (Omit<A, "type" >)
    : never
  ) ;
  const C1 = (
    function CGrandPianeSoundC({
      cgpACtx: c,
      ...freqAndDetuneProps
    } : (
      Props 
      & { cgpACtx: BaseAudioContext ; } 
    ) ) {
      const pnWavefrm = (
        usePpw(c )
      ) ;
      // TODO
      return (
        <CAmpModulated0
        value={(
          <CConstantValue value={2 ** -0.8 } />
        )}
        >
        <CBiquadFilterModulated
        type="lowpass"
        freqArgumentNormalValue={8000 }
        freqArgumentInterpretation="timedomain-normalised"
        freqArgument={(
          <CConstantValue value={ 1} />
        ) }
        >
          <CWaveTable1 
          type={pnWavefrm }
          {...freqAndDetuneProps }
          />
        </CBiquadFilterModulated>
        </CAmpModulated0>
      ) ;
    }
  ) ;
  return (props : Props ) => {
    const e = (
      <WithCurrentDestNdRef>
      { ({ feedPt: ctxtualADest, }) => (
        ctxtualADest 
        &&
        <C1 
        cgpACtx={ctxtualADest.context } 
        {...props }
        /> 
      ) }
      </WithCurrentDestNdRef>
    ) ;
    return (
      <CAmpModulated0 value={<CConstantValue value={2 ** -0.75 } /> } >
        { e }
      </CAmpModulated0>
    ) ;
  } ;
})() ;




export {
  CGrandPianeSound1 ,
} ;