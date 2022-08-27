




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
import { K } from "./commonElements";
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
import { useFileListInputState } from "./useFileUpload1";



import { BasicEmbedObjectPreview } from "./useFilePreview1";











const useFileListInputState1 = (
   function (...a : Parameters<typeof useFileListInputState> ) {
      const [v, input1 ] = (
         useFileListInputState(...a )
      ) ;
      const prv = (
         <div style={{ background: "black", color: "white", padding: `0.125em` }}>
            <div style={{ backgroundColor: "lightgray", color: "black" }}>
               { input1 }
            </div>
            <div style={{ minHeight: "12em" }}>
               <ul>
               {(
                  v
                  .map((f: File , i ) => (
                     <K key={f.name || i }>
                        <li>
                        <BasicEmbedObjectPreview 
                        value={f }
                        />
                        <p>
                           <code>
                              { f.name }
                           </code>
                        </p>
                        </li>
                     </K>
                  ))
               )}
               </ul>
            <p> === </p>
            </div>
         </div>
      ) ;
      return [
         v ,
         prv ,
      ] as const ;
   }
) ;
const FileSelectDialogueExample = (
   function (): React.ReactElement {
      return (
         useFileListInputState1({ multiple: true })
         [1 ]
      ) ;
   }
) ;





export {
   useFileListInputState1 , 
   FileSelectDialogueExample ,
} ;