




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
import { useCtxtualRoutingState } from "./useWindowLocationHrefBasedRouting1";
import { useBlobConcatState1 } from "./useMediaStreamBlobConcatState1";
import { useMediaReadStreamDemo } from "./useMediaStreamDemo1";
import { useMediaStreamRec } from "./useMediaStreamRecordingSwitchToDest1";



import { AudioLoopDemoApp } from "./audioLoopDemo";
import { MediaStreamRecDemo1 } from "./useMediaStreamRecDemo1";











const AllDemoes = (
   function () {
      const {
         presentlyChoice: wh1 ,
         renderChoiceLink ,
         windowHref ,
      } = (
         useCtxtualRoutingState()
      ) ;
      const e = ((): React.ReactElement => {
         ;
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
               {(
                  renderChoiceLink({ value: "AudioLoopDemo" }, (
                     <> AudioLoopDemo </>
                  ))
               ) }
               {(
                  renderChoiceLink({ value: "MediaStreamRecDemo" }, (
                     <> Media Stream Rec Demo </>
                  ))
               ) }
            </div>
         ) ;
      })() ;
      return (
         <div>
            <p>  
               <code>{ windowHref }</code>
            </p>
            { e }
         </div>
      ) ;
   }
) ;





export default AllDemoes ;