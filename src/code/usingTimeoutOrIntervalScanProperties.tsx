

import { BoundedIdentityFunction, } from "./generalUse11";
import React, { 
    useState, useReducer,      
    useLayoutEffect, useEffect,
    useCallback, useMemo, useDeferredValue,  useContext, 
    useImperativeHandle,   
    useTransition, 
    useDebugValue ,
} from "react";          
import { usingInterval, useIntervalDeferredValue } from "./usingTimeoutOrInterval"; 
import { 
    useCanForceRefresh , 

    useRefreshByInterval1 ,  
    useRefreshByInterval ,  
 
} from "./usingIntervalRefresh";      
import { useDepsChgCount } from "./usingComponentMountRenderStat";      












/**  
 * note that this does not provide `deps` ;   
 * `deps` will be unnecessary for this, due to how {@link useRefreshByInterval} works
*/
type RealTimeQueryIntervalUsageArgs<A> = [
   properties: (
      {
         f: () => A;
         /**       
          * if left unset, then the resulting intervals would be defined solely by `timeoutInterval`.       
          * to achieve that, the default value would be `[]` (empty array) .           
          *  */
         deps?: React.DependencyList;
         // defaultVl ?: A ;                         

         strictInterval?: boolean;

         LE?: (
            NonNullable<(
               NonNullable<(
                  (
                     Parameters<typeof useRefreshByInterval1>[2]
                  )
               )>["LE"]
            )>
         );
         catchupPolicy?: (
            NonNullable<(
               NonNullable<(
                  (
                     Parameters<typeof useRefreshByInterval1>[2]
                  )
               )>["catchupPolicy"]
            )>
         );

      } | (() => A)
   ),
   timeoutMillis: number,
];
const RealTimeQueryIntervalUsageArgs = {}; // TS-1205
/**    
 * *calls {@link useRefreshByInterval1 }, {@link React.useState to enforce periodic re-render }*.
 * 
* 
*/
const useRealtimeQueryIntervalUsageArgsParse = (
   function <A>(...[props, timeoutMillis]: RealTimeQueryIntervalUsageArgs<A>) {
      ;
      const { f, LE, catchupPolicy, deps = [] } = (
         REFQUER_CALL_ARG_UPGRDE(props)
      );
      ;
      const { c, forceRefresh } = (
         useRefreshByInterval1(true, timeoutMillis, { LE, catchupPolicy })
      );
      React[LE](() => forceRefresh(), deps);
      ;
      return {
         props,
         timeoutMillis,

         LE,
         f,
         c,

         forceRefresh,
      };
   }
);
/**   
 * *{@link usingInterval } with callback which {@link React.useState `setState(...)`s }*.
 * 
* avoid using this as, for some reason,
* usage of this will, for some reason, result in infinite re-render.
* 
* @deprecated
*/
const useRealtimeQueryIntervalUsageArgsParse1 = (
   function <A>(...[props, timeoutMillis]: RealTimeQueryIntervalUsageArgs<A>) {
      ;
      const { f, LE, catchupPolicy = "MAINTAIN_FIXED_PACE", deps = [] } = (
         REFQUER_CALL_ARG_UPGRDE(props)
      );
      ;
      const [vl, setVl] = (
         (function useSt() {
            type State = A;
            return (
               React.useReducer((
                  (...[vl0, newValue]: [State, A]): State => {
                     return (
                        newValue
                     );
                  }
               ), f())
            );
         })()
      );
      React[LE](() => (
         usingInterval((
            (): void => {
               const newValue = f();
               setVl(newValue);
            }
         ), timeoutMillis, { catchupPolicy })
      ), React.useDeferredValue(deps));
      // TODO
      const forceRefresh = (
         () => { }
      );
      ;
      return {
         props,
         timeoutMillis,

         LE,
         f,

         forceRefresh,

         vl,
      };
   } /* */
) ;
/**         
* {@link RealTimeQueryIntervalUsageArgs } . 
* utility for reliably interpret the argument.   
*/         
const REFQUER_CALL_ARG_UPGRDE = (() => {  
   return (
      (function <A>(props: (
         // {                                            
         //     f: () => A ;                             

         // } | (() => A )                             
         RealTimeQueryIntervalUsageArgs<A>[0]
      )) {
         type Return = (
            Pick<(
               Required<(
                  Exclude<(
                     RealTimeQueryIntervalUsageArgs<A>[0]
                  ), (...Args: never[]) => void>
               )>
            ), "f" | "LE">
            &
            Partial<(
               Pick<(
                  Required<(
                     Exclude<(
                        RealTimeQueryIntervalUsageArgs<A>[0]
                     ), (...Args: never[]) => void>
                  )>
               ), "deps" | "catchupPolicy">
            )>
         );
         const DEFAULT_LE: Return["LE"] = (
            "useLayoutEffect"
         );
         return (
            function REFQUER_(): Return {
               if ("f" in props) {
                  const {
                     // defaultVl ,               
                     f,
                     LE = DEFAULT_LE,
                     catchupPolicy,
                  } = props;
                  return { f, LE, catchupPolicy } as const;
               } else {
                  const f = (
                     BoundedIdentityFunction<() => A>()(props)
                  );
                  const catchupPolicy = undefined;
                  const LE = DEFAULT_LE;
                  return { f, LE, catchupPolicy };
               }
            }
         )();
      })
   );
})() ;        

;








export {
   RealTimeQueryIntervalUsageArgs ,
   useRealtimeQueryIntervalUsageArgsParse,
   useRealtimeQueryIntervalUsageArgsParse1,
} ;