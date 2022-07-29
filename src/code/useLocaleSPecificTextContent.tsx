import util from "util" ;
import { Unix } from "./generalUse11";
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue ,
} from "react";
import { Fragment as K } from "react";
import { ComponentProps, ComponentRefValue, ComponentAbstract } from "./commonElementsTypes";   




/**        
 * @see 
 * PHRASING CONTAINER . SHALL NEVER CONTAIN ANOTHER `<DIV>`S
*/
const { 
    EN,
    FR,                              
} = ((): any => {      
    function forLang(langCode: string, C: "span"  = "span") {          
        type CRefValue = (                  
            ComponentRefValue<typeof C >                                                
        ) ;                  
        return (           
            React.forwardRef<CRefValue, React.HTMLAttributes<CRefValue> >((
                ({ children, ...props }, ref ) => (
                    <C ref={ref } lang={langCode } {...props} >    
                        { children }          
                    </C>
                )
            ))
        ) ;        
    }      
    return {
        EN: forLang("en" ) ,          
        FR: forLang("fr" ) ,             
    } ;          
})() ;








export {
    EN,
    FR,      
} ;  