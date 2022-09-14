

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
import { useDeferredTrue } from "./usingDeferredBoolean";
import { AmtOfSecondsC, } from "./timeAmountDisplayComponent";
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
import { blobConfirmUsrSave, } from "./programmaticEmbedSrcObjectUsrSave";
import { InterlaceBlobSeqVideoPlayer } from "./useEmbedSrcStateRefreshVideoPlayer1";












type FileDownloadBtnProperties = (
   Omit<JSX.IntrinsicElements["span"] , "ref" | "onClick" >
   & { href : Blob ; dlName : string ; }
) ;
const FileDownloadBtnProperties = {} ; // TS-1205 
/**   
 * 
 * @deprecated
 */
type FileDownloadBtnComponent = (
   React.FC<(
      Omit<JSX.IntrinsicElements["span"] , "ref" | "onClick" >
      & { href : Blob ; dlName : string ; }
   )>
) ;
const FileDownloadBtnComponent = {} ; // TS-1205

const VideoFileDownloadBtn: (
   React.FC<FileDownloadBtnProperties >
) = (
      ({ href: payload, dlName, style: appGivenStyle, ...props }) => {
         const url = (
            useObjectURL(payload )
         ) ;
         return (
            <div>
               <video 
               src={url }
               style={{ height: "7em", width: "7em", }}
               />
               <button
               onClick={() => {
                  blobConfirmUsrSave(payload , {
                     intendedFileNameIncludingExt : (
                        dlName
                     ) ,
                  } ) ;
               } } 
               style={{
                  minWidth: "7em" ,
                  ...appGivenStyle ,
               }}
               {...props }
               >
                  Download
               </button>
            </div>
         ) ;
      }
) ;

const FileDownloadBtn: (
   FileDownloadBtnComponent
) = VideoFileDownloadBtn ;




export {
   FileDownloadBtnProperties ,
   FileDownloadBtnComponent ,
   VideoFileDownloadBtn ,
   FileDownloadBtn ,
} ;