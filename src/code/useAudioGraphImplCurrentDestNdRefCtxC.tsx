 
// utility imports                  
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue, OmitM } from "./generalUse11";  
import { ABandpassFreqArgInputRangeMode } from "./audioFltBandpassMetaRangeMode";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";        
import { K, asVoidElement, NUMERIC } from "./commonElements";             
import { CBC } from "./useStateInCallback";  
import { useRealTimeQueryInterval1 } from "./useNonHookValue";     
import { useDeferredTrue as useDeferredTrue0 } from "./usingDeferredBoolean";       
import { 
    useOneWayCheckBox , 
} from "./useCompletion";   
          
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
import * as audioFltAtAbsTNodes from "./useAudioNodesBasicFlt11";           
import { CFreqDmAnalyF1 } from "./useAudioNodesFreqDmAnalysisC";      
import { USEM } from "./useAudioNodesParamAutomativeAsRegularNodes";   
import { graphAfterNrmInterpretativeMode } from "./useAudioGraphAsBandFreqCtrlMode";   
import {
    SpecialUsageExplainer, 
    xWithUsableYyy ,   
    xWithUsableYyy1 ,   
} from "./useAudioGraphImplUsableYyyNodes1";        
import { 
    useConstantParamSrcNodeWithGivenFadeoutTimeConstant1 , 
      
} from "./useAudioNodesMounting11";  
import {  
    useElasUsageOnMount,
    useGainElas ,   
    useGainElasD ,     
    useConstantParamSrcElas ,          
    useConstantParamSrcElasD ,    

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
    evSingleArgumentTerminalNodeCPropsParse , 
     
} from "./useAudioGraphImplBasicFltAutomableProps";     
import {
    terminalUsageWrapC ,    
    nonterminalUsageWrapC , 
 
    AGCtxtualOutUsageProps ,           
    CTXTUALOUTPUTUSAGE_CBC , 
} from "./useAudioGraphImplCurrentDestNdRefCtxC1";
import { useAParamModulativeNode } from "./useAudioNodesParamAutomative1";  
import { 
    cFnValueCompImplSupport1 ,   

    CConstantValue , 
    CFnValue ,     
              
} from "./useAudioGraphImplFMathComponentsSupport1";    
import {    
    useUnexpectedZeroingBackCheck ,      
} from "./useAudioNodesParamAutomativeElas";   
import {   
    useDeferredTrue ,   
    useDeferredTrue1 as useDeferredTrueAlt ,             
  
    DbbOrHovered ,
    dBBC as dBBC0 , 

} from "./useAudioGraphImplUseDeferredBoolean";     
import { XDC } from "./useAudioGraphImplFComponentsSemanticsBasic";

         
 
  
                     
                          
              
                                
       
;        
const dBBC = dBBC0 ;
const UPM_SUPPORT = (
    function () {
        ;
        const {   
            TIMEDOMAIN_NORMALISED , 
            EFFECTIVE_INTENSITY_NORMALISED: RESULTING_MAGN_NORMALISED ,   
    
        } = ABandpassFreqArgInputRangeMode ;     
        const {            
            usePModulating ,                               
        } = (
            audioFltAtAbsTNodes           
        ) ;                 
        return {
            TIMEDOMAIN_NORMALISED , 
            RESULTING_MAGN_NORMALISED ,        

            usePModulating ,         
        } ;
    }
) ;      
// const DbbOrHovered = (   
//     function ({ dBB, children: c1 } : React.PropsWithChildren<{ dBB : boolean ; }> ) {
//         const [asHovered, markAsHovered] = (
//             useOneWayCheckBox()        
//         ) ;    
//         return (   
//             <div            
//             style={{ background: `rgba(0, 0, 0, 0.01 )` }}
//             onMouseMove={markAsHovered } 
//             onPointerMove={markAsHovered}                    
//             >         
//                 <div
//                 style={{ visibility: (dBB || asHovered ) ? undefined : "hidden" }}   
//                 >
//                 { c1 }       
//                 </div> 
//             </div>                   
//         ) ;
//     }
// );   
// const dBBC = (() => {
//     return (  
//         function (...[dBB , { dbgBox1, c1 }] : [ 
//             boolean,
//             { dbgBox1 : React.ReactElement ; c1: React.ReactElement ; } ,     
//         ]) {
//             ;
//             return (                
//                 <XDC>      
                         
