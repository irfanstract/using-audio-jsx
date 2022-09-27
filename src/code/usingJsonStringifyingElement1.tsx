
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
import {
   JsonSpecificListElement ,
   JsonSpecificTBodyElement ,
} from "./useJsonDisplaySpecificElements1";









const DictDisplayElementSimple = (
   (props: (
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
   ) ) => {
      const { value, fmt = [undefined, 2, ], } = props ;
      const valuFmatted = (
         React.useMemo(() => (
            JSON.stringify(value, ...fmt, )
         ) , [value, fmt, ] )
      ) ;
      return (
         <code className="long-enough" title={valuFmatted }>
            { valuFmatted }
         </code>
      ) ;
   }
) ;
const CKeyValueTableRowElement : (
   React.FC<{ 
      children : { 
         key: string ; 
         valueRender: (
            (ctx: { assignedId: string ; } ) 
            => React.ReactElement
         ) ; 
      } ;
   }>
) = (
   ({ children: { key, valueRender, }, }) => {
      const idx = (
           Array.from(React.useId() )
           .map(v => v.replace(/\W/g, () => "-" ) )
           .join("")
      ) ;
      return (
         <tr key={key } title={`Property '${key }'.` } >
            <td>
               <label htmlFor={idx } style={{ display: "block" }}>
                  <code>{ (typeof key === "string") ? `'${ key }'` : "" }</code>
               </label>
            </td>
            <td>
               { valueRender({ assignedId: idx, }) }
            </td>
         </tr>
      ) ;
   }
) ;
//
const DictDisplayElementPro = (
   ({ value, ...props }: (
      ComponentProps<typeof DictDisplayElementSimple >
   ) ) => {
      const renderWithSameSettings = (
         (value: unknown ): React.ReactElement => (
            (
               typeof value === "object" || typeof value === "number" || typeof value === "string" ?
               <DictDisplayElementPro 
               value={value } 
               {...{ ...props } } 
               />
               : null
            )
            || (
               <>{ value }</>
            )
         )
      ) ;
      {
         if (value !== null && (typeof value === "object") ) {
            if (Object.getPrototypeOf(value ) === Object.prototype ) {
               const kvs = Object.entries(value ) ;
               return (
                  <JsonSpecificTBodyElement>
                     { (
                        kvs
                        .map(([key, value, ], i ) => (
                           <K key={key }>
                           <CKeyValueTableRowElement>
                           { { 
                              key, 
                              valueRender: ({ assignedId: id, }) => (
                                 <div id={id } style={{ display: "flex", flexDirection: "column", }} >
                                    { renderWithSameSettings(value ) }
                                 </div>
                              ) , 
                           } }
                           </CKeyValueTableRowElement>
                           </K>
                        ) )
                     ) }
                  </JsonSpecificTBodyElement>
               ) ;
            }
            if (Array.isArray(value ) ) {
               const children : unknown[] = (
                  value
               ) ;
               const childrenRendered: React.ReactElement[] = (
                  // TODO
                  children
                  .map((e: unknown ): React.ReactElement => (
                     renderWithSameSettings(e )
                  ))
               ) ;
               return (
                  <JsonSpecificListElement>
                     { (
                        childrenRendered
                        .map((e, i) => (
                           /**   
                            * depending on domain, using `i` as `key` might therefore be inappropriate ;
                            * we leave this responsibility to callers
                            * 
                            */
                           <li key={i} >
                              { e }
                           </li>
                        ) )
                     ) }
                  </JsonSpecificListElement>
               ) ;
            }
         }
      }
      return (
         <DictDisplayElementSimple 
         value={value } 
         {...props } 
         />
      ) ;
   }
) ;
const DictDisplayElement : (
   React.FC<(
      ComponentProps<typeof DictDisplayElementSimple >
   )>
) = (
   ({ value: presentlyValue, ...otherProps }) => {
      return (
         React.useDeferredValue((
            <DictDisplayElementPro 
            value={presentlyValue }
            {...otherProps }
            />
         ))
      ) ;
   }
) ;




export {
   DictDisplayElement ,
} ;