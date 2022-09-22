

import { BoundedIdentityFunction, OptionsCouldBeOmittedAltogether, } from "./generalUse11";
import React, { 
    useState, useReducer,      
    useLayoutEffect, useEffect,
    useCallback, useMemo, useDeferredValue,  useContext, 
   //  useImperativeHandle,   
   //  useTransition, 
    useDebugValue ,
} from "react";          












/**      
 * 
 * 
 */
const useCountedRefState1 = (
   function useSt<A>(...crArgs : [

      /**   
       * the initial value
       */
      initialValue: A, 

      /**    
       * other constraints
       */
      ...properties: OptionsCouldBeOmittedAltogether<(
         Partial<{ 
            idempotentCaseCountBehv : "keep" | "as-changed" ;
         }>
      )>,

   ]) {
      const [
         initialValue, 
         { idempotentCaseCountBehv = "as-changed", } = {} , 
      ] = crArgs ;
      ;
      type State = [A, { c: number ; }, ];
      const R = (
         React.useReducer((
            (...[[existingVal , { c, } ,], newValue, ]: [State, A]): State => {
               return (
                  [
                     newValue , 
                     { 
                        c: (
                           c + 
                           ((idempotentCaseCountBehv === "keep" && newValue === existingVal ) ? 0 : 1 )
                        ) ,
                     }, 
                  ]
               );
            }
         ), [initialValue , { c: 0 , } , ])
      );
      useDebugValue(R, ([state, dispatch,]) => state ) ;
      return R ;
   }
) ;



export {
   useCountedRefState1 ,
} ;