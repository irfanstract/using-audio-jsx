// import util from "util" ;      
import { 
    BoundedIdentity, 
    BoundedIdentityFunction, 
    Unix ,     
    IterableOps , 
    Immutable ,    
    Seq1 ,
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
function useDebugDispatcher <A extends null | true | object > (...[] : [
    //  
]): React.Dispatch<() => A > {    
    ;         
    const [ , DEBUG ] = (   
        React.useState<null | A >(null )       
    ) ;    
    return DEBUG ;         
}                          
/**   
 * given an array of {@link React.ReactElement}s,    
 * assumes that the item each identity is solely {@link Array.indexOf its index/position in the src list } ,
 * renders `<ol>` with the `key`s being {@link Array.map the `i`s  } .    
 * avoid using this 
 * in case the identites of the items are something other than merely its position in the list.
 */
function arrayIndexedOrderedList(...[itemsRendered ] : [        
    items : (
        readonly (React.ReactElement)[] 
        | Immutable.Seq.Indexed<React.ReactElement>          
        // | IterableOps.List<React.ReactElement>
    ) ,    
] ) {    
    return (               
        <ol>   
            { (                   
                itemsRendered
                .map((e, i) => (
                    <li key={i} >       
                        { e }
                    </li>   
                ))     
            ) }
        </ol>        
    ) ;
} 
export * from "./commonElementsTypes" ;    
export * from "./commonCodeSnippetAndNumericDisplay";  
export * from "./commonNavigativeElements" ;         
export * from "./headingNrm" ;     
export * from "./useLocaleSPecificTextContent" ; 
export * from "./usePriorityLevelling1";     
export {   
    arrayIndexedOrderedList as arrayIndexedOrderedList , 
} ;
export { K, asVoidElement, useDebugDispatcher ,   };       