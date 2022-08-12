
import React, { useReducer, useState } from "react";   
import { K, ComponentProps, ContextReturnType } from "./commonElements";      
import { 
    useOneWayCompletiveState ,      
            
} from "./useCompletion";    
import { useAsyncMemo } from "./useAsyncMemo";          

     
   
// domain-imports         
import * as tCtxs from "./audioLoopDemoScheduledTCtx";   
import { useACtxMtWithoutAnyFilter1 } from "./useAudioNodexCtxInitAndBeepNcaOnce1";  
import { 
    CHalfSecndBeepAtAbsoluteT ,     
} from "./audioLoopDemoCurrentDestNdRefCtx";  
import {            
    CurrentCtxTInfoDisplay ,    
    Prv1 ,                
    useADestNdRefCtx1 , 
    
} from "./useAudioGraphImplCurrentDestNdRefCtx";     
import { WGD_DIV } from "./useAudioGraphImplCurrentDestNdRefCtx";             
import { 
    CHalfSecndBeep1 , CPersistingBeep , CWaveTable1 , CWhiteNoise ,    
    CAmpModulated , CBiquadFilterModulated ,  CFreqDmAnalyF ,  CConstantValue , CAmpModulated0 ,    
} from "./audioLoopDemoComponents1"; 
import * as BBVR from "./audioLoopDemoSpecimens";  
import {
    CBassDrumLoop , 

} from "./audioLoopDemoSpecimens1";
import '../App.css';        

    

  

            


   
  


       
const {
    currentTCtx , 
    currentTScaleCtx ,         
    currentTInfCtx ,    

    CurrentTDisplay , 
    WithDelay ,     
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
            const TP = (
                tCtxs.currentTCtx.Provider            
            ) ;                                    
            const [tT, { update: updateTT } ] = (        
                useASetCurrentT(_1?.feedPt.context || null )    
            ) ;           
            const c1  = (  
                <CBassDrumLoop />       
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