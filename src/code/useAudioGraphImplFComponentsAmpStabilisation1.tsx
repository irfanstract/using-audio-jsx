






import React from "react";
import { CBC } from "./useStateInCallback";
import { 
   CAmpModulated as CAmpModulatedTimeDomain, 
   
} from "./useAudioGraphImplCurrentDestNdRefCtxC";
import { WithGivenDest } from "./useAudioGraphImplCurrentDestNdRefCtxC";
import { useWithCurrentSideTapPtRef } from "./useAudioGraphImplCurrentDestNdRefCtx";
import { 
   useDyamicsCompressingNodeWithGivenFadeoutTimeConstant1,
} from "./useAudioNodesMounting11";









const CDynamicsCompressed = (
   function ({ children } : (
      Required<React.PropsWithChildren<{}> >
   )) {
      return (
         useWithCurrentSideTapPtRef(({ feedPt: dest0 }) => (
            <CBC>
            { function useThis() {
               const dest1 = (
                  // TODO
                  useDyamicsCompressingNodeWithGivenFadeoutTimeConstant1(dest0, 0.5 )
               ) ;
               ;
               return (
                  <WithGivenDest value={dest1 } >
                     { children }
                  </WithGivenDest>
               ) ; 
            } }
            </CBC>
         ))
      ) ;
   }
) ;





export {
   CAmpModulatedTimeDomain,
   CDynamicsCompressed, 
} ;