
import { 
    interpolateBetweenTwo ,   
} from "./polynomialsC";       
import { IterableOps } from "./generalUse11";  
import React, { useReducer, useState } from "react";   
import { K } from "./commonElements";    
               
 
      
// domain-imports           
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";      
import {   } from "./useAudioGraphImplCurrentDestNdRefCtx";           
import {                
    CHalfSecndBeep1 , CPersistingBeep , CWhiteNoise ,    
    CAmpModulated, CAmpModulated0 , CBiquadFilterModulated ,  CFreqDmAnalyF , 
    CConstantValue ,  CFnValue1 , 
    CAmpSlideDown ,              
} from "./useAudioGraphImplFComponents"; 
import { CWaveTable1 } from "./useAudioGraphImplFComponents";
      
   
      
const {
    currentTCtx , 
    currentTScaleCtx ,        
    currentTInfCtx ,    
  
    CurrentTDisplay , 
    WithDelay ,     
    LoopingWithPeriod ,   
} = tCtxs ;
   
const CPitchdownBassDrumKickFluidly1 = (
    function () {    
        const conventionalFreq : number | 440 = 440 ;      
        const minimumFreq : number = (    
            (2 ** -(3 + 0.333 ) ) * conventionalFreq            
        ) ;
        return (               
            <CAmpModulated0                 
            value={       
                <CFnValue1         
                value={   
                    ({ ctxT: t }) => (   
                        (0 <= t ) ? (      
                            (
                                IterableOps.clamp(1 + -(t * 2 ) , 0, 1 )
                            ) * (
                                Math.max(0, -(2 ** -4 ) + (2 ** -(t * 4 ) ) )   
                            )
                        ) : 0        
                    )
                }   
                />     
            }                
            >                                     
                <CWaveTable1                   
                freqArgumentInterpretation="timedomain-normalised"     
                freqArgument={(       
                    <CFnValue1                  
                    value={        
                        ({ ctxT }) => {   
                            const {                          
                                c0,                    
                                f ,             
                            } = interpolateBetweenTwo({ c0: 2.3, c1: 2.9 , t: 2 ** -3 }) ;   
                            const e10 = (
                                Math.min(-1 * Math.log2(minimumFreq / conventionalFreq ) , c0 + Math.max(0, ctxT ) * f )    
                            );                   
                            const val1 = (             
                                2 ** -e10   
                            ) ;        
                            return val1  ;          
                        }  
                    } 
                    />       
                )}       
                />                       
            </CAmpModulated0 >                          
        ) ;  
    }
) ;    
const CBassDrumKickFluidly1 = (
    CPitchdownBassDrumKickFluidly1      
);
const {
    CBassDrumKick1 , 

} = (() => { 
    const asSharpDueToKeying = (  
        (...[{ SDK , label , c  }] : [
            {     
                SDK : {
                    shallRemountForEachKeystroke : boolean ;    
                    delay : number ;         
                } ,                   
                c : React.ReactElement ;    
                label ?: React.ReactElement ,    
            }     ,    
        ] ) => {  
            return (     
                function CDK(...[] : [        
                    // TODO  
                ] ) { 
                    const TC = (   
                        tCtxs.currentTInfCtx 
                        .Consumer      
                    ) ;       
                    const TOff = (    
                        tCtxs.WithDelay  
                    ) ;           
                    const {       
                        shallRemountForEachKeystroke: remount , 
                        delay ,             
                    } = SDK ; 
                    return (                                          
                        <TC>               
                            { ({ t }) => (               
                                // TODO    
                                <K key={remount ? t : 0  }>  
                                    <p> { label } At T {t } </p>
                                    <div>
                                    <WithDelay value={delay } >  
                                        { c }            
                                    </WithDelay>           
                                    </div>
                                </K>   
                            ) }      
                        </TC>   
                    );       
                }
            ) ;    
        }   
    ) ;                  
    return {
        CBassDrumKick1 : (
            (asSharpDueToKeying)({
                SDK : { shallRemountForEachKeystroke : true , delay : 0.1 } as const ,  
                label : <span> Bass Drum </span> ,  
                c :  <CBassDrumKickFluidly1 />         ,  
            })
        ) ,  
    } ;  
})() ;          
     
     









export {
    CPitchdownBassDrumKickFluidly1 , 
    CBassDrumKick1 , 
    CBassDrumKickFluidly1 , 
} ;