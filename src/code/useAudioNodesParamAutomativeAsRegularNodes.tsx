
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
const doubleInitCheckEnabled : 0 | 1 = 1 ;
/**   
 *      
 * @deprecated     
 * typical structore of code-flow in apps means that 
 * application of this `useYyy` will cause your app to violently thrash the console logging.   
 */
function useCheckNoDoubleInit(nd1 : object | null ) {     
    const [  , LOG ] = (
        React.useState<null>(null )
    );
    ;   
    React.useLayoutEffect(() => {      
        if (nd1 && doubleInitCheckEnabled ) {              
            if (0 ) {
            if ( (      
                (String(undefined) + "+").length 
                < 
                ((nd1 as any ).USEAUDIONODESPARAMASREGULARNODE += "+" ).length   
            ) ) {      
                LOG(() => {           
                    ;               
                    console.warn( { nd1 } ) ;
                    console.error(TypeError(`double initialisation detected` )) ;;   
                    return null ;
                });        
            }         
            }
        }                        
    }, [nd1 ] ) ;    
}        
const useAudioParamAsAudioNodeE = (
    function (...[v , { mCtx }] : [
        (AudioNode | AudioParam ) | null ,      
        { mCtx : BaseAudioContext | null ; } ,
    ] ): AudioNode | null {   
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
            usePModulating(v1 , mCtx )    
        ) ;   
        useCheckNoDoubleInit(v1 )   ;
        return (      
            v2 ||      
            v11  ||   
            null  
        ) ;       
    }  
) ;
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
                ;     
                const m0 = (                                   
                    useC0(nd0 , ...ea  )                                                            
                ) ;          
                const {                            
                    main : mainFeed ,           
                } = (                
                    m0                      
                ) ;                    
                const mCtx: BaseAudioContext | null = (
                    mainFeed?.context || null      
                ) ;
                const aParams1 = (        
                    Object.fromEntries((               
                        Object.entries((
                            // avoid wrong inferred type
                            m0 as 
                            { [k : string ] : null | (AudioNode | AudioParam) ; } 
                        ))            
                        .map(function ([k, v ] ) {       
                            return [k,  (true && useAudioParamAsAudioNodeE )(v , { mCtx } ) ] as const ;
                        })                       
                    ))    as Record<keyof typeof m0, AudioNode | null      >
                ) ;
                //                    
                return (
                    // as AudioNode(s)        
                    {           
                        ...(        
                            aParams1
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