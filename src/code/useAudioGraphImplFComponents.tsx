
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
import {
    Consm as WithCurrentDestNdRef , 
    useWithCurrentSideTapPtRef , 

} from "./useAudioGraphImplCurrentDestNdRefCtx";    
import * as audioFltAtAbsTNodes from "./useAudioNodesBasicUseBeep";      
import * as audioFrqAnlyAtAbsTNodes from "./useAudioNodesCrossmasking1";     
import { CFreqDmAnalyF } from "./useAudioGraphImplFComponentsAnalyticalF";   
import { WithAutoUnmount } from "./useAudioGraphImplFComponentsSlapCompAutoUnmounting";   








  

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
    LoopingWithPeriod : LoopingWithPeriodImpl ,   
    
    WithCurrentTInfo: WithCurrentScheduledTInfo ,    
           
} = tCtxs ;                      
const LoopingWithPeriod = (    
    function ({ 
        children: item  , 
        autoUnmountMode = AudioTrackConcatClippingMode.BOTH_ENDS_DROPPED ,   
        ...
        props1   
    } : (          
        ComponentProps<typeof LoopingWithPeriodImpl>     
        &              
        { 
            autoUnmountMode ?: AudioTrackConcatClippingMode ;
        }
    ) ) {   
        const { value: { period } } = props1 ;               
        const itemAfterAutoUnmounting = (  
            <WithAutoUnmount
            {...{     
                preFT: (  
                    (
                        (avTrackConcatShallPropagate(autoUnmountMode, 0 ) || OmitOrPropagate.OMIT )
                        === 
                        OmitOrPropagate.PROPAGATE   
                    ) ?      
                    // TODO
                    100 : 0.2        
                ) ,    
                postFT: (      
                    (
                        (avTrackConcatShallPropagate(autoUnmountMode, 1 ) || OmitOrPropagate.OMIT )
                        === 
                        OmitOrPropagate.PROPAGATE   
                    ) ?          
                    // value should be at-least `preFT`
                    30000 : 0.2 
                ) ,  
            } }       
            >    
                { item }
            </WithAutoUnmount>         
        ) ;
        return (
            useWithCurrentSideTapPtRef(({ feedPt: nd0 }) => {     
                if (nd0 ) {
                    const outputCtxT = nd0.context.currentTime ;       
                    ;                
                    return (                                     
                        <LoopingWithPeriodImpl {...props1 } >    
                            { itemAfterAutoUnmounting  }
                        </LoopingWithPeriodImpl>     
                    ) ;     
                }
                // TODO
                return <></> ;  
            })
        ) ;
    }     
) ;
const {
    CHalfSecndBeep1 ,   
    CAmpSlideDown ,      
    CFnValue1 ,  
  
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
                        { ({ t: schedT }) => (                 
                            <>                
                            <code>CFnValue  </code>                 
                            { [      
                                null &&  
                                <span key={1} style={{ display: "block" }}>    
                                    at <i>absolute t</i> { schedT }      
                                    value { JSON.stringify(compute({ ctxT: schedT }) ) }   
                                </span>             ,   
                                null &&  
                                <span key={2} style={{ display: "block" }}>           
                                    code :   
                                    { renderSrcCodeView() }     
                                </span>       ,           
                            ] }           
                            <CFnValueAtAbsoluteT 
                            value={({ ctxT: ctxTAbsolutely }) => compute({ ctxT: -schedT + ctxTAbsolutely }) }
                            codeDeps={[schedT, ...higherLevelCodeDeps ]}       
                            { ...otherProps }    
                            />                   
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
  

    








  
export {
    
    // MODIFYING   
       
    // LOOPING            
    LoopingWithPeriod ,    

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
    CHalfSecndBeep1 ,          
    CPersistingBeep ,                                 
    CWaveTable1 ,  
    CConstantValueModulated ,  
    CConstantValue ,  
    CFnValue1 , 
    CWhiteNoise ,    
} ;                       
export * from "./useAudioGraphImplFComponentsSlapDrumKit1";             