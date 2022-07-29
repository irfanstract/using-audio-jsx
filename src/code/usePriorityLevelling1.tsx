// import util from "util" ;
import { Unix } from "./generalUse11";
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue ,
} from "react";
import { Fragment as K } from "react";


 

import HeadingNrm from "./headingNrm" ;
export { HeadingNrm } ;
const PossiblyInvisible = (
    ({ disabled : disable1 = false , children } : React.PropsWithChildren<{ disabled ?: boolean }> ) => {
        return (
            <div    
                aria-disabled={ disable1 } // TODO
                style={{ 
                    opacity: disable1 ? (2 ** -1 ) : 1 , 
                    filter: disable1 ? "grayscale(0.95)" : "" , 
                    pointerEvents: disable1 ? "none" : "initial" ,
                    transition: "all 0.5s ease-out" ,
                } } 
            >
                { children }
            </div>
        ) ;
    }
) ;
const Subtly = (  
    React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement> >((props , ref ) => {
        const { children, style = {} } = props ;
        return (
            <div ref={ref} {...props } style={{ zoom: 0.9 , ...style }} > 
                {children }
            </div>
        ) ;
    })
);     
export { PossiblyInvisible, Subtly } ;


  