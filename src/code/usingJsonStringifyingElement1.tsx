
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









const DictDisplayElement : (
   React.FC<(
      OverloadedParameters<(typeof JSON)["stringify"]> extends [infer Payload, ...(infer Args) ] ?
      { 
         value : (
            null | ((object | string | number ) )
         ) ; 
         fmt ?: (
            [((Args[0] & ((...args : any[] ) => any ) )) ? , Args[1] ? ]
         ) ;
      }
      : never
   )>
) = (
   (props ) => {
      const { value, fmt = [undefined, 2, ], } = props ;
      const valuFmatted = (
         React.useMemo(() => (
            JSON.stringify(value, ...fmt, )
         ) , [value, fmt, ] )
      ) ;
      return (
         <code className="long-enough">
            { valuFmatted }
         </code>
      ) ;
   }
) ;




export {
   DictDisplayElement ,
} ;