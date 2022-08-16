
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
} from "./useAudioGraphImplCurrentDestNdRefCtxC";  
import {            
    CurrentCtxTInfoDisplay ,    
    Prv1 ,                
    useADestNdRefCtx1 , 
    
} from "./useAudioGraphImplCurrentDestNdRefCtx";     
import { WGD_DIV } from "./useAudioGraphImplCurrentDestNdRefCtx";             
import { 
    CHalfSecndBeep1 , CPersistingBeep , CWaveTable1 , CWhiteNoise ,    
    CBassDrumKickFluidly1 ,
    CSnareDrumFluidly1 , 
    
    CAmpModulated , CBiquadFilterModulated ,  CFreqDmAnalyF ,  CConstantValue , CAmpModulated0 ,    

    MetronomeCheckAndExpandingElem , 
    
} from "./audioLoopDemoComponents1"; 
import * as BBVR from "./audioLoopDemoSpecimens";  
import {
    CBassDrumLoop , 
    CAmbientNoise , 
    WithNSecondsFadeInBF ,     

} from "./audioLoopDemoSpecimens1";
import '../App.css';        

    

  

            


   
  


       
const {
    currentTCtx , 
    currentTScaleCtx ,         
    currentTInfCtx ,    

    CurrentTDisplay , 
    WithDelay ,     
    WithSlowdown,
    LoopingWithPeriod , 
} = tCtxs ;
const AudioLoopDemoApp1 = () => (
    <p> Audio Loop </p>
) ;      
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
const {    
    BeepsInLoop , 
    BEEPBOPVR , 
    BEEPBOPVRAPP ,              
} = BBVR ;     
const HouseMusicShortBrkDemo = () => {

    const BD : (
        (typeof CBassDrumKickFluidly1 )
    ) = (
        CBassDrumKickFluidly1
    ) ;
    const dv : 1 | 2 = 2 ;
    return (  
        <WithSlowdown 
        /**  this filtering is here to debug the one timing issues. */
        value={2 ** 0.9 } 
        >
        <WithSlowdown value={2 ** -1 }>
        <WithNSecondsFadeInBF>
          <MetronomeCheckAndExpandingElem
          preFT={2 }
          postFT={3 }
          value={{ tickTockPeriod: 0.5 }}
          renderRange={{ n: 4 * 4 * 8 * dv }}
          >
          { ({ t }) => (
            <>
            { (
                (
                    (t % 1 ) === 0
                    &&
                    ([28, 29, 30, 31 ] as number[] ).indexOf(t % (4 * 8 ) ) === -1 
                ) ?
                <BD /> 
                :  null
            )}
            { (
                ((t % 2 ) === 1 ) ? <CSnareDrumFluidly1 /> : null
            ) }
            { (
                (((t * 2 ) % 2 ) === 1 ) ? 
                <CAmpModulated0 value={<CConstantValue value={2 ** -2 } /> } >
                    <CSnareDrumFluidly1 />
                </CAmpModulated0> 
                : null
            ) }
            </>
          ) }
          </MetronomeCheckAndExpandingElem>
          <CAmbientNoise />
        </WithNSecondsFadeInBF>
        </WithSlowdown>
        </WithSlowdown>
    ) ;
} ;
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
            const c1  = (
                <HouseMusicShortBrkDemo />
            ) ;       
            const { WithACtx } = useADestNdRefCtx1() ;         
            return (       
                <div className="App" >        
                    <p>       
                        <span>   
                                
                        <s >     
                        Gettting some App Problems ?
                        </s> 
                        <span>
                            needs it play one more time ?         
                        </span>
                        <button onClick={() => updateTT() } >  
                            update 't'   
                        </button>             
                        </span>          
                    </p>        
                    <TP value={+(tT + 0 ).toFixed(3 ) } >
                                  
                    <p> what </p>          
                    { (WithACtx && (        
                        <WithACtx>   
                        { (c ) => ( 
                        <Prv1 value={c } >          
                            <div key={key }>   
                            <CAmpModulated0 value={<CConstantValue value={2 ** -3} />} > 
                                { null && <CurrentCtxTInfoDisplay /> }  
                                { true && c1 }                       
                            </CAmpModulated0>
                            </div>                   
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