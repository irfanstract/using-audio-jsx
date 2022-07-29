
import { EnumC } from "./commonEnum"; 
  


  
                    

     
      
const ABandpassFreqArgInputRangeMode = {

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
type ABandpassFreqArgInputRangeMode = (
    EnumC<typeof ABandpassFreqArgInputRangeMode >
) ;         


 

   
export {
    ABandpassFreqArgInputRangeMode , 
} ;  