
import React, { useReducer, useState } from "react";  
import { 
    useOneWayCompletiveState , 
      
} from "./useCompletion";    



// domain-imports         
import '../App.css';
import * as tCtxs from "./audioLoopDemoScheduledTCtx";   
import { useACtxMtWithoutAnyFilter1 } from "./useAudioNodexCtxInitAndBeepNcaOnce1";
import { CHalfSecndBeepAtAbsoluteT } from "./audioLoopDemoCurrentDestNdRefCtx";  
import { 
    CHalfSecndBeep1 , CPersistingBeep , CWaveTable1 , CWhiteNoise ,    
    CAmpModulated , CBiquadFilterModulated ,  CFreqDmAnalyF ,  
} from "./audioLoopDemoComponents1"; 
import * as BBVR from "./audioLoopDemoSpecimens";

    

  

            


   
  


       
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
} = BBVR ;
export const AudioLoopDemoApp = (function () {
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
            const {  
                beepBopGraph1 , 
                c1: c1 ,         
        
            } = BEEPBOPVR({ quantityReductiveDbgMode , }) ;     
            return (
                <div className="App" >  
                    <p>     
                        <span>
                                
                        <s >     
                        Gettting some App Problems ?
                        </s> 
                        <span>
                            need it play one more time ?
                        </span>
                        <button onClick={() => updateTT() } >  
                            update 't'   
                        </button>        
                        </span>    
                    </p>
                    <TP value={+(tT + 0 ).toFixed(3 ) } >
                      
                    <p> what </p>
                    { true && c1 }
                    </TP>       
                </div>
            ) ;         
        } 
    ) ;
})() ;