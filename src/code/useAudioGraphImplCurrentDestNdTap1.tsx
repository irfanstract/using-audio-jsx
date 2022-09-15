 
// utility imports     
import Immutable from "immutable";    
import { IterableOps, PromiseReturnValue } from "./generalUse11";      
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";     
import { K, NUMERIC } from "./commonElements";               
import { useAsyncMemo } from "./useAsyncMemo";      
import { useRealTimeQueryInterval1 } from "./usingNonHooksValues";     
import { CBC } from "./useStateInCallback";      
import { 
    isWindowActive , 
    useWindowActivityStatus ,      
} from "./useWindowFocusState";
           
import { useSingularSrcDestConnect, } from "./useAudioNodesMounting1";
import { useATapNode, } from "./useAudioNodesMounting1";
import { AudioSourceNode, } from "./useAudioNodesBasicTypeDefs";
import { useAudioCtxCurrentTime, useAudioCtxCurrentTime1 } from "./useAudioCtxCurrentTime";
//        
import { ModifyingCompPayloadDiv as ModifyingCompPayloadDiv } from "./useAudioGraphImplFComponentsSemanticsBasic";   
import {
   useWithCurrentSideTapPtRef ,
   useCurrentDestNdRefAndCtxT ,
   WithGivenDest ,

} from "./useAudioGraphImplCurrentDestNdRefCtx" ;   










// TODO
const WithCtxtualAudioStreamSpilloff: (
   React.FC<(
      { 
         children: React.ReactElement & object ; 
         xRef : React.Dispatch<null | AudioSourceNode > ;
      }
   )>
) = (
   function WithCtxtualAudioStreamSpilloffC(...[{ xRef: ref, children: payload, }] ) {
      /**   
       * the `useYyy` version ({@link useCurrentDestNdRefAndCtxT}) 
       * will result in high-frequency re-renders so
       * we have to 
       * stick to the callback version (specifically {@link useWithCurrentSideTapPtRef}) instead
       */
      return (
         useWithCurrentSideTapPtRef(({ feedPt: nd0 }) => (
         <CBC name="CBC_WithCtxtualAudioStreamSpilloffC_D1">
         { function useImpl() {
            ;
            const ctx = (
               nd0?.context
               || null
            ) ;
            const [tapOffNd, nd11] = (
               useATapNode(nd0 )
            ) ;
            React["useLayoutEffect"](() => {
               ref(null ) ;
               tapOffNd && (
                  ref(tapOffNd )
               ) ;
               return () => {
                  ref(null ) ;
               } ;
            } , [ref, tapOffNd, ] ) ;
            // TODO
            return (
               <WithGivenDest value={nd11 } >
                  { payload }
               </WithGivenDest>
            ) ;
         } }
         </CBC>
         ) )
      ) ;
   }
) ;




export {
   WithCtxtualAudioStreamSpilloff ,
} ;