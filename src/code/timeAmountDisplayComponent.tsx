
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









const AmtOfSecondsC: (
   React.FC<{ value : number ; }>
) = (
   (
      function ({ value: value0, }) {
         const value = (
            Math.abs(value0 )
         ) ;
         const e = (
            ((): { unit: number; nominalPeriod: number; mark: string; }[] => [
               { unit: 365 * 24 * 60 * 60 , nominalPeriod:  1E5 , mark:   "yrs" } ,
               { unit:       24 * 60 * 60 , nominalPeriod:  365 , mark:  "days" } ,
               { unit:            60 * 60 , nominalPeriod:   24 , mark: "hours" } ,
               { unit:                 60 , nominalPeriod:   60 , mark:     "'" } ,
               { unit:                  1 , nominalPeriod:   60 , mark:     `"` } ,
            ])()
            .map(({ unit, nominalPeriod, mark: marking }) => {
               const nmvRounded = (
                  Math.floor(value / unit )
               ) ;
               /**   
                * the effective value for this field,
                * regardless of the potential, presentational {@link String.padStart padding }.
                */
               const effectiveFldValue = (
                  nmvRounded % nominalPeriod
               ) ;
               const effectiveFldFormatted = (
                  String(effectiveFldValue ).padStart(2, "0" )
               ) ;
               const e1 = (
                  nmvRounded
                  ?
                  <span style={{ }}>
                     { effectiveFldFormatted }
                     { marking }
                  </span>
                  : 
                  null
               ) ;
               return (
                  e1
                  &&
                  <span key={unit } style={{ margin: "0.5ch", flex: "1 1 30%", textAlign: "end" }}>
                     { e1 }
                  </span>
               ) ;
            } )
         );
         return (
            <span style={{ fontFamily: "monospace", }}>
            { (value0 < 0 ) && <>&minus;</> }
            &nbsp;
            <span style={{ display: "inline-flex", flexDirection: "row", }}>
               { e }
            </span>
            </span>
         ) ;
      }
   )
) ;
namespace AmtOfSecondsC {} 



export {
   AmtOfSecondsC ,
} ;