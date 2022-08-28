

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
import {  } from "./useMediaStreamBlobConcatState1";
import { useObjectURL } from "./useEmbedSrcObjectUrl";
import { BlobStateVideoPlayer } from "./useEmbedSrcStateRefreshVideoPlayer1";
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
         rPeriodMillis: 2 * 1000 ,
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
         useReducer((...[  ,v1 ] : [boolean, boolean]) => v1 , false )
      ) ;
      return (
         ON 
         ?
         <div style={{ display: "flex", flexDirection: "column" }}>
            <p>
            <button type="button" role={"switch" } onClick={() => enable(false ) } >
               Close 
            </button>
            </p>
            <MediaStreamRecDemo11 />
         </div>
         :
         (
            <p>
            <button type="button" role={"switch" } onClick={() => enable(true ) } >
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