
import { IterableOps } from "./generalUse11";
import { linearSlidingStateAtT } from "./timeDomainClosedGradientSampling1";
import { SupportedFShiftAmtInterpretation } from "./audioFreqShiftInterpretation1";
import React, { useReducer, useState } from "react";   
import { K, ComponentProps, ContextReturnType } from "./commonElements";      
import { 
    useOneWayCompletiveState ,      
            
} from "./useCompletion";    
import { useAsyncMemo } from "./useAsyncMemo";          

     
   
// domain-imports         
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";   
import { useACtxMtWithoutAnyFilter1 } from "./useAudioNodexCtxInitAndBeepNcaOnce1";  
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
import { CBriefHiHatFluidly } from "./useAudioGraphImplFComponentsCymbals";
import * as BBVR from "./audioLoopDemoSpecimens";  
import {
    CBassDrumLoop , 
    CAmbientNoise , 
    WithNSecondsFadeInBF ,     

} from "./audioLoopDemoSpecimens1";
import { BassDrumLoopDv, HouseMusicShortBrkDemo } from "./audioLoopDemoBassDrumLoops"; 
import { CBassLineByTimeDomainArgs } from "./audioLoopDemoSpecimens1";
import { WithAuInstrumentsVisualisation } from "./useAudioGraphInstrumentsVisualisation1";
import '../App.css';        

    

const cFnvPeriodicTRestrictedLinearlyApproachedKeyValueAtT1 = (
    function (...[
        t ,
        {
            checkPer ,
        } ,
        {
            startT ,
            anEndT ,
            endT ,
            startValue ,
            anEndValue ,
        } ,
    ] : [
        t: number ,
        config0: (
            {
                checkPer : number ;
            }
        ) ,
        config1: (
            {

                startT : number ; 
                anEndT : number ;
                endT : number ;

                startValue : number ; 
                anEndValue : number ;
            }
        ) ,
    ]) : ([number] | [] ) { 
        ;
        if (startT <= (t % checkPer ) && (t % checkPer ) < endT ) {
            return [
            (
                linearSlidingStateAtT
            )(t % checkPer , { startT, anEndT, startValue, anEndValue }  ) ,
            ] ;
        }
        return [] ;
    }
) ;
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
            /**    
             * {@link tCtxs.currentTCtx.Provider }
             */
            const {
                Provider: TP ,     
            } = (
                tCtxs.currentTCtx             
            ) ;                        
            const {  
                Consumer: TCP ,    
            } = tCtxs.currentTInfCtx ;
            const [tT, { update: updateTT } ] = (        
                useASetCurrentT(_1?.feedPt.context || null )    
            ) ;           
            const c1  = (() => {
                const bassLine = (
                    <CAmpModulated0 value={<CConstantValue value={2 ** -1 } /> } >
                    <CmInHarmonics value={[SupportedFShiftAmtInterpretation.OCTAVE_SHIFT, [[0, { gain: 2 ** -0.5 }] , [-1, { gain: 2 ** -0.5 }] ] ]} >
                    { ({ detuneOctaves }) => (
                    <CWaveTable1 
                    freqArgumentInterpretation="timedomain-normalised"
                    freqArgument={(
                        <CConstantValue value={55 / 440 } />
                    )}
                    detuneInterpretation="timedomain-normalised"
                    detuneSemitoneCentsNormalVal={12 * 100 }
                    detune={(
                        <K>
                        <CConstantValue value={detuneOctaves } />
                        <CFnValue1 
                        value={({ ctxT: t }) => (
                            ((): number => { 
                                { 
                                    const checkPer = 32 ;
                                    ;
                                    const startT = 28 ;
                                    const anEndT = 30 ;
                                    const endT = 32 ;
                                    const startValue = -2 * 2 ;
                                    const anEndValue = startValue + -1 ;
                                    ;
                                    for (const value of (
                                        cFnvPeriodicTRestrictedLinearlyApproachedKeyValueAtT1(t, {
                                            checkPer ,
                                        }, {
                                            startT ,
                                            anEndT ,
                                            endT ,
                                            startValue ,
                                            anEndValue ,
                                        } )
                                    ) ) { 
                                        return (
                                            value
                                        ) ;
                                    }
                                }
                                { 
                                    const checkPer = 8 ;
                                    ;
                                    const startT = 0 ;
                                    const anEndT = 0.25 ;
                                    const endT = 0.5 ;
                                    const startValue = 0 ;
                                    const anEndValue = 3 + (2 * 2 ) ;
                                    ;
                                    for (const value of (
                                        cFnvPeriodicTRestrictedLinearlyApproachedKeyValueAtT1(t, {
                                            checkPer ,
                                        }, {
                                            startT ,
                                            anEndT ,
                                            endT ,
                                            startValue ,
                                            anEndValue ,
                                        } )
                                    ) ) { 
                                        return (
                                            value
                                        ) ;
                                    }
                                }
                                { 
                                    const checkPer = 8 ;
                                    ;
                                    const startT = 0.5 ;
                                    const anEndT = 0.75 ;
                                    const endT = 1 ;
                                    const startValue = 3 + (2 * 2 ) ;
                                    const anEndValue = 3 ;
                                    ;
                                    for (const value of (
                                        cFnvPeriodicTRestrictedLinearlyApproachedKeyValueAtT1(t, {
                                            checkPer ,
                                        }, {
                                            startT ,
                                            anEndT ,
                                            endT ,
                                            startValue ,
                                            anEndValue ,
                                        } )
                                    ) ) { 
                                        return (
                                            value
                                        ) ;
                                    }
                                }
                                return 0 ;
                            })()
                            / 12
                        ) }
                        />
                        </K>
                    )}
                    type="triangle"
                    />
                    ) }
                    </CmInHarmonics>
                    </CAmpModulated0>
                ) ;
                return (
                <WithSlowdown value={1 / (68 / 60 ) } >
                <WithSlowdown value={2 ** -1 } >
                    <BassDrumLoopDv subhalvesN={2 } />
                    { bassLine }
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