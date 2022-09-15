
// utility imports        
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue } from "./generalUse11";  
import { 
    EitherBothSetOrBothUnset,
} from "./generalUse11";
import { ABandpassFreqArgInputRangeMode } from "./audioFltBandpassMetaRangeMode";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";     
import { K } from "./commonElements";      
import { CBC } from "./useStateInCallback";  

         
 
  
    
                   
              
                   
    
;

/**    
 * W3C's `AudioNode`s spec makes `AudioNode`s *time-domain*. however,
 * being *time-domain* is not always the desired config, with some desiring being *time-freq-domain*.
 * 
 * for now, 
 * it's important that, when-and-only-when a graph is explicitly specified, 
 * the interpretation be also explicitly specified.
 */
type XWithInterpretation<Key extends string, E > = (
    EitherBothSetOrBothUnset<(
        {            
            /**                      
             * defines the control graph   . 
             * as opposed to `children` which would defines the main/primary graph.   
             *       
             */            
            [ k in Key ] : E ;                   
    
        }           
        &  
        (
            Record<`${Key}Interpretation`, ABandpassFreqArgInputRangeMode > 
        )
    )>
) ;             
const XWithInterpretation = {} ; // TS-1205

/**   
 * {@link XWithInterpretation}.
 * {@link OscillatorNode}, {@link BiquadFilterNode}.
 */
type FreqArgsProps = (
    // XWithInterpretation<"freqArgument", React.ReactElement >   
    (
        {
            freqArgument : React.ReactElement ;
            freqArgumentInterpretation : ABandpassFreqArgInputRangeMode ;
        }   
        // |
        // {
        //     freqArgument ?: undefined | null ; 
        //     freqArgumentInterpretation ?: undefined ;
        // }   
    )
) ;             
const FreqArgsProps = {} ;   // TS-1205
;
/** 
 * temporary addition.
 */
type FreqArgsPropsExt = {
    /**   
     * emitted-value scalarly corresponding to input-value `1.0`.
     * default -- `440`  .
     */
    freqArgumentNormalValue ?: number ;
} ;
const FreqArgsPropsExt = {} ;
/**   
 * {@link XWithInterpretation}.
 * {@link OscillatorNode}, {@link BiquadFilterNode}.
 */
type DetuningProps = (
    {
        detuneInterpretation: ABandpassFreqArgInputRangeMode ;
        detune : React.ReactElement ;
        detuneSemitoneCentsNormalVal: number | undefined ;
    }
) ;         
const DetuningProps = {} ; // TS-1205

/**
 * {@link XWithInterpretation}.
 * {@link GainNode}, {@link ConstantSourceNode}, {@link BiquadFilterNode}.
 */
type GainValArgsProps<E = React.ReactElement > = (            
    XWithInterpretation<"gainValArgument", E >        
) ;                           
const GainValArgsProps = {} ; // TS-1205
/**    
 * {@link XWithInterpretation}.
 * {@link GainNode}, {@link ConstantSourceNode}, {@link BiquadFilterNode}.
 * */          
type GainValArgsProps1 = (     
    /**      
     * either
     * a) both shall be left out or *set to `undefined`*, 
     * b) both shall be specified non-null
     */     
    ((
        Partial<(
            GainValArgsProps<undefined | null > 
        )>            
    ) | GainValArgsProps<React.ReactElement> )       
) ;          
const GainValArgsProps1 = {} ; // TS-1205                

/**   
 * {@link BiquadFilterNode}
 */
type QFactualProps = (
    XWithInterpretation<"qFactual", React.ReactElement >      
) ;   
const QFactualProps = {} ; // TS-1205




   
   




 
export {
    EitherBothSetOrBothUnset , 
    
    XWithInterpretation ,  

    FreqArgsProps , 
    FreqArgsPropsExt ,
    DetuningProps , 
    GainValArgsProps ,
    GainValArgsProps1 ,   
    QFactualProps , 
} ;