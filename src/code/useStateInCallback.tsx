 
// utility imports     
import Immutable from "immutable";    
import { IterableOps, PromiseReturnValue } from "./generalUse11";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";    
       
        
 
       

              
              
                   
            
/**     
 * normally `useYyy` will not play well with branched code, so 
 * there's need for indirection.
 * 
 * it's the calling-code responsibility to ensure that `useYyy` remains the same expression. 
 * 
 * @example       
 * return (     
 *   (!!accntIdent )          
 *   ? 
 *   // it's guaranteed to be non-null at-this-point, so 
 *   // lets just craft the display . 
 *   // sadly, `useYyy`s will not play well in branched code, so
 *   // we need this indirection via Component {@link CBC }
 *   <CBC>{ () => {   
 *      const data = (
 *        useWEventStream(() => ... , [....] )       
 *      ) ;         
 *      const .... = (
 *        useMemo(() => .... , [.....] )
 *      ) ;
 *      const .... = (
 *        useYyyy(.... ... )
 *      ) ;            
 *      return (    
 *        <VData value={data } ..... />  
 *      ) ;         
 *   } }</CBC>           
 *   :
 *   null    
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
            name ?: string ;
        }>
     )>         ((   
         1
         ?
        function CBC({ children : useXYyy, name }  ) {        
            const C = (       
                /**        
                 * this needs ad-hoc separate Component.  
                 * this separation is necessary to keep playing well with React DevTools.  
                 */
                React.useCallback(( 
                    (() => {
                    const f = ( 
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
                    ) ;
                    name && (
                        (f as React.FC<{}>).displayName = name
                    ) ;
                    return (
                        f
                    ) ;
                    })()
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
