

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
import { BlobStateVideoPlayer } from "./useEmbedSrcStateRefreshVideoPlayer1";
import { useMediaReadStreamDemo } from "./useMediaStreamDemo1";
import { useMediaStreamRec } from "./useMediaStreamRecordingSwitchToDest1";







const selectedFilesIn = (
   function (...[ee] : [HTMLInputElement] ): readonly File[] {
      return (
         Array.from(ee.files || [] )
      ) ;
   }
) ;
const useFileListInputState = (
   function (...[{ multiple: multipleSelectiveMode }] : [
      { multiple : boolean ; }
   ]): [readonly File[], React.ReactElement ] {
      const ident = (
         React.useId()
      ) ;
      const fileInputNativeId = (
         ident + "-FILE"
      ) ;
      const [fileList, setFileList ] = (
         useState<readonly File[] >([] )
      ) ;
      const fileDialogue = (
         <p style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor={fileInputNativeId }>
               File(s):
            </label>
            <aside style={{ display: "flex", flexDirection: "column" }}>
            <button type="button" onClick={() => setFileList(() => [] ) } >
               Reset 
            </button>
            </aside>
            <input 
            id={fileInputNativeId }
            type="file"
            multiple={multipleSelectiveMode }
            onInput={(evt): void => {
               const ee = (
                  evt.currentTarget
               ) ;
               const files = (
                  selectedFilesIn(ee )
               ) ;
               setFileList(() => (files || [] ) ) ;
            } }
            />
         </p>
      ) ;
      return [
         fileList ,
         fileDialogue ,
      ] ;
   }
) ;





export {
   useFileListInputState ,
} ;