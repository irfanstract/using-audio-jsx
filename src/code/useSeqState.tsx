

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
import { usingInterval, useIntervalDeferredValue } from "./usingTimeoutOrInterval"; 
import { 
    useCanForceRefresh , 

    useRefreshByInterval1 ,  
    useRefreshByInterval ,  
 
} from "./usingIntervalRefresh";      
import { useDepsChgCount } from "./usingComponentMountRenderStat";      









const useSeqState = (
   function <E>(...[initially] : [initially : readonly E[] ] ) {
      const [s, setS] = (
         useState<E[] >([...initially ] )
      ) ;
      const permute = setS ;
      const appendAll = (
         function (appeand: E[]): void {
            setS((sq0: E[] ): E[] => (
               [...sq0, ...appeand ]
            ) );
         }
      ) ;
      const append = (
         function (appeand: E): void {
            return (
               appendAll([appeand ])
            ) ;
         }
      ) ;
      const push = append ;
      const reset = (
         (): void => (
            setS((): [] => [] )
         )
      ) ;
      const clear = (
         reset
      ) ;
      const ops = {
         permute , 
         appendAll , 
         append , 
         push , 
         reset ,
         clear ,  
      } ;
      return ((): [readonly E[], typeof ops ] => [s, ops ] )() ;
   }
) ;




export {
   useSeqState,  
} ;

