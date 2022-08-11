


import { 
   IterableOps, PromiseReturnValue, OmitM, FrequencyAndPeriod  ,    
} from "./generalUse11";   
import React, { useMemo } from "react";         





  

const useRenderCount = (
    () => (
        React.useRef<number>(0 ).current  ++          
    )      
) ;
const useDepsChgCount = (
    function (...[{} , deps ] : [{} , React.DependencyList ]) {
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
  