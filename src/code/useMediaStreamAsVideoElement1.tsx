
import { IterableOps } from "./generalUse11";
import React, { useReducer, useState } from "react";   
import { K, ComponentProps, ContextReturnType } from "./commonElements";    
import { usingInterval, useIntervalDeferredValue, useAnimationFrameRefreshEffect } from "./usingTimeoutOrInterval"; 
import { 
    useCanForceRefresh , 

    useRefreshByInterval1 ,  
    useRefreshByInterval ,  
 
} from "./usingIntervalRefresh";      
import { useEventTarget } from "./usingTimeoutOrInterval";
import { useDepsChgCount } from "./usingComponentMountRenderStat";        
import { CBC } from "./useStateInCallback";
import { 
    useOneWayCompletiveState ,      
            
} from "./useCompletion";    
import { useAsyncMemo } from "./useAsyncMemo";          









const MediaStreamVideoC: (
   React.FC<(
      Omit<JSX.IntrinsicElements["video"] , "src" | "ref" >
      &
      { src: MediaStream; }
      &
      { fwdRef ?: React.Dispatch<null | HTMLVideoElement > ; }
   )>
) = (
   ({ src, fwdRef: appLevelRef, ...props }, ) => {
      const [refed1, ref1] = (
         React.useState<null | HTMLVideoElement>(null )
      ) ;
      const ref = (
         React.useCallback((...args : [null | HTMLVideoElement ] ) => (
            ref1(...args )
            ,
            appLevelRef && appLevelRef(...args )
            ,
            void 0
         ) , [appLevelRef, ref1 ] )
      ) ;
      React.useEffect(() => {
         if (refed1 ) {
            refed1.srcObject = (
               src
            ) ;
         }
      } , [refed1 , src ]) ;
      return (
         <video 
         ref={ ref }
         {...props }
         />
      ) ;
   }
) ;




export {
   MediaStreamVideoC as MediaStreamVideoC ,
} ;
