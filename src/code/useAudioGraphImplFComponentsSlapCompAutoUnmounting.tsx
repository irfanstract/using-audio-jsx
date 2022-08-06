
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
   
const {
    WithAutoUnmount ,  
    WithAutoStopmount ,  

} = (() => {
    const AbsoluteScheduledTCons = (
        currentTInfCtx.Consumer   
    ) ;   
    const useRealTimeQueryInterval11 = (
        useRealTimeQueryInterval1  
    ) ;        
    enum PassageState {               
        TOO_EARLY = "too early" ,   
        SUPPOSEDLY_NOW = "available" ,
        SUPPOSEDLY_ALREADY_CONCLUDED = "already concluded"
    }     
    type PreFTAndPostFTProps = {
        /**        
         * pre-incidential tolerance        
         */  
        preFT : number ;      
        /**         
         * post-incidential tolerance   
         */   
        postFT : number ;               
    } ;
    const passageStateBy1 = (
        (...[{ preFT, postFT }] : [PreFTAndPostFTProps] ) => {
            ;
            const passageStateBy = (
                function (...[{ actualT, expectedT }] : [
                    { actualT : number ; expectedT: number ; } ,    
                ]) {           
                    return (    
                        ((expectedT + -preFT ) <= actualT ) 
                        ?  
                        (   
                            (actualT <= (expectedT + postFT ) ) ?
                            PassageState.SUPPOSEDLY_NOW : PassageState.SUPPOSEDLY_ALREADY_CONCLUDED
                        )       
                        : PassageState.TOO_EARLY
                    ) ;           
                }     
            );     
            return {
                passageStateBy ,   
            } ;
        }    
    ) ;
    type Props = (
        React.PropsWithChildren<(
            PreFTAndPostFTProps      
        ) >         
    ) ;                
    //    
    const render1 = (...[f] : [
        (
            (c: { passageState : PassageState ; expectedChildren: React.ReactNode ; } )
            => 
            React.ReactElement                   
        ) ,           
    ] ) => (  
        function ({ children: expectedChildren, preFT, postFT } : ( 
            Props   
        ) ) {         
            const {
                passageStateBy ,     
            } = (
                passageStateBy1({ preFT, postFT })
            ) ;  
            return (
                <>    
                <AbsoluteScheduledTCons>         
                    { ({ t: expectedT }) => (                  
                        <>            
                        <NdRefConsm>            
                            { ({ feedPt: destNd }) => (          
                                <CBC>{ function useC1() {   
                                    const {
                                        passageState: passageState ,     
                                        hasPassedT: hasPassedT ,  
                                    } = (   
                                        useRealTimeQueryInterval11({
                                            f : ()  => {  
                                                const ctxT = (
                                                    destNd 
                                                    ? 
                                                    destNd.context.currentTime 
                                                    :   
                                                    // -30000     
                                                    0    
                                                ) ; 
                                                const actualT = (
                                                    ctxT    
                                                ) ;
                                                ;                           
                                                return {
                                                    passageState : (     
                                                        passageStateBy({ expectedT, actualT })
                                                    ) ,   
                                                    hasPassedT : (expectedT <= actualT ) ,     
                                                } ;                        
                                            } ,    
                                            LE : "useLayoutEffect" ,   
                                        } , (Math.min(preFT, postFT) / 2.5 ) * 1000 )       
                                    ) ;       
                                    return (        
                                        <div       
                                        className={`SLPCM-M-${hasPassedT ? "PAST" : "NONPAST" }` }          
                                        style={{            
                                        }} 
                                        >     
                                        {f({ expectedChildren, passageState }) }
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
    return {
        WithAutoUnmount : (
            render1(function ({ passageState, expectedChildren }) {
                return (   
                    <>{ (      
                        (passageState === PassageState.SUPPOSEDLY_NOW ) ?
                        expectedChildren : <p>{ passageState }</p>
                    ) } </>         
                );
            })  
        ) ,   
        WithAutoStopmount : (
            render1(function ({ passageState, expectedChildren }) {
                return (   
                    <>{ (      
                        (passageState === PassageState.SUPPOSEDLY_NOW ) ?
                        expectedChildren : <p>{ passageState }</p>
                    ) } </>         
                );
            })
        ) ,   
    } ;
})() ;  

















export  {
    tCtxs ,       

    WithAutoUnmount ,  
} ;