//                 { dBB ? dbgBox1 : <></> }    
//                 <DbbOrHovered dBB={dBB } >
//                 { c1 }
//                 </DbbOrHovered>                   
//                 </XDC >      
//             ) ;                      
//         }
//     ) ;  
// })();         
const {} = {} ;
/**      
 * wrapper, for {@link useGainModulatedPt }    
 * - {@link CAmpSlideDownAtAbsoluteT }
 */  
const { 
    AmpSlideDownAtAbsoluteT: CAmpSlideDownAtAbsoluteT ,

    modulatedCOnstantSrcNdUsageWrapC ,     
    modulatedAmpUsageWrapC ,    
    modulatedBiquadFltUsageWrapC ,     
   
    modulatedWaveTableUsageWrapC ,    

    CParamAutomative ,       
      
} = ((...[config1 = {} ] : [     
    (
        {                     
            defkey ?: number ;  
                   
        }   
        &   
        {
             
            /**       
             *     
             * @see     
             * {@link JSX.IntrinsicElements }       
             * - {@link JSX.IntrinsicElements.ol `OL` } 
             * @see  
             * {@link React.detailed      }
             */            
            XList ?: ( 
                (keyof Pick<JSX.IntrinsicElements, "ol" | "ul"> )  
                |    
                React.FC<React.PropsWithChildren<{}> >    
                | 
                (typeof React.Fragment)     
            ) ;              
               
        }     
    ) ? ,               
] ) => {                                 
    const {      
        defkey = Math.random() , 
        XList = "ul"  ,            

    } = config1 ;
    type CtxtualOutUsageProps = (    
        AGCtxtualOutUsageProps
    ) ;       
    function newCPropsRenderComponent <CProps>({ 
        dbgBox1 ,      
        useC1P ,             
    } : (
        {         
            dbgBox1 : React.ReactElement ;       
            useC1P : (
                (mainProps : CProps, nd0 : CtxtualOutUsageProps["feedPt"] )
                => { c1 : React.ReactElement ; }
            ) ;   
        }
    )) {
        return (                     
            IterableOps.identity<(                   
                React.FC<(                
                    CProps         
                )>                                 
            ) >(function CFilteredC(mainProps ) {     
                const useC11 = (     
                    function ({ feedPt: nd0 } : (     
                        CtxtualOutUsageProps    
                    ) ): React.ReactElement {                                  
                        ;    
                        const dBB = useDeferredTrue() ;           
                        const { c1 } = (
                            useC1P(mainProps, nd0 )
                        ) ;     
                        // TODO        
                        return (        
                            dBBC(dBB, { dbgBox1, c1 })  
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
                            if (0 ) { 
                                console.log(useGainElasSpcl.name, { value, d });
                            }               
                        }, [value, d ]) ;  
                        (function use3(e : false | true ) {    
                            const r1 = React.useRef<number>(0 ) ;      
                            const { UZM_CHECK } = (
                                useUnexpectedZeroingBackCheck()    
                            ) ;                   
                            e && (                    
                                UZM_CHECK({  
                                    presentlyValue : r1.current ,      
                                    newValue : (
                                        // eslint-disable-next-line 
                                        r1.current = value    
                                    ) ,  
                                })        
                            ) ;             
                            ;                   
                        } )(false ) ;             
                        React.useLayoutEffect((() => { 
                            if (0 ) {            
                                ;  
                                if (nd0 ) {   
                                    ;
                                    console.log({ nd0  , swingTConstant , value, t, d ,   }) ;      
                                }          
                            }    
                        }) , [nd0 , t , value ]) ;   
                        const nd1 = (                   
                            useGainElasD(nd0, {         
                                swingTConstant : swingTConstant, 
                                value: value ,
                                scheduledT : t + d ,  
                            } , {   } )     
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
                    function CWithAmpSlideDown ({ t, swingTConst = 2 ** -2 , children }) {               
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
                    ) >(function CWithAmpAutom ({ value: ctrlChildren, children }) {    
                        const useC11 = (   
                            function ({ feedPt: nd0 } : (   
                                CtxtualOutUsageProps            
                            ) ): React.ReactElement {                            
                                ;                    
                                const dBB = useDeferredTrue() ;                    
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
                                    dBBC(dBB, { dbgBox1, c1 })           
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
                               
        ...((...[             
            config11 = {}  ,      
        ] : [                        
            {                   
                paramsOmissiveDebug ?: false | string ;  
            } ? ,                 
        ] ) => {             
            const {
                paramsOmissiveDebug = false , // TODO back to 'false'                 
            } = config11 ;                
            const POD = (    
                (...[e, topic = "" ]:[ e: React.ReactElement, topic ?: "" | "b" | "W" ] ) => (      
                    (paramsOmissiveDebug && (0 <= (paramsOmissiveDebug + "=").indexOf(topic || "=" ) ) ) 
                    ? 
                    <></> : e             
                )            
            ) ;   
            const RETURN = {    
                // TODO                             
                modulatedCOnstantSrcNdUsageWrapC : (            
                    // TODO             
                    function <Props1>(...mainArgs : (       
                        [
                            (typeof audioFltAtAbsTNodes)["useCModulatedPt"] ,  
                            {
                                propsParse : (       
                                    (...args : [
                                        Parameters<typeof evSingleArgumentTerminalNodeCPropsParse >[0] ,  
                                    ] )
                                    =>     
                                    Pick<(
                                        ReturnType<typeof evSingleArgumentTerminalNodeCPropsParse > 
                                    ) , "valueCtrl">    
                                ) ;    
                            } ? ,        
                        ]   
                    ) ) {                   
                        const [  , { propsParse } = { propsParse: (p : Parameters<typeof evSingleArgumentTerminalNodeCPropsParse>[0] ) => evSingleArgumentTerminalNodeCPropsParse(p) } ] = (
                            mainArgs               
                        );           
                        const [useYyy ,  ] = (
                            mainArgs        
                        );               
                        const {            
                            dbgBox1 ,          
                            useC1 ,                  
                                   
                        } = xWithUsableYyy({ useYyy }) ;     
                        return (         
                            newCPropsRenderComponent            
                        )<Parameters<typeof propsParse >[0 ] >({
     
                            dbgBox1 ,    
    
                            useC1P  : (  
                                function useC1P(      
                                    mainProps  , nd0  ,      
                                ) {          
                                    ;            
                                    const {          
                                        valueCtrl : gainValArgument1 ,      

                                    } = (        
                                        // TODO  
                                        React.useDeferredValue((
                                            propsParse(mainProps )    
                                        ))                    
                                    ) ;                     
                                    const {                        
                                        valCtrl : gainCtrlDest1 ,                           
                                    } = (           
                                        useC1(nd0 )  
                                    ) ;     
                                    const c1 = (                        
                                        // TODO     
                                        <XList >                  
                                        { gainCtrlDest1 && (    
                                            <li key="value">        
                                                Value Ctrl Mode :      
                                                <WithGivenDest value={ gainCtrlDest1 }>  
                                                    { POD(gainValArgument1) }
                                                </WithGivenDest>                         
                                            </li>         
                                        )           }     
                                        </XList >           
                                    ) ;             
                                    return {  
                                        c1 ,   
                                    } ;               
                                }  
                            ) , 

                        }) ;                                    
                    }             
                ) ,                                 
                modulatedBiquadFltUsageWrapC : (            
                    // TODO                   
                    function <Props1>(...mainArgs : (
                        [
                            (typeof audioFltAtAbsTNodes)["useBqFltPtModulated"] ,  
                            {
                                propsParse : typeof biquadFltCPropsParse ;   
                            } ? ,   
                        ]  
                    ) ) {                  
                        const [  , { propsParse } = { propsParse: biquadFltCPropsParse } ] = (
                            mainArgs       
                        );                 
                        const [useYyy ,  ] = (
                            mainArgs        
                        );              
                        const {     
                            dbgBox1 ,    
                            useC1 ,              
                                
                        } = xWithUsableYyy({ useYyy }) ;    
                        return (        
                            newCPropsRenderComponent            
                        )<Parameters<typeof propsParse >[0 ] >({
    
                            dbgBox1 ,    

                            useC1P  : (  
                                function useC1P(       
                                    mainProps  , nd0  ,     
                                ) {
                                    ;        
                                    const {
                                        flType ,      
                                        freqArgGraph1 ,   
                                        gainValArgument1 ,  
    
                                        children ,         
                                    } = (    
                                        // TODO
                                        React.useDeferredValue((
                                            propsParse(mainProps )    
                                        ))      
                                    ) ;                  
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
                                                    { POD(freqArgGraph1, "b") }
                                                </WithGivenDest>      
                                            </li>      
                                        )  }                              
                                        { gainCtrlDest1 && (    
                                            <li key="gain">                  
                                                Gain Value Ctrl Mode :      
                                                <WithGivenDest value={ gainCtrlDest1 }>
                                                    { POD(gainValArgument1, "b" ) }
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
                                    return {
                                        c1 ,     
                                    } ;        
                                }  
                            ) , 

                        }) ;                                    
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
                            ) >(function CWaveTableModulatedX(mainProps ) {          
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
                                        const dBB = useDeferredTrue() ;                   
                                        const {                                   
                                            frequency : freqArgDest1 ,       
                                            detune : detuneCtrlDest1 , // TODO                                   
                                        } = (          
                                            useC1(nd0, )  
                                        ) ;           
                                        const c1 = (                         
                                            // TODO      
                                            <K key={defkey }>   
                                            <p> DEFKEY: {defkey } </p>
                                            <XList>      
                                            { freqArgDest1 && (        
                                                <li key="freq">                    
                                                    Freq :      
                                                    <WithGivenDest value={ freqArgDest1 }>
                                                        { POD(freqArgGraph1 , "W" ) }
                                                    </WithGivenDest>           
                                                </li>        
                                            )  }                        
                                            { detuneCtrlDest1 && (                
                                                <li key="detune">                             
                                                    Detune :               
                                                    <WithGivenDest value={ detuneCtrlDest1 }>
                                                        { POD(detuneGraph1 , "W" ) }
                                                    </WithGivenDest>        
                                                </li>      
                                            )  }            
                                            </XList>      
                                            </K>    
                                        ) ;          
                                        // TODO  
                                        return (     
                                            dBBC(dBB, { dbgBox1, c1 })    
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
                        function CParamAutomatingC (mainProps) {  
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
//   
const CConstantValueModulated = (     
    modulatedCOnstantSrcNdUsageWrapC(audioFltAtAbsTNodes.useCModulatedPt )
) ;                 
// const {          
//     CConstantValue ,   
//     CFnValue ,                              
    
// } = (() => {  
//     /**            
//      * 
//      * @see  
//      * import  :          
//      * {@link cFnValueCompImplSupport1 }       
//      */            
//     const { 
//         renderConstantParamSrcElas1 ,     
//         useRealTimeQueryInterval1X ,  
//     } = (  
//         cFnValueCompImplSupport1
//     ) ;   
//     /**            
//      * 
//      * @see  
//      * import  :          
//      * {@link CTXTUALOUTPUTUSAGE_CBC }     
//      * {@link CConstantValue }  
//      * {@link useConstantParamSrcNodeWithGivenFadeoutTimeConstant1 }
//      */         
//     const cFnValueImpl1 = (     
//         function (...[{ compute }] : [ 
//             {
//                 compute : (            
//                     (...args : [{ ctxT : number ; }] )   
//                     => 
//                     (number | { value : number ; } )   
//                 ) ,   
//             } ,         
//         ] ) {
//             ;  
//             /**   
//              *  
//              * @see     
//              * import  :     
//              * none   
//              */     
//             const C11 = (
//                 function useFn1(...[nd0] : [dest : AudioNode | null ] ) : { 
//                     t2 : number ;  
//                     vl : number ;                         
//                 }  {                      
//                     type R0 = ReturnType<typeof useFn1 > ;   
//                     return (
//                         useRealTimeQueryInterval1X({        
//                             f : () : R0  => {       
//                                 ;                   
//                                 if (nd0 ) {                               
//                                     const t1 = (   
//                                         nd0.context.currentTime        
//                                     ) ; 
//                                     const t2 = (  
//                                         // +t1.toFixed(1 )           
//                                         t1                     
//                                     ) ;         
//                                     const vl0 = compute({ ctxT: t2 }) ;
//                                     const { value: vl } = (            
//                                         (typeof vl0 === "number" ? { value : vl0 } : vl0 )
//                                     ) ;
//                                     return { t2 , vl } ;         
//                                 } else {   
//                                     return { t2 : -1, vl: 0 } ;                               
//                                 }                 
//                             } , 
//                             LE : "useLayoutEffect" ,  
//                         } , 0.06 * 1000  ) 
//                     ) ;
//                 }        
//             );               
//             /**   
//              * 
//              * @see  
//              * import  : 
//              * {@link useConstantParamSrcNodeWithGivenFadeoutTimeConstant1 }         
//              * {@link CTXTUALOUTPUTUSAGE_CBC }   
//              */          
//             const e = ((mode : 1 | 2) => {        
//                 const swingTConst = ( 
//                     2 ** -6      
//                 ) ;   
//                 if (mode === 2 ) {   
//                     ;            
//                     return (                       
//                         <CTXTUALOUTPUTUSAGE_CBC>   
//                             { function useC11({ feedPt : nd0 }) { 
//                                 const {              
//                                     t2 ,      
//                                     vl ,  
//                                 } = ( C11 )(nd0 ) ;      
//                                 const nd1 = (
//                                     useConstantParamSrcNodeWithGivenFadeoutTimeConstant1(nd0, 0.5 )   
//                                 ) ;       
//                                 React.useLayoutEffect(() => {
//                                     ;        
//                                     if (nd1 ) {        
//                                         ;             
//                                         (       
//                                             nd1.offset  
//                                             .setTargetAtTime(vl, nd1.context.currentTime , swingTConst )
//                                         ) ;     
//                                     } 
//                                 } , [nd1, vl ]) ;
//                                 // TODO                             
//                                 return (   
//                                     <p>
//                                         directly using   
//                                         <code>{ useConstantParamSrcNodeWithGivenFadeoutTimeConstant1.name }</code>
//                                     </p>
//                                 ) ;       
//                             } }      
//                         </CTXTUALOUTPUTUSAGE_CBC>         
//                     ) ;    
//                 }    
//                 /**   
//                  * 
//                  * @see  
//                  * import  :          
//                  * {@link CTXTUALOUTPUTUSAGE_CBC }     
//                  * {@link CConstantValue }
//                  */          
//                 return (                       
//                     <CTXTUALOUTPUTUSAGE_CBC>   
//                         { function useC11({ feedPt : nd0 }) { 
//                             const {              
//                                 t2 ,       
//                                 vl ,            
//                             } = ( C11 )(nd0 ) ;       
//                             // TODO                           
//                             return (            
//                                 <CConstantValue    
//                                 value={vl }                     
//                                 swingTConstant={swingTConst }
//                                 />  
//                             ) ;      
//                         } }           
//                     </CTXTUALOUTPUTUSAGE_CBC>               
//                 ) ;     
//             })( 1 ) ;  
//             return {
//                 C11 , 
//                 e ,            
//             } ;
//         }
//     ) ;      
//     return {    
//         CConstantValue : (     
//             function CConstantValueC ( props1 : (            
//                 NonNullable<(
//                     Parameters<typeof renderConstantParamSrcElas1 >[0 ]
//                 )>          
//             )) {                  
//                 const { value } = props1 ;    
//                 // TODO   
//                 ;                          
//                 const e = (    
//                     renderConstantParamSrcElas1(props1, { putInitailValue : 1 } )           
//                 ) ; 
//                 const dbg = (    
//                     <p>      
//                         Constant Value --      
//                         <NUMERIC>{ value }</NUMERIC>   
//                         (T-const specified : { props1.swingTConstant } )
//                     </p>     
//                 ) ;     
//                 const dBB = useDeferredTrue() ;  
//                 return (               
//                     // <XDC >                        
//                     //     { dBB ? dbg : <></> } 
//                     //     {e }
//                     // </XDC >  
//                     dBBC(dBB, { dbgBox1: dbg, c1: e })  
//                 ) ; 
//             }         
//         ) ,      
      
//         CFnValue : (        
//             function CFncValueC({ value: compute } : {
//                 value : (             
//                     Parameters<typeof cFnValueImpl1 >[0]["compute"]
//                 ) ;           
//             } ) {     
//                 ;              
//                 const {
//                     e ,    
//                 } = (
//                     cFnValueImpl1({ compute })
//                 ) ;
//                 ;              
//                 const dbg = (      
//                     <p> 
//                     </p>     
//                 ) ;     
//                 const dBB = useDeferredTrue() ;    
//                 return (   
//                     // <XDC >        
//                     //     { dBB ? dbg : <></> }
//                     //     {e }
//                     // </XDC >  
//                     dBBC(dBB, { dbgBox1: dbg, c1: e })  
//                 ) ;              
//             }
//         )
//     } ;
// })() ;    
const [] = [] ;
               
                            
    

       
   

  



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
 
    CConstantValueModulated ,   
    CConstantValue ,  
    CFnValue ,      
    CHalfSecndBeepAtAbsoluteT as CHalfSecndBeepAtAbsoluteT ,   
    CPersistingBeep ,     
    
} ;   
               