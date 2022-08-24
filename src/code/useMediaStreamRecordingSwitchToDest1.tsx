

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
import { usingInterval, useIntervalDeferredValue } from "./usingTimeoutOrInterval"; 
import { 
    useCanForceRefresh , 

    useRefreshByInterval1 ,  
    useRefreshByInterval, 
    useIncrementByInterval,  
 
} from "./usingIntervalRefresh";      
import { useEventTarget } from "./usingTimeoutOrInterval";
import { useDepsChgCount } from "./usingComponentMountRenderStat";      
import { useBlobConcatState1 } from "./useMediaStreamBlobConcatState1";







type XErrorEvt = DOMException ;
const XErrorEvt = {} ;
interface SceneEndDataEvt { 
   data: null | Blob ; 
   successful : boolean ;
   error: (readonly XErrorEvt[] ) ; 
} ;
const SceneEndDataEvt = {} ;
const blobConcat = (
   function (...[sqV] : [src: Blob[] ]): null | Blob {
      if (sqV.length ) {
         return (
            new Blob(sqV, { type: sqV[0].type })
         ) ;
      } else {
         return null ;
      }
   }
) ;
const useMediaRecordingDataCollect = (
   function useMediaRecordingDataCollectImpl(...[src, { outputSizeLimit } , onSwitch ] : (
      Parameters<(
         (
            /**    
             * if this is `null`, then 
             * no *encoding process* will take place.
             * is this is {@link MediaRecorder }, then 
             * *recording process* will run as expected.
             */
            src: null | MediaRecorder, 

            /**    
             */
            options: {
               /**    
                * this define the upper bound for the resulting `Blob` `size`
                */
               outputSizeLimit: number ;
            } ,

            /**   
             * to be run when(ever) `src` changes
             */
            onSessionEnd : React.Dispatch<SceneEndDataEvt > ,
            
         ) => void
      )>
   )) {
      // TODO
      useLayoutEffect(() => { 
         if (src ) {
            ;
            const blobSeqBuffer = (
               new Array<Blob>()
            ) ;
            const errorSeq = (
               new Array<XErrorEvt >()
            ) ;
            ;
            const dataListener = (e: BlobEvent ): void => {
               // TODO
               blobSeqBuffer.push(e.data ) ;
            } ;
            const errorEvtListener = (e: MediaRecorderErrorEvent ): void => {
               // TODO
               errorSeq.push(e.error ) ;
            } ;
            const onShallRemoveListeners = (
               IterableOps.once((
                  function (): void {
                     src.removeEventListener("dataavailable", dataListener ) ;
                     src.removeEventListener("error", errorEvtListener ) ;
                     src.removeEventListener("stop", onShallRemoveListeners ) ;
                     const allData = (
                        // ((): null | Blob => { } )
                        blobConcat([...blobSeqBuffer ] )
      
                        //
                        //
                        //
                        //
                        //
                        //
                        // THE DIFF PROBLEM  (^^ ____ ^^)
                        //
                        //
                        //
                        // ( {} )()
                     ) ;
                     onSwitch({ 
                        successful: false, 
                        data: allData , 
                        error: [...errorSeq ] ,
                     }) ; 
                  }
               ))
            ) ;
            ;
            src.addEventListener("dataavailable", dataListener ) ;
            src.addEventListener("error", errorEvtListener ) ;
            src.addEventListener("stop", onShallRemoveListeners ) ;
            return onShallRemoveListeners ;
         }
      } , [src ] ) ;
      ; 
   }
)  ;
type MEO = {
   /**   
    * this will be 
    * passed/specified 
    * when running {@link MediaRecorder} constructor.
    */
   mediaEncOptions ?: MediaRecorderOptions ; //
   /**   
    * when(ever) this `deps` changes,
    * `rec` will *re-start*.
    */
   reinitDeps ?: React.DependencyList ; //
} ;
const useMediaStreamRecSR = (
   function (...[{ src, mediaEncOptions, reinitDeps = [], autoStart }] : [
      {
         src : null | MediaStream ;
         autoStart : boolean ;
      }
      &
      MEO
   ]) {
      ;
      const s = (
         React.useMemo(() => (
            src ?
            new MediaRecorder(src, mediaEncOptions )
            : null
         ) , [src, ...reinitDeps ] )
      ) ;
      React.useEffect(() => {
         if (s) {
            (
               autoStart
               &&
               (s.state === "inactive" && s.start() )
            ) ;
            return () => {
               s.stop() ;
            } ;
         }
      } , [s ] )
      const requestData = (
         React.useCallback((
            (): void => (
               s && s.requestData()
               , 
               void 0 
            )
         ), [s] )
      ) ;
      ;
      const ops = {
         s , 
         requestData ,
      } ;
      return ((): [typeof s, typeof ops] => [s, ops] )() ;
   }
) ;
const useMediaStreamRec = (() => {
   return (
      function useMediaStreamRecordingImpl(...[src, ...p ] : [
         src: null | MediaStream,
         ...args1: (
            [(
               Parameters<typeof useMediaRecordingDataCollect > 
            )] extends [readonly [infer Src, infer Options0 , ...(infer Args )] ]
            ?
            [
               config: (
                  Options0 & {
                     /**    
                      * period of the `requestData` calls
                      */
                     rPeriodMillis : number ;
                  } & MEO
               ) , 
               ...extras: Args ,
            ]
            : never
         ) ,
      ] ) {
         const { //
            rPeriodMillis ,
         } = p[0] ;
         const {
            mediaEncOptions,
         } = p[0] ;
         const {
            reinitDeps: reinitDeps0 = [],
         } = p[0] ;
         const reinitDeps = [
            useIncrementByInterval(true, rPeriodMillis ) ,
            ...reinitDeps0 ,
         ] ;
         const [
            s, 
            { 
               requestData ,
            }, 
         ] = (
            useMediaStreamRecSR({ src, mediaEncOptions, reinitDeps, autoStart: true })
         ) ; 
         const sR = (
            useMediaRecordingDataCollect(s, ...p )
         ) ;
         React.useEffect(() => {
            return (
               usingInterval(() => (
                  requestData()
               ) , (
                  640
               ) , {
                  catchupPolicy: "MAINTAIN_FIXED_PACE" ,
               } )
            ) ;
         }, [s ] ) ;
         // TODO
      }
   ) ;
})() ;





export {
   useMediaRecordingDataCollect ,
   useMediaStreamRec ,
} ;