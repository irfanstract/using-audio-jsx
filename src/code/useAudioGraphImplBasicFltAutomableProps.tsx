 
// utility imports          
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue } from "./generalUse11";  
import { ABandpassFreqArgInputRangeMode } from "./audioFltBandpassMetaRangeMode";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";     
import { K } from "./commonElements";      
import { CBC } from "./useStateInCallback";  



import { graphAfterNrmInterpretativeMode } from "./useAudioGraphAsBandFreqCtrlMode";   
import {
    EitherBothSetOrBothUnset,
    
    XWithInterpretation ,    

    FreqArgsProps ,  
    FreqArgsPropsExt ,
    DetuningProps ,  
    GainValArgsProps ,         
    GainValArgsProps1 ,   
    QFactualProps , 
} from "./useAudioGraphImplBiquadFltPropsTyping";      
import { 
    usePersistingBeep ,      
} from "./useAudioNodesBasicBeep1";    
import { CConstantValue } from "./useAudioGraphImplFMathComponentsSupport1";
import { ModifyingCompPayloadDiv } from "./useAudioGraphImplFComponentsSemanticsBasic";

     
     




;
  
/**    
 * use these methods to properly evaluate the `freqCtrl` argument(s). `^_^`
 */
const {
    cCtrlPropsParse,
    freqCtrlRelatedPropsParse , 
} = (() => {
    const FL = (
        function (...[
            freqArgGraphSpecified, 
            freqArgumentInterpretationSpecified,
            { defaultGraph, valueNormale: normalValue0, } ,
        ] : [
            value: React.ReactElement | null | undefined ,
            valueINterpreta: FreqArgsProps["freqArgumentInterpretation"] | undefined ,
            properties: { 
                valueNormale: number ;
                defaultGraph: React.ReactElement ; 
            } ,
        ]) {
            ;
            const {
                freqArgumentInterpretation ,
                freqArgument: freqArgGraph0 ,
            } = ((): (
                {}
                &
                Required<(
                    FreqArgsProps
                )>
            ) => {
                if (freqArgGraphSpecified ) {
                    return {
                        freqArgument: freqArgGraphSpecified ,
                        freqArgumentInterpretation: (
                            freqArgumentInterpretationSpecified
                            ||
                            "resulting-magn-normalised"
                        )
                    } ;
                } else {
                    return {
                        freqArgument: (
                            defaultGraph
                        ) ,
                        freqArgumentInterpretation: "timedomain-normalised",
                    }
                }
                ;
            })() ;
            ;
            return {
                normalValue : normalValue0 ,
                mainGraphSpecified: freqArgGraphSpecified ,
                interpretativeModeUsed: freqArgumentInterpretation ,
                mainGraphUsed0: freqArgGraph0 ,
            } ;
        }
    );
    return {
        cCtrlPropsParse: FL ,
        freqCtrlRelatedPropsParse: (
            function (...[FMP] : [
                (
                    EitherBothSetOrBothUnset<(
                        FreqArgsProps 
                    ) >
                    & 
                    FreqArgsPropsExt
                ) ,
            ]) {
                ; 
                const { //
                    freqArgumentNormalValue: normalValue0 = 440 ,
                    freqArgument: mainGraphSpecified ,     
                    freqArgumentInterpretation: interpretativeModeSpecified,                       
                                
                } = FMP ; //  
                ;
                const {
                    normalValue: normalValue1 ,
                    interpretativeModeUsed: interpretativeModeUsed,
                    mainGraphUsed0,
                } = (
                    FL(mainGraphSpecified, interpretativeModeSpecified, {
                        valueNormale: normalValue0 ,
                        defaultGraph: (
                            <CConstantValue value={1 } />
                        ) ,
                    } )
                ) ;
                return {
                    freqArgNormalValue: normalValue1 ,
                    freqArgGraphSpecified: mainGraphSpecified ,
                    freqArgumentInterpretation: interpretativeModeUsed ,
                    freqArgGraph0: mainGraphUsed0 ,
                } ;
            }
        ) ,
    } ;
})() ;
const graphAfterNrmInterpretativeModeC = (
    function (props: ReturnType<typeof cCtrlPropsParse > ) {
        const {
            interpretativeModeUsed: gainValArgumentInterpretation,
            mainGraphUsed0: gainValueGraph0,
        } = (
            props
        ) ;
        return (
            graphAfterNrmInterpretativeMode({ 
                mode1 : gainValArgumentInterpretation  ,

            } , <>{ gainValueGraph0 }</> )       
        ) ;
    }
) ;

const SingleParamTerminalElementCProps = {} ; // TS-1205     
type SingleParamTerminalElementCProps = ( 
    Omit<(
        XWithInterpretation<"value", React.ReactElement >      
    ) , "value">     
    &    
    Required<(  
        { children: React.ReactElement ; }
    )>           
) ;   
const evSingleArgumentTerminalNodeCPropsParse = (    
    function (mainProps : SingleParamTerminalElementCProps ) { 
        ;          
        const gainValArgument1: React.ReactElement = (
            graphAfterNrmInterpretativeModeC((
                cCtrlPropsParse((
                    mainProps.children
                ), mainProps.valueInterpretation, {
                    valueNormale: 1 ,
                    defaultGraph: <></> ,
                } )
            ))  
        ) ;                               
        ;    
        return {  
            valueCtrl : gainValArgument1 ,           
        } ;
    }
);

