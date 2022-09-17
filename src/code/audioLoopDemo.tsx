
import { IterableOps } from "./generalUse11";
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

     
   
// domain-imports         
import { 
    MediaStreamRecC1,
    
} from "./useMediaStreamRecDemo1";
import { 
    useAudioNodesAsMediaStream,
} from "./useAudioNodesAsMediaStreams1";
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";   
import TPTC from "./audioLoopDemoTimingCtxComponents";
import { useACtxMtWithoutAnyFilter1 } from "./useAudioNodexCtxInitAndBeepNcaOnce1";  
import { 
    CHalfSecndBeepAtAbsoluteT ,     
} from "./useAudioGraphImplFromUseYyyNodes1";  
import { WithCtxtualATapRecording } from "./useAudioGraphOutputRec1";
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
import { WithAuInstrumentsVisualisation } from "./useAudioGraphInstrumentsVisualisation1";
import '../App.css';        

    

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

    

  

            


   
  


       
const useASetCurrentT = (
    function (s: BaseAudioContext | null ) {
        const [tT, setTT ] = (      
            useReducer((
                (...[ , v1] : [unknown, number ]) => (
                    Math.max(0.5, v1 )    
                ) 
            ) , 0.5 )   
        ) ;                                
        const update = (
            function () {    
                if (s ) {    
                    const {         
                        currentTime: newTt ,   
                    } = s ;  
                    setTT( newTt );
                }
            }     
        );         
        return [tT, { update } ] as const ; 
    }
) ;            
; 
export const AudioLoopDemoApp = (function () {    
    const key = String(Math.random() ) ;
    console.log({ key } , ...[2 ] ); 
    return (       
        function App () {             
            const _1 = (   
                useACtxMtWithoutAnyFilter1()          
            ) ;               
            const quantityReductiveDbgMode = (
                (() : boolean => false )()
            ) ;
            const { //
                TCP ,
                TP ,
                withADestCtxTCompletionStatCtx ,
                WithADestCtxTCompletionStatCtx ,
            } = TPTC ;
            const [tT, { update: updateTT } ] = (        
                useASetCurrentT(_1?.feedPt.context || null )    
            ) ;           
            const c1  = (() => {
                return (
                <WithSlowdown value={1 / (68 / 60 ) } >
                <WithSlowdown value={2 ** -1 } >
                <WithADestCtxTCompletionStatCtx>
                { ({ withADestCtxCompletionStat }) => {
                ;
                return (
                <>
                { withADestCtxCompletionStat(({ relativeTDiff: tPassed, }) => (
                <K>
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
                            <CSnareDrumJammer 
                            metronomeProps={{
                                value: {
                                    tickTockPeriod: 1 / 4 ,
                                } ,
                            }}
                            cmPeriod={1 }
                            />
                            </CAmpModulated0>
                </K>
                ) }
                </K> 
                ) ) }
                </>
                ) ;
                } }
                </WithADestCtxTCompletionStatCtx>
                </WithSlowdown>
                </WithSlowdown>
                ) ;
            })() ;       
            const { WithACtx } = useADestNdRefCtx1() ;         
            const mainADemoScreen = (
                /**
                 * {@link WithAuInstrumentsVisualisation } would be nice.
                 * left it out for now due to performance problems.
                 */
                <K /* WithAuInstrumentsVisualisation */ >
                <CAmpModulated0 value={<CConstantValue value={2 ** -3} />} > 

                    { null && <CurrentCtxTInfoDisplay /> }  

                    <WithSlowdown 
                    // debugging the timing issues
                    value={2 ** 0.2 } 
                    >
                    <WithCtxtualATapRecording />
                    { c1 }
                    </WithSlowdown>              

                </CAmpModulated0>
                </K>
            ) ;
            return (       
                <div className="App" >        
                    <p>       
                        <span>   
                                
                        <span>
                            needs it play one more time ?         
                        </span>
                        <button onClick={() => updateTT() } >  
                            update 't'   
                        </button>             
                        </span>          
                    </p>        
                    <TP value={+(tT + 0 ).toFixed(3 ) } >
                                  
                    { (WithACtx && (        
                        <WithACtx>   
                        { (c ) => ( 
                        <Prv1 value={c } >          
                            { mainADemoScreen }
                        </Prv1>   
                        ) }       
                        </WithACtx>
                    )) }          
                    </TP>       
                </div>
            ) ;         
        }  
    ) ;
})() ;           