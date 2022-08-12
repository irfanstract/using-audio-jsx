   
          
// utility imports     
import Immutable from "immutable";    
import { IterableOps, PromiseReturnValue } from "./generalUse11";      
import React, { useMemo } from "react";               
import { ContextReturnType } from "./commonElementsTypes";     
import { K, NUMERIC } from "./commonElements";               
import { useRealTimeQueryInterval1 } from "./useNonHookValue";     
import { CBC } from "./useStateInCallback";      
import { 
    isWindowActive , 
    useWindowActivityStatus ,      
} from "./useWindowFocusState";
       
//        
import { 
    getACtxMtWithoutAnyFilter1, 
    useACtxMtWithoutAnyFilter1, 
    AFeedableAndTappableNca ,

} from "./useAudioNodexCtxInitAndBeepNcaOnce1";  
import { ModifyingCompPayloadDiv as ModifyingCompPayloadDiv } from "./useAudioGraphImplFComponentsSemanticsBasic";      

       
 
  
       
          
                
                     
               
;
/**    
 * for these reasons :               
 * - {@link React.lazy }   
 *   dislikes intrinsic, non-callable components (including `ctx.Provider` )     
 * - use of {@link React.lazy }  
 *   will not play well with WebpackDevServer's HMR         
 */  
const PWrp = (
    function <P extends {
        children ?: unknown ;   
    }>(C : React.ExoticComponent<P> ) : React.FC<P > {
        return (
            function InPWrp(props : P ) {        
                return (       
                    <K key={C.length || 3 }  > 
                    <C {...props } >    
                        {props.children }    
                    </C>     
                    </K>      
                ) ;                     
            }      
        ) ;             
    }                 
) ;     
   
const asyncLoadedComponentWrp = (
    function <P extends {    
        children ?: unknown ;     
    }>(C0 : () => Promise<React.ExoticComponent<P> > ) {
        return (                
            PWrp((
                React.lazy(async () => ({ default: PWrp(await C0() ) }) )   
            ))    
        ) ;  
    }    
) ;                



; 








export {
   PWrp ,    
   asyncLoadedComponentWrp , 
} ;