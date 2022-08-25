




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



/**   
 * use this facility to implement routing in your SPA (Single-Page App ).
 */
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
         function (...[{ value: toWhichOne } , payload ] : [
            (
               { value: string ; }
            ) ,
            React.ReactElement ,
         ] ): React.ReactElement {
            return (
               <a href={(toWhichOne === presentlyChoice ) ? undefined : `#${toWhichOne }` } >
                  { payload }
               </a>
            ) ;
         }
      ) ;
      ;
      const props1 = {
         /**   
          * both {@link presentlyChoice } and {@link renderChoiceLink }
          * are two associated means.
          */
         presentlyChoice , 
         /**   
          * both {@link presentlyChoice } and {@link renderChoiceLink }
          * are two associated means.
          */
         renderChoiceLink ,
      } ;
      return (
         (() : (
            { 
               /**   
                * this conditionally reflects info `window.location.href`.
                */
               windowHref ?: string ; 
            } 
            & 
            typeof props1
         ) => (
            { windowHref, ...props1 }
         ) )()
      ) ;
   }
) ;




export {
   useCtxtualRoutingState ,
} ;