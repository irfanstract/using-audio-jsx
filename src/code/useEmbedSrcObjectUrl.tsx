

// import util from "util" ;
import { BoundedIdentityFunction, IterableOps, } from "./generalUse11";
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
import { usingInterval, useIntervalDeferredValue, useAnimationFrameRefreshEffect } from "./usingTimeoutOrInterval"; 
import { 
    useCanForceRefresh , 

    useRefreshByInterval1 ,  
    useRefreshByInterval ,  
 
} from "./usingIntervalRefresh";      
import { useEventTarget } from "./usingTimeoutOrInterval";
import { useDepsChgCount } from "./usingComponentMountRenderStat";      







const useObjectURL = (
   function (...[v] : [null | Blob ] ) {
      ;
      const [vUrl1, setVURl ] = (
         useState<string>("" )
      ) ;
      React.useLayoutEffect(() => {
         const vUrl = (
            v ?
            URL.createObjectURL(v )
            : ""
         ) ;
         setVURl(() => vUrl ) ;
         return () => {
            URL.revokeObjectURL(vUrl) ;
         } ;
      }, [v]);
      ;
      return (
         vUrl1
      ) ;
   }
) ;




export {
   useObjectURL ,
} ;