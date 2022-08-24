




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
import { useWindowLocationHref } from "./useWindowLocationHrefChgEffect";






;



const useCtxtualRoutingState = (
   // TODO
   function () {
      ;
      const windowHref = (
         useWindowLocationHref()
      ) ;
      const presentlyChoice = (
         (
            windowHref
            .match(/\#(.*)$/)?.[1 ]
            ||
            ""
         )
      ) ;
      const renderChoiceLink = (
         function (...[{ value: whichOne } , payload ] : [
            (
               { value: string ; }
            ) ,
            React.ReactElement ,
         ] ): React.ReactElement {
            return (
               <a href={`#${whichOne }` } >
                  { payload }
               </a>
            ) ;
         }
      ) ;
      ;
      const props1 = {
         presentlyChoice , 
         renderChoiceLink ,
      } ;
      return (
         (() : ({ windowHref ?: string ; } & typeof props1) => (
            { windowHref, ...props1 }
         ) )()
      ) ;
   }
) ;




export {
   useCtxtualRoutingState ,
} ;