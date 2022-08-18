
import { 
    IterableOps , 
     
} from "./generalUse11";     
import { 
    AudioTrackConcatClippingMode , 
    avTrackConcatShallPropagate, 
    OmitOrPropagate,          

} from "./timelineConcatClippingMode";    
import React, { useReducer, useState } from "react";  
import { ComponentProps } from "./commonElementsTypes";
import { K } from "./commonElements";         

         

// domain-imports        
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";   
import { useACtxMtWithoutAnyFilter1 } from "./useAudioNodexCtxInitAndBeepNcaOnce1";
import { 
    CHalfSecndBeepAtAbsoluteT ,    
    CAmpModulated as CAmpModulatedTimeDomain ,  
    CAmpSlideDownAtAbsoluteT ,   
    CBiquadFilterModulated ,             
      
    CPersistingBeep as CPersistingBeep0 ,       
    CConstantValueModulated ,     
    CConstantValue ,      
    CFnValue as CFnValueAtAbsoluteT ,    
       
    nonterminalUsageWrapC ,   
    terminalUsageWrapC ,          
    modulatedWaveTableUsageWrapC ,      
  
} from "./useAudioGraphImplCurrentDestNdRefCtxC";           
import { CHalfSecndBeepAtRelativeT } from "./useAudioGraphImplFComponentsBeepAtRelativeT";           
import { CFnValueFromRelativeT as CFnValue1 } from "./useAudioGraphImplFMathComponentsSupport11";    
import { CAmpSlideDown } from "./useAudioGraphImplFComponentsAmpModulative";
import {
    Consm as WithCurrentDestNdRef , 
    useWithCurrentSideTapPtRef , 

} from "./useAudioGraphImplCurrentDestNdRefCtx";            
import * as audioFltAtAbsTNodes from "./useAudioNodesBasicUseBeep";      
import * as audioFrqAnlyAtAbsTNodes from "./useAudioNodesCrossmasking1";     
import { CFreqDmAnalyF } from "./useAudioGraphImplFComponentsAnalyticalF";    
import { 
    LoopingWithPeriod , 
    LoopingWithPeriodAndAutoUnmounting , 
    LoopingWithPeriodSimple , 
    MetronomeCheckAndExpandingElem ,  
     
} from "./useAudioGraphImplFComponentsLoopingWrapper1";
import { CWhiteNoise } from "./useAudioGraphImplFComponentsWhiteNoise";
import { CWaveTable1 } from "./useAudioGraphImplFComponentsBasicWaveTable";
import { WithAutoUnmount } from "./useAudioGraphImplFComponentsSlapCompAutoUnmounting";   

// CSS
import "./useAudioGraphImplFComponentsSty.css"     ;
  







  

/**    
 * {@link CPersistingBeep0 }. 
 * 
 * alternative:    
 * - {@link CWaveTable1 }, which supports meta-rendering      
 */    
const CPersistingBeep : (
    typeof CPersistingBeep0  
) = CPersistingBeep0  ;
const {
    WithDelay ,              
    WithSlowdown ,   
           
} = tCtxs ;                  
//    
const CFreqDmAnalyFSpecial = (
    function ({ children : graph0 } : (
        React.PropsWithChildren<{}>  
    )) {    
        const graph1 = (     
            // TODO        
            <CFreqDmAnalyF        
            value={(   
                ((mode : 0 | 1 ) : ComponentProps<typeof CFreqDmAnalyF>["value"] => {
                    if (mode === 1 ) {
                        return { refreshIntervalMillis: (2 ** -4 ) * 1000 } ;
                    }  
                    return undefined ; 
                } )(0 )
            ) }    
            > 
                { graph0 }     
            </CFreqDmAnalyF>      
        ) ;            
        ;      
        return (   
            graph1 
        ) ;    
    } 
) ;                     
/**   
 * the interpretation will 
 * modulate `gain` to be `the effective/actual magnitude` 
 * (hence an added {@link CFreqDmAnalyF analytical} step )
 */
const CAmpModulated1 = (    
    IterableOps.identity<(
        React.FC<( 
            React.PropsWithChildren<{          
                value: React.ReactElement | null;
            }>
        )>        
    )>((         
        function ({ children, value: ctrlSrc }) {                         
            const ctrlFnl = (  
                // TODO     
                <CFreqDmAnalyFSpecial>   
                    { ctrlSrc }
                </CFreqDmAnalyFSpecial>      
            ) ;                   
            ;         
            return (          
                <CAmpModulatedTimeDomain value={ctrlFnl} >
                    { children } 
                </CAmpModulatedTimeDomain>
            ) ;
        }    
    ))
) ;  
const CAmpModulated: (
    typeof CAmpModulated1 
) = (  
    CAmpModulated1   
) ;     
  

    








  
export * from "./useAudioGraphImplFComponentsSemanticsBasic" ;    
export * from "./useAudioGraphImplFComponentsLoopingWrapper1";                 
export {
       
    // MODIFYING   
       
    // LOOPING            
    LoopingWithPeriod , 
    // LoopingWithPeriodAndAutoUnmounting ,         
    // LoopingWithPeriodSimple , 
    // MetronomeCheckAndExpandingElem ,  

    // FILTERING       
    CAmpModulated ,     
    CAmpModulated1 ,               
    CAmpModulatedTimeDomain as CAmpModulated0 ,     
    CAmpModulatedTimeDomain ,            
    CAmpSlideDown ,       
    CBiquadFilterModulated ,  
    CFreqDmAnalyF ,                         
   
    CHalfSecndBeepAtAbsoluteT ,    

    // 'T' OFFSET-OR-SCALING       
    WithDelay ,       
    WithSlowdown,

    // TERMINAL 
    
    // INTRINSICS 
    CHalfSecndBeepAtRelativeT as CHalfSecndBeep1 ,            
    CPersistingBeep ,                                 
    CWaveTable1 ,  
    CConstantValueModulated ,  
    CConstantValue ,  
    CFnValue1 ,     
    CWhiteNoise ,       
} ;                        
export * from "./useAudioGraphImplFComponentsSlapDrumKit1";                      