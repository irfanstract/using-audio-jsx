

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
import { useObjectURL } from "./useEmbedSrcObjectUrl";







/**   
 * for use with `useMediaStrmPollNextAsBlob` - 
 * pass the return-value as this *component*'s `value` when applying.
 */
const InterlaceBlobSeqVideoPlayer = (
   function ({ value: v } : { value: null | Blob ; } ) {
      ;
      const vUrl = (
         useObjectURL(v )
      ) ;
      return (
      /**    
       * `<video>`s are rather *heavyweight*.
       */
      React.useDeferredValue((
         <div>
            <video 
            autoPlay
            src={vUrl }
            />
            <pre style={{ overflow: "hidden" }}>
               { vUrl }
            </pre>
         </div>
      ))
      ) ;
   }
) ;




export {
   InterlaceBlobSeqVideoPlayer ,
} ;