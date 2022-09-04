
// utility imports     
import Immutable from "immutable";    
import { IterableOps, PromiseReturnValue } from "./generalUse11";  
import React, { useMemo } from "react";               
import { ContextReturnType } from "./commonElementsTypes";     
import { K } from "./commonElements";      
import { 
    useRefreshByInterval1 ,   
} from "./usingIntervalRefresh"; 
   




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
        // TODO hoping that this LOC can be removed ..  
        useRefreshByInterval1(true, (0 ? 520 : 2230 ), { LE: "useLayoutEffect" } );  
        //  
        return (                         
            <div      
            className="WGD_DIV_BORDERSTYLE WGD_DIV_PADDINGSTYLE WGD_DIV_FONTSIZING WGD_DIV_BOXSIZING"    
            style={{     
            } }
            >                
                { children }        
            </div>
        ) ;
    }
) ;             
const wgdDivCtx0 = (
    React.createContext<boolean >(true )
) ;
/**   
 * EXPERIMENTAL.
 * 
 * @deprecated
 */
const wgdDivCtx = (
    wgdDivCtx0 
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
                // ...({      
                //     "--borderstyle0" : `0.05em solid currentcolor` ,    
                // }) ,
            } }    
            >             
                { children }        
            </div>
        ) ;
    }
) ;      

/**    
 * it's supposed that     
 * a child renders a debug box (`dbgBox`) and 
 * another renders the main content (`c1`, `children`, `content`)
 */      
 const XDC = (    
    function AllChildrenRenderedEqually({ children } : { children: React.ReactElement[] ; } ) {
        return (
            <div style={{ display: "flex", flexDirection: "column" }} >
                { children }
            </div> 
        ) ;                
    }  
) ;                




export {  
    WGD_DIV as ModifyingCompPayloadDiv ,   
    wgdDivCtx ,
    LWP_DIV as LoopingCompContentDiv ,       
    XDC ,  
} ;