


import { 
   IterableOps, PromiseReturnValue, OmitM, FrequencyAndPeriod  ,    
} from "./generalUse11";   
import React, { useMemo } from "react";         







function useDebugDispatcher <A extends void | (null | true | object ) > (...[] : [
   //  
]): React.Dispatch<() => A > {        
   ;                   
   const [ , DEBUG ] = (   
       React.useState<void | (null | A ) >(null )       
   ) ;    
   return DEBUG ;         
}             



export {
   useDebugDispatcher ,    
} ;
