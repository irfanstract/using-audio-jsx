

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
import { 
   useCanvas2DBackForthSolidColorAnim1, 
   
} from "./useEmbedCanvas2DBackForthAnim1";
import { useWindowActivityStatus } from "./useWindowFocusState";










/**    
 * back-and-forth.
 * `hue` anim hence the rainbow colours transition.
 */
const useCanvas2DRainbowColorsShowAnim = (
   function (...[{ period, }, [cc, { outputRefreshRate, }, ], ] : [
      semanticProperties : { period : number ; } ,
      technicalProperties : [
         CanvasRenderingContext2D ,
         {
            outputRefreshRate : number ;
         } ,
      ] ,
   ]) {
      ;
      return (
         useCanvas2DBackForthSolidColorAnim1(
            [
               { period, }, 
               (s ) => (
                  `hsl(${+(IterableOps.clamp(s, 0, 1) * 360 ).toFixed(0 ) }deg, 100%, 50% )`
               ), 
            ], 
            [cc, { outputRefreshRate, loopDependencies: [] , }, ],
         )
      ) ;
   }
) ;




export {
   useCanvas2DRainbowColorsShowAnim ,
} ;