const BiquadFltCProps = {} as const ; // `--isolated-modules` - TS-1205 
type BiquadFltCProps = (
    React.PropsWithChildren<(    
    (
        {   
            type : Exclude<BiquadFilterType, "lowpass" | "highpass"> ;                
        }      
        &    
        FreqArgsProps  
        & //
        FreqArgsPropsExt
        &  
        GainValArgsProps1               
    )
    |
    (
        {   
            type : "lowpass" | "highpass" ;                
        }      
        &    
        FreqArgsProps  
        & //
        FreqArgsPropsExt
        &
        Partial<(
            Record<keyof GainValArgsProps1 , never >
        )>
    )
    )>
) ;               
const biquadFltCPropsParse = (            
    function (mainProps : (             
        BiquadFltCProps       
    ) ) {            
        const {                      
            type: flType ,     
 
            children ,           

        } = mainProps ;    
        const { //
            freqArgNormalValue ,
            freqArgGraphSpecified ,
            freqArgumentInterpretation , 
            freqArgGraph0 ,
        } = (
            freqCtrlRelatedPropsParse(mainProps )
        ) ;
        const freqArgGraph1: React.ReactElement = (
            graphAfterNrmInterpretativeMode({ 
                mode1 : freqArgumentInterpretation  ,

            } , freqArgGraph0 )   
        ) ;                 
        const gainValArgument1: React.ReactElement = (
            graphAfterNrmInterpretativeModeC((
                cCtrlPropsParse((
                    mainProps.gainValArgument
                ), mainProps.gainValArgumentInterpretation, {
                    valueNormale: 1 ,
                    defaultGraph: <></> ,
                } )
            ))  
        ) ;       
        ;             
        return {  
            flType ,  
            freqArgNormalValue ,
            freqArgGraph1 , 
            gainValArgument1 ,   

            children ,      
        } ;
    }      
) ;                

const WaveTableNodeProps = {} as const ; // `--isolated-modules` TS-1205 
type WaveTableNodeProps = (              
    (
    {                 
        type ?: (   
            Exclude<(
                OscillatorType | PeriodicWave   
            ), "custom">
        ) ;       
    }   
    & FreqArgsPropsExt 
    )
    &          
    EitherBothSetOrBothUnset<FreqArgsProps>
    &       
    EitherBothSetOrBothUnset<DetuningProps >                           
) ;        
const waveTableCPropsShallParse = ((...args2 : [
    config ?: {
        freqArumentDefaults : Required<FreqArgsProps > ,
    } ,  
]) => {        
    const CFC = (              
        IterableOps.once(async () => {
            const I2 = (
                await (
                    import ('./useAudioGraphImplFComponentsWhiteNoise')     
                )    
            ) ; 
            return {
                ...I2 , 
            } ;
        })
    );              
    return (                  
        function (...[mainProps] : [
            (                        
                WaveTableNodeProps              
            ) ,         
        ] ) {                                  
            const FMP = {
                ...mainProps ,  
            };                       
            const {          
                            
                detune: detuneGraph0 = <></> ,       
                detuneInterpretation = (  
                    ABandpassFreqArgInputRangeMode.TIMEDOMAIN_NORMALISED   
                ) ,                            

                detuneSemitoneCentsNormalVal = 12 * 100 ,
                  
                type : wvTable1 ,   
           
            } = FMP ;     
            const { //
                freqArgNormalValue: freqArgumentNormalValue ,
                freqArgGraphSpecified ,
                freqArgumentInterpretation , 
                freqArgGraph0 ,
            } = (
                freqCtrlRelatedPropsParse(FMP )
            ) ;
            const freqArgGraph1: React.ReactElement = (
                graphAfterNrmInterpretativeMode({ 
                    mode1 : freqArgumentInterpretation  ,
     
                } , freqArgGraph0 )   
            ) ;                
            const detuneGraph1: React.ReactElement = (
                graphAfterNrmInterpretativeMode({ 
                    mode1 : detuneInterpretation  , 
    
                } , detuneGraph0 )          
            ) ;                 
            ;                     
            return {  
                freqArgumentNormalValue ,
                detuneSemitoneCentsNormalVal ,
                freqArgGraph1 ,        
                detuneGraph1 , 
                ...(() : { type ?: NonNullable<WaveTableNodeProps["type"] > ; } => (
                    wvTable1 ? { type : wvTable1 } : { }
                ) )() ,
    
            } ; 
        }            
    ) ; 
})() ;                     
         
const ParamAutomativeNodeCProps = {} ; // TS-1205 
type ParamAutomativeNodeCProps = (  
    SingleParamTerminalElementCProps       
    &
    { target : AudioParam | null ; }        
) ;   
const evParamAutomativeNodeCPropsParse = (    
    function (mainProps : ParamAutomativeNodeCProps ) {    
        const {                 
            target ,         
          
        } = mainProps ;        
        ;                
        const {
            valueCtrl : gainValArgument1 ,  
        } = (
            evSingleArgumentTerminalNodeCPropsParse(mainProps )
        );                      
        ;    
        return {  
            valueCtrl : gainValArgument1 ,    
            target , 
        } ; 
    }
);

   

 



  
      

      
export {
    EitherBothSetOrBothUnset ,
   
    SingleParamTerminalElementCProps , 
    evSingleArgumentTerminalNodeCPropsParse ,  
    BiquadFltCProps ,       
    biquadFltCPropsParse , 
    WaveTableNodeProps , 
    waveTableCPropsShallParse ,    
    ParamAutomativeNodeCProps ,  
    evParamAutomativeNodeCPropsParse , 
} ;                