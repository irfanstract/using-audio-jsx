 
// utility imports        
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue } from "./generalUse11";  
import { ABandpassFreqArgInputRangeMode } from "./audioFltBandpassMetaRangeMode";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";     
import { K } from "./commonElements";      
import { CBC } from "./useStateInCallback";  

     
import { CFreqDmAnalyF1 } from "./useAudioNodesFreqDmAnalysisC";      







    


const {
    TIMEDOMAIN_NORMALISED , 
    EFFECTIVE_INTENSITY_NORMALISED: RESULTING_MAGN_NORMALISED ,   

} = ABandpassFreqArgInputRangeMode ;     

const graphAfterNrmInterpretativeMode = (
    function ({            
        mode1 : interpretativeMde ,         

    } : {    
        mode1 : ABandpassFreqArgInputRangeMode ;  
        // 

    } , graph : React.ReactElement ) {
        return (
            (
                (interpretativeMde === TIMEDOMAIN_NORMALISED ? (
                    graph          
                ) : null )     
                ||
                (interpretativeMde === RESULTING_MAGN_NORMALISED ? (
                    <CFreqDmAnalyF1 value={undefined} >
                        {graph }
                    </CFreqDmAnalyF1>     
                ) : null )            
                ||                        
                null
            ) || <></>                
        ) ;      
    }
) ;   















export {
    graphAfterNrmInterpretativeMode ,  
} ;