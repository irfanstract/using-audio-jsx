

// import util from "util" ;
import { BoundedIdentityFunction, } from "./generalUse11";
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
    useRefreshByInterval ,  
 
} from "./usingIntervalRefresh";      
import { useDepsChgCount } from "./usingComponentMountRenderStat";      
import { useBlobConcatState1 } from "./useMediaStreamBlobConcatState1";







// TODO
const useMediaStreamRecEffect = (() => {
   type XErrorEvt = DOMException ;
   type SceneEndDataEvt = { data: null | Blob ; error: readonly XErrorEvt[] ; } ;
   const useErrorEvtLog = (
      () => {
         ;
         const [errorEvts, { permute: setErrorEEvts, push: addErrorEvt }] = (
            useSeqState<(readonly XErrorEvt[] )[number] >([])
         ) ;
         return {
            errorEvts , 
            setErrorEEvts,
            addErrorEvt,
         } ;
      }
   ) ;
   return (
      function useMediaStreamRecEffectE(...[src, { resultingBlobSizeLimit, onSceneEnded: onSceneEnded }, deps] : [
         MediaStream | null ,
         ( { 
            resultingBlobSizeLimit: number ;
            onSceneEnded: React.Dispatch<SceneEndDataEvt > ; 
         } ),
         React.DependencyList,
      ] ) {
         const {
            errorEvts , 
            setErrorEEvts,
            addErrorEvt,
         } = useErrorEvtLog() ;
         const [buffered, bufferOps ] = (
            useBlobConcatState1({ sizeLimit: resultingBlobSizeLimit })
         ) ;
         const onCleanupNeed = (
            function (): void {
               ;
               setErrorEEvts(() => [] ) ;
               bufferOps.clear() ;
            }
         ) ;
         const onSceneRecDataAllDone = (
            (): void => {
               onSceneEnded({ data: buffered, error: errorEvts })  ;
               onCleanupNeed() ;
            }
         ) ;
         useLayoutEffect(() => {
            if (src ) {
               ;
               // TODO
               {
                  ;
                  const rec = (
                     // TODO
                     new MediaRecorder(src, {} )
                  ) ;
                  rec.addEventListener("error", ({ error: e }) => {
                     addErrorEvt(e ) ;
                  }) ;
                  rec.addEventListener("dataavailable", ({ data }) => {
                     ;// TODO
                  } ) ;
                  rec.addEventListener("stop", ({ }) => {
                     onSceneRecDataAllDone() ;
                     ;// TODO
                  } ) ;
                  rec.start() ;
                  return () => {
                     rec.stop() ;
                  } ;
               }
            }
         } , [src, ...deps ] );
         ;
         // TODO
      }
   ) ;
})() ;