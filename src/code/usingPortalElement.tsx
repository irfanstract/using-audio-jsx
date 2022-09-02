 
// utility imports     
import Immutable from "immutable";    
import { IterableOps } from "./generalUse11";  
import React from "react";               
import { useDeferredRecompute } from "./usingDeferredRecompute";
import ReactDOM from "react-dom" ;
import { K, ComponentProps, ContextReturnType, arrayIndexedOrderedList } from "./commonElements";    
        










type RPortalProps = (
   { 
      dest: (
         (
            Parameters<(
               (typeof ReactDOM)["createPortal"]
            ) >
         )[1]
      ) ; 
      key ?: (
         (
            Parameters<(
               (typeof ReactDOM)["createPortal"]
            ) >
         )[2]
      ) ;
      children: object & React.ReactNode ; 
   }
) ;
const RPortalProps = {} ;
const RDeferredAppearancePortal: (
   React.FC<RPortalProps >
) = (
   function ({ dest, key, children: payload } ) {
      const [mde, setMde ] = (
         React.useState<0 | 1 >(0 )
      ) ;
      React.useEffect(() => {
         setMde(1 ) ;
      } , [] ) ;
      return (
         (mde === 1 ) ?
         ReactDOM.createPortal(payload, dest, key )
         : null
      ) ;
   }
) ;
const RDeferredRefreshPortal: (
   React.FC<RPortalProps >
) = (
   function ({ dest, key, children: payload } ) {
      return (
         React.useDeferredValue((
            <RDeferredAppearancePortal {...{ dest, key }} >
               { payload }
            </RDeferredAppearancePortal>
         ))
      ) ;
   }
) ;


export {
   RPortalProps ,
   RDeferredAppearancePortal ,
   RDeferredRefreshPortal ,
} ;