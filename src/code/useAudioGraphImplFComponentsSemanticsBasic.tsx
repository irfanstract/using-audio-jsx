
// utility imports     
import Immutable from "immutable";    
import { IterableOps, PromiseReturnValue } from "./generalUse11";  
import React, { useMemo } from "react";               
import { ContextReturnType } from "./commonElementsTypes";     
import { K } from "./commonElements";      
   




/**   
 * initially intended to serve as semantic container for `WithGivenDest`'s payload,  
 * this  
 */    
const WGD_DIV : (
    React.FC<(
        Required<React.PropsWithChildren<{}> >   
    )>
) = (
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
/**             
 * initially intended to serve as semantic container for the `<ol>` within implementation of `LoopingWithPeriod`, 
 * with block-start border styling and automatic scrolling and, 
 * this  
 */         
const LWP_DIV : (
    React.FC<(
        Required<React.PropsWithChildren<{}> >   
    )>
) = (
    function ({ children } : Required<React.PropsWithChildren<{}> > ) {
        const borderStyle = (
            `0.05em solid currentcolor`    
        ) ;
        return (
            <div   
            style={{ 
                maxHeight: `100vh` ,     
                overflowY: `auto` ,             
                fontSize : `98%` ,         
                textAlign: "start" ,        
                borderBlockStart: borderStyle ,     
                borderInlineStart: borderStyle ,     
                margin : `0.5em` ,    
            } }    
            >             
                { children }        
            </div>
        ) ;
    }
) ;      




export {  
    WGD_DIV as ModifyingCompPayloadDiv ,   
    LWP_DIV as LoopingCompContentDiv ,   
} ;