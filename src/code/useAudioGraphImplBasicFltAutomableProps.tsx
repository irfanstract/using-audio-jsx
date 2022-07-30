 
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

     
     




const automativeInputRangeDefaultMode : ABandpassFreqArgInputRangeMode = (
    ABandpassFreqArgInputRangeMode.EFFECTIVE_INTENSITY_NORMALISED  
) ;           

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
            freqArgument: freqArgGraph0,   
            freqArgumentInterpretation = (  
                automativeInputRangeDefaultMode   
            ) ,             
            gainValArgument: gainValueGraph0 = null ,       
            gainValArgumentInterpretation = (  
                automativeInputRangeDefaultMode 
            ) ,        
            type: flType ,     
 
            children ,           

        } = mainProps ;    
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
    Partial<FreqArgsProps > 
    &    
    Partial<DetuningProps >                           
) ;        
const waveTableCPropsShallParse = (() => {  
    const CFC = (              
        IterableOps.once(() => (
            import ('./useAudioGraphImplFComponents')         
        ))
    );
    const CPersistingBeepX = (        
        // TODO                
        React.lazy(async () => {
            const {
                CPersistingBeep ,     
            } = (      
                await CFC()       
            ) ;
            return {
                default: CPersistingBeep ,    
            } ;
        })    
    ) ;    
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
    return (                  
        function (...[mainProps] : [
            (              
                WaveTableNodeProps              
            ) ,        
        ] ) {                   
            const {       
                freqArgument: freqArgGraph0 = (     
                    // TODO     
                    <CWhiteNoiseX value={{ volume: 2 ** 0 }} />  
                ) ,       
                freqArgumentInterpretation = (  
                    automativeInputRangeDefaultMode    
                ) ,                  
                            
                detune: detuneGraph0 = <></> ,       
                detuneInterpretation = (  
                    automativeInputRangeDefaultMode   
                ) ,                            
                
                type : wvTable1 ,  
    
            } = mainProps ;    
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
    Omit<(
        XWithInterpretation<"value", React.ReactElement >  
    ) , "value">     
    &    
    Required<(  
        React.PropsWithChildren<{ }>
    )>        
    &
    { target : AudioParam | null ; }
) ;   
const evParamAutomativeNodeCPropsParse = (    
    function (mainProps : ParamAutomativeNodeCProps ) { 
        const {                 
            target ,         

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
            target , 
        } ;
    }
);

   

 




      

    
export {
    automativeInputRangeDefaultMode ,  
   
    BiquadFltCProps ,       
    biquadFltCPropsParse , 
    WaveTableNodeProps , 
    waveTableCPropsShallParse ,    
    ParamAutomativeNodeCProps ,  
    evParamAutomativeNodeCPropsParse , 
} ;          