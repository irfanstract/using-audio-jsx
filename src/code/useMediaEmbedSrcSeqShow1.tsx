

// import util from "util" ;
import { BoundedIdentityFunction, IterableOps, Immutable, } from "./generalUse11";
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
import { useObjectURL } from "./useEmbedSrcObjectUrl";
import { InterlaceBlobSeqVideoPlayer } from "./useEmbedSrcStateRefreshVideoPlayer1";







const BlobSeqDisplay = (
   function ({ value: seq } : (
      { value : readonly Blob[] ; }
   )) {
      return (
         <div style={{ overflowInline: "auto" }}>
            <p>
               Video Clip Sequence
            </p>
            <ol 
            style={{ 
               display: "flex", 
               flexDirection: "row", 
               listStyleType: "none", 
               padding: "none" ,
            }}
            >
            { (
               seq
               .map((v, i: number ) => (
                  <li key={i} style={{ width: "6em", height: "6em", }} >
                     <code>{ (v instanceof File ) ? v.name : null }/{ v.type }/{ v.size }</code>
                     <InterlaceBlobSeqVideoPlayer 
                     value={v }
                     />
                  </li>
               ) )
            ) }
            </ol>
         </div>
      ) ;
   }
) ;



export {
   BlobSeqDisplay ,
} ;