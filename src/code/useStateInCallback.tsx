 
// utility imports     
import Immutable from "immutable";    
import { IterableOps, PromiseReturnValue } from "./generalUse11";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";    
       
        
 
       

              
              
                   
         
/**     
 * it's the calling-code responsibility to ensure that `useYyy` remains the same expression. 
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
     IterableOps.identity<(                      
        React.FC<{                  
            /**   
             * actual implementation is free to invoke `useEffect`, `useState`, etc .  
             * 
             */
            children : () => React.ReactElement ;  
        }>
     )>         ((   
         1
         ?
        function CBC({ children : useXYyy }  ) {        
            const C = (       
                /**        
                 * this needs ad-hoc separate Component.  
                 * this separation is necessary to keep playing well with React DevTools.  
                 */
                React.useCallback(( 
                    function XYyyUsage ({ children: useXYyy } : ComponentProps<typeof CBC > ) {    
                        ;       
                        const e = (           
                            useXYyy()                    
                        ) ;            
                        // TODO remove this line
                        null && (
                            ({ } as ({ bar ?: () => void } ) ).bar!()  
                        ) ;        
                        return e ;          
                    }
                ) , [] )  
            ) ; 
            return (
                <C >{ useXYyy }</C>
            );
        }        
        : 
        function CBC({ children : useXYyy }  ) {
            return useXYyy() ;
        }
     ))             
) ;                              

       
 
  

              
              
                   
           

















export {
    CBC , 
} ;
