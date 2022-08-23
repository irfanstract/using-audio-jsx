




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
import { useWindowLocationHref } from "./useWindowLocationHrefChgEffect";
import { useBlobConcatState1 } from "./useMediaStreamBlobConcatState1";
import { useMediaReadStreamDemo } from "./useMediaStreamDemo1";
import { useMediaStreamRec } from "./useMediaStreamRecordingSwitchToDest1";



import { AudioLoopDemoApp } from "./audioLoopDemo";
import { MediaStreamRecDemo1 } from "./useMediaStreamRecDemo1";











const AllDemoes = (
   function () {
      const windowHref = (
         useWindowLocationHref()
      ) ;
      const wh1 = (
         (
            windowHref
            .match(/\#(.*)$/)?.[1 ]
            ||
            ""
         )
      ) ;
      if (wh1 === "AudioLoopDemo") {
         return (
            <AudioLoopDemoApp />
         ) ;
      } ;
      if (wh1 === "MediaStreamRecDemo") {
         return (
            <MediaStreamRecDemo1 />
         ) ;
      } ;
      return (
         <div>
            <a href="#AudioLoopDemo">
               Audio Loop Demo 
            </a>
            <a href="#MediaStreamRecDemo">
               Media Stream Rec Demo
            </a>
         </div>
      ) ;
   }
) ;





export default AllDemoes ;