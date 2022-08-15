
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
           
} = tCtxs ;                  
const {
    CFnValue1 ,  
  
} = (function () {     
    /**   
     * {@link tCtxs.currentTInfCtx.Consumer }
     *  */    
    const TC = (           
        tCtxs.currentTInfCtx.Consumer
    ) ;       
    return {  
        CFnValue1 : (
            function ({ value: compute, ...otherProps0 } : Parameters<typeof CFnValueAtAbsoluteT >[0 ] ) {
                const {
                    codeDeps: higherLevelCodeDeps = [] ,  
                    ...
                    otherProps   
                } = otherProps0 ; 
                const renderSrcCodeView = (
                    () => (  
                        <code style={{ whiteSpace: "pre-wrap" }}> 
                            { String(compute ) }    
                        </code> 
                    )     
                ) ;
                ;      
                return (                   
                    <TC>     
                        { ({ t: originPtAbsoluteT, tScale }) => (                 
                            <>                
                            <code>CFnValue  </code>                 
                            { [      
                                null &&  
                                <span key={1} style={{ display: "block" }}>    
                                    at <i>absolute t</i> { originPtAbsoluteT }      
                                    value { JSON.stringify(compute({ ctxT: originPtAbsoluteT }) ) }   
                                </span>             ,   
                                null &&  
                                <span key={2} style={{ display: "block" }}>                 
                                    code :   
                                    { renderSrcCodeView() }     
                                </span>       ,                     
                            ] }                               
                            <CFnValueAtAbsoluteT       
                            value={({ ctxT: ctxTAbsolutely }) => {  
                                const ctxTRelativelyAfterScaled = (
                                    ctxTAbsolutely - originPtAbsoluteT  
                                );        
                                const ctxTRelatively = (  
                                    ctxTRelativelyAfterScaled
                                    /
                                    tScale         
                                ) ;               
                                return (
                                    compute({ ctxT: ctxTRelatively })
                                ) ;  
                            } }
                            codeDeps={[originPtAbsoluteT, ...higherLevelCodeDeps ]}       
                            { ...otherProps }    
                            />                   
                            </>   
                        ) }          
                    </TC>
                ) ;          
            }    
        ) ,     
    } ;
})() ;                  
const {
    CAmpSlideDown ,       
  
} = (function () {     
    /**   
     * {@link tCtxs.currentTInfCtx.Consumer }
     *  */    
    const TC = (           
        tCtxs.currentTInfCtx.Consumer
    ) ;       
    return {  
        CAmpSlideDown  : (   
            function CAmpSlideDownC(...[{ children, ...mainProps }] : [
                (  
                    Omit<(
                        ComponentProps<typeof CAmpSlideDownAtAbsoluteT> 
                    ) , "t" > 
                ) ,        
            ]) {        
                const remountOnScheduledAbsoluteTChg : boolean = false ;
                return (                 
                    <TC>
                        { ({ t: originAbsoluteT }) => (     
                            <>         
                            <code>CAmpSlideDown : { originAbsoluteT } </code>     
                            <K key={remountOnScheduledAbsoluteTChg ? originAbsoluteT : 0 } >   
                            <CAmpSlideDownAtAbsoluteT t={originAbsoluteT } {...mainProps } >
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
                <CAmpModulatedTimeDomain value={ctrlFnl} >
                    { children } 
                </CAmpModulatedTimeDomain>
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