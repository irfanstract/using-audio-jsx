
import { 
    interpolateBetweenTwo ,   
} from "./polynomialsC";       
import { IterableOps } from "./generalUse11";  
import React, { useReducer, useState } from "react";   
import { K } from "./commonElements";               
import { CBC } from "./useStateInCallback";      
import { useRealTimeQueryInterval1 } from "./useNonHookValue";  
               
 
      
// domain-imports           
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";      
import { Consm as NdRefConsm  } from "./useAudioGraphImplCurrentDestNdRefCtx";           
import {                
    CHalfSecndBeep1 , CPersistingBeep , CWhiteNoise ,    
    CAmpModulated, CAmpModulated0 , CBiquadFilterModulated ,  CFreqDmAnalyF , 
    CConstantValue ,  CFnValue1 , 
    CAmpSlideDown ,              
} from "./useAudioGraphImplFComponents"; 
import { CWaveTable1 } from "./useAudioGraphImplFComponents";
import "./SLPCM.css";
      
   
       


  




const {    
    currentTCtx , 
    currentTScaleCtx ,        
    currentTInfCtx ,    
  
    CurrentTDisplay , 
    WithDelay ,     
    LoopingWithPeriod ,        
} = tCtxs ;

const WithAutoUnmount = (() => {
    const AbsoluteScheduledTCons = (
        currentTInfCtx.Consumer   
    ) ;   
    const useRealTimeQueryInterval11 = (
        useRealTimeQueryInterval1  
    ) ;
    return (
        function ({ children: expectedChildren, preFT, postFT } : (
            React.PropsWithChildren<{
                /**        
                 * pre-incidential tolerance        
                 */  
                preFT : number ;      
                /**         
                 * post-incidential tolerance   
                 */  
                postFT : number ;     
            }>    
        ) ) { 
            return (
                <>    
                <AbsoluteScheduledTCons>         
                    { ({ t: expectedT }) => (        
                        <>            
                        <NdRefConsm>            
                            { ({ feedPt: nd0 }) => (          
                                <CBC>{ function useC1() {      
                                    enum Stat {               
                                        TOO_EARLY = "too early" ,   
                                        SUPPOSEDLY_NOW = "available" ,
                                        SUPPOSEDLY_ALREADY_CONCLUDED = "already concluded"
                                    } 
                                    const {
                                        passageState: stat ,     
                                        hasPassedT: s ,  
                                    } = (   
                                        useRealTimeQueryInterval11({
                                            f : ()  => {  
                                                const ctxT = (
                                                    nd0 
                                                    ? 
                                                    nd0.context.currentTime 
                                                    : 
                                                    // -30000     
                                                    0    
                                                ) ; 
                                                ;                        
                                                return {
                                                    passageState : (    
                                                        ((expectedT + -preFT ) <= ctxT ) 
                                                        ?
                                                        (   
                                                            (ctxT <= (expectedT + postFT ) ) ?
                                                            Stat.SUPPOSEDLY_NOW : Stat.SUPPOSEDLY_ALREADY_CONCLUDED
                                                        )   
                                                        : Stat.TOO_EARLY
                                                    ) ,   
                                                    hasPassedT : (expectedT <= ctxT ) ,  
                                                } ;                 
                                            } ,    
                                            LE : "useLayoutEffect" ,   
                                        } , (Math.min(preFT, postFT) / 2.5 ) * 1000 )       
                                    ) ;       
                                    return (        
                                        <div      
                                        className={`SLPCM-M-${s ? "PAST" : "NONPAST" }` }          
                                        style={{ 
                                            transition : `all 0.5s ease-out` ,           
                                        }}
                                        >
                                        <>{ (      
                                            (stat === Stat.SUPPOSEDLY_NOW ) ?
                                            expectedChildren : <p>{ stat }</p>
                                        ) } </>   
                                        </div>  
                                    ) ;            
                                } }</CBC> 
                            ) }   
                        </NdRefConsm>     
                        </>
                    ) }
                </AbsoluteScheduledTCons>
                </> 
            ) ;      
        }  
    ) ;  
})() ;  

















export  {
    tCtxs ,       

    WithAutoUnmount ,  
} ;