
// utility imports     
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue } from "./generalUse11";  
import { ABandpassFreqArgInputRangeMode } from "./audioFltBandpassMetaRangeMode";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";     
import { K } from "./commonElements";      
import { CBC } from "./useStateInCallback";  

//       
import { usePModulating } from "./useAudioNodesBasicUseBeep";  




;     
/**       
 * this ad-hoc utility     
 * returns a wrapper wich translates `AudioParam`s into `AudioNode`s      
 *  */      
const USEM = (  
    function <R extends (         
        {  
            readonly main : AudioNode | null ;  
        }                
    ) , A extends readonly unknown[] >({ useYyy: useC0  } : {
        useYyy : (nd0: AudioNode | null, ...a: A ) => R ;      
        // ea : A ;      
    } ) {                            
        const useC1 = (
            function (nd0 : AudioNode | null, ...ea: A ) : (
                {} & Record<keyof ReturnType<typeof useC0> , AudioNode | null >
            ) {     
                ;                
                const m0 = (                      
                    useC0(nd0 , ...ea  )                                                            
                ) ;          
                const {                            
                    main : mainFeed ,           
                } = (                
                    m0                      
                ) ;           
                //               
                return (
                    // as AudioNode(s) 
                    {           
                        ...(        
                            Object.fromEntries((               
                                Object.entries(m0 )         
                                .map(function ([k, v ] ) {       
                                    return [k, ((): AudioNode | null => {   
                                        // RULES-oF-HOOKS          
                                        const [v1, v2] = (() : (
                                            [(
                                                Parameters<typeof usePModulating>[0]

                                            ), AudioNode | null]
                                        ) => {
                                            ;           
                                            if (v instanceof AudioParam ) {       
                                                return ( 
                                                    [v, null ]   
                                                ) ;
                                            }                
                                            if (v instanceof AudioNode) {
                                                return (
                                                    [null, v ]    
                                                ) ;                  
                                            }       
                                            return [null, null ]      ;  
                                        })() ;     
                                        const v11 = (
                                            (true && usePModulating )(v1 , mainFeed?.context || null )    
                                        ) ;
                                        return (    
                                            v2 || 
                                            v11  || 
                                            null  
                                        ) ;       
                                    })() ] as const ;
                                })                       
                            ))    as Record<keyof typeof m0, AudioNode | null      >
                        ) ,    
                          
                        main: mainFeed ,                             
                    }        
                );   
            }
        ) ;     
        return {
            useC0 , 
            useC1 ,     
        } ;  
    } 
) ;         

















export {
    USEM ,   
} ;    