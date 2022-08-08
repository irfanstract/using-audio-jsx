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
        


   


      

const M_ONMOUNT_MKCONNECT_ONUNMOUNT_DISCONNECT = 1 ;       
/**  
 * CAVEAT.  
 * due to the presence of `disconnect(void )` on *mount-time*, 
 * this mode will only work properly in *single-dest* setyting.  
 */  
const M_ONMOUNT_RECONNECT_ONUNMOUNT_DISCONNECT = 1.5 ;         
/**            
 * CAVEAT.   
 * at this point, there's no guarantee of subsequent the `useYyyEffect` call(back).  
 * @deprecated                          
 */
const M_ONMOUNT_RECONNECT_ONUNMOUNT_NOOP = 2 ;
const useAudioNodeConnectToDest = (
    (...args1 : [         
        src: AudioSourceNode | null,            
        destination: (AudioSinkNode ) | null, 
        properties ?: {    
            /**    
             * CAVEAT - this will cause your app to violently dump logging.
             * @deprecated    
             * BILLION LAUGHS    
             */
            cncDebug ?: boolean ;                
            omitUnmountTimeDisconnectiveCall ?: boolean ;     
        }  ,     
    ]): void => {             
        const [      
            src , destination , 
            { cncDebug = false, omitUnmountTimeDisconnectiveCall: omitDisconnectiveCallOnUnmount = false } = {} ,  
        ] = args1 ;
        const mode1 = (
            (      
                omitDisconnectiveCallOnUnmount ? 
                M_ONMOUNT_RECONNECT_ONUNMOUNT_NOOP      
                : M_ONMOUNT_MKCONNECT_ONUNMOUNT_DISCONNECT               
            )  as (
                never              
                | typeof M_ONMOUNT_MKCONNECT_ONUNMOUNT_DISCONNECT 
                | typeof M_ONMOUNT_RECONNECT_ONUNMOUNT_DISCONNECT      
                | typeof M_ONMOUNT_RECONNECT_ONUNMOUNT_NOOP       
            )              
        ) ;                  
        ;                   
        useLayoutEffect(() => {                         
            cncDebug && (
                console.log({ src, destination }), console.log(new DbgException(`ConnectToDest - printed some debug at cll ctx `) )       
            ) ;                
            if (src && destination) {  
                switch (mode1 ) {      
                    case M_ONMOUNT_MKCONNECT_ONUNMOUNT_DISCONNECT : {                                                                                                   
                        ;          
                        src.connect(destination) ;                       
                        return () => {           
                            src.disconnect(destination ) ;          
                        } ;                     
                        break ;                    
                    }                       
                    case M_ONMOUNT_RECONNECT_ONUNMOUNT_DISCONNECT : {           
                        src.disconnect() ; 
                        src.connect(destination ) ;                                    
                        return () => {          
                            /**              
                             */
                            src.disconnect( destination ) ; 
                            ;        
                        } ;  
                        break ;  
                    }
                    case M_ONMOUNT_RECONNECT_ONUNMOUNT_NOOP : {         
                        src.disconnect() ; 
                        src.connect(destination ) ;                                    
                        return () => {
                            ;      
                        } ;  
                        break ;  
                    }
                }
            }                        
        }, [src, destination, mode1 ] );               
    }      
) ;      




    






export {
    useAudioNodeConnectToDest , 
} ;