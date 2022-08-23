

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
import { useSeqState } from "./useSeqState";
import { usingInterval, useIntervalDeferredValue, useAnimationFrameRefreshEffect } from "./usingTimeoutOrInterval"; 
import { 
    useCanForceRefresh , 

    useRefreshByInterval1 ,  
    useRefreshByInterval ,  
 
} from "./usingIntervalRefresh";      
import { useEventTarget } from "./usingTimeoutOrInterval";
import { useDepsChgCount } from "./usingComponentMountRenderStat";      
import { useBlobConcatState1 } from "./useMediaStreamBlobConcatState1";
import { useMediaReadStreamDemo } from "./useMediaStreamDemo1";
import { useMediaStreamRec } from "./useMediaStreamRecordingSwitchToDest1";







const useXReceBlobSeq = (
   function useXRecBlobLiveImpl(src : null | MediaStream ) {
      ;
      const [v, setV ] = (
         useState<null | Blob>(null )
      ) ;
      useMediaStreamRec(src, {
         outputSizeLimit: 100 * 1E6 ,
         rPeriodMillis: 6 * 1000 ,
      }, ({ data, error }) => {
         const ERRO = (
            IterableOps.once(() => (
               console.warn("errors:")
            ))
         ) ;
         setV((data0 ) => data || data0 ) ;
         error.forEach((e) => (
            ERRO()
            ,
            console.warn(e) 
         )) ;
      }) ;
      ;
      return v ;
   }
) ;
const BlobStateVideoPlayer = (
   function ({ value: v } : { value: null | Blob ; } ) {
      ;
      const vUrl = (
         useMemo(() => (
            v ?
            URL.createObjectURL(v )
            : ""
         ) , [v] )
      ) ;
      return (
         <div>
            <video 
            autoPlay
            src={vUrl }
            />
            <pre style={{ overflow: "hidden" }}>
               { vUrl }
            </pre>
         </div>
      ) ;
   }
) ;
const MediaStreamRecDemo11 = (
   function MediaStreamRecDemoC() {
      const src = (
         useMediaReadStreamDemo()
      ) ;
      const v = (
         useXReceBlobSeq(src )
      ) ;
      return (
         <div>
            <p> <i> Streaming Video </i> </p>
            <BlobStateVideoPlayer 
            value={v }
            />
         </div> //
      ) ;
   }
) ;
const MediaStreamRecDemo1 = (
   () => {
      const [ON, enable ] = (
         useReducer(() => true, false )
      ) ;
      return (
         ON 
         ?
         <MediaStreamRecDemo11 />
         :
         (
            <p>
            <button type="button" role={"switch" } onClick={() => enable() } >
               Start 
            </button>
            </p>
         ) 
      ) ;
   }
) ;




export {
   MediaStreamRecDemo1,
} ;