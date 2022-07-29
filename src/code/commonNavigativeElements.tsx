
// util imports    
// import util from "util" ;
import { Unix } from "./generalUse11";
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue ,
} from "react";
import { Fragment as K } from "react";  

// domain imports, and CSS imports  
import "./sideNavDiv.css" ;         






const { useSNdZIndex } = (() => {
    const sNdZIndexValueCtx = (
        React.createContext<number>(33 )
    ) ;            
    const useSNdZIndex = () => (             
        useContext(sNdZIndexValueCtx )
    ) ;
    return { useSNdZIndex } ; 
})() ;  
const SideNavDiv = (      
    ({ children } : React.PropsWithChildren<{}> ) => {
        const zIndex = (
            useSNdZIndex()    
        ) ;
        return (              
            <div
               className="SideNavDiv"    
               style={{ 
                   position: "sticky", top: 0, left: 0, right: 0, 
                   zIndex: zIndex , 
                //    background: util.format("rgba(0, 0, 0, %s )", 1 + -(2 ** -2 ) ) ,    
                   filter: "blur(0.025em)", backdropFilter: 0 ? "blur(0.1em)" : "", 
               }}  
            >
                { children }
            </div>
        ) ;
    } 
) ;
const PathBreadcrumb = (
    ({ children: children0 } : React.PropsWithChildren<{}> ) => {   
        const children = (
            React.Children.toArray(children0)          
        ) ;           
        const childrenRendered = ( 

            children    
            .map((e: React.ReactNode, index: number) => (                               
                <K key={index} > 
                    <a>{e } </a>            
                    { ">" }           
                </K>   
            ) )

        ) ;
        return (          
            <span className="SideNavPathDisplay" >       
                { childrenRendered }
            </span>
        );
    }   
) ;      
export { useSNdZIndex } ;
export { SideNavDiv, PathBreadcrumb } ;