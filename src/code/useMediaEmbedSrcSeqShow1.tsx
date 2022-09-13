

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
import { useClassInstanceHashFnc, } from "./usingObjectIdentityHashFnc1";
import { useDepsChgCount } from "./usingComponentMountRenderStat";      
import {  } from "./useMediaStreamBlobConcatState1";
import { useObjectURL } from "./useEmbedSrcObjectUrl";
import { InterlaceBlobSeqVideoPlayer } from "./useEmbedSrcStateRefreshVideoPlayer1";







const BlobSeqDisplay = (
   function ({ value: seq, type = "files" } : (
      { value : readonly Blob[] ; type ?: "files" | "av-by-keyframes" ; }
   )) {
      const idForBlob: (
         // either consistently return number or consistently return string.
         // so not simply "(: Blob) => (number | string)" . :D
         (
            ((src: Blob ) => number )
            |
            ((src: Blob ) => string )
         )
      ) = (
         useClassInstanceHashFnc<Blob>()
      ) ;
      return (
         <div style={{ overflowInline: "auto" }}>

            <p>
               Video Clip Sequence
            </p>

            <div style={{ fontSize: "60%", }} >
            { (() => {
            ;
            const itemsR = (
               seq
               .map((v, i: number ): (
                  (
                     Required<(
                        Parameters<typeof KeyframeSeqCK >[0 ]
                     )>["children"] 
                  )[number]
               ) => {
               ;
               const key = (
                  idForBlob(v)
               ) ;
               const div1 = (
                  <div>
                  <div style={{ display: "flex", }}>
                     <InterlaceBlobSeqVideoPlayer 
                     value={v }
                     />
                  </div>
                  <div>
                  <div style={{ overflow: "hidden", }}>
                     <code>
                     { (v instanceof File ) ? v.name : null }/{ v.type }/{ v.size }
                     </code>
                  </div>
                  <p>
                     BLOB ID : { key } ;
                  </p>
                  </div>
                  </div>
               ) ;
               return [{ key }, div1 ] ;
               })
            ) ;
            if (type === "av-by-keyframes") {
               ;
               return (
                  <KeyframeSeqCK>
                  { itemsR }
                  </KeyframeSeqCK>
               ) ;
            }
            return (
               <ol>
               { (
                  itemsR
                  .map(([{ key }, e ]) => (
                     <li key={key } >
                        { e }
                     </li>
                  ) )
               ) }
               </ol>
            ) ;
            } )() }
            </div>
            
         </div>
      ) ;
   }
) ;
const KeyframeSeqCK = (
   (...[{ children: payload, } , ] : [
      {
         children : (
            readonly (
               readonly [{ key: React.Key ; } , React.ReactElement | null ] 
            )[]
         ) ;
      } ,
   ] ) => {
      ;
      return (
            <ol 
            style={{ 
               display: "flex", 
               flexDirection: "row", 
               listStyleType: "none", 
               padding: "none" ,
            }}
            >
            { (
               payload
               .map(([{ key }, div1 ], ) => (
                  <li 
                  key={key } 
                  style={{ 
                     width: "10em", 
                     height: "16em", 
                     display: "flex" ,
                     border: "0.05em solid cyan", 
                     borderRadius: "0.125em", 
                     margin: "0.125em",
                     background: "transparent",
                     flexDirection: "column",
                  }} 
                  >
                     { div1 }
                  </li>
               ) )
            ) }
            </ol>
      ) ;
   }
) ;



export {
   BlobSeqDisplay ,
} ;