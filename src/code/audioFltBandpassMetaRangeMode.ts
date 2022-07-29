
import { EnumC } from "./commonEnum"; 
  


  
                    

     
      
const AMetaRenderInterpretativeMode = {

    /**    
     * treat it as `t -> value` graph, and
     * make the resulting animation be (denormalised) the graph        
     */     
    TIMEDOMAIN_NORMALISED : "timedomain-normalised" , 
    
    /**     
     * make the resulting animation be (denormalised) the graph of the effective intensity
     */
    EFFECTIVE_INTENSITY_NORMALISED : "resulting-magn-normalised" ,        

} as const ; 
type AMetaRenderInterpretativeMode = (
    EnumC<typeof AMetaRenderInterpretativeMode >
) ;         


 
       
        
/**    
 * @deprecated 
 * the naming does not properly denote the intended value-or-behaviour.   
 */   
type  ABandpassFreqArgInputRangeMode = AMetaRenderInterpretativeMode ;
/**    
 * @deprecated 
 * the naming does not properly denote the intended value-or-behaviour.   
 */   
const ABandpassFreqArgInputRangeMode = AMetaRenderInterpretativeMode ;
export {
    /**          
     * @deprecated NAMING        
     */
    ABandpassFreqArgInputRangeMode as ABandpassFreqArgInputRangeMode ,
    AMetaRenderInterpretativeMode as AMetaRenderInterpretativeMode ,      
} ;  