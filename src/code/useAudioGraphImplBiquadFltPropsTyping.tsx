
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
type XWithInterpretation<Key extends string, E > = (
    {            
        /**                      
         * defines the control graph   . 
         * as opposed to `children` which would defines the main/primary graph.   
         *       
         */            
        [ k in Key ] : E ;                   

    }           
    &  
    Partial<(
        Record<`${Key}Interpretation`, ABandpassFreqArgInputRangeMode > 
    )> 
) ;             
const FreqArgsProps = {} ;   // TS-1205
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
type DetuningProps = (
    XWithInterpretation<"detune", React.ReactElement >          
) ;         
const GainValArgsProps = {} ; // TS-1205
type GainValArgsProps<E = React.ReactElement > = (            
    XWithInterpretation<"gainValArgument", E >        
) ;                           
const GainValArgsProps1 = {} ; // TS-1205                
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