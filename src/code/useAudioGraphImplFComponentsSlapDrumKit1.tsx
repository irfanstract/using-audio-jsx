
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
import { 
    WithAutoUnmount as WithAutoUnmount0 ,    
} from "./useAudioGraphImplFComponentsSlapCompAutoUnmounting";    
      
   





       
const {    
    currentTCtx , 
    currentTScaleCtx ,        
    currentTInfCtx ,    
  
    CurrentTDisplay , 
    WithDelay ,     
    LoopingWithPeriod ,        
} = tCtxs ;
// const WithAutoUnmount = (() => {
//     const AbsoluteScheduledTCons = (
//         currentTInfCtx.Consumer   
//     ) ;   
//     const useRealTimeQueryInterval11 = (
//         useRealTimeQueryInterval1  
//     ) ;
//     return (
//         function ({ children: expectedChildren, preFT, postFT } : (
//             React.PropsWithChildren<{
//                 /**        
//                  * pre-incidential tolerance        
//                  */  
//                 preFT : number ;      
//                 /**         
//                  * post-incidential tolerance   
//                  */  
//                 postFT : number ;     
//             }>    
//         ) ) { 
//             return (
//                 <>    
//                 <AbsoluteScheduledTCons>         
//                     { ({ t: expectedT }) => (        
//                         <>            
//                         <NdRefConsm>            
//                             { ({ feedPt: nd0 }) => (          
//                                 <CBC>{ function useC1() {      
//                                     enum Stat {               
//                                         TOO_EARLY = "too early" ,   
//                                         SUPPOSEDLY_NOW = "available" ,
//                                         SUPPOSEDLY_ALREADY_CONCLUDED = "already concluded"
//                                     } 
//                                     const stat = (   
//                                         useRealTimeQueryInterval11((): Stat => {  
//                                             const ctxT = nd0 ? nd0.context.currentTime : -30000 ; 
//                                             ;                      
//                                             return (    
//                                                 ((expectedT + -preFT ) <= ctxT ) 
//                                                 ?
//                                                 (   
//                                                     (ctxT <= (expectedT + postFT ) ) ?
//                                                     Stat.SUPPOSEDLY_NOW : Stat.SUPPOSEDLY_ALREADY_CONCLUDED
//                                                 )   
//                                                 : Stat.TOO_EARLY
//                                             ) ;                 
//                                         } , 100 )       
//                                     ) ;     
//                                     return (     
//                                         <>{ (      
//                                             (stat === Stat.SUPPOSEDLY_NOW ) ?
//                                             expectedChildren : <p>{ stat }</p>
//                                         ) } </>     
//                                     ) ;            
//                                 } }</CBC> 
//                             ) }   
//                         </NdRefConsm>     
//                         </>
//                     ) }
//                 </AbsoluteScheduledTCons>
//                 </> 
//             ) ;      
//         }  
//     ) ;  
// })() ;            
const WithAutoUnmount = (
    WithAutoUnmount0    
);
      
const {
    CPitchdownBassDrumKickFluidly1 , 

} = (() => {   
    const conventionalFreq : number | 440 = 440 ;     
    const clampWithinZeroAndOne = (  
        function (v: number) {
            return IterableOps.clamp(v, 0, 1 ) ;
        }   
    ) ;  
    const { max, min, } = Math ;
    return {
        CPitchdownBassDrumKickFluidly1 : (      
            function (mainProps : (      
                Partial<{         
                    tCoef1 : number ;             
                    minimumFreq : number ;     
                    /**   
                     * such that `TM` be exactly {@link TM1 } times {@link tCoef1}
                     */          
                    TM1 : number ;    
                }>
            )) {               
                const {     
                    tCoef1 = (   
                        // 2 ** -3    
                        2 ** -3 
                    )  ,          
                    minimumFreq = (          
                        (2 ** -(3 + 0.333 ) ) * 440               
                    ) ,  
                    TM1 = 4 ,    
                } = mainProps ;        
                const expectedTLen1 : number = (
                    TM1 * tCoef1 
                ) ;   
                const maximumExp = (
                    -1 * Math.log2(minimumFreq / conventionalFreq )  
                ) ;
                const c1 = (() => {   
                    const ampModulGraph = (  
                        <CFnValue1         
                        value={            
                            ({ ctxT: t }) => { 
                                const p = (
                                    t / expectedTLen1    
                                ) ;
                                return (     
                                    (-0.05 <= t ) ? (   
                                        (  
                                            clampWithinZeroAndOne(1 + -p ,  )   
                                        ) * (      
                                            max(0, -(2 ** -4 ) + (2 ** -( 6 * p ) ) )   
                                        )   
                                    ) : 0                         
                                ) ;   
                            }         
                        }   
                        />        
                    ) ;         
                    return (                 
                        <CAmpModulated0                      
                        value={         
                            ampModulGraph  
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
                                        } = interpolateBetweenTwo({ c0: 2.3, c1: 3.2 , t: tCoef1 }) ;   
                                        const e10 = (
                                            Math.min(maximumExp , c0 + Math.max(0, ctxT ) * f )    
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
                })() ;      
                return (                      
                    <>            
                    <WithAutoUnmount preFT={1.5} postFT={1 * expectedTLen1 } >
                    { c1 }
                    </WithAutoUnmount>            
                    </>                     
                ) ;
            }
        ) ,   
    } ;
})() ;      
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
                SDK : { shallRemountForEachKeystroke : false , delay : 0.1 } as const ,  
                label : <span> Bass Drum </span> ,  
                c :  <CBassDrumKickFluidly1 />         ,  
            })
        ) ,  
    } ;  
})() ;          
     
     









export {
    WithAutoUnmount , 

    CPitchdownBassDrumKickFluidly1 , 
    CBassDrumKick1 , 
    CBassDrumKickFluidly1 , 
} ;   