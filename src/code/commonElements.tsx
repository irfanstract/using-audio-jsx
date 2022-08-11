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
import { useRenderCount } from "./usingComponentMountRenderStat";     
import { NUMERIC } from "./commonCodeSnippetAndNumericDisplay";               


  


   










 
/**      
 * this is wrapper, omiiting `children`.   
 * `C` shall allow omission of `children`, otherwise
 * the returned component will be an unusable one.             
 */
const asVoidElement = (  
    function <P0 extends {  }  > (C : ( 
        React.FC<P0 >        
    ) ) {            
        type C0 = typeof C ;                                       
        type P = ComponentProps<C0 > ; 
        type C1 = (                
            React.FC<(       
                (Omit<P, "children">) & { children ?: undefined ; }
            )>       
        )  ;
        ;                                                                      
        return (                                   
            IterableOps.identity<(     
                C1     
            ) >((C   as C1  )        )           
        ) ;           
    }            
) ;                           
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
const useTopicHeadedRenderCount = (     
    function useM(topic: React.ReactElement ) {           
        const mountGUid = (  
            useRenderCount()             
        ) ;               
        return (                    
            <p>   
                { topic } : 
                <NUMERIC>{ mountGUid }</NUMERIC>  
            </p>        
                         
        )     ;    
    }       
) ;        
export * from "./usingComponentMountRenderStat";
export * from "./commonElementsTypes" ;    
export * from "./commonCodeSnippetAndNumericDisplay";  
export * from "./commonNavigativeElements" ;           
export * from "./headingNrm" ;     
export * from "./useLocaleSPecificTextContent" ; 
export * from "./usePriorityLevelling1";          
export {   
    arrayIndexedOrderedList as arrayIndexedOrderedList , 
} ;    
export { K, asVoidElement, useTopicHeadedRenderCount  };                             