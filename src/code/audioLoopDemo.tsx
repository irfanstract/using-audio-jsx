
import { IterableOps } from "./generalUse11";
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
    const WithAuInstrumentsVisualisation = (
        function ({ children: c1 } : (
            { children: object & React.ReactElement ; }
        ) ) {
            ;
            const tT = 0 ;
            const [gVisTarget, setGVisTarget] = (
                React.useState<null | SVGElement >(null )
            ) ;
            ;
            const instrumentsVisualiView = (
                <div 
                title={(
                    `Graphical visualisation of the simulated instruments in time-lapse.`
                )} 
                >
                <svg 
                viewBox="0 0 512 16" 
                preserveAspectRatio={"none" } 
                style={{ height: "3em", width: "98%", background: "yellow" }}
                >
                    <WithCurrentDestNdRef>
                        { ({ currentTime: aCtxT }) => (
                            <g 
                            /**   
                             * string-concatenation on SVG JSX
                             * should be substituted with combination between CSS *custom properties* and *transforms*
                             * to maintain performance `XD`
                             */
                            style={{
                                transform: (
                                    [
                                        `scale(24, 16 )` ,
                                        `translate(calc(var(--COMPONENTLOCALLY-DATA-ACTX-T ) * -1px ) , 0px )` ,
                                    ].join(" ")
                                ) ,
                                ...({
                                    "--COMPONENTLOCALLY-DATA-ACTX-T" : (
                                        (typeof aCtxT === "number") ? aCtxT : tT 
                                    ) ,
                                }) ,
                            }}
                            >
                                <g ref={setGVisTarget } />
                            </g>
                        ) }
                    </WithCurrentDestNdRef>
                </svg>
                </div>
            ) ;
            ;
            return (
                <WithSpecifiedGVisTarget value={gVisTarget} >
                    <div key={key }>   
                    <K>
                        { instrumentsVisualiView }
                    </K>
                    <K>
                        { true && c1 }    
                    </K>
                    </div>                 
                </WithSpecifiedGVisTarget>  
            ) ;
        }
    ) ;
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
            const c1  = (
                <WithSlowdown value={1 / (68 / 60 ) } >
                <WithSlowdown value={2 ** -1 } >
                    <BassDrumLoopDv subhalvesN={2 } />
                </WithSlowdown>
                </WithSlowdown>
            ) ;       
            const { WithACtx } = useADestNdRefCtx1() ;         
            const mainADemoScreen = (
                <WithAuInstrumentsVisualisation >
                <CAmpModulated0 value={<CConstantValue value={2 ** -3} />} > 

                    { null && <CurrentCtxTInfoDisplay /> }  

                    <WithSlowdown 
                    // debugging the timing issues
                    value={2 ** 0.2 } 
                    >
                    { c1 }
                    </WithSlowdown>              

                </CAmpModulated0>
                </WithAuInstrumentsVisualisation>
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