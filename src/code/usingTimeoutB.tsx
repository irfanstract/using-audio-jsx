
import { IterableOps } from "./generalUse11";
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react";
// import { isWindowActive, useWindowActivityStatus } from "./useWindowFocusState" 




    


/**  
 * this method provides 
 * implementation for delayed exec/dispatch within `useYyyEffect` callback code.
 * {@link React.useLayoutEffect } or, if precision is unnecessary, {@link React.useEffect} .
 * 
 * @returns the cleanup functor      
*/       
const usingTimeout = (
   (...[callback, periodInMillis]: [
      callback: (
         () => void
      ),
      periodInMillis: (
         number
      ),
   ]): ReturnType<React.EffectCallback> => {
      /**    
       * run {@link setTimeout},
       * {@link clearTimeout keep note of the returned *ID* }, and
       * return the relevant `React.EffectCallback.CleanUp`.
       */
      {
         /**    
          * {@link setTimeout}.
          */
         const timeoutSchdRef = (
            setTimeout(() => (
               callback()
            ), periodInMillis)
         );
         /**   
          * exit from this {@link React.EffectCallback}.
          */
         return (): void => {
            /**   
             * {@link clearTimeout}.
             */
            clearTimeout((
               timeoutSchdRef
            ));
         };
      }
   }
) ;                              



export {
   usingTimeout ,
} ;