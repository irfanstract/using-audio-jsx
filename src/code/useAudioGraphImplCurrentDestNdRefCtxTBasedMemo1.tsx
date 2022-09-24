

 
// utility imports                  
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue, OmitM } from "./generalUse11";  
import { ABandpassFreqArgInputRangeMode } from "./audioFltBandpassMetaRangeMode";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";        
import { K, asVoidElement, NUMERIC } from "./commonElements";             
import { CBC } from "./useStateInCallback";  
import { useDeferredRecompute, } from "./usingDeferredRecompute";
import { useEventTarget, } from "./usingTimeoutOrInterval";
import { useDepsChgCount, } from "./usingComponentMountRenderStat";      
import { useRealTimeQueryInterval1 } from "./usingNonHooksValues";     
import { useDeferredTrue as useDeferredTrue0 } from "./usingDeferredBoolean";       
import { 
    useOneWayCheckBox , 
} from "./useCompletion";   
import { 
   WavetableBbPlotSvgC ,
   WavetableNameC ,
} from "./audioWavetableGraphicsJsx";



import { 
   useCurrentDestNdRefAndCtxT as useANdRefAndCtxT,
   
} from "./useAudioGraphImplCurrentDestNdRefCtx";
          










/**   
 * 
 * __performance note__ .
 * see {@link useANdRefAndCtxT } .
 * consider using {@link WithinANdRefCtxTBasedMemo1 } instead.
 * 
 */
const useANdRefCtxTBasedMemo1 = (
   // TODO
   function useItemsRenderedImplPossiblyDeferredValueImpl<R>(...[f, { rerunFreq = 4, } = {} , ] : [
      () => R ,
      (
         {}
         & Partial<{ rerunFreq : number ; }>
      ) ? ,
   ] ): R {
      ;
      const {
         currentTime: t ,
      } = (
         useANdRefAndCtxT()
      ) ;
      ;
      const tMem = (
         (typeof t === "number" ) ?
         (Math.floor(t * rerunFreq ) / rerunFreq )
         : null
      ) ;
      return (
         React.useMemo(f , [tMem, ] )
      ) ;
   }
) ;
/**   
 * *JSX-specific wrapper of {@link WithinANdRefCtxTBasedMemo1 }*.
 * 
 */
const WithinANdRefCtxTBasedMemo1: (
   React.FC<{ 
      children : (
         (() => React.ReactElement)
         |
         (React.ReactNode & object )
      ) ; 
      /**   
       * the second argument to {@link useANdRefCtxTBasedMemo1 }
       * (which is `options`).
       */
      constraints ?: (
         Parameters<typeof useANdRefCtxTBasedMemo1 >[1] 
         & object
      ) ;
   }>
) = (
   function WithinANdRefCtxTBasedMemo1({ children: doRender, constraints: ctmConstraints, }) {
         const rendered = (
            useANdRefCtxTBasedMemo1((
               (typeof doRender === "function" ) ?
               doRender
               : (() => doRender )
            ) , ctmConstraints )
         ) ;
         return (
            <>
            { rendered }
            </>
         ) ;
   }
) ;




export {
   useANdRefAndCtxT ,
   useANdRefCtxTBasedMemo1 ,
   WithinANdRefCtxTBasedMemo1 ,
} ;