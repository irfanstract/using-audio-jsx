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
import { arrayIndexedOrderedList } from "./commonListElements";       


  


   










 
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
export * from "./commonEnumConstantPicker" ;           
export * from "./headingNrm" ;     
export * from "./useLocaleSPecificTextContent" ; 
export * from "./usePriorityLevelling1";          
export {   
    arrayIndexedOrderedList as arrayIndexedOrderedList , 
} ;    
export { K, asVoidElement, useTopicHeadedRenderCount  };                             