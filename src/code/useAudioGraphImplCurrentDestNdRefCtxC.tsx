 
// utility imports                  
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue, OmitM } from "./generalUse11";  
import { ABandpassFreqArgInputRangeMode } from "./audioFltBandpassMetaRangeMode";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";        
import { K, asVoidElement } from "./commonElements";      
import { CBC } from "./useStateInCallback";  
 
// 
import { 
    WithGivenDest ,  
    Prv1 ,        
    Consm as WithCtxtualOut , 

} from "./useAudioGraphImplCurrentDestNdRefCtx";      
import { usePersistingBeep, YyyUsable } from "./useAudioNodesBasicFlt1";        
import {                   
    useHalfSecondBeep as useHalfSecondBeepAtAbsoluteT  ,
               
} from "./useAudioNodesBasicUseBeep"; 
import * as audioFltAtAbsTNodes from "./useAudioNodesBasicUseBeep";           
import { CFreqDmAnalyF1 } from "./useAudioNodesFreqDmAnalysisC";      
import { USEM } from "./useAudioNodesParamAutomativeAsRegularNodes";   
import { graphAfterNrmInterpretativeMode } from "./useAudioGraphAsBandFreqCtrlMode";   
import {
    SpecialUsageExplainer, 
    xWithUsableYyy , 
    xWithUsableYyy1 ,   
} from "./useAudioGraphImplUsableYyyNodes1"; 
import { 
    useElasUsageOnMount,
    useGainElas , 

} from "./useAudioNodesBasicFixedElas";  
import {
    // XWithInterpretation ,    
   
    FreqArgsProps , 
    DetuningProps ,  
    GainValArgsProps ,
    GainValArgsProps1 ,   
    QFactualProps , 
} from "./useAudioGraphImplBiquadFltPropsTyping";
import { 
    automativeInputRangeDefaultMode , 

    BiquadFltCProps , 
    biquadFltCPropsParse , 
    WaveTableNodeProps , 
    waveTableCPropsShallParse , 
    ParamAutomativeNodeCProps , 
    evParamAutomativeNodeCPropsParse , 
     
} from "./useAudioGraphImplBasicFltAutomableProps";    
import {
    terminalUsageWrapC ,    
    nonterminalUsageWrapC , 

    AGCtxtualOutUsageProps ,         
    CTXTUALOUTPUTUSAGE_CBC , 
} from "./useAudioGraphImplCurrentDestNdRefCtxC1";
import { useAParamModulativeNode } from "./useAudioNodesParamAutomative1";  

         
 
  
    
                   
              
                    
 
/**    
 * wrapper, for {@link useGainModulatedPt }   
 * - {@link CAmpSlideDownAtAbsoluteT }
 */
