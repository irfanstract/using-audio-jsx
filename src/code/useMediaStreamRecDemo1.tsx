

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







const MediaStreamRecDemo11 = (
   function MediaStreamRecDemoC() {
      const src = (
         useMediaReadStreamDemo()
      ) ;
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
      const vUrl = (
         useMemo(() => (
            v ?
            URL.createObjectURL(v )
            : ""
         ) , [v] )
      ) ;
      return (
         <div>
            <p> <i> Streaming Video </i> </p>
            <div>
            <div
            style={{ display: "flex", flexDirection: "column", height: "8em", overflow: "hidden" }}
            >
            <video 
            autoPlay
            src={vUrl }
            style={{ background: "black" }}
            />
            </div>
            <pre style={{ overflow: "hidden" }}>
               { vUrl }
            </pre>
            </div>
         </div>
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