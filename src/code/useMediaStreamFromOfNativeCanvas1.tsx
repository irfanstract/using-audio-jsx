

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
import { useWindowActivityStatus } from "./useWindowFocusState";











const useMediaReadStreamedCanvasWithProperties: (
   (properties : {
      width: number ;
      height: number ;
      captureRate: number ;
   } ) 
   => [
      MediaStream , 
      { cc: CanvasRenderingContext2D ; c: HTMLCanvasElement ; } ,
   ]
) = (
   ({ 
      width: requestedWidth, 
      height: requestedHeight, 
      captureRate: outputRefreshRate, 
   }) => {
      ;
      const c = (
         useMemo(() => (
            document.createElement("canvas")
         ), [] )
      ) ;
      useInsertionEffect((): void => {
         c.width = requestedWidth ;
         c.height = requestedHeight ;
         ;
      }, [c] );
      const cc = (
         useMemo(() => (
            c.getContext("2d")
            ||
            CanvasRenderingContext2D.prototype
         ), [c] )
      ) ;
      // TODO
      const cp = (
         useMemo(() => (
            c.captureStream(outputRefreshRate )
         ), [c, outputRefreshRate ])
      ) ;
      return [
         cp ,
         { cc, c, } ,
      ] ;
   }
) ;



export {
   useMediaReadStreamedCanvasWithProperties ,
} ;