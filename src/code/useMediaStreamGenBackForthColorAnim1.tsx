

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
import { 
   useCanvas2DBackForthSolidColorAnim1, 
   
} from "./useEmbedCanvas2DBackForthAnim1";
import { 
   useCanvas2DRainbowColorsShowAnim,
   
 } from "./useEmbedCanvas2DBackForthSolidColorAnim1";
import { useWindowActivityStatus } from "./useWindowFocusState";
import { useMediaReadStreamedCanvasWithProperties, } from "./useMediaStreamFromOfNativeCanvas1";








const useMediaReadStreamDemoBackForthColorAnim = (
   function (...[{ period, outputRefreshRate }] : [
      {
         period: number ;
         outputRefreshRate: number ;
      } ,
   ]) { 
      const [
         cp ,
         { cc, c, } ,
      ] = (
         useMediaReadStreamedCanvasWithProperties({
            width: 256 ,
            height: 256 ,
            captureRate: outputRefreshRate,
         })
      ) ; //
      useCanvas2DRainbowColorsShowAnim({ period, }, [cc, { outputRefreshRate, }, ], ) ;
      return (
         cp
      ) ;
   }
) ;






export {
   useMediaReadStreamDemoBackForthColorAnim ,
} ;