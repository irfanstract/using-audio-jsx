







 
/**    
 * `A & B`               
 *  */    
 type Extract1<A, B> = A & B ;                
 /**      
  * {@link Pick }        
  * 
  * @deprecated 
  * this is just plain `Pick<A, B>`   
  */   
type PickM<A, B extends keyof A > = Pick<A, B> ;               
 /**   
  * {@link Omit }
  */
type OmitM<A, B extends keyof A > = Omit<A, B> ;                
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

            


   

















 

type EMX = (
    NonNullable<(
        ({ a ?: number ; } & { a ?: string ; } )["a"]
    )>
) ;  
type EMXB = (
    ({ readonly a ?: number | "bar" ; } & { readonly a: unknown ; } )["a"]
) ;  
type EMXB1 = (  
    Required<{ f ?: undefined ; }>["f"]
) ;
export type {
    Generalisation ,          
    Specialisation ,  
    Extract1 ,  
    OmitM ,     
    
    ObjValue , 

    Enum ,   
    EnumValue ,      

    SameParametersAndReturnType , 
} ;
             