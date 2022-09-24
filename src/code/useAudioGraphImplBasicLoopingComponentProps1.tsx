
// utility imports     
import Immutable from "immutable";    
import { IterableOps } from "./generalUse11";  
import { 
    AudioTrackConcatClippingMode , 
    avTrackConcatShallPropagate ,   
} from "./timelineConcatClippingMode";    
import React from "react";               
import { useDeferredRecompute } from "./usingDeferredRecompute";
import { 
    useRenderCount ,      
    useDepsChgCount , 
    useUnmountLogging ,   
    useTopicHeadedRenderCount ,    

} from "./commonElements";    
import { CBC, } from "./useStateInCallback";
import { K, ComponentProps, ContextReturnType, arrayIndexedOrderedList } from "./commonElements";    
        











type LoopingComponentPropsWithPeriodB = (
   /**  logical properties   */   
   {             

      /**       
         * the payload will be the *repeand*.        
         */  
      children : (   
            React.ReactNode  
            | 
            LwpPayloadCallback
      ) ;

      /**    
         * this is (supposed) to define the domain properties (excluding `children`).
         */
      value: {      
            period: number ;                                                
            initialOffset ?: number ;         
            // clippingMode ?: AudioTrackConcatClippingMode ;          
      } ;                     

   }    
) ;
const LoopingComponentPropsWithPeriodB = {} ; // TS-1205
/**           
 * possible return values of implemts : 
 * - {@link LwpPayloadCallback.OmittedItem } - omitted item
 * - {@link LwpPayloadCallback.EmptyItem } - item as blank 
 * - concrete elements    
 */
type LwpPayloadCallback = (        
   (ctx: {
      /**    
         * relative to the whole component. 
         * */ 
      perInstanceRelativeT: number ;  

      /**     
         * the component-level {@link useCurrentTInf `absoluteTValue` }.  
      */
      componentLevelAbsoluteT : number ; 
   } )  
   => 
   (LwpPayloadCallback.OmittedItem | LwpPayloadCallback.EmptyItem | React.ReactElement )  
) ;      
namespace LwpPayloadCallback {
   export type EmptyItem = false ;   
   export type OmittedItem = null ;        
   const bar = {} ; // TS-1205            
} ;        



export {
   LwpPayloadCallback ,
   LoopingComponentPropsWithPeriodB as LoopingComponentPropsWithPeriod ,
} ;