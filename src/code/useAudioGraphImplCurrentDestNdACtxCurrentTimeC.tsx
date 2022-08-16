 
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
   const WithScn = (
      ({ children: payload, c } : { c: BaseAudioContext ; } & PayloadRelatedProps ) => {  
         const windowActive = (
            useWindowActivityStatus()
         ) ;
         /**   
          * intervally refreshed.     
          */
         const {
            currentTime: tVal , 
         } = (
            useRealTimeQueryInterval1({
               f : () => c ,
               deps : [] , 
               LE: "useLayoutEffect" ,
            } , (
               // TODO  
               (
                  windowActive ?  
                  0.062
                  : 2.5
               ) * 1000
            ))
         ) ;
         const { Provider: P } = ctx ;
         return (
            <P value={tVal }>
               { payload({ currentTime: tVal , }) }
            </P>
         ) ;
      }
   ) ;
   return {
      WithCtxtualDestCtxTInfo1 : (
         function WithCtxtualDestCtxTInfo1C({ children: payload , WithCtxtualOut1 = WithCtxtualOut } : (
            PayloadRelatedProps
            &
            { WithCtxtualOut1 ?: React.FC<ComponentProps<typeof WithCtxtualOut > > ; }
         ) ) {
            const v0 = (
               React.useContext(ctx )
            ) ;
            switch (typeof v0 ) {
               case "number" :
                  return (
                     payload({ currentTime: v0 , })
                  ) ;
                  break ;  
               case "boolean" :
                  if (v0 === false ) {
                     return (
                        <WithCtxtualOut1 >  
                        { ({ feedPt: nd }) => (
                           nd ? 
                           (
                              <WithScn c={nd.context} > 
                              { payload }
                              </WithScn>
                           )
                           : null
                        ) }
                        </WithCtxtualOut1 >
                     ) ;
                  }
                  return <></> ;
                  break ;  
               default :
                  return (
                     <p> (failed) </p>
                  ) ;
                  break ;  
            }
         }
      ) , 
   };
})() ;






export {
   WithCtxtualDestCtxTInfo1 , 
} ;