import {  
    // Unix , 
    IterableOps ,      
    // util ,                           
    memoize, 
    BoundedIdentityFunction,        
    // PERIODIC ,              
} from "./generalUse11" ;                                              
import React, {                   
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react";   
import {                          
} from "./commonElements"; 
import { usingTimeout } from "./usingTimeoutOrInterval";     



import { AudioSourceNode, AudioSinkNode } from "./useAudioNodesBasicS";    



class DbgException extends TypeError {}                 
        


   


      

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
            cncDebug && ([
                console.log({ src, destination }), console.log(new DbgException(`ConnectToDest - printed some debug at cll ctx `) )       
            ]) && String("") ;                
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

/**    
 * when(ever) `deps` changes,  
 * the unit will be replaced/substituted
 */
function useDepsRemount(...[{ deps: deps0, dest: nd0 }] : [ 
    { deps: React.DependencyList ; dest: AudioNode | null ; } , 
]): AudioNode | null {
    ;
    const nd1 = (       
        React.useMemo(() => {
            if (nd0 ) {
                const gnNd = nd0.context.createGain() ;         
                return gnNd ;       
            } else {         
                return null ;            
            } 
            // eslint-disable-next-line react-hooks/exhaustive-deps                 
        } , [nd0 , ...deps0 ])          
    ) ;                      
    React.useLayoutEffect(() => {            
        if (nd1) {           
            return () => {
                nd1.gain.setTargetAtTime(
                    0, nd1.context.currentTime, 0.1 ) ;       
            } ;          
        }
        ;         
    } , [nd1]);   
    ;
    useAudioNodeConnectToDest(nd1, nd0 ) ;
    ;
    return nd1 ;               
}                           
// const useGainNodeFromSameCtx1 = (    
//     (...[{} , deps0 ] : [{} , React.DependencyList ]) =>
// );         
;  




    






export {  
    useAudioNodeConnectToDest , 
    useDepsRemount as useDepsRemount , 
} ;    