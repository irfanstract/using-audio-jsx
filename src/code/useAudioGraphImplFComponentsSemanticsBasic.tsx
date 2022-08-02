
// utility imports     
import Immutable from "immutable";    
import { IterableOps, PromiseReturnValue } from "./generalUse11";  
import React, { useMemo } from "react";               
import { ContextReturnType } from "./commonElementsTypes";     
import { K } from "./commonElements";      
   




/**   
 * initially intended to serve as semantic container for `WithGivenDest`,  
 * this  
 */
const WGD_DIV = (
    function ({ children } : Required<React.PropsWithChildren<{}> > ) {
        return (
            <div 
            style={{ 
                border: `0.05em solid currentcolor`  ,  
                padding: `0.5em` ,        
                maxWidth : `60em` ,       
                fontSize : `98%` ,   
                textAlign: "start" ,     
            } }
            >             
                { children }        
            </div>
        ) ;
    }
) ; 




export {
    WGD_DIV ,  
} ;