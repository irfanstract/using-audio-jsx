
// utility imports        
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue } from "./generalUse11";  
import { ABandpassFreqArgInputRangeMode } from "./audioFltBandpassMetaRangeMode";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";     
import { K } from "./commonElements";      
import { CBC } from "./useStateInCallback";  

         
 
  
    
                   
              
                   
    
/**   
 * either 
 * - all properties set
 * - all properties unset
 */
type EitherBothSetOrBothUnset<A extends {} > = (
    A | { [k in keyof A ] ?: undefined ; }
) ;
const EitherBothSetOrBothUnset = {} ; // TS-1205

const XWithInterpretation = {} ; // TS-1205
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
const FreqArgsProps = {} ;   // TS-1205
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
const DetuningProps = {} ; // TS-1205
/**   
 * {@link XWithInterpretation}.
 * {@link OscillatorNode}, {@link BiquadFilterNode}.
 */
type DetuningProps = (
    XWithInterpretation<"detune", React.ReactElement >          
) ;         
const GainValArgsProps = {} ; // TS-1205
/**
 * {@link XWithInterpretation}.
 * {@link GainNode}, {@link BiquadFilterNode}.
 */
type GainValArgsProps<E = React.ReactElement > = (            
    XWithInterpretation<"gainValArgument", E >        
) ;                           
const GainValArgsProps1 = {} ; // TS-1205                
/**    
 * {@link XWithInterpretation}.
 * {@link GainNode}, {@link BiquadFilterNode}.
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
const QFactualProps = {} ; // TS-1205
/**   
 * {@link BiquadFilterNode}
 */
type QFactualProps = (
    XWithInterpretation<"qFactual", React.ReactElement >      
) ;   




   
   




 
export {
    EitherBothSetOrBothUnset , 
    
    XWithInterpretation ,  

    FreqArgsProps , 
    DetuningProps , 
    GainValArgsProps ,
    GainValArgsProps1 ,   
    QFactualProps , 
} ;