
import { BoundedIdentityFunction, IterableOps, Immutable, } from "./generalUse11";
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
import { usingInterval, useIntervalDeferredValue, useAnimationFrameRefreshEffect } from "./usingTimeoutOrInterval"; 
import { 
    useCanForceRefresh , 

    useRefreshByInterval1 ,  
    useRefreshByInterval ,  
 
} from "./usingIntervalRefresh";      
import { useEventTarget } from "./usingTimeoutOrInterval";
import { useDepsChgCount } from "./usingComponentMountRenderStat";    






function useClassInstanceHashFnc<XObj extends object>(...[] : (
   [{}] extends [XObj] ?
   [never ]
   : []
) ): ((src: XObj ) => number ) {
   ;
   return (
      // FOR THIS MOUNTED COMPONENT LIFETIME
      useMemo(() => {
         const wm = (
            new WeakMap<XObj, number >()
         ) ;
         return (
            (src: XObj ): number => (
               (wm.has(src) || wm.set(src, Math.random() || 1.1 ) )
               ,
               wm.get(src ) || -1
            )
         ) ;
      } , [] )
   ) ;
}


export {
   useClassInstanceHashFnc ,
} ;