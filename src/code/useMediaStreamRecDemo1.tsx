

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
import { usePushAndTruncateStateToLastN, } from "./useMediaStreamBlobConcatState1";
import { useObjectURL } from "./useEmbedSrcObjectUrl";
import { blobConfirmUsrSave, } from "./programmaticEmbedSrcObjectUsrSave";
import { BlobSeqDisplay } from "./useMediaEmbedSrcSeqShow1";
import { useMediaStrmPollNextAsBlob } from "./useMediaStreamAsBlobSeq1";
import { InterlaceBlobSeqVideoPlayer } from "./useEmbedSrcStateRefreshVideoPlayer1";
import { useMediaReadStreamDemo } from "./useMediaStreamDemo1";
import { useMediaStreamRec } from "./useMediaStreamRecordingSwitchToDest1";
function useLastNonNullNHistSequencing<A extends (object | true | symbol )>(...[{ nLimit: n, }, v,] : [
   { nLimit: number ; } ,
   null | A ,
] ) {
   const [sqRetained, sqPush] = (
      usePushAndTruncateStateToLastN<A >(n , { initially: [] } )
   ) ;
   useEffect(() => {
      v && sqPush(v ) ;
   } , [v ] ) ;
   return {
      sqRetained: sqRetained ,
   } ;
}







const MediaStreamInterlaceBlobbingDemo11 = (
   function MediaStreamRecDemoC() {
      const src = (
         useMediaReadStreamDemo()
      ) ;
      const presentlyPeek = (
         useMediaStrmPollNextAsBlob(src )
      ) ;
      const {
         sqRetained: lastNPeeks ,
      } = (
         (
            useLastNonNullNHistSequencing
         )<Blob >({ nLimit: 0x8, }, presentlyPeek, )
      ) ;
      return (
         <div>
            <p> <i> Streaming Video </i> </p>
            <InterlaceBlobSeqVideoPlayer 
            value={presentlyPeek }
            />
         </div> //
      ) ;
   }
) ;
const DownloadBtn: (
      React.FC<(
         Omit<JSX.IntrinsicElements["span"] , "ref" | "onClick" >
         & { href : Blob ; dlName : string ; }
      )>
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
const MediaStreamRecDemo11 : (
   React.FC<{}>
) = (() => {
   return (
      function MediaStreamRecDemoImpl() {
         const src = (
            useMediaReadStreamDemo()
         ) ;
         const restartPeriodMillis = 15 * 1000 ;
         return (
            <MediaStreamRecC 
            src={src }
            restartPeriodMillis={restartPeriodMillis }
            />
         ) ;
      }
   ) ;
})() ;
/**   
 * keep in mind that 
 * by {@link React.Key unmounting this Component } 
 * your app will lose the rec previously retained so far.
 */
const MediaStreamRecC: (
   React.FC<(
      // the property won't need to be 'optional' since 
      { src : MediaStream ; restartPeriodMillis ?: number ; }
   )>
) = (
      function ({ 
         src, 
         restartPeriodMillis = (
            // TODO
            15 * 60 * 1000
         ) , 
      }) {
         ;
         const {
            fullLengthRecorded: recorded ,
         } = useMediaStreamAsFullLengthBlob(src , { restartPeriodMillis: restartPeriodMillis, } ) ;
         const SRC_DCC = (
            useDepsChgCount({}, [src] )
         ) ;
         const RECORDED_DCC = (
            useDepsChgCount({}, [recorded] )
         ) ;
         return useDeferredValue((
            <div>
               { recorded && (() => {
                  const dlName = (
                     `recorded_media_blue_${ recorded.size }.mp4`
                  ) ;
                  return (
                     <DownloadBtn 
                     title={dlName }
                     href={recorded } 
                     dlName={dlName }
                     />
                  ) ;
               })() }
               <pre>
                  DEBUG :
                  { JSON.stringify({ SRC_DCC, RECORDED_DCC, }, null, 2 ) }
               </pre>
            </div>
         )) ;
      }
) ;
const useMediaStreamAsFullLengthBlob: (
   (src: null | MediaStream , options: {
      restartPeriodMillis : number ;
   } ) 
   => { fullLengthRecorded : null | Blob ; }
) = (
   function (src , { restartPeriodMillis , } ) {
      ;
      const [fullLengthRecorded, setRecdV] = (
         useState<null | Blob>(null )
      ) ;
      const srcRecProcH = (
         // TODO
         useMediaStreamRec(src , {
            outputSizeLimit: 200 * 1024 * 1024 ,
            restartPeriodMillis: restartPeriodMillis ,
            reinitDeps: [src ] ,
            onProgress: (
               ({ data: updatedAggregate }) => {
                  setRecdV((existingAggregate ) => (updatedAggregate || existingAggregate ) ) ;
               }
            ) ,
         } , (
            ({ data: updatedAggregate }) => {
               setRecdV((existingAggregate ) => (updatedAggregate || existingAggregate ) ) ;
            }
         ) )
      ) ;
      ;
      return {
         fullLengthRecorded ,
      } ;
   }
) ;
const {
   MediaStreamRecDemo1 ,
   MediaStreamRecC1 ,
} = (() => {
   function useRenderWithOnOff(...[payload ] : [React.ReactElement] ): React.ReactElement {
      const [ON, enable ] = (
         useReducer((...[  ,v1 ] : [boolean, boolean]) => v1 , false )
      ) ;
      return (
         ON 
         ?
         <div style={{ display: "flex", flexDirection: "column-reverse" }}>
            { payload }
            <p>
            <button type="button" role={"switch" } onClick={() => enable(false ) } >
               Close 
            </button>
            </p>
         </div>
         :
         (
            <p>
            <button type="button" role={"switch" } onClick={() => enable(true ) } >
               Start 
            </button>
            </p>
         ) 
      ) ;
   }
   return {
      MediaStreamRecDemo1 : (
         () => (
            useRenderWithOnOff((
               <MediaStreamRecDemo11 />
            ))
         )
      ) ,
      MediaStreamRecC1 : (
         (...[props ] : Parameters<typeof MediaStreamRecC> ) => (
            useRenderWithOnOff((
               <MediaStreamRecC {...props} />
            ))
         )
      ) ,
   } ;
})() ;




export {
   MediaStreamRecDemo1,
   MediaStreamRecDemo11,
   useMediaStreamAsFullLengthBlob ,
} ;