
import { 
    IterableOps , 
     
} from "./generalUse11";     
import React, { useReducer, useState } from "react";  
import { ComponentProps } from "./commonElementsTypes";
import { K } from "./commonElements";   

         

// domain-imports        
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";   
import { useACtxMtWithoutAnyFilter1 } from "./useAudioNodexCtxInitAndBeepNcaOnce1";
import { 
    CHalfSecndBeepAtAbsoluteT ,    
    CAmpModulated as CAmpModulated0 ,  
    CAmpSlideDownAtAbsoluteT ,   
    CBiquadFilterModulated ,          
      
    CPersistingBeep as CPersistingBeep0 ,    
    
    nonterminalUsageWrapC , 
    terminalUsageWrapC ,  
    modulatedWaveTableUsageWrapC , 
  
} from "./useAudioGraphImplCurrentDestNdRefCtxC";        
import * as audioFltAtAbsTNodes from "./useAudioNodesBasicUseBeep";      
import * as audioFrqAnlyAtAbsTNodes from "./useAudioNodesCrossmasking1";    
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
        
} = tCtxs ;         
const {
    CHalfSecndBeep1 , 
    CAmpSlideDown , 
  
} = (function () {     
    /**   
     * {@link tCtxs.currentTInfCtx.Consumer }
     *  */   
    const TC = (           
        tCtxs.currentTInfCtx.Consumer
    ) ;   
    return {
        CHalfSecndBeep1 : (                            
            function C1() {    
                return (            
                    <TC>
                        { ({ t }) => (
                            <>
                            <code>CH { t } </code>  
                            <CHalfSecndBeepAtAbsoluteT value={{ t: t, toneFreq: 418 }} />
                            </>
                        ) }
                    </TC>
                ) ;       
            }                        
        ) ,                   
        CAmpSlideDown  : (   
            function C1(...[{ children, ...mainProps }] : [
                (  
                    Omit<(
                        ComponentProps<typeof CAmpSlideDownAtAbsoluteT> 
                    ) , "t" > 
                ) ,        
            ]) {       
                return (                
                    <TC>
                        { ({ t }) => (        
                            <>       
                            <code>CH { t } </code>     
                            <K key={t} >   
                            <CAmpSlideDownAtAbsoluteT t={t } {...mainProps } >
                                { children }
                            </CAmpSlideDownAtAbsoluteT>    
                            </K>
                            </>
                        ) }    
                    </TC>
                ) ;        
            }
        ) ,
    } ;
})() ;   
const CFreqDmAnalyF = (   
    nonterminalUsageWrapC(audioFrqAnlyAtAbsTNodes.useAuTapOutputFreqDmAnalyFlt )
) ;
const CWhiteNoise = (
    terminalUsageWrapC(audioFltAtAbsTNodes.useWhiteNoise )
) ;            
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
                <CAmpModulated0 value={ctrlFnl} >
                    { children }
                </CAmpModulated0>
            ) ;
        }    
    ))
) ;  
const CWaveTable1 = (  
    modulatedWaveTableUsageWrapC(audioFltAtAbsTNodes.useOinModulatedWaveTable )
) ;
const CAmpModulated: (
    typeof CAmpModulated1 
) = (  
    CAmpModulated1   
) ;   
  

    








  
export {
    // FILTERING   
       
    CAmpModulated , 
    CAmpModulated1 ,               
    CAmpModulated0 ,    
    CAmpSlideDown ,       
    CBiquadFilterModulated ,  
    CFreqDmAnalyF ,   
   
    CHalfSecndBeepAtAbsoluteT ,    

    // 'T'               
        
    WithDelay ,     

    // TERMINAL/INTRINSIC       
    
    CHalfSecndBeep1 ,          
    CPersistingBeep ,                  
    CWaveTable1 ,  
    CWhiteNoise ,    
} ;                           