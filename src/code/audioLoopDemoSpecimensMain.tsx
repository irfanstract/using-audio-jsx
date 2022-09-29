
import { IterableOps } from "./generalUse11";
import { Iterable } from "./generalUse11";
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
import { 
  cAsSharply ,
  CGrandPianeSoundSharply1,

} from "./audioLoopDemoInstrumentsRenderedSharply1";
import { CBriefHiHatFluidly } from "./useAudioGraphImplFComponentsCymbals";
import * as BBVR from "./audioLoopDemoSpecimens";  
import {
    CBassDrumLoop , 
    CAmbientNoise , 
    WithNSecondsFadeInBF ,     

} from "./audioLoopDemoSpecimens1";
import { BassDrumLoopDv, HouseMusicShortBrkDemo } from "./audioLoopDemoBassDrumLoops"; 
import { CSnareDrumJammer, } from "./useAudioGraphForSnareDrumJammer1";
import { CBassLineByTimeDomainArgs } from "./audioLoopDemoSpecimens1";

    

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










export default (() => {
    ;
    const C1  = (({ c , } : { c : BaseAudioContext ; } ) => {
        ;
        return (
        <WithSlowdown value={1 / (68 / 60 ) } >
        <WithSlowdown value={2 ** -1 } >
        <WithADestCtxTCompletionStatCtx>
        { ({ withADestCtxCompletionStat }) => {
        ;
        const fadeinAmpGraph = (
            <CFnValue1 
            value={({ ctxT: t0, }) => {
                /**   
                 * `t0 === t * 2 `
                 */
                const { t, } = {
                    t: t0 / 2 ,
                } ;
                const ends1: {
                    startT : number ;
                    endT : number ;
                    startV : number ;
                    endV : 0 ;
                } = { startT: 4 , endT: 16 , startV: -11 , endV : 0 , };
                /**   
                 * 
                 */
                return (
                    2 ** (
                        IterableOps.clamp((
                            ends1.startV + (
                                Math.max((
                                    ((t - ends1.startT ) / (ends1.endT - ends1.startT ) )
                                    *
                                    (ends1.endV - ends1.startV )
                                ) , 0 )
                            )
                        ) , -1E4 , 0 )
                    )
                ) ;
            }} 
            />
        ) ;
        const drumKitLine = ( 
            <K /* drumming */ > 
            { (
                <BassDrumLoopDv subhalvesN={2 } />
            ) }
            { (
            <K>
                        <CAmpModulated0  
                        value={(
                            <CConstantValue value={2 ** -1 } />
                        )}
                        >
                        { null && (
                            <CSnareDrumJammer 
                            metronomeProps={{
                                value: {
                                    tickTockPeriod: 1 / 4 ,
                                } ,
                            }}
                            cmPeriod={1 }
                            />
                        ) }
                        </CAmpModulated0>
            </K>
            ) }
            </K>
        ) ;
        /**    
         * `1` for a single semitoone.
         * 
         */
        const detuneGraph = (
            <K>
            <CConstantValue  value={-1 } />
            <CFnValue1 
            value={({ ctxT: t }) => {
                if (t < 0 ) {
                    return 0 ;
                }
                if ((t % (4 * 2 ) < 1.5 ) ) {
                    return 0 ;
                }
                if ((t % (4 * 2 ) < 3.5 ) ) {
                    return 5 ;
                }
                return 5 + 2 ;
            } } 
            />
            </K>
        ) ;
        type HarmonicsSpec1 = (
            ComponentProps<typeof CmInHarmonics >["value"] & object
        ) ;
        const bassLine = (
            <CAmpModulated0  
            value={(
                <CConstantValue value={2 ** -1.5 } />
            )} >
            { (() => {
            ;
            return (
                <K> 
                    <CmInHarmonics 
                    value={[SupportedFShiftAmtInterpretation.OCTAVE_SHIFT , [
                        [0.00, { gain: 2 ** -0.5 , }, ] ,
                        [1.00, { gain: 2 ** -1.5 , }, ] ,
                        [1.33, { gain: 2 ** -3.5 , }, ] ,
                        [2.33, { gain: 2 ** -3.5 , }, ] ,
                    ] ]} 
                    >
                    { ({ detuneOctaves, }) => ( 
                      <CWaveTable1 
                      type="triangle"
                      freqArgumentNormalValue={27.5 }
                      freqArgumentInterpretation="timedomain-normalised"
                      freqArgument={(
                          <CConstantValue  value={1 } />
                      )}
                      detuneSemitoneCentsNormalVal={100 }
                      detuneInterpretation="timedomain-normalised"
                      detune={(
                          <K>
                          <CConstantValue  value={detuneOctaves * 12 } />
                          { detuneGraph }
                          </K>
                      )}
                      />
                    ) }
                    </CmInHarmonics>
                </K>
            ) ;
            })() }
            </CAmpModulated0>
        ) ;
        const trbLine = (
            <CAmpModulated0  
            value={(
                <CConstantValue value={2 ** -1.5 } />
            )} >
            { (() => {
            ;
            return (
                <K> 
                    <CmInHarmonics 
                    value={[SupportedFShiftAmtInterpretation.SEMITONES_SHIFT , [
                        [-12    , { gain: 2 ** -4.0 , }, ] ,
                        [-12 + 3, { gain: 2 ** -3.5 , }, ] ,
                        [-12 + 4, { gain: 2 ** -5.5 , }, ] ,
                        [-12 + 7, { gain: 2 ** -4.5 , }, ] ,
                    ] ]} 
                    >
                    { ({ detuneOctaves, }) => (
                    <CGrandPianeSound1
                    freqArgumentNormalValue={220 }
                    freqArgumentInterpretation="timedomain-normalised"
                    freqArgument={(
                        <CConstantValue  value={1 } />
                    )}
                    detuneSemitoneCentsNormalVal={100 }
                    detuneInterpretation="timedomain-normalised"
                    detune={(
                        <K>
                        <CConstantValue  value={detuneOctaves * 12 } />
                        { detuneGraph }
                        </K>
                    )}
                    />
                    ) }
                    </CmInHarmonics>
                </K>
            ) ;
            })() }
            </CAmpModulated0>
        ) ;
        return (
        <>
        { withADestCtxCompletionStat(({ relativeTDiff: tPassed, }) => (
        <K>
        <K /* test-beeping */ ></K>
        <K /* main */ >
        <CBiquadFilterModulated 
        type="lowpass"
        freqArgumentNormalValue={44100 }
        freqArgumentInterpretation="timedomain-normalised"
        freqArgument={fadeinAmpGraph }
        >
        { drumKitLine }
        <K>
            { bassLine }
            { trbLine }
        </K>
        </CBiquadFilterModulated>
        <MetronomeAndResponseGraph
        value={{ tickTockPeriod: 8 , } }
        >
        { ({ t }) => (
        <K>
          { ((t % 32 ) === 0 ) && (
          <CGrandPianeSoundSharply1
          freqArgumentNormalValue={110 }
          freqArgumentInterpretation="timedomain-normalised"
          freqArgument={(
              <CConstantValue  value={1 } />
          )}
          detuneSemitoneCentsNormalVal={100 }
          detuneInterpretation="timedomain-normalised"
          detune={(
              <K>
              <CConstantValue  value={-1 } />
              </K>
          )}
          />
          ) }
        </K>
        ) }
        </MetronomeAndResponseGraph>
        </K>
        </K> 
        ) ) }
        </>
        ) ;
        } }
        </WithADestCtxTCompletionStatCtx>
        </WithSlowdown>
        </WithSlowdown>
        ) ;
    }) ;       
    return (
      <WithCurrentDestNdRef>
        { ({ feedPt, }) => (
          feedPt &&
          <C1 c={feedPt.context } /> 
        ) }
      </WithCurrentDestNdRef>
    ) ;
})() ;