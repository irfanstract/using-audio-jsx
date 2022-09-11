

// import util from "util" ;
import { BoundedIdentityFunction, IterableOps, Immutable, } from "./generalUse11";
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
import { useMediaStreamRec } from "./useMediaStreamRecordingSwitchToDest1";







/**    
 * this `useYyy`
 * 1) is meant for use with {@link useLayoutEffect } or {@link useInsertionEffect }
 * 1) will return 
 *    either `null` or 
 *    a ({@link URL.createObjectURL *playable* }) {@link Blob } playing-back the last-three-second from/of it 
 * 2) will cause 
 *    {@link React.useLayoutEffect *periodic refresh* } 
 *    accompanied by *update* in the return-value
 * 
 */
const useMediaStreamAsInterlaceAsBlob : (
   (src: null | MediaStream ) 
   => (null | Blob )
) = (
   (src ) => (
      useMediaStrmPollNextAsBlob(src )
   )
) ;
/**    
 * this `useYyy`
 * 1) will return 
 *    either `null` or 
 *    a ({@link URL.createObjectURL *playable* }) {@link Blob } playing-back the last-three-second from/of it 
 * 2) will cause 
 *    {@link React.useLayoutEffect *periodic refresh* } 
 *    accompanied by *update* in the return-value
 * 3) is meant for use with {@link useLayoutEffect } or {@link useInsertionEffect }
 * 
 */
const useMediaStrmPollNextAsBlob = (
   function useXRecBlobLiveImpl(...[src] : [src : null | MediaStream ] ) {
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




export {
   useMediaStreamAsInterlaceAsBlob ,
   useMediaStrmPollNextAsBlob ,
} ;