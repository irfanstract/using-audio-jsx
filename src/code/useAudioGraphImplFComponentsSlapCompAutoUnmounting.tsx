
import { 
    interpolateBetweenTwo ,   
} from "./polynomialsC";           
import { IterableOps } from "./generalUse11";  
import React, { useReducer, useState } from "react";   
import { K } from "./commonElements";               
import { NUMERIC } from "./commonCodeSnippetAndNumericDisplay";          
import { CBC } from "./useStateInCallback";      
import { useRealTimeQueryInterval1 } from "./useNonHookValue";  
               
 
      
// domain-imports           
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";      
import { Consm as NdRefConsm , WithGivenDest, useWithCurrentSideTapPtRef } from "./useAudioGraphImplCurrentDestNdRefCtx";           
import {                
    CHalfSecndBeep1 , CPersistingBeep , CWhiteNoise ,    
    CAmpModulated, CAmpModulated0 , CBiquadFilterModulated ,  CFreqDmAnalyF , 
    CConstantValue ,  CFnValue1 , 
    CAmpSlideDown ,              
} from "./useAudioGraphImplFComponents"; 
import { CWaveTable1 } from "./useAudioGraphImplFComponents"; 
import { 
    useGainNodeWithGivenFadeoutTimeConstant1 ,   
} from "./useAudioNodesMounting11";    
import "./SLPCM.css";
      
   
       


  




const {    
    currentTCtx , 
    currentTScaleCtx ,        
    currentTInfCtx ,    
  
    CurrentTDisplay , 
    WithDelay ,     
    LoopingWithPeriod ,        
} = tCtxs ;   
            
enum PassageState {               
    TOO_EARLY = "too early" ,   
    SUPPOSEDLY_NOW = "available" ,
    SUPPOSEDLY_ALREADY_CONCLUDED = "already concluded" , 
}       
const {  
    WithAutoUnmount ,               
    withAutoUnmount ,                 
    WithAutoStopmount ,         
    WithAutoStopmountExtra ,         
  
} = (() => { 
    const AbsoluteScheduledTCons = (
        currentTInfCtx.Consumer   
    ) ;   
    const useRealTimeQueryInterval11 = (
        useRealTimeQueryInterval1  
    ) ;        
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
    const wrapC1 = (...[f] : [
        (
            (c: { passageState : PassageState ; expectedChildren: React.ReactNode ; } )
            => 
            React.ReactElement                          
        ) ,           
    ] ) => (  
        function ({ children: expectedChildren, preFT: preFT0, postFT: postFt0 } : ( 
            Props    
        ) ) {   
            // TODO  
            const [preFT, postFT] = ( 
                [preFT0, postFt0 ]  
                .map((v: number ) => Math.max(8, v ) )   
            ) ;     
            const {       
                passageStateBy ,     
            } = (   
                passageStateBy1({ preFT, postFT })    
            ) ;      
            const { t: expectedT } = (
                tCtxs.useCurrentTInf()     
            ) ;
            return (         
                useWithCurrentSideTapPtRef(({ feedPt: destNd }) => (          
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
                            } , (
                                Math.max(...[
                                    (     
                                        (destNd && (destNd.context.state === "running") )
                                        ?   
                                        0.1         
                                        :    
                                        5     
                                    ) , 
                                    Math.min(preFT, postFT) / 2.5  ,  
                                ])          
                            ) * 1000 )            
                        ) ;       
                        return (        
                            <div       
                            className={`SLPCM-M-BASE SLPCM-M-${hasPassedT ? "PAST" : "NONPAST" } splcm-m-passageStated-${passageState.replace(" ", "") }` }          
                            style={{                     
                            }}   
                            >     
                            {f({ expectedChildren, passageState }) }
                            </div>  
                        ) ;              
                    } }</CBC>   
                ) )   
            ) ;      
        }     
    ) ;         
    const withAutoUnmountImpl = (   
        function (...[passageState, expectedChildren ] : [             
            PassageState ,    
            React.ReactElement , // TODO        
        ]): false | React.ReactElement {                 
            return (      
                (passageState === PassageState.SUPPOSEDLY_NOW ) ?
                expectedChildren : false
            ) ;     
        }         
    ) ;
    return {            
        withAutoUnmount: withAutoUnmountImpl , 
        WithAutoUnmount : (       
            wrapC1(function ({ passageState, expectedChildren }) { 
                const rendered1 = (
                    withAutoUnmountImpl(
                        passageState, 
                        <>{ expectedChildren }</> )
                ) ;                     
                return (    
                    rendered1 
                    ||      
                    <p>{ passageState }</p>
                );
            })  
        ) ,       
        WithAutoStopmount: (
            wrapC1(function ({ passageState, expectedChildren }) {
                return (    
                    <CAmpModulated0            
                    value={ (      
                        (passageState === PassageState.SUPPOSEDLY_NOW ) ?
                        (<CConstantValue value={1} /> ) : (<></> )
                    )}  
                    >                      
                        { expectedChildren }
                    </CAmpModulated0>
                );
            })  
        ),
        WithAutoStopmountExtra : (
            wrapC1(function ({ passageState, expectedChildren }) {    
                return (       
                    useWithCurrentSideTapPtRef(({ feedPt: givenDestNd }) => (     
                        <>            
                        <CBC>{ function useE() {    
                            // supposedly, this value will never change for component lifetime  
                            const SM1 = (
                                React.useMemo(() => (Math.random() ) , [] )
                            ) ;
                            const implied1: boolean = (      
                                (passageState === PassageState.SUPPOSEDLY_NOW ) 
                            ) ;              
                            const gnNd1 = ( 
                                React.useMemo(() => (
                                    givenDestNd ?
                                    givenDestNd.context.createGain() 
                                    : null    
                                ), [givenDestNd ])     
                            ) ;    
                            React.useLayoutEffect(() => {
                                if (gnNd1 && givenDestNd ) {
                                    if (implied1) {
                                        gnNd1.connect(givenDestNd ) ;
                                        return () => {  
                                            gnNd1.disconnect() ;    
                                        };
                                    }     
                                } ;  
                            } , [gnNd1, givenDestNd, implied1 ] ) ;  
                            ;     
                            return (          
                                <WithGivenDest              
                                value={gnNd1 }     
                                >                       
                                <p> MOUNT-ID : <NUMERIC>{SM1 }</NUMERIC> </p>
                                { expectedChildren }    
                                </WithGivenDest>           
                            ) ;
                        } }</CBC>         
                        </>            
                    ) )   
                );  
            })  
        ) ,   
    } ;   
})() ;  


    



    










export  {
    tCtxs ,       

    withAutoUnmount ,    
    WithAutoUnmount ,    
    WithAutoStopmount , 
    PassageState ,  
} ;  