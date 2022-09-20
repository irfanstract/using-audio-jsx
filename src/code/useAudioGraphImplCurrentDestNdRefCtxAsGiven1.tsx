 
// utility imports                  
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue, OmitM, } from "./generalUse11";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType, } from "./commonElementsTypes";        
import { K, asVoidElement, NUMERIC } from "./commonElements";             
import { CBC, } from "./useStateInCallback";  
import { useDeferredRecompute, } from "./usingDeferredRecompute";
import { useEventTarget, } from "./usingTimeoutOrInterval";
import { useDepsChgCount, } from "./usingComponentMountRenderStat";      
import { useRealTimeQueryInterval1, } from "./usingNonHooksValues";     
import { useDeferredTrue as useDeferredTrue0, } from "./usingDeferredBoolean";       
import { 
    useOneWayCheckBox , 
} from "./useCompletion";   




import {  
   WithGivenDest ,  
   Prv1 ,         

   useWithCurrentSideTapPtRef , 

} from "./useAudioGraphImplCurrentDestNdRefCtx";      
import { 
   useAParamModulativeNode,
} from "./useAudioNodesParamAutomative1";  
          










const WithGivenDestAlt : (
   React.FC<(
      {
         [k in keyof (
            ComponentProps<typeof WithGivenDest>
         )] : (
            [k] extends ["value"] ? 
            (
               ((undefined | null ) & ComponentProps<typeof WithGivenDest>[k ] ) 
               | [{ ctx: BaseAudioContext }, AudioParam, ]
            )
            : ComponentProps<typeof WithGivenDest>[k ]
         ) ;
      }
   )>
) = (
   ({ value: mainP0, children: payload, ...otherProps }) => {
      const upmReturned = (
         useAParamModulativeNode(...(
            (() : Parameters<typeof useAParamModulativeNode> => {
               if (mainP0 ) {
                  const [{ ctx: c, }, mainP, ] = mainP0 ;
                  return [mainP, c, ] ;
               }
               return (
                  [null, null, ]
               ) ;
            } )()
         ))
      ) ;
      return (
         <WithGivenDest 
         value={(
            upmReturned
         )} 
         {...otherProps } 
         >
            { payload }
         </WithGivenDest>
      ) ;
   }
) ;





export {
   WithGivenDest ,
   WithGivenDestAlt ,
} ;