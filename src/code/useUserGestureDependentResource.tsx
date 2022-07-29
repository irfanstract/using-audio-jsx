import {   
    IterableOps ,       
    memoize, 
    BoundedIdentityFunction,       
} from "./generalUse11" ; 
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import {   } from "./usingTimeoutOrInterval";   
const useUserGestureDependentResource = (  
    (() => {
        // 'USEA_IMPL_FOUNDSOMEUSERGESTURES'       
        let FOUNDSOMEUSERGESTURES : boolean = false ;
        return (
            function useUserGestureDependentResource1<A extends (AudioContext ) > ({ 
                NEW ,               
                aCtxGiven ,                     
            } : {                                   
                NEW : () => A ;         
                aCtxGiven : null ;  
            } ) {                                  
                const [s, setS] = (     
                    useState<A | null>(aCtxGiven || null )
                ) ;                                                   
                const INIT = (     
                    () => (             
                        setS((aCtx) => (aCtx || NEW() ) )         
                    )                            
                ) ;   
      
                ;  
                // TODO            1          
                if (!s ) {                   
                    if (FOUNDSOMEUSERGESTURES ) {
                        INIT() ;            
                    }                          
                }
                const onUserGesture = (
                    () => { INIT() ; FOUNDSOMEUSERGESTURES = true ; }      
                ) ;
                useEffect(() => {     
                    if (1) {                                                
                        return (() : (() => void) => {           
                            const listener = onUserGesture ;           
                            window.addEventListener("click", listener ) ;                                                 
                            return () => {                                         
                                window.removeEventListener("click", listener ) ;
                            } ;
                        })() ;   
                    }            
                }, [setS ]) ;   
                                           
                const CLOSE = () => {  
                    setS((c) => (c?.close() , null ) ) ;    
                } ;          
         
                return {  
                    INIT,           
                    s ,                 
                    // setS ,              
                    CLOSE ,                        
                } ;                 
            }  
        ) ;
    } )()
) ;




























export { useUserGestureDependentResource } ; 







