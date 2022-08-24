

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








const useMediaReadStreamDemoBackForthColorAnim = (
   function (...[{ period, outputRefreshRate }] : [
      {
         period: number ;
         outputRefreshRate: number ;
      } ,
   ]) { 
      const c = (
         useMemo(() => (
            document.createElement("canvas")
         ), [] )
      ) ;
      useInsertionEffect((): void => {
         c.width = 256 ;
         c.height = 256 ;
         ;
      }, [c] );
      const cc = (
         useMemo(() => (
            c.getContext("2d")!
         ), [c] )
      ) ;
      useAnimationFrameRefreshEffect((...[_1 ]: Parameters<FrameRequestCallback> ) => {
         const t = (
            (
               performance.now() 
               / 1000
            )
         );
         const s = (() => {
            const v0 = t ;
            const v1 = (v0 / period ) % 1 ;
            const v2 = v1 * 2 ;
            const v3 = (
               Math.min(v2, 2 + -v2 )
            ) ;
            return (
               v3
            ) ;
         })() ;
         ;
         {
            ;
            cc.clearRect(0, 0, cc.canvas.width, cc.canvas.height ) ;
            cc.fillStyle = (
               `rgb(0, 0, ${Math.min(0xFF, s * 0x100)} )`
            ) ;
            cc.fillRect(0, 0, cc.canvas.width, cc.canvas.height ) ;
         }
      }, [period, cc ] );
      return (
         useMemo(() => (
            c.captureStream(outputRefreshRate )
         ), [c, outputRefreshRate ])
      ) ;
   }
) ;






export {
   useMediaReadStreamDemoBackForthColorAnim ,
} ;