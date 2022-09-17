
import { IterableOps } from "./generalUse11";
import { linearSlidingStateAtT } from "./timeDomainClosedGradientSampling1";
import { SupportedFShiftAmtInterpretation } from "./audioFreqShiftInterpretation1";
import { periodicTRestrictedLinearlyApproachedValueAtT1 } from "./audioTDomainPeriodicPlotSamplingAtT1";
import React, { useReducer, useState } from "react";   
import { K, ComponentProps, ContextReturnType } from "./commonElements";      
import { CBC } from "./useStateInCallback";
import { 
    useOneWayCompletiveState ,      
            
} from "./useCompletion";    
import { useAsyncMemo } from "./useAsyncMemo";          

     
   
// domain-imports         
import { useMediaReadStreamFromOfStillCssFill, } from "./useMediaStreamFromOfNativeCanvas1";
import { useMediaReadStreamDemoBackForthColorAnim, } from "./useMediaStreamGenBackForthColorAnim1";
import { MediaStreamVideoC, } from "./useMediaStreamAsVideoElement1";

    






export default (
   function MediaStreamAsVideoElementDemo() {
      const videoS: MediaStream = (
         useMediaReadStreamDemoBackForthColorAnim({
            period: 8,
            outputRefreshRate: 10,
         })
      ) ;
      return (
         <div>
         <MediaStreamVideoC 
         src={videoS }
         autoPlay
         muted
         />
         </div>
      ) ; // TODO
   }
) ;