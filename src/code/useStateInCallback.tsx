 
// utility imports     
import Immutable from "immutable";    
import { IterableOps, PromiseReturnValue } from "./generalUse11";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";    
       
       
 
  

              
              
                   
         
/**    
 * 
 * @example
 * return (      
 *   <CBC>{ () => {   
 *      const data = (
 *        useSyncExternalStore(() => ... , [....] ) 
 *      ) ;
 *      useYyyEffect(.... ... ) ;    
 *      return (
 *        <VData value={data } />
 *      ) ;
 *   } }</CBC>       
 * ) ;   
 */
const CBC = (
    function ({ children : useXYyy } : { 
        /**   
         * actual implementation is free to invoke `useEffect`, `useState`, etc .  
         * 
         */
        children : () => React.ReactElement ;  
    }  ) {
        const e = (      
            useXYyy()             
        ) ;
        // TODO remove this line
        null && (
            ({ } as ({ bar ?: () => void } ) ).bar!()  
        ) ;        
        return e ;    
    }                         
) ;                              

       
 
  

              
              
                   
           

















export {
    CBC , 
} ;
