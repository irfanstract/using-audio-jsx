
import { IterableOps } from "./generalUse11";
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react";
// import { isWindowActive, useWindowActivityStatus } from "./useWindowFocusState" 
import {           
    IntervalUsageAcceptableCatchupPolicy, 
    intervalUsageCatchupPolicyEmitErrorOnce  ,

} from "./timeoutOrIntervalPolicy";       
import { usingTimeout } from "./usingTimeoutB";




    






/**  
 * this method provides 
 * {@link setInterval}-like functionality for `useYyyEffect` callback.
 * {@link React.useLayoutEffect } or, if precision is unnecessary, {@link React.useEffect} .
 *          
 * @returns the cleanup functor          
*/                      
const usingInterval = (                      
   function Interval(...[
      callback,
      periodMillis,
      { catchupPolicy, performance = window.performance } = {
         catchupPolicy: "MAINTAIN_FIXED_PACE",
      } as const,
   ]: [
         callback: (
            (() => true)
            | (() => void)
         ),
         periodMillis: (
            NonNullable<(
               Parameters<typeof setTimeout>
            )[1]>
         ),
         properties?: (
            {
               /**    
                * this specifies how leftbehindness(es) shall be handled.
                */
               catchupPolicy: IntervalUsageAcceptableCatchupPolicy;
               /**   
                * the implementation
                */
               performance?: Pick<typeof window.performance, "now">;
            } &
            Partial<{
            }>
         ),
      ]): ReturnType<React.EffectCallback> {
      let closed: boolean = false;

      const GET_CURRENT_T = (
         () => performance.now() // MILLISECONDS                
      );
      (function scheduleAgain(
         {
            nextSchTMillis: currentTurnSupposedTMilllis,
         }: {
            nextSchTMillis: number;
         },
      ): true {
         if (closed) {
            return true;
         }
         setTimeout((): void => {
            if (closed) {
               return;
            }
            callback();
            if (closed) {
               return;
            }
            const nextSchTMillis = (
               ((): number => {
                  const strictFixedCompletionRateCaseReturnValue: number = (
                     currentTurnSupposedTMilllis + periodMillis
                  );
                  const loosyCaseReturnValue: number = (
                     GET_CURRENT_T() + periodMillis
                  );
                  switch (catchupPolicy || false) {
                     case "MAINTAIN_FIXED_COMPLETION_RATE":
                        return (
                           strictFixedCompletionRateCaseReturnValue
                        );
                     case "MAINTAIN_FIXED_PACE":
                        return (
                           Math.max(
                              loosyCaseReturnValue + (-1 * 1000),
                              strictFixedCompletionRateCaseReturnValue)
                        );
                     case false:
                        break;
                     default:
                        intervalUsageCatchupPolicyEmitErrorOnce(catchupPolicy);
                        break;
                  }
                  return (
                     loosyCaseReturnValue
                  );
               })()
            );
            scheduleAgain({
               nextSchTMillis: (
                  nextSchTMillis
               ),
            });
         }, (
            currentTurnSupposedTMilllis - GET_CURRENT_T()
         ));
         return true;
      })({
         nextSchTMillis: (() => {
            const v0 = (
               GET_CURRENT_T() + periodMillis
            );
            const v1 = (
               v0 + -(v0 % periodMillis)
            );
            return v1;
         })(),
      });

      return () => {
         closed = true;
      };
   }
) ;

const useIntervalEffect = (
   function (...[callback, periodMillis, properties, deps]: (
      [
         callback: Parameters<typeof usingInterval>[0],
         periodMillis: Parameters<typeof usingInterval>[1],
         properties: NonNullable<(
            Parameters<typeof usingInterval>[2]
         )>,
         deps: React.DependencyList,
      ]
   )) {
      React.useLayoutEffect(() => {
         return (
            usingInterval(
               callback,
               periodMillis, properties)
         );
      }, deps);
   }
) ;

export {
   usingInterval ,
   useIntervalEffect ,
} ;