const {
    AmpSlideDownAtAbsoluteT: CAmpSlideDownAtAbsoluteT ,

    modulatedAmpUsageWrapC ,  
    modulatedBiquadFltUsageWrapC ,  

    modulatedWaveTableUsageWrapC ,    

    CParamAutomative ,    
    
} = (() => {     
    const {   
        TIMEDOMAIN_NORMALISED , 
        EFFECTIVE_INTENSITY_NORMALISED: RESULTING_MAGN_NORMALISED ,   

    } = ABandpassFreqArgInputRangeMode ;   
    const {            
        usePModulating ,                               
    } = (
        audioFltAtAbsTNodes           
    ) ;                      
    type CtxtualOutUsageProps = (    
        AGCtxtualOutUsageProps
    ) ;  
    /**    
     * 
     * @see     
     * {@link JSX.IntrinsicElements }       
     * - {@link JSX.IntrinsicElements.ol `OL` } 
     * @see  
     * {@link React.detailed      }
     */
    const XList : (
        (keyof Pick<JSX.IntrinsicElements, "ol" | "ul"> ) 
        | 
        React.FC<React.PropsWithChildren<{}> >    
        | 
        (typeof React.Fragment)
    ) = (
        "ul" as ("ol" | "ul" | React.FC<React.PropsWithChildren<{}> > )
    ) ;
    return {          
        AmpSlideDownAtAbsoluteT : (() => {  
            /**    
             * {@link useGainElas }
             */
            type UGE_PROPS = (          
                Parameters<typeof useGainElas>[1 ]        
            ) ;
            /**      
             * ad-hoc specialisation of {@link useGainElas }
             */
            const useGainElasSpcl = (() => {                    
                type Props0 = ( 
                    UGE_PROPS      
                ) ;         
                return (            
                    function useSpcl (...[nd0 , { scheduledT: t, swingTConstant } ] : [ 
                        AudioNode | null ,                
                        (        
                            Required<(       
                                Pick<Props0, "swingTConstant">      
                                &
                                Record<keyof (   
                                    Pick<Props0, "scheduledT" >  
                                ) , number >    
                            )> & Partial<(    
                                Pick<Props0, never >
                            ) >     
                        ) ,   
                    ]) {
                        ;               
                        const {
                            value  , 
                            d ,    
                        } = (
                            useElasUsageOnMount({ v0: 1, v1: 2 ** -40 })  
                        ) ;    
                        React.useLayoutEffect(() => {
                            if (1) { 
                                console.log(useGainElasSpcl.name, { value, d });
                            }       
                        }, [value, d ]) ;
                        const nd1 = (                
                            useGainElas(nd0, {    
                                swingTConstant : swingTConstant, 
                                value: value ,
                                scheduledT : t + d ,  
                            })     
                        ) ;                  
                        return nd1 ;
                    }      
                ) ;    
            })() ;            
            type Props = (   
                React.PropsWithChildren<{  
                    t: number ;                 
                    swingTConst ?: number ;           
                }>        
            ) ;        
            ;         
            return (  
                // TODO    
                IterableOps.identity<(              
                    React.FC<Props >       
                ) >((
                    function ({ t, swingTConst = 2 ** -2 , children }) {               
                        ;        
                        const useC11 = (       
                            function (...[{ feedPt: nd0 }] : [
                                (       
                                    CtxtualOutUsageProps                    
                                ) ,     
                            ] ): React.ReactElement {         
                                const nd1 = (                        
                                    useGainElasSpcl(nd0, {   
                                        scheduledT : t ,  
                                        swingTConstant : swingTConst , 
                                    })          
                                ) ;           
                                const mainFeed = nd1 ;      
                                // TODO        
                                return (
                                    <WithGivenDest value={ mainFeed }>
                                        { children }     
                                    </WithGivenDest>                 
                                ) ;          
                            }         
                        ) ;                                
                        return (        
                            <CTXTUALOUTPUTUSAGE_CBC>
                                { useC11 } 
                            </CTXTUALOUTPUTUSAGE_CBC>    
                        ) ;                     
                    }
                ))   
            ) ;    
        })() , 
             
        modulatedAmpUsageWrapC : (           
            // TODO       
            function <Props1>(useYyy: (typeof audioFltAtAbsTNodes)["useGainModulatedPt"] ) {   
                const {
                    dbgBox1 , 
                    useC1 ,  
                    
                } = xWithUsableYyy({ useYyy }) ;
                type Props = {       
                    /**         
                     * defines the control graph ; `null` for 'mute' . 
                     * as opposed to `children` which would defines the main/primary graph.  
                     */      
                    value: React.ReactElement | null ;  
                } ;                 
                return (      
                    IterableOps.identity<(              
                        React.FC<(                 
                            React.PropsWithChildren<Props >     
                        )>              
                    ) >(function ({ value: ctrlChildren, children }) {    
                        const useC11 = (
                            function ({ feedPt: nd0 } : (   
                                CtxtualOutUsageProps     
                            ) ): React.ReactElement {                            
                                ;                                        
                                const {     
                                    main: mainFeed ,  
                                    ampCtrl : ampCtrl1 ,                    
                                } = (       
                                    useC1(nd0 ) 
                                ) ;
                                const c1 = (         
                                    // TODO                   
                                    <XList>         
                                    <li key="value">          
                                        Modulating Graph  :      
                                        <WithGivenDest value={ ampCtrl1 }>
                                            { ctrlChildren }
                                        </WithGivenDest>                     
                                    </li>     
                                    <li key="main">             
                                           
                                        Main :  
                                        <WithGivenDest value={ mainFeed }>
                                            { children }
                                        </WithGivenDest>           
                                    </li>
                                    </XList>       
                                ) ;               
                                // TODO 
                                return (                    
                                    <div style={{ display: "flex", flexDirection: "column" }} >      
                                     
                                    { dbgBox1 }  
                                    { c1 }   
                                    </div >         
                                ) ;          
                            }         
                        );                                       
                        return (           
                            <CTXTUALOUTPUTUSAGE_CBC>
                                { useC11 } 
                            </CTXTUALOUTPUTUSAGE_CBC>    
                        ) ;                     
                    }) 
                ) ;                                 
            }               
        ) ,                              
                           
        ...(() => {   
            const RETURN = {                         
                modulatedBiquadFltUsageWrapC : (            
                    // TODO       
                    function <Props1>(useYyy: (typeof audioFltAtAbsTNodes)["useBqFltPtModulated"] ) {    
                        const {
                            dbgBox1 , 
                            useC1 ,             
                            
                        } = xWithUsableYyy({ useYyy }) ;            
                        return (                     
                            IterableOps.identity<(                
                                React.FC<(                               
                                    BiquadFltCProps  
                                )>                   
                            ) >(function (mainProps ) {    
                                const {
                                    flType ,  
                                    freqArgGraph1 ,  
                                    gainValArgument1 ,  

                                    children ,        
                                } = biquadFltCPropsParse(mainProps ) ;
                                const useC11 = (    
                                    function ({ feedPt: nd0 } : (     
                                        CtxtualOutUsageProps    
                                    ) ): React.ReactElement {                               
                                        ;                 
                                        const {                        
                                            main: mainFeed ,                 
                                            mFrequencyValue : freqArgCtrlDest1 ,         
                                            mGainValue : gainCtrlDest1 ,                        
                                        } = (          
                                            useC1(nd0, flType ) 
                                        ) ;    
                                        const c1 = (                      
                                            // TODO      
                                            <XList >      
                                            { freqArgCtrlDest1 && (       
                                                <li key="freq">                   
                                                    Freq Ctrl Mode :      
                                                    <WithGivenDest value={ freqArgCtrlDest1 }>
                                                        { freqArgGraph1 }
                                                    </WithGivenDest>      
                                                </li>      
                                            )  }                            
                                            { gainCtrlDest1 && ( 
                                                <li key="gain">        
                                                    Gain Value Ctrl Mode :      
                                                    <WithGivenDest value={ gainCtrlDest1 }>
                                                        { gainValArgument1 }
                                                    </WithGivenDest>                    
                                                </li>         
                                            )           }  
                                            <li key="main">    
                                                   
                                                Main :  
                                                <WithGivenDest value={ mainFeed }>
                                                    { children }
                                                </WithGivenDest>         
                                            </li>
                                            </XList >           
                                        ) ;          
                                        // TODO 
                                        return (                
                                            <div style={{ display: "flex", flexDirection: "column" }} >      
                                            
                                            { dbgBox1 }
                                            { c1 }  
                                            </div >      
                                        ) ;         
                                    }         
                                );                                  
                                return (        
                                    <CTXTUALOUTPUTUSAGE_CBC>
                                        { useC11 }
                                    </CTXTUALOUTPUTUSAGE_CBC>         
                                ) ;          
                            })
                        ) ;                                 
                    }          
                ) ,       
                                      
                modulatedWaveTableUsageWrapC : (                
                    // TODO         
                    function <Props1>(useYyy: (typeof audioFltAtAbsTNodes)["useOinModulatedWaveTable"] ) {    
                        const {
                            dbgBox1 ,       
                            useC1 ,    
                            
                        } = xWithUsableYyy({ useYyy }) ;      
                        return (            
                            IterableOps.identity<(              
                                React.FC<(                       
                                    WaveTableNodeProps           
                                )>                    
                            ) >(function (mainProps ) {         
                                const {  
                                    freqArgGraph1 ,         
                                    detuneGraph1 ,    
 
                                }  = waveTableCPropsShallParse(mainProps ) ;             
                                // TODO
                                const useC11 = (    
                                    function ({ feedPt: nd0 } : (       
                                        CtxtualOutUsageProps               
                                    ) ): React.ReactElement {                                
                                        ;                    
                                        const {                                   
                                            frequency : freqArgDest1 ,       
                                            detune : detuneCtrlDest1 , // TODO                                   
                                        } = (          
                                            useC1(nd0, )  
                                        ) ;          
                                        const c1 = (                      
                                            // TODO   
                                            <XList>      
                                            { freqArgDest1 && (        
                                                <li key="freq">                   
                                                    Freq :      
                                                    <WithGivenDest value={ freqArgDest1 }>
                                                        { freqArgGraph1 }
                                                    </WithGivenDest>      
                                                </li>      
                                            )  }                      
                                            { detuneCtrlDest1 && (                
                                                <li key="detune">                             
                                                    Detune :      
                                                    <WithGivenDest value={ detuneCtrlDest1 }>
                                                        { detuneGraph1 }
                                                    </WithGivenDest>      
                                                </li>      
                                            )  }            
                                            </XList>      
                                        ) ;          
                                        // TODO 
                                        return (                
                                            <div style={{ display: "flex", flexDirection: "column" }} >      
                                            
                                            { dbgBox1 }
                                            { c1 }
                                            </div >      
                                        ) ;         
                                    }         
                                );                                       
                                return (        
                                    <CTXTUALOUTPUTUSAGE_CBC>
                                        { useC11 }   
                                    </CTXTUALOUTPUTUSAGE_CBC>    
                                ) ;                   
                            })
                        ) ;                                 
                    }             
                ) ,      
                
                CParamAutomative : (           
                    IterableOps.identity<(                 
                        React.FC<(                       
                            ParamAutomativeNodeCProps              
                        )>                     
                    ) >((
                        // TODO 
                        function (mainProps) {  
                            const {
                                valueCtrl: children ,      
                                target : mainFeed0 ,            
                            } = (
                                evParamAutomativeNodeCPropsParse(mainProps ) 
                            ) ;
                            const dbgBox1 = <></> ;  
                            const useC11 = (
                                function ({ feedPt: nd0 } : (       
                                    CtxtualOutUsageProps               
                                ) ): React.ReactElement {
                                    const c = (
                                        nd0?.context      
                                        || null  
                                    ) ; 
                                    const mainFeed = (
                                        useAParamModulativeNode(mainFeed0, c )
                                    ) ;
                                    ;
                                    // TODO   
                                    return (
                                        <div>  
                                        Main :  
                                        <WithGivenDest value={ mainFeed }>
                                            { children }
                                        </WithGivenDest>       
                                        </div>
                                    ) ;    
                                }     
                            ) ;
                            ;                                          
                            return (        
                                <CTXTUALOUTPUTUSAGE_CBC>
                                    { useC11 }   
                                </CTXTUALOUTPUTUSAGE_CBC>    
                            ) ;                    
                        }
                    )) 
                ) ,
            } as const ;   
            return RETURN ;
        })() ,
    } ;   
})() ;      
/**        
 * DO NOT USE THIS AT HIGH-LEVEL LAYER ; 
 * THIS RENDERER DOES NOT HONOUR `currentScheduletT`       
 *  
 */  
