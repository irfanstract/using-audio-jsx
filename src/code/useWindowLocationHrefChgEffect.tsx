
// import util from "util" ;     
import { IterableOps } from "./generalUse11";
import EventEmitter from "events";      
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react";
// import { isWindowActive, useWindowActivityStatus } from "./useWindowFocusState" 
import {           
    IntervalUsageAcceptableCatchupPolicy, 
    intervalUsageCatchupPolicyEmitErrorOnce  ,

} from "./timeoutOrIntervalPolicy";       
import { usingInterval } from "./usingTimeoutOrInterval";
import { useRealTimeQueryInterval1 } from "./useNonHookValue";









// TODO
const useRefreshFetch = (
   function <V>(...[f, ...intervalPolicy ] : [
      impl: () => V ,
      ...intervalPolicy: (
         [(
            Parameters<typeof usingInterval>
         )] extends [readonly [infer F, ...(infer Args )] ]
         ?
         Args
         : never
      ) ,
   ] ) {
      const [v, setV] = (
         React.useState<V >((
            f()
         ))
      ) ;
      React.useLayoutEffect(() => (
         usingInterval(() => {
            const value = f() ;
            setV(() => value ) ;
         } , ...intervalPolicy )
      ), [] );
      return v ;
   }
) ;
const useWindowLocationHref = (
   function () {
      return (
         useRefreshFetch<typeof window.location.href>(() => (
            window.location.href
         ) , 150 )
      ) ;
   }
) ;
const {
   useWindowLocationChgEffect ,
} = (() => {
   return {
      /**   
       * this subscribes to every change of {@link window.location.href }.
       */
      useWindowLocationChgEffect : (
         function useWindowLocationChgEffectImpl(...[callback,  ] : [
            callback: (
               (e ?: { newValue: typeof window.location.href } ) 
               => 
               void
            ), 
            // deps: React.DependencyList ,
         ]) { 
            const value: typeof window.location.href = (
               useWindowLocationHref()
            ) ;
            React.useLayoutEffect(() => (
               callback({ newValue: value })
               ,
               void 0
            ) , [value ] ) ;
         }
      ) ,
   } ;
})() ;




export {
   useWindowLocationChgEffect ,
} ;