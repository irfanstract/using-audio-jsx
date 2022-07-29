
// utility imports        
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue } from "./generalUse11";  
import { ABandpassFreqArgInputRangeMode } from "./audioFltBandpassMetaRangeMode";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";     
import { K } from "./commonElements";      
import { CBC } from "./useStateInCallback";  

         
 
  
    
                   
              
                   
    
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
type FreqArgsProps = (
    XWithInterpretation<"freqArgument", React.ReactElement >      
) ;             
type DetuningProps = (
    XWithInterpretation<"detune", React.ReactElement >          
) ;         
type GainValArgsProps<E = React.ReactElement > = (            
    XWithInterpretation<"gainValArgument", E >        
) ;                           
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
type QFactualProps = (
    XWithInterpretation<"qFactual", React.ReactElement >      
) ;   




   
   




 
export type {
    XWithInterpretation ,  

    FreqArgsProps , 
    DetuningProps , 
    GainValArgsProps ,
    GainValArgsProps1 ,   
    QFactualProps , 
} ;