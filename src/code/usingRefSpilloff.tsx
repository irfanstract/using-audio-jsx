
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
import { useAsyncMemo } from "./useAsyncMemo";          








const useRefSpilloff = (
   function <Referee extends object | symbol | string >(...[appLevelRef] : [
      undefined | React.Ref<null | Referee > ,
   ] ) {
      ;
      const [refed1, newRef] = (
         React.useState<null | Referee>(null )
      ) ;
      React.useImperativeHandle((
         appLevelRef
      ), () => refed1, ) ;
      ;
      return (() : [typeof refed1 , typeof newRef , ] => [refed1, newRef, ] )() ;
   }
) ;



export {
   useRefSpilloff ,
} ;