

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
import { useObjectURL } from "./useEmbedSrcObjectUrl";







/**   
 * for use with `useMediaStrmPollNextAsBlob` - 
 * pass the return-value as this *component*'s `value` when applying.
 */
const InterlaceBlobSeqVideoPlayer = (
   function ({ value: v } : { value: null | Blob ; } ) {
      ;
      const vUrl = (
         useObjectURL(v )
      ) ;
      return (
      /**    
       * `<video>`s are rather *heavyweight*.
       */
      React.useDeferredValue((
         <div 
         style={{ 
            display: "flex",   
            flexDirection: "column", 
            alignItems: "stretch" ,
            overflow: "hidden",
            
            border: "0.05em solid red",
            position: "relative",
            padding: "0.1em",
            boxSizing: "border-box" ,
            borderRadius: "1.5em", // check layout bug
            
         }} 
         >
            <video 
            autoPlay
            src={vUrl }
            style={{ 
               minWidth: "2em" ,
               minHeight: "2em" ,
               borderRadius: "0.25em", // check layout bug
               flex: "1 1 75% ",
               
               width: "unset", 
               height: "unset", 
               maxWidth: "calc(min(50vh, 50vw ) )" , 
               maxHeight: "calc(min(50vh, 50vw ) )", 
            }}
            />
            <pre style={{ flex: "1 1 25%", overflow: "auto" }}>
               { vUrl }
            </pre>
         </div>
      ))
      ) ;
   }
) ;




export {
   InterlaceBlobSeqVideoPlayer ,
} ;