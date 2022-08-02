 
// import util from "util" ;
// const util = { } ;         
import IterableOps, {  } from "lodash" ; 
import * as Iterable from "immutable";       
import * as Unix from "./unix" ;       
const util = { } ;                 
type Optional<A> = (readonly [A]) | (readonly []) ;   
/**    
 * returns an 'identity function' which's upper-bounded .   
 * 
 * an laternative to `as const`, 
 * - without way to violate type-safety         
 * - which, unlike `as const`, will not upcast the return-type ; 
 *   (if upcasting is essential, use IIFE instead )  
 * 
 * see also {@link identity }
 * 
 * @example 
 * BOundedIdentityFn<[V, Dispatch<V> ]>( )([... , ... ] )  // normally the (inferred) type would be something more loose        
 * 
 * @example
 * // writing a type-predicate is rather nontrivial        
 *  . . .     
 * .filter((a) : a is C => { ... } )  
 *     
 * @example     
 * // writing a type-predicate is rather nontrivial          
 * BOundedIdentityFn<(v: A ) => v is B >( )((a: A ) => (
 *      ("c" in a  ) && (a.c.d() )    
 * ) )
*/  
const BoundedIdentityFunction = (
    function <C>(_dummyvalue1 ?: true ) {
        return (
            function <A extends C> (a: A) { return a ; }     
        ) ;
    }         
);        
/**      
 * to write a type-predicate 
 * having explicitly-specified return-type yet       
 * having inferred argument-type    
*/  
const RAndPBoundedTypePredicateLiterator = (  
    function <R>() {                                                           
        return (                                                                    
            // function <P > (a: (v: P) => v is (P & R ) ) { return a ; }                               
            function <Fnc extends ((v: R) => v is R ) > (a: Fnc ) { return a ; }      
        ) ;
    }      
) ;   
const PromiseReturnValue = {} ; // TS-1205      
type PromiseReturnValue<P extends (               
    Record<keyof (
        Pick<Promise<void>, "catch" | "then" | "finally">
    ) , NonNullable<object> >   
)> = (            
    [P] extends [Promise<infer R > ] // https://www.typescriptlang.org/docs/handbook/2/conditional-types.html        
    ?
    R : never
) ;         
// import IterableOps, {  } from "lodash" ; 
// import * as Iterable from "immutable";
const { memoize, identity } = IterableOps ;        
const BoundedIdentity = identity ;  
/**    
 * rounded in-the-exponential-scale - to achieve pw-of-2           
*/
const roundToExponentiallyClosesPwOf2 = (
    (v: number) => (2 ** Math.round(Math.log2(v ) ) )    
) ;
const musicalSemitonesAsScalar = (
    (v: number ) => (2 ** (v / 12) )         
) ;   
// import * as Unix from "./unix" ;     
const CanIncrementAndGet = (
    class CanDoIncrementItsOwnValue {
        #i: number ;
        constructor(initialValue: number = 0 ) {  
            this.#i = initialValue ; 
        }
        incrementAndGet = () => (++ this.#i ) ;
        getAndIncrement = () => (this.#i ++ ) ;
    } 
) ;
const onlyIfAllAreNonNull = ( 
    function onlyIfAllItemsAreNonNull<E extends ({} | true | {} | (unknown[] | readonly unknown[] ) | ((...a: any[] ) => void ) ) > (vls0: readonly (E | null | undefined)[]) {           
        return (                                       

            vls0      
 
            .reduce<(E)[] | undefined >((r, v) => (                                     
                (r && v ) && [...r, v ] || undefined  
            ), [] )     

        ) ;           
    }   
) ;
const PERIODIC = (
    ({ 
        period , 
        firstPeriodStartT , 
        endT ,                                         
    } : Readonly<{
        period : number ;       
        firstPeriodStartT : number ;            
        endT : number ;     
    } & {} > ) => {   
        return (
            {                                                
                [Symbol.iterator]: (
                    function* () {  
                        for (let t: number = firstPeriodStartT ; t<endT ; t += period ) {
                            yield t ;        
                        }         
                    }          
                ) ,               
            } as const           
        ) ;
    }
) ;   
      
   
const ArrayIndex = {} ; // TS-1205   
type ArrayIndex<A extends readonly unknown[] > = (  
    Extract<number, keyof A >      
) ;
/**    
 * union of       
 * - for each of the 7 types, 
 *   - check if the prop with key `key1` exists ,  
 *     return the return-type, or `undefined` or `never`      
 */
type ALE_CHECKPROP<A, B, C, D, E, F, G, key1 extends keyof (A & B & C & D & E & F & G),   > = (
       
    {                         
        [I in ArrayIndex<[A,B,C,D,E,F,G] > ]             
        :                                
        (
       
            Required<[A, B , C, D, E, F, G][I] > extends { [key in key1] : (infer Vl) ; }  ?
            Vl : undefined                       
        ) ;                          
    }[ArrayIndex<[A,B,C,D,E,F,G] > ]                       
) ;                                  
/**                            
 * which conforms to                                               
 * - at-least one of these `interface`s             
 */   
type AtLeastEitherInterface<                                          
    A extends {} ,     
    B extends {} ,  
    C extends {} = {},                      
    D extends {} = {}  ,       
    E extends {} = {}  ,             
    F extends {} = {}  ,              
    G extends {} = {}  ,                   
> = (                      
    (                   
        // collected all keys in all the types, 
        // each to map to the union of the retun-type in each src                                                                
        {         
            [K in keyof (A & B & C & D & E & F & G ) ]         
            ?:      
            ALE_CHECKPROP<A,B,C,D,E,F,G, K > ;                   
        }                      
    )            
    &         
    (A | B | C | D | E | F | G )    
) ;                                       
{      
    function ALECH1(f: (
        Required<[{ vale: 7 }, { vale ?: 5 }, {}, {}, {}, {}, {}][0 | 1 | 2 | 3 ] >
    ), e: ALE_CHECKPROP<{ vale: 7 }, { vale: 8 }, {}, {}, {}, {}, {}, "vale" >) {} ;
    ;                     
    // test     
    type ALE01 = AtLeastEitherInterface<{ value: number ; }, {} > ;     
    type ALE02 = AtLeastEitherInterface<{ value: number ; }, { value: string ; } > ;  
    type ALKEY01 = keyof ALE01 ;
    type ALKEY02 = keyof ALE02 ;                                     
    function AL01({ value }: ALE01 ) {}        
    function AL02({ value }: ALE02 ) {}   
    {           
        ;
        function E3 (k: "value" , { value }: { [k] ?: number ; } & { [k] ?: string ; } ) {}     
        E3("value", { 
            // value: "string" ,   
        })      
    }
}

  

 




 
       
const Seq1 = {} ; // TS-1205     
type Seq1<A> = (    
    (readonly A[] )
    |
    IterableOps.List<A>
    |
    Iterable.List<A>
    |       
    Iterable.Seq.Indexed<A>       
) ; 
export * from "./generalUseTypeDefs";
export * from "./polynomialsC";
export type {    
    
    Optional ,                 
} ;
export {                                
    PromiseReturnValue,
    Seq1 ,    
    ArrayIndex ,     
    
    BoundedIdentityFunction,       
    identity ,    
    BoundedIdentity,
    RAndPBoundedTypePredicateLiterator,       
    onlyIfAllAreNonNull ,         

    IterableOps ,     
    Iterable ,   
    Iterable as Immutable ,    
    util ,                       
        
    memoize ,                
    CanIncrementAndGet,    

    roundToExponentiallyClosesPwOf2,
    musicalSemitonesAsScalar,          
    Unix ,          
    PERIODIC , 
} ;                                    