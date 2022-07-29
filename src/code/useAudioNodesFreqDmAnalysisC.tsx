
// utility imports     
import Immutable from "immutable";    
import { IterableOps, PromiseReturnValue } from "./generalUse11";  
import { ABandpassFreqArgInputRangeMode } from "./audioFltBandpassMetaRangeMode";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";     
import { K } from "./commonElements";      
import { CBC } from "./useStateInCallback";  





   

             
;
// TODO            
/**   
 * TBD .       
 *          
 * attempts tpo using `CFreqDmAnalyF` .   
 * can't implement/apply it directly due to the implied *`import`-cycle*
 */ 
 const CFreqDmAnalyF1 = (   
    React.lazy(async () => {      
        const { 
            CFreqDmAnalyF ,    
        } = (
            await import ('./useAudioGraphImplFComponents')
        ) ;  
        return {
            default : CFreqDmAnalyF ,  
        } ;
    })    
) ;                      









export {
    CFreqDmAnalyF1 , 
} ;