

// import util from "util" ;
import { BoundedIdentityFunction, IterableOps, } from "./generalUse11";
import React, { 
   // Callbacks
   Dispatch,
   DispatchWithoutAction, 

   // Debug
   useDebugValue,
   // UseYyyEffect(s)
   useLayoutEffect, useEffect, 
   useInsertionEffect ,
   // UseImperativeHandle
   useImperativeHandle ,
   // UseMemo and UseReducer and UseRefObject
   useCallback, useMemo, useContext, useDeferredValue, 
   useState, useReducer, 
   useRef, 
} from "react";          
import { useDeferredTrue, } from "./usingDeferredBoolean";
import { AmtOfSecondsC, } from "./timeAmountDisplayComponent";
import { useSeqState, } from "./useSeqState";
import { usingInterval, useIntervalDeferredValue, useAnimationFrameRefreshEffect, } from "./usingTimeoutOrInterval"; 
import { 
    useCanForceRefresh , 

    useRefreshByInterval1 ,  
    useRefreshByInterval ,  
 
} from "./usingIntervalRefresh";      
import { useEventTarget, } from "./usingTimeoutOrInterval";
import { useDepsChgCount, } from "./usingComponentMountRenderStat";      
import { usePushAndTruncateStateToLastN, } from "./useMediaStreamBlobConcatState1";
import {  } from "./useEmbedSrcObjectUrl";
import { BlobSeqDisplay, } from "./useMediaEmbedSrcSeqShow1";
import { useMediaStrmPollNextAsBlob, } from "./useMediaStreamAsBlobSeq1";
import { InterlaceBlobSeqVideoPlayer, } from "./useEmbedSrcStateRefreshVideoPlayer1";
import { useMediaStreamRec, } from "./useMediaStreamRecordingSwitchToDest1";










const useMediaStreamAsFullLengthBlob: (
   (src: null | MediaStream , options: {
      restartPeriodMillis : number ;
   } ) 
   => { fullLengthRecorded : null | Blob ; }
) = (
   function (src , { restartPeriodMillis , } ) {
      ;
      const [fullLengthRecorded, setRecdV] = (
         useState<null | Blob>(null )
      ) ;
      const onLowLevelProgressOrEnd: (
         Parameters<typeof useMediaStreamRec >[2] & object
      ) = (
         ({ data: updatedAggregate }) => {
            setRecdV((existingAggregate ): null | Blob => (
               updatedAggregate 
               || existingAggregate 
            ) ) ;
         }
      ) ;
      const srcRecProcH = (function useImplRecProcH () {
         return (
            // TODO
            useMediaStreamRec(src , {
               outputSizeLimit: 200 * 1024 * 1024 ,
               restartPeriodMillis: restartPeriodMillis ,
               reinitDeps: [src ] ,
               onProgress: (
                  onLowLevelProgressOrEnd
               ) ,
            } , (
               onLowLevelProgressOrEnd
            ) )
         ) ;
      })() ;
      ;
      return {
         fullLengthRecorded ,
      } ;
   }
) ;
const useMediaStreamAsFullLengthBlob1: (
   (...args: Parameters<typeof useMediaStreamAsFullLengthBlob > ) 
   =>
   (
      ReturnType<typeof useMediaStreamAsFullLengthBlob > 
   )["fullLengthRecorded"]
) = (
   (...args ) => (
      useMediaStreamAsFullLengthBlob(...args )
      .fullLengthRecorded
   )
) ;



export {
   useMediaStreamAsFullLengthBlob ,
   useMediaStreamAsFullLengthBlob1 ,
} ;