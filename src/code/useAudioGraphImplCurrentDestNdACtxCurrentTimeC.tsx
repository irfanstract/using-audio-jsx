 
// utility imports     
import Immutable from "immutable";    
import { IterableOps, PromiseReturnValue } from "./generalUse11";      
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";     
import { K, NUMERIC } from "./commonElements";               
import { useAsyncMemo } from "./useAsyncMemo";      
import { useRealTimeQueryInterval1 } from "./useNonHookValue";     
import { CBC } from "./useStateInCallback";      
import {
    PWrp ,    
    asyncLoadedComponentWrp , 
 } from "./usingComponentLazySuspense";
import { 
    isWindowActive , 
    useWindowActivityStatus ,      
} from "./useWindowFocusState";
           
//        
import { 
    getACtxMtWithoutAnyFilter1, 
    useACtxMtWithoutAnyFilter1, 
    AFeedableAndTappableNca ,

} from "./useAudioNodexCtxInitAndBeepNcaOnce1";  
import { ModifyingCompPayloadDiv as ModifyingCompPayloadDiv } from "./useAudioGraphImplFComponentsSemanticsBasic"; 



import {  
   WithGivenDest ,  
   Prv1 ,         

   Consm as WithCtxtualOut ,     
   useWithCurrentSideTapPtRef , 
   useWithCurrentACtxCurrentT, 

} from "./useAudioGraphImplCurrentDestNdRefCtx";   


       
 
  
       
          
                
                     
            
/**  
 * TBD :
 * - handle multiple disjoint component trees
 * - support for multiple {@link BaseAudioContext}s
 * 
 * @deprecated
 */
const {
   WithCtxtualDestCtxTInfo1 , 
   
} = (() => {
   const ctx = (
      React.createContext<false | number >(false )
   );
   ctx.displayName = (
      "cachedCurrentTInfoCtx"
   ) ;
   type PayloadRelatedProps = (
      React.ConsumerProps<(
         Pick<BaseAudioContext, "currentTime"  >
         // &
         // Pick<BaseAudioContext,   "sampleRate" | "audioWorklet" | "addEventListener" | "removeEventListener">
      )>
   ) ;
   return {
      WithCtxtualDestCtxTInfo1 : (
         function WithCtxtualDestCtxTInfo1C({ children: payload } : (
            PayloadRelatedProps
         ) ) {
            return (
               useWithCurrentACtxCurrentT(({ currentTime }) => (
                  <>
                  { (
                     (typeof currentTime === "number" )
                     &&
                     payload({ currentTime })
                  ) }
                  </>
               ) )
            ) ;
         }
      ) , 
   };
})() ;






export {
   WithCtxtualDestCtxTInfo1 , 
} ;