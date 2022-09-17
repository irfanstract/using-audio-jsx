
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
import { useMediaReadStreamFromOfStillCssFill, } from "./useMediaStreamFromOfNativeCanvas1";
import { useMediaReadStreamDemoBackForthColorAnim, } from "./useMediaStreamGenBackForthColorAnim1";
import { MediaStreamVideoC, } from "./useMediaStreamAsVideoElement1";
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
            const videoS: MediaStream = (
               useMediaReadStreamDemoBackForthColorAnim({
                  period: 8,
                  outputRefreshRate: 10,
               })
            ) ;
            const mS = (
               React.useMemo(() => (
                  (dNd  ) ?
                  new MediaStream([...dNd.stream.getTracks() , ...videoS.getTracks() ])
                  : videoS
               ) , [dNd, videoS] )
            ) ;
            return (
                  mS ?
                  <div>
                  <MediaStreamRecC1 
                  src={mS }
                  restartPeriodMillis={13 * 60 * 1000 }
                  />
                  <MediaStreamVideoC 
                  src={videoS }
                  autoPlay
                  controls
                  />
                  </div>
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