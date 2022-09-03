
// utility imports                  
import Immutable from "immutable";            
import { 
    IterableOps, PromiseReturnValue, OmitM, FrequencyAndPeriod  ,    
} from "./generalUse11";   
import { 
    fromTSeqComputedValueInterpolated ,
} from "./timeStampSeqMappedConnectedInterpolated1";
import React, { useMemo } from "react";                
import { 
    useRenderCount ,      
    useDepsChgCount , 
    useUnmountLogging ,   
    useTopicHeadedRenderCount ,    

} from "./commonElements";    
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";        
import { K, asVoidElement, NUMERIC, useDebugDispatcher, } from "./commonElements";             
import { CBC } from "./useStateInCallback";      
import { useRealTimeQueryInterval1 } from "./useNonHookValue";             
import { useDeferredTrue as useDeferredTrue0 } from "./usingDeferredBoolean";       
import { 
    useOneWayCheckBox ,      
} from "./useCompletion";    
import { useAsyncStrm, useAsyncDictStrm } from "./useAsyncMemo";       
import {    
    TAndVl , 
    tAndVlSqExpand ,  
} from "./useTValueSeqExpand1";      



;
import {  
    useElasUsageOnMount,
    useGainElas ,      
    useGainElasD ,      
    useConstantParamSrcElas ,            
    useConstantParamSrcElasD ,   

} from "./useAudioNodesBasicFixedElas";           
import {
    terminalUsageWrapC ,     
    nonterminalUsageWrapC , 

    AGCtxtualOutUsageProps ,             
    CTXTUALOUTPUTUSAGE_CBC , 
} from "./useAudioGraphImplCurrentDestNdRefCtxC1";    
        


 







/**   
 * 
 * @see  
 * import  :  
 * {@link useConstantParamSrcElasD}         
 * {@link CTXTUALOUTPUTUSAGE_CBC }
 */   
const renderConstantParamSrcElas1 = (
   function (...args : (
      [Parameters<typeof useConstantParamSrcElasD> ] extends [readonly [unknown, ...(infer Args1 ) ] ]
      ?
      Args1
      : never      
   ) ) {        
      return (              
         <CTXTUALOUTPUTUSAGE_CBC>    
               {  function useC11({ feedPt : nd0 }) {     
                  useConstantParamSrcElasD(   
                        nd0, ...args ) ;    
                  return <></> ;  
               }  }     
         </CTXTUALOUTPUTUSAGE_CBC>              
      );   
   }
) ;      




export {
   renderConstantParamSrcElas1 ,
} ;