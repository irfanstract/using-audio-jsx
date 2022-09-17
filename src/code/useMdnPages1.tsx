

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
const OPTIONAL_TRAILING_SLASH = /\/?$/ ;
const OPTIONAL_LEADING_SLASH = /^\/?/;













/**   
 * example :
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaStream 
 */
;
const MdnRefC : (
   React.FC<(
      { children ?: React.ReactNode & object ; }
      &
      { href : string ; }
      &
      Omit<JSX.IntrinsicElements["a"] , "ref" | "href" | "children" >
   )>
) = (
   ({ children: label, href: usrSpecifiedHref0, ...props }) => {
      const usrSpecifiedHref1 = (
         usrSpecifiedHref0
         .replace(OPTIONAL_LEADING_SLASH , () => "/" )
      ) ;
      return (
         <a
         href={(
            "https://developer.mozilla.org/en-US/docs/"
            .replace(OPTIONAL_TRAILING_SLASH , () => (
               usrSpecifiedHref1
            ) )
         ) }
         {...props }
         >
            { label || (
               <code>
                  { usrSpecifiedHref1 }
               </code>
            ) }
         </a>
      ) ;
   }
) ;
/**   
 * note that `href` must be the `/`-separated name(space) without leading `/`.
 * 
 */
type MdnApisRefComponent = (
   typeof MdnRefC
) ;
const MdnApisRefComponent = {} ; // TS-1205
/**   
 * note that `href` must be the `/`-separated name(space) without leading `/`.
 * 
 */
const MdnWebApisRefC : (
   MdnApisRefComponent
) = (
   ({ href: name, children : label , ...props }) => (
      <MdnRefC 
      href={`/Web/API/${name }` } 
      {...props }
      >
         { label }
      </MdnRefC>
   )
) ;
/**   
 * note that `href` must be the `/`-separated name(space) without leading `/`.
 * 
 */
const MdnJsBuiltInApisRefC : (
   MdnApisRefComponent
) = (
   ({ href: name, children : label , ...props }) => (
      <MdnRefC 
      href={`/JavaScript/API/${name }` } 
      {...props }
      >
         { label }
      </MdnRefC>
   )
) ;



export {
   MdnRefC ,
   MdnApisRefComponent ,
   MdnJsBuiltInApisRefC ,
   MdnWebApisRefC ,
} ;