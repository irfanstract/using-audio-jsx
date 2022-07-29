 
// utility imports        
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue } from "./generalUse11";  
import { ABandpassFreqArgInputRangeMode } from "./audioFltBandpassMetaRangeMode";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";     
import { K } from "./commonElements";      
import { CBC } from "./useStateInCallback";  

//    
import { USEM } from "./useAudioNodesParamAutomativeAsRegularNodes";    

         
 
  
    
                   
              
                   
                
const SpecialUsageExplainer = (    
    function ({ children: useYyy } : { children : Function } ) {
        ;                 
        return (    
            <p lang="en">       
                Graph       
                <code>{useYyy.name }</code>    
            </p>             
        ) ; 
    }    
) ;    
/**   
 * this method signature (shall) matches of {@link USEM } 
 */
const xWithUsableYyy = (
    function <R extends (         
        {  
            readonly main : AudioNode | null ;  
        }                
    ) , A extends readonly unknown[] >({ 
        useYyy: useYyy , 
     } : {
        useYyy : (nd0: AudioNode | null, ...a: A ) => R ;      
        // ea : A ;      
    } ) {         
        const {
            dbgBox1 , 

        } = (
            xWithUsableYyy1({ useYyy })    
        ) ;       
        const { useC1 } = ( 
            USEM({ useYyy })                    
        ) ;       
        ;      
        return {
            dbgBox1 , 
            useC1 ,  
        } ;     
    }
) ;
/**    
 * {@link xWithUsableYyy } without (...)           
 */   
const xWithUsableYyy1 = (    
    function <R , A extends readonly unknown[] >({ 
        useYyy: useYyy , 
     } : {
        useYyy : (nd0: AudioNode | null, ...a: A ) => R ;      
        // ea : A ;      
    } ) {
        const dbgBox1 = (  
            <SpecialUsageExplainer>
                { useYyy }        
            </SpecialUsageExplainer>    
        ) ;           
        ;    
        return {
            dbgBox1 ,     
        } ;
    }
) ;  

         
 
  
    
                   
              


export {
    SpecialUsageExplainer, 
    xWithUsableYyy , 
    xWithUsableYyy1 , 
} ;