const CHalfSecndBeepAtAbsoluteT = (() => { 
    return (         
        asVoidElement ((
            terminalUsageWrapC(useHalfSecondBeepAtAbsoluteT )   
        ) )   
    ) ;      
})() ;      
/**    
 *       
 * alternatives : 
 * - (in `FComponents` )
 */     
const CPersistingBeep = (() => { 
    return (         
        asVoidElement ((    
            terminalUsageWrapC(usePersistingBeep )   
        ) )   
    ) ;      
})() ;           
/**           
 * the interpretation will                
 * treat it as a `t -> offset` graph and then simply modulate `gain` to be `presently offset` .
 *                         
 * @see      
 * this Component 
 * is just a minimal wrapper over {@link audioFltAtAbsTNodes.useGainModulatedPt } .
 */
const CAmpModulated = (
    modulatedAmpUsageWrapC(audioFltAtAbsTNodes.useGainModulatedPt )
) ;   
const CBuquadFilterModulated = (     
    modulatedBiquadFltUsageWrapC(audioFltAtAbsTNodes.useBqFltPtModulated )
) ;

                        


       






export {
    WithCtxtualOut as Consm , 
    WithGivenDest ,                
    
    CParamAutomative ,         

    CAmpSlideDownAtAbsoluteT ,    
    CAmpModulated ,  
    CBuquadFilterModulated ,      
    CBuquadFilterModulated as CBiquadFilterModulated ,        
    terminalUsageWrapC ,      
    nonterminalUsageWrapC ,         
    modulatedAmpUsageWrapC ,       
    modulatedBiquadFltUsageWrapC ,  
    modulatedWaveTableUsageWrapC ,       

    CHalfSecndBeepAtAbsoluteT as CHalfSecndBeepAtAbsoluteT ,   
    CPersistingBeep ,     
    
} ;   
              