

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
 * __it's rather easy 
 * to *write apps which retains dangling-references or {@link URL.revokeObjectURL dead-links}* 
 * if/whilever *the app uses this `useYyy`*__.
 * due to scheduling of {@link URL.revokeObjectURL },
 * *caching* of {@link JSX element}(s) using the (returned ) `URL` shall be avoided.
 * __to avoid such gotchas__ , 
 * - for {@link Blob }s,
 *   switch to `blobConfirmUsrSave(...)` (`./useEmbedSrcObjUsrSaveBtn`) solution
 * - for {@link MediaSource }s,
 *   use {@link React.useState *cb-ref*s (*callback-ref*) }, 
 *   pass the *ref* into the intended `<video>`, and 
 *   {@link HTMLVideoElement assign its `srcStream` } directly.
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
 * 
 * @deprecated
 */
const useObjectURL : (
   (...[v] : [null | Blob ] )
   => string
) = (
   function (...[v] ) {
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