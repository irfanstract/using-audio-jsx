

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
import { useWindowActivityStatus } from "./useWindowFocusState";








const useCanvas2DBackForthSolidColorAnim1 = (
   function (...[
      [{ period, }, colorForS, ], 
      [cc, { outputRefreshRate, loopDependencies, }, ], 
   ] : [
      semanticConstraints: [
         {  
            period: number ;
         } ,
         (
            (s: number)
            => NonNullable<CanvasRenderingContext2D["fillStyle"]>
         ) ,
      ] ,
      technicalConstraints: [
         CanvasRenderingContext2D ,
         {
            outputRefreshRate: number ;
            loopDependencies: React.DependencyList ;
         } ,
      ] ,
   ]) {
      ;
      /**   
       * 
       * @todo
       * this snippet does not account for possible `transform` of `cc`.
       */
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
            const v3 = (
               Math.min(v1 * 2, 2 + -(v1 * 2) )
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
               colorForS(s )
            ) ;
            cc.fillRect(0, 0, cc.canvas.width, cc.canvas.height ) ;
         }
      }, [period, cc, ...loopDependencies, ] );
   }
) ;



export {
   useCanvas2DBackForthSolidColorAnim1 , 
} ;