
// utility imports     
import Immutable from "immutable";    
import { IterableOps, PromiseReturnValue } from "./generalUse11";  
import { ABandpassFreqArgInputRangeMode } from "./audioFltBandpassMetaRangeMode";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";     
import { K } from "./commonElements";      
import { CBC } from "./useStateInCallback";  



import { CFreqDmAnalyF } from "./useAudioGraphImplFComponentsAnalyticalF";  





   

                    
;
// TODO            
/**   
 * TBD .       
 *          
 * attempts tpo using `CFreqDmAnalyF` .   
 * can't implement/apply it directly due to the implied *`import`-cycle*
 */ 
 const CFreqDmAnalyF1 = (function () {
    // const C0 = (   
    //     React.lazy(async () => {      
    //         const { 
    //             CFreqDmAnalyF ,    
    //         } = (
    //             await import ('./useAudioGraphImplFComponents')
    //         ) ;  
    //         return {
    //             default : CFreqDmAnalyF ,  
    //         } ;
    //     })      
    // );                
    // return (p : ComponentProps<typeof C0 > ) => (
    //     <C0 {...p } >
    //         { p.children }
    //     </C0>  
    // ) ;           
    return CFreqDmAnalyF;
 })() ;                      









export {
    CFreqDmAnalyF1 , 
} ;