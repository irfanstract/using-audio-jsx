
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
import { 
    MediaStreamRecC1,
    
} from "./useMediaStreamRecDemo1";
import { 
    useAudioNodesAsMediaStream,
} from "./useAudioNodesAsMediaStreams1";
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";   
import { 
    CHalfSecndBeepAtAbsoluteT ,     
} from "./useAudioGraphImplFromUseYyyNodes1";  
import {            
    CurrentCtxTInfoDisplay ,    
    Prv1 ,                
    useADestNdRefCtx1 , 
    Consm as WithCurrentDestNdRef ,
    useWithCurrentSideTapPtRef ,
    
} from "./useAudioGraphImplCurrentDestNdRefCtx";     
import { WGD_DIV } from "./useAudioGraphImplCurrentDestNdRefCtx";    

    

const {
} = tCtxs ;

    

  

            


   
  


/**   
 * keep in mind that 
 * by {@link React.Key unmounting this Component } 
 * your app will lose the rec previously retained so far.
 */
const WithCtxtualATapRecording : (
   React.FC<{}>
) = (
   () => (
      useWithCurrentSideTapPtRef(({ sideTapPt }) => (
         sideTapPt
         ?
         <CBC name="CBC_AudioCtxFeedRec" >
         { function useRecImpl() {
            const dNd = useAudioNodesAsMediaStream(sideTapPt ) ;
            return (
                  dNd ?
                  <MediaStreamRecC1 
                  src={dNd.stream }
                  restartPeriodMillis={3 * 60 * 1000 }
                  />
                  : <></>
            ) ;
         } }
         </CBC>
         : <></>
      ))
   )
) ;



export {
   WithCtxtualATapRecording ,
} ;