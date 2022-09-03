 
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
            { defaultGraph } ,
        ] : [
            value: React.ReactElement | null | undefined ,
            valueINterpreta: FreqArgsProps["freqArgumentInterpretation"] | undefined ,
            properties: { 
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
                mainGraphSpecified: freqArgGraphSpecified ,
                interpretativeModeUsed: freqArgumentInterpretation ,
                mainGraphUsed0: freqArgGraph0 ,
            } ;
        }
    );
    return {
        cCtrlPropsParse: FL ,
        freqCtrlRelatedPropsParse: (
            function (...[FMP] : [EitherBothSetOrBothUnset<FreqArgsProps > ]) {
                ; 
                const { //
                    freqArgument: mainGraphSpecified ,     
                    freqArgumentInterpretation: interpretativeModeSpecified,                       
                                
                } = FMP ; //  
                ;
                const {
                    interpretativeModeUsed: interpretativeModeUsed,
                    mainGraphUsed0,
                } = (
                    FL(mainGraphSpecified, interpretativeModeSpecified, {
                        defaultGraph: (
                            <CConstantValue value={1 } />
                        ) ,
                    } )
                ) ;
                return {
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
        {   
            type : BiquadFilterType ;                
        }      
        &    
        FreqArgsProps  
        &  
        /**      
         * either
         * a) both shall be left out or *set to `undefined`*, 
         * b) both shall be specified non-null
         */     
        GainValArgsProps1               
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
                    defaultGraph: <></> ,
                } )
            ))  
        ) ;       
        ;             
        return {  
            flType ,  
            freqArgGraph1 , 
            gainValArgument1 ,   

            children ,      
        } ;
    }      
) ;                

const WaveTableNodeProps = {} as const ; // `--isolated-modules` TS-1205 
type WaveTableNodeProps = (              
    {                 
        /**    
         * the waveform.
         */
        type ?: (   
            Exclude<(
                OscillatorType | PeriodicWave   
            ), "custom">
        ) ;       
        /**   
         * emitted-value scalarly corresponding to input-value `1.0`.
         * default -- `440`  .
         */
        freqArgumentNormalValue?: number | undefined;
    }   
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

                freqArgumentNormalValue = 440 ,
                detuneSemitoneCentsNormalVal = 12 * 100 ,
                  
                type : wvTable1 ,   
           
            } = FMP ;     
            const { //
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