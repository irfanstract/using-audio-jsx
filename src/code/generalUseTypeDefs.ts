







 
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
/**   
 * this *type-alias* 
 * takes care 
 * deciding whether the parameter can be made *optional*
 * (which will only be the case when(ever) it has *zero* *required property* ).
 * 
 * no need to care about updating the `?:` on every change in `props`, as
 * using this idiom the change will happen automatically as needed.
 * see below.
 * 
 * @example
 * 
 * // all props are optional here, but ... 
 * function bar(properties : { priority ?: number ; } ): void ;
 * // later on
 * // bar() ; // // missing required (object literal ) argument
 * 
 */
 type OptionsCouldBeOmittedAltogether<A extends {} > = (
    [A, [{}, ] ] extends [{}, readonly [A, ] ] ? 
    [A? ]
    : [A ]
 );
type OverloadedParameters<T extends {}> = (
    T extends { (...args: infer A1) : any; (...args: infer A2) : any; (...args: infer A3) : any ; (...args: infer A4) : any } ? A1|A2|A3|A4  :
    T extends { (...args: infer A1) : any; (...args: infer A2) : any; (...args: infer A3) : any } ? A1|A2|A3 :
    T extends { (...args: infer A1) : any; (...args: infer A2) : any } ? A1|A2  :
    T extends (...args: infer A) => any ? A : 
    never
)
type OverloadedReturns<T extends {}> = (
    T extends { (...args: any[]) : infer R; (...args: any[]) : infer R; (...args: any[]) : infer R ; (...args: any[]) : infer R } ? R  :
    T extends { (...args: any[]) : infer R; (...args: any[]) : infer R; (...args: any[]) : infer R } ? R  :
    T extends { (...args: any[]) : infer R; (...args: any[]) : infer R } ? R  :
    T extends (...args: any[]) => infer R ? R : 
    never
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
    OverloadedParameters ,
    OverloadedReturns ,
    OptionsCouldBeOmittedAltogether ,
} ;
             