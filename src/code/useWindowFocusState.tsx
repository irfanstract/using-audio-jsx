import {  
    // Unix , 
    IterableOps ,      
    // util ,        
    memoize, 
    BoundedIdentityFunction,   
} from "./generalUse11" ; 
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react";
// import { 
//     // useMountDelay ,   
// } from "./useComponentDebug" ;
// import { usingInterval } from "./usingTimeoutOrInterval";  
// import { useCanForceRefresh, useRefreshByInterval } from "./useNonHookValue";
;       
const isWindowActive = (({
    logging: loggingCOnfig = {
        dateTime: false ,    
    } ,                                    
} : {   
    logging ?: {
        dateTime ?: false | true ;       
    } ,
} = {} ) => {
    let F : boolean = false ;  
    const F1 = (       
        function (expectedV: boolean ) {    
            if (expectedV ? !F : true ) {
                ;
                console.info((    
                    [
                        `window apparently ${ expectedV ? "activated" : "deactivated" }.` ,  
                        loggingCOnfig.dateTime ? Date() : "" ,           
                    ].join("\n")  
                )) ;          
            }
            F = expectedV ;
        }                              
    ) ;            
    window.addEventListener("pointerdown" , () => { F1( true ) ; } ) ;    
    window.addEventListener("mousedown"   , () => { F1( true ) ; } ) ;     
    window.addEventListener("keydown"     , () => { F1( true ) ; } ) ;                 
    window.addEventListener("focus"       , () => { F1( true ) ; } ) ;                                      
    window.addEventListener("blur"        , () => { F1( false) ; } ) ;                           
    return (
        () => (
            F      
        )        
    ) ;                                              
})() ;     



   
const useWindowActivityStatus = (
    () => {
        const [s, setS] = (
            useState<boolean>(false )    
        ) ;  
   
        const REFRESH = () => {        
            setTimeout(() => {             
                ;
                const logging: boolean = false ;     
                const f = (  
                    isWindowActive()                              
                ) ;            
                logging && console.log({ f  }) ;  
                {             
                    setS((                      
                        f ?      
                        ( logging && console.log("window activated") ,  () => true ) 
                        : ( logging && console.log("window deactivated") , () => false )
                    ) ) ;          
                }      
            } , 250 ) ;                            
        };  

        useLayoutEffect(() => {
            REFRESH() ;  
            const focusAndBlurListener : {             
                onFocus : () => void ; 
                onBlur: () => void ; 
            } = {        
                onFocus: REFRESH ,  
                onBlur: REFRESH ,  
            } ;                                              
            {      
                ;              
                window.addEventListener("focus", focusAndBlurListener.onFocus ) ;          
                window.addEventListener("blur" , focusAndBlurListener.onBlur  ) ;                   
            }  
            return () => {
                ;                                              
                {       
                    ;              
                    window.removeEventListener("focus", focusAndBlurListener.onFocus ) ;          
                    window.removeEventListener("blur" , focusAndBlurListener.onBlur  ) ;                   
                }        
            } ;
        }, [] ) ;

        return {
            isWindowOnFocus : s ,
        } as const ;
    }    
) ;










export {
    isWindowActive , 
    useWindowActivityStatus , 
} ;
