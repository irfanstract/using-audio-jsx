

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







/**    
 * calls {@link URL.createObjectURL } and correspondingly 
 * schedules {@link URL.revokeObjectURL } {@link useMemo on unmount }.
 * 
 * due to scheduling of {@link URL.revokeObjectURL },
 * *caching* of {@link JSX element}(s) using the (returned ) `URL` shall be avoided.
 * 
 * if *v* is `null`, then the return-value will be *blank URL*.
 * this opportunity is necessary as `useYyy` calls can't be conditional.
 * 
 * @example
 * {
 *  // DO NOT cache element(s) using this URL !
 *  const url = useObjectURL(...) ;
 *  return (
 *   // awful idea !
 *   useDeferredValue((
 *     <a target="_blank" href={url } >
 *       VIEW-or-DOWNLOAD
 *     </a>
 *   ))
 *  ) ;
 * }
 */
const useObjectURL = (
   function (...[v] : [null | Blob ] ): string {
   /**    
    * {@link URL.createObjectURL } 
    * should be accompanied with corresponding {@link URL.revokeObjectURL }.
    * for this reason, 
    * {@link useMemo } is not applicable as 
    * {@link useMemo} does not provide means for *disinit*, and
    * a combination of {@link useLayoutEffect } and {@link useState `setState(...)` } is an alternative.
    */
   {
      ;
      const [vUrl1, setVURl ] = (
         useState<string>("" )
      ) ;
      React.useLayoutEffect(() => {
         const vUrl = (
            v ?
            URL.createObjectURL(v )
            : ""
         ) ;
         setVURl(() => vUrl ) ;
         return () => {
            URL.revokeObjectURL(vUrl) ;
         } ;
      }, [v]);
      ;
      return (
         vUrl1
      ) ;
   }
   }
) ;




export {
   useObjectURL ,
} ;