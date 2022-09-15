

// import util from "util" ;
import { BoundedIdentityFunction, IterableOps, EitherBothSetOrBothUnset, } from "./generalUse11";
import { parseOptionalWidthAndHeight, } from "./parseOptionalWidthAndHeight";
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
/**    
 * 
 */
const useMediaReadStreamFromOfStillCssFill: (
   /**   
    * optional type-param provided,
    * to allow users to specify `"solid"`, nevessary to maintain *autocomplete*,
    * defaulting to `true` which will allow all which {@link CanvasRenderingContext2D.fillStyle} allows
    * 
    */
   <SrcType extends true | "solid" = true >(...args: [
      code: (
         NonNullable<(
            React.CSSProperties["backgroundColor"]
            |
            ([SrcType] extends ["solid"] ? never : CanvasRenderingContext2D["fillStyle"] )
         )>
      ) ,
      otherProperties?: (
         {}
         &
         Partial<{ width: number ; height: number ; }>
      ) ,
   ] )
   => ReturnType<typeof useMediaReadStreamedCanvasWithProperties >[0 ]
) = (
   (code, properties = {} ,) => {
      const {
         width ,
         height ,
      } = parseOptionalWidthAndHeight(properties ) ;
      const [cp, { cc, }, ] = (
         useMediaReadStreamedCanvasWithProperties({
            width ,
            height ,
            captureRate: 5, // for still imagery this will make little sense
         })
      ) ;
      useInsertionEffect(() => {
         cc.fillStyle = (
            code
         ) ;
         cc.fillRect(0, 0, width, height ) ;
      } , [cc, code ] ) ;
      return (
         cp
      ) ;
   }
) ;



export {
   useMediaReadStreamedCanvasWithProperties ,
   useMediaReadStreamFromOfStillCssFill ,
} ;