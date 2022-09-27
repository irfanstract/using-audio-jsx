
import { 
   BoundedIdentity, 
   BoundedIdentityFunction, 
   OverloadedParameters ,
   OverloadedReturns ,
   Unix ,     
   IterableOps , 
   Immutable ,    
   Seq1 ,
} from "./generalUse11";       
import React, { 
   useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue ,
} from "react";
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";        
import { K, asVoidElement, NUMERIC } from "./commonElements";             
import { CBC } from "./useStateInCallback";  
import { useDeferredRecompute, } from "./usingDeferredRecompute";
import { useEventTarget, } from "./usingTimeoutOrInterval";
import { useRealTimeQueryInterval1 } from "./usingNonHooksValues";     
import { useDeferredTrue as useDeferredTrue0 } from "./usingDeferredBoolean";       
import { 
    useOneWayCheckBox , 
} from "./useCompletion";   









/**     
 * each item shall be `<li>`s, the same case for `<ol>`s and `<ul>`s.
 * 
 */
const JsonSpecificListElement : (
   React.FC<{ 
      children : React.ReactElement[] ;
      ordered ?: boolean ;
   }>
) = (
   ({ children: childrenRendered1, }) => (
      <div 
      style={{ 
         borderBlockStart : `0.1em solid currentColor` ,
         borderBlockEnd   : `0.1em solid currentColor` ,
         borderRadius     : `0.25em` ,
      }}
      >
      <ol>
         { childrenRendered1 }
      </ol>
      </div>
   )
) ;
/**     
 * each item shall be `<tr>`s, the same case for `<tbody>`s and `<thead>`s.
 * 
 */
const JsonSpecificTBodyElement : (
   React.FC<(
      { 
         children : React.ReactElement[] ;
         ordered ?: boolean ;
      }
   )>
) = (
   ({ children: childrenRendered1, ...tBodyProps1 }) => (
      <div>
         <p>
            Dictionary/Record
         </p>
         <table 
         style={{ 
            border: `0.1em solid currentColor` ,
            borderCollapse: "collapse" ,
            width: `100%` ,
         }} 
         >
         <tbody>
            { childrenRendered1 }
         </tbody>
         </table>
      </div>
   )
) ;



export {
   JsonSpecificListElement ,
   JsonSpecificTBodyElement ,
} ;