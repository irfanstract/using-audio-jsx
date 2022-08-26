

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
import { useObjectURL } from "./useEmbedSrcObjectUrl";







/**    
 * *the selected files* would be returned.
 * note that, in some platforms,
 * {@link React.DOMAttributes.onInput the associated dialogue-box's "cancel" button will clear it };
 * it's therefore 
 * the calling-module's responsibility 
 * to check {@link HTMLInputElement.files `(const selectedFiles = ee.files ) && selectedFiles && selectedFiles.length`}.
 */
const selectedFilesIn = (
   function (...[ee] : [HTMLInputElement] ): null | readonly File[] {
      const files0 = (
         ee.files
      ) ;
      const files01 = (
         files0 
         && 
         /**   
          * "cancel" will 
          * cause {@link HTMLInputElement.files } to subsequently evaluate to `null` or `[]`.
          */
         files0.length 
      ) ;
      return (
         files01 ?
         Array.from(files0 )
         : null
      ) ;
   }
) ;
const useFileListInputState = (
   function (...[{ multiple: multipleSelectiveMode }] : [
      { multiple : boolean ; }
   ]): [readonly File[], React.ReactElement ] {
      const fileInputNativeId = (
         React.useId() + "-FILE"
      ) ;
      const [fileList, setFileList ] = (
         useState<readonly File[] >([] )
      ) ;
      const mainInpuElem = (
         (function useMainInputElemImpl1() {
            const [ee, setEe ] = (
               useState<null | HTMLInputElement >(null )
            ) ;
            const onInput = (
               (evt: React.FormEvent<HTMLInputElement>): void => {
                  if (ee) {
                     const selectedFiles = (
                        selectedFilesIn(ee )
                     ) ;
                     (
                        selectedFiles
                        &&
                        /**   
                         * "cancel" will 
                         * cause {@link HTMLInputElement.files } to subsequently evaluate to `null` or `[]`
                         */
                        selectedFiles.length
                        &&
                        setFileList(() => (selectedFiles || [] ) )
                     ) ;
                  }
               } 
            ) ;
            return (
               <input 
               ref={setEe }
               id={fileInputNativeId }
               type="file"
               multiple={multipleSelectiveMode }
               onInput={onInput }
               />
            ) ;
         })()
      ) ;
      const resetBtn = (
         <button type="button" onClick={() => setFileList(() => [] ) } >
            Reset 
         </button>
      ) ;
      const fileDialogue = (
         <p style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor={fileInputNativeId }>
               File(s):
            </label>
            <aside style={{ display: "flex", flexDirection: "column" }}>
            { resetBtn }
            </aside>
            { mainInpuElem }
         </p>
      ) ;
      return [
         fileList ,
         fileDialogue ,
      ] ;
   }
) ;





export {
   selectedFilesIn ,
   useFileListInputState ,
} ;