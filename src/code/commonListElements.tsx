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
import "./CLE1.css";


  


  











            
/**   
 * given an array of {@link React.ReactElement}s,    
 * assumes that the item each identity is solely {@link Array.indexOf its index/position in the src list } ,
 * renders `<ol>` with the `key`s being {@link Array.map the `i`s  } .    
 * avoid using this 
 * in case the identites of the items are something other than merely its position in the list.
 */
function arrayIndexedOrderedList(...[itemsRendered ] : [        
   items : (
       readonly (React.ReactElement | false | null )[] 
       | Immutable.Seq.Indexed<React.ReactElement>          
       // | IterableOps.List<React.ReactElement>
   ) ,    
] ) {      
   return (               
       <ol className="CLE_KEYEDLIST ">   
           { (                       
               itemsRendered
               .map((e, i) => (
                   (!(e === undefined || (e === null ) ) ) ?    
                   (
                       !(e === false || /* e === "" || */ false ) ?
                       (      
                           <li key={i} >         
                              { e }       
                           </li>   
                     ) 
                     : <li key={i} hidden />  
                   )  
                   : 
                   ((e === null ) ? null : <></> )
               ))     
           ) }
       </ol>        
   ) ;
}    




export {
   arrayIndexedOrderedList , 
} ;