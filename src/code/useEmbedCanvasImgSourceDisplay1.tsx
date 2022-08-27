

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







type CanvasImageSourceX = (
   CanvasImageSource 
   & 
   Record<"width" | "height", number > 
) ;
const useNativeImageSourceBlit1 = (
   function (...[src, validityDeps] : [
      src: CanvasImageSourceX, 
      validityDeps: React.DependencyList ,
   ]) : [{}, React.Dispatch<null | HTMLCanvasElement> ] {
      const [cH, setCHandle] = (
         useState<null | HTMLCanvasElement >(null )
      ) ;
      const cCH: null | CanvasRenderingContext2D = (
         cH ?
         cH.getContext("2d")!
         : null
      ) ;
      useInsertionEffect((): void => {
         if (cCH ) {
            cCH.drawImage(src , 0, 0 ) ;
         }
      } , validityDeps ) ;
      ;
      return [
         {} ,
         setCHandle ,
      ] ;
   }
) ;
// TODO
const NativeImageSourceDisplay1 = (
   function ({ src, validityDeps, ...props1 } : (
      { 
         src: CanvasImageSourceX ; 
         validityDeps: React.DependencyList ; 
      }
      &
      JSX.IntrinsicElements["canvas"]
   ) ): React.ReactElement {
      const [{}, setCHandle ] = (
         useNativeImageSourceBlit1(src, validityDeps )
      ) ;
      return (
         <canvas 
         ref={setCHandle }
         {...{ width: src.width, height: src.height, ...props1 } }
         />
      ) ;
   }
) ;




export {
   NativeImageSourceDisplay1 ,
   useNativeImageSourceBlit1 ,
} ;