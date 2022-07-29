import {  
    // Unix , 
    IterableOps ,      
    // util ,                           
    memoize, 
    BoundedIdentityFunction,        
    // PERIODIC ,              
} from "./generalUse11" ;      
class DbgException extends TypeError {}                                                         
import React, {                   
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react";   
import {                          
} from "./commonElements"; 
import { usingTimeout } from "./usingTimeoutOrInterval";        
;



import { AudioSourceNode, AudioSinkNode } from "./useAudioNodesBasicS";        
        


   




const useAudioNodeConnectToDest = (
    (src: AudioSourceNode | null, destination: (AudioSinkNode ) | null, { cncDebug = false } : { cncDebug ?: boolean ; } = {} ): void => {                   
        ;                                 
        useLayoutEffect(() => {                 
            cncDebug && (console.log({ src, destination }), console.log(new DbgException(`ConnectToDest - printed some debug at cll ctx `) ) ) ;                
            if (src && destination) {  
                switch (1  as number ) {             
                    case 1 : {                                                                                            
                        ;                             
                        src.connect(destination) ;                 
                        return () => {     
                            // for some reason, if 'dest' were null, 
                            destination && src.disconnect(destination ) ; 
                        } ;                     
                    }
                    case 2 : {         
                        src.disconnect() ; 
                        src.connect(destination ) ;                                    
                        return () => {
                            ;
                        } ;
                    }
                }
            }                        
        }, [src, destination ] );               
    }      
) ;      











export {
    useAudioNodeConnectToDest , 
} ;