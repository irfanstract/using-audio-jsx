

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
import { usePushAndTruncateStateToLastN, } from "./useMediaStreamBlobConcatState1";
import { useObjectURL } from "./useEmbedSrcObjectUrl";
import { BlobSeqDisplay } from "./useMediaEmbedSrcSeqShow1";
import { useMediaStrmPollNextAsBlob } from "./useMediaStreamAsBlobSeq1";
import { InterlaceBlobSeqVideoPlayer } from "./useEmbedSrcStateRefreshVideoPlayer1";
import { useMediaReadStreamDemo } from "./useMediaStreamDemo1";
import { useMediaStreamRec } from "./useMediaStreamRecordingSwitchToDest1";
function useLastNonNullNHistSequencing<A extends (object | true | symbol )>(...[{ nLimit: n, }, v,] : [
   { nLimit: number ; } ,
   null | A ,
] ) {
   const [sqRetained, sqPush] = (
      usePushAndTruncateStateToLastN<A >(n , { initially: [] } )
   ) ;
   useEffect(() => {
      v && sqPush(v ) ;
   } , [v ] ) ;
   return {
      sqRetained: sqRetained ,
   } ;
}







const MediaStreamRecDemo11 = (
   function MediaStreamRecDemoC() {
      const src = (
         useMediaReadStreamDemo()
      ) ;
      const presentlyPeek = (
         useMediaStrmPollNextAsBlob(src )
      ) ;
      const {
         sqRetained: lastNPeeks ,
      } = (
         (
            useLastNonNullNHistSequencing
         )<Blob >({ nLimit: 0x8, }, presentlyPeek, )
      ) ;
      return (
         <div>
            <p> <i> Streaming Video </i> </p>
            <InterlaceBlobSeqVideoPlayer 
            value={presentlyPeek }
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
         <div style={{ display: "flex", flexDirection: "column-reverse" }}>
            <MediaStreamRecDemo11 />
            <p>
            <button type="button" role={"switch" } onClick={() => enable(false ) } >
               Close 
            </button>
            </p>
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