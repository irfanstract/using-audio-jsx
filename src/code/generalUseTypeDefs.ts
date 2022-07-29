







 
/**    
 * `A & B`             
 *  */    
 type Extract1<A, B> = A & B ;                
 /**               
  * `[B] extends [A]`   
  *  */           
 type Generalisation<A, B extends A > = A ;            
 /**               
  * `[B] extends [A]`      
  *  */           
 type Specialisation<A, B extends A > = B ;        

type ObjValue<A extends {} , Key extends keyof A > = (
    (Required<A> )[Key ]      
) ;  

type Enum = (  
    { readonly [K : string ] : string | number | boolean ; }    
    |  
    { readonly [K : string ] : symbol ; }                    
    |     
    { readonly [K : string ] : {} ; }    
) ;
type EnumValue<A extends {} > = (
    ObjValue<A, keyof A >
) ;   
     
type SameParametersAndReturnType<A extends (...args: any ) => any > = (             
    { (...a: Parameters<A> ): ReturnType<A> ; }
) ;

            


   



















export type {
    Generalisation , 
    Specialisation ,  
    Extract1 , 
    
    ObjValue , 

    Enum ,   
    EnumValue ,      

    SameParametersAndReturnType , 
} ;
   