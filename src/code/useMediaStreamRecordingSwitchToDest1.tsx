

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
      src: null | MediaRecorder, 
      options: {
         outputSizeLimit: number ;
      } ,
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
            const listener = (e: BlobEvent ): void => {
               // TODO
               blobSeqBuffer.push(e.data ) ;
            } ;
            src.addEventListener("dataavailable", listener ) ;
            ;
            return () => {
               src.removeEventListener("dataavailable", listener ) ;
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
               onSwitch({ data: allData , successful: false, error: [] }) ; 
            }
         }
      } , [src ] ) ;
      ; 
   }
)  ;





export {
   mediaRecordingDataCollect ,
} ;