


import { 
   IterableOps, PromiseReturnValue, OmitM, FrequencyAndPeriod  ,    
} from "./generalUse11";   
import React, { useMemo } from "react";         





  

/**        
 * this integer will increment every `render()`.    
 * 
 * this has use in debugging whether a Component suffers from *brute-force re-renders*.   
 */         
const useRenderCount = (  
    () => (
        React.useRef<number>(0 ).current  ++          
    )          
) ;
/**    
 * this integer will increment {@link React.useEffect everytime `deps` changes }.  
 * this facility can be utilised to probe the in-so-far number of changes of `deps`.  
 * 
 * this has use in       
 * debugging whether a *{@link React.useState state}, {@link React.useMemo }* suffers from *brute-force re-renders*.   
 */     
const useDepsChgCount = (        
    function (...[{} , deps ] : [constraints: {} , deps: React.DependencyList ]) {
        const r = (
            React.useRef<number>(0 )   
        ) ;               
        return (
            // TODO
            React.useMemo(() => (r.current ++ ) , deps )
        ) ;
    }   
) ;     
  
function useDebugDispatcher <A extends void | (null | true | object ) > (...[] : [
   //  
]): React.Dispatch<() => A > {        
   ;                   
   const [ , DEBUG ] = (   
       React.useState<void | (null | A ) >(null )       
   ) ;       
   return DEBUG ;         
}             
const useUnmountLogging = (    
    function (v: false | true ) {   
        const LOGGING = (
            useDebugDispatcher()          
        ) ;
        React.useLayoutEffect(() => {
            ;  
            return () => {
                v && LOGGING(() => (console.warn(TypeError(`component unmounting` ) ), true ) ) ;
            } ;
        }, [] ) ;      
    }  
) ;          
  


export {
   useRenderCount ,  
   useDepsChgCount ,   
  
   useDebugDispatcher ,     
   useUnmountLogging ,    
} ;
  