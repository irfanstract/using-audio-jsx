

// import util from "util" ;
import { BoundedIdentityFunction, } from "./generalUse11";
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
import { useSeqState } from "./useSeqState";
import { usingInterval, useIntervalDeferredValue } from "./usingTimeoutOrInterval"; 
import { 
    useCanForceRefresh , 

    useRefreshByInterval1 ,  
    useRefreshByInterval ,  
 
} from "./usingIntervalRefresh";      
import { useEventTarget } from "./usingTimeoutOrInterval";
import { useDepsChgCount } from "./usingComponentMountRenderStat";      
import { useBlobConcatState1 } from "./useMediaStreamBlobConcatState1";







type XErrorEvt = DOMException ;
const XErrorEvt = {} ;
interface SceneEndDataEvt { 
   data: null | Blob ; 
   successful : boolean ;
   error: (readonly XErrorEvt[] ) ; 
} ;
const SceneEndDataEvt = {} ;
const mediaRecordingDataCollect = (
   function (...[src, { outputSizeLimit } , onSwitch ] : [
      /**    
       * if this is `null`, then no *encoding process* will take place.
       */
      src: null | MediaRecorder, 
      options: {
         /**    
          * this define the upper bound for the resulting `Blob` `size`
          */
         outputSizeLimit: number ;
      } ,
      /**   
       * to be run when(ever) `src` changes
       */
      onSwitch : React.Dispatch<SceneEndDataEvt > ,
   ]) {
      // TODO
      useLayoutEffect(() => { 
         if (src ) {
            ;
            const blobSeqBuffer = (
               new Array<Blob>()
            ) ;
            const errorSeq = (
               new Array<XErrorEvt >()
            ) ;
            ;
            const dataListener = (e: BlobEvent ): void => {
               // TODO
               blobSeqBuffer.push(e.data ) ;
            } ;
            const errorEvtListener = (e: MediaRecorderErrorEvent ): void => {
               // TODO
               errorSeq.push(e.error ) ;
            } ;
            src.addEventListener("dataavailable", dataListener ) ;
            src.addEventListener("error", errorEvtListener ) ;
            ;
            return () => {
               src.removeEventListener("dataavailable", dataListener ) ;
               src.removeEventListener("error", errorEvtListener ) ;
               const allData = (
                  ((): null | Blob => {
                     // TODO
                     const sqV = [...blobSeqBuffer ] ;
                     if (sqV.length ) {
                        return (
                           new Blob(sqV, { type: sqV[0].type })
                        ) ;
                     } else {
                        return null ;
                     }
                  })()
               ) ;
               onSwitch({ data: allData , successful: false, error: [...errorSeq ] }) ; 
            }
         }
      } , [src ] ) ;
      ; 
   }
)  ;





export {
   mediaRecordingDataCollect ,
} ;