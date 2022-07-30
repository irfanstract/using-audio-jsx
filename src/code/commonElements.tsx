// import util from "util" ;      
import { 
    BoundedIdentity, 
    BoundedIdentityFunction, 
    Unix ,     
    IterableOps , 
} from "./generalUse11";       
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue ,
} from "react";
import { Fragment as K } from "react";  
import { useJsonStringificativeMemo } from "./usingTimeoutOrInterval";         
// type JsxBoolean = null | " " | "_" ;
// export {
//     JsxBoolean , 
// } ;
import { ComponentRefValue, ComponentProps, JsxBoolean } from "./commonElementsTypes"; 
















 
/**   
 * this is wrapper, omiiting `children`.          
 */
const asVoidElement = (
    function <C0 extends React.FC<any>  > (C : ( 
        C0 
    ) ) {                        
        type P = ComponentProps<C0 > ;
        ;                                                       
        return (                                  
            IterableOps.identity<(     
                React.FC<(       
                    Omit<P , "children">
                )>       
            ) >((C    ))       
        ) ;         
    }                             
) ;                       
export * from "./commonElementsTypes" ;  
export * from "./commonCodeSnippetAndNumericDisplay";  
export * from "./commonNavigativeElements" ;         
export * from "./headingNrm" ;     
export * from "./useLocaleSPecificTextContent" ; 
export * from "./usePriorityLevelling1";   
export { K, asVoidElement, };  