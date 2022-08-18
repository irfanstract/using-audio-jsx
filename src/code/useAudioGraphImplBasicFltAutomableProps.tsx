 
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
    DetuningProps ,  
    GainValArgsProps ,         
    GainValArgsProps1 ,   
    QFactualProps , 
} from "./useAudioGraphImplBiquadFltPropsTyping";      
import { 
    usePersistingBeep ,      
} from "./useAudioNodesBasicBeep1";    
import { CConstantValue } from "./useAudioGraphImplFMathComponentsSupport1";

     
     




/**    
 * don't use this; different usage(s) will necessitate different defaults.
 * 
 * @deprecated
 */
const automativeInputRangeDefaultMode : ABandpassFreqArgInputRangeMode = (
    ABandpassFreqArgInputRangeMode.EFFECTIVE_INTENSITY_NORMALISED  
) ;           
  
/**    
 * use this method to properly evaluate the `freqCtrl` argument(s). `^_^`
 */
const freqCtrlRelatedPropsParse = (
    function (...[FMP] : [EitherBothSetOrBothUnset<FreqArgsProps > ]) {
        ; 
        const { //
            freqArgument: freqArgGraphSpecified ,                            
                        
        } = FMP ; //  
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
                        FMP.freqArgumentInterpretation
                        ||
                        "resulting-magn-normalised"
                    )
                } ;
            } else {
                return {
                    freqArgument: (
                        <CConstantValue value={1 } />
                    ) , 
                    freqArgumentInterpretation: "timedomain-normalised", 
                }
            }
            ;
        })() ;
        ;
        return {
            freqArgGraphSpecified ,
            freqArgumentInterpretation ,
            freqArgGraph0 ,
        } ;
    }
) ;

const SingleParamTerminalElementCProps = {} ; // TS-1205     
type SingleParamTerminalElementCProps = ( 
    Omit<(
        XWithInterpretation<"value", React.ReactElement >      
    ) , "value">     
    &    
    Required<(  
        React.PropsWithChildren<{ }>
    )>           
) ;   
const evSingleArgumentTerminalNodeCPropsParse = (    
    function (mainProps : SingleParamTerminalElementCProps ) { 
        const {          
            children: gainValueGraph0 = null ,     
            valueInterpretation: gainValArgumentInterpretation = (  
                automativeInputRangeDefaultMode 
            ) ,                     
                           
        } = mainProps ;        
        ;          
        const gainValArgument1: React.ReactElement = (
            graphAfterNrmInterpretativeMode({ 
                mode1 : gainValArgumentInterpretation  ,

            } , <>{ gainValueGraph0 }</> )       
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
            gainValArgument: gainValueGraph0 = null ,       
            gainValArgumentInterpretation = (  
                automativeInputRangeDefaultMode 
            ) ,        
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
            graphAfterNrmInterpretativeMode({ 
                mode1 : gainValArgumentInterpretation  ,

            } , gainValueGraph0 || <></> )       
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
        type ?: (   
            Exclude<(
                OscillatorType | PeriodicWave   
            ), "custom">
        ) ;       
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
    const CWhiteNoiseX = (      
        // TODO                
        React.lazy(async () => {
            const {   
                CWhiteNoise ,       
            } = (  
                await CFC()        
            ) ;
            return {
                default: CWhiteNoise ,    
            } ;
        })   
    ) ;      
    const CConstantX = (        
        CConstantValue
    ) ;     
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
                    automativeInputRangeDefaultMode   
                ) ,                            
                  
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
    automativeInputRangeDefaultMode ,  
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