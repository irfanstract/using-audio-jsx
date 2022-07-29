
type EnumC<Ns1 extends (
    { readonly [k: string | symbol ] : string | number | symbol ; }   
) > = Ns1[keyof Ns1 ] ;   
const EnumC = {} as const ;






  







  
export {
    EnumC , 
} ;   