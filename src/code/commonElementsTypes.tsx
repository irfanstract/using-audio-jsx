import { 
    BoundedIdentity, 
    BoundedIdentityFunction, 
    Unix ,    
} from "./generalUse11";       
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue ,
} from "react";
import { Fragment as K } from "react";  
import { useJsonStringificativeMemo } from "./usingTimeoutOrInterval";         
type JsxBoolean = null | " " | "_" ;
export type {
    JsxBoolean , 
} ;   












/**   
 * the {@link React.Context}'s return-type
 */
type ContextReturnType<C extends (        
    Readonly<(
        Record<keyof Pick<React.Context<null>, "Provider" | "Consumer"> , unknown >          
    )>                         
) > = (         
    [C ] extends [ React.Context<infer A1>] // https://www.typescriptlang.org/docs/handbook/2/conditional-types.html 
    ? 
    A1 : never              
)              
   

/**    
 * a Component Class     
 */
type ComponentAbstract = (                 
    (keyof JSX.IntrinsicElements       )
    |              
    ((a: never) => ReturnType<React.FC<{} > > )       
    |                     
    (Partial<{ render() : unknown ; }> )      // TODO        
    |              
    (React.ExoticComponent<never> | { [ K in keyof React.ExoticComponent<never> ] : unknown ; } )   
) ;    
/**     
 * the {@link React.FC Component type }'s `props` `type`           
 */       
type ComponentProps<C extends (                  
    ComponentAbstract             
) > = (   
    ([C] extends [keyof JSX.IntrinsicElements ] ? JSX.IntrinsicElements[C ] : never )
    |   
    // https://www.typescriptlang.org/docs/handbook/2/conditional-types.html 
    ([C] extends [(           
        (props: infer Props )    
        =>     
        ReturnType<React.FC<{}> >           
    )] ? Props : never )          
    |         
    ([C] extends [(  
        React.Component<infer Props , infer InternalState , infer SS >             
    )] ? Props : never )               
    |                   
    ([C] extends [(   
        React.ExoticComponent<infer Props  >             
    )] ? Props : never )                              
    |                           
    ([C] extends [(              
        ((v ?: undefined ) => React.ReactNode      )  
        |
        ((v ?: {       } ) => React.ReactNode      )             
    )] ? {} : never )                   
    |                                
    never                      
) ;               
/**                
 * given a Component Props .    
 * result - `React.Ref<Bar>`       
 */   
type ComponentPropsRef0<Props extends {} > = (
    [Props] extends [{ ref ?: (infer Ref ) }]     
    ?               
    NonNullable<Ref >      
    : never                         
) ;              
/**   
 * acceptable `ref` for given Component, 
 * - be callback-ref, mutable-ref-obj     
 */   
type ComponentRef<C extends (        
    ComponentAbstract                
) > = (   
    ComponentPropsRef0<Extract<ComponentProps<C > , {} > >
) ;            
/**        
 * acceptable `ref-value` for given Component,  
 * - exactly the value given as argument or value (when non-null )    
 */   
type ComponentRefValue<C extends (     
    ComponentAbstract           
) > = (
    (        
        [Extract<ComponentRef<C >, Pick<React.RefObject<unknown>, "current" > > ] extends [ { readonly current: infer Refee ; } ]
        ?                               
        NonNullable<Refee >                     
        : never           
    )         
    |      
    (                      
        [Extract<ComponentRef<C >, (...a: never) => any > ] extends [ (a: infer Refee ) => void ]
        ?                                           
        NonNullable<Refee >              
        : never   
    )        
) ;   
  





  







 




         



export type {
    ContextReturnType  , 

    // 

    ComponentAbstract , 
    ComponentProps ,   
    ComponentPropsRef0 , 
    ComponentRef ,        
    ComponentRefValue ,
       
    //      
} ;
