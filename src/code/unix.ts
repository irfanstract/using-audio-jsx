
import IterableOps, {  } from "lodash" ; 
const { memoize } =   IterableOps ;



   
type ArgsElement = (string | number | boolean | null) ;
const ArgsElement = {} ; // TS-1205
/**                 
 * type-safe representation of `Unix.Args`
*/
type Args = Argus ;    
const Args = {} ; // TS-1205
/**                 
 * `toString()`-safe representation of `Unix.Args`
*/
class Argus<A extends ( readonly ArgsElement[]) = ( readonly ArgsElement[] ) > {     
                   
    /**         
     * factory method which returns {@link argus} of given definition        
    */ 
    static empty = (                  
        memoize(() => new Argus<readonly [] >([] , "internal ponly"), () => true )
    ) ;     
    /**   
     * factory method which returns {@link argus} of given definition        
    */
    static from = (                                                                                                 
        function <A extends (readonly ArgsElement[] )> (elems: Readonly<A> ): Argus<A > {  
            return (
                (elems.length <= 0 )                                          
                ?                 
                new Argus(elems, "internal ponly")                
                : new Argus(elems, "internal ponly")     
            ) ;   
        }           
    ) ;      

    /**     
     * accessible array of elements 
    */   
    readonly elements : Readonly<A>  ;
    /**     
     * the constructors .               
     * UNSTABLE ; INTERNAL USE ONLY  
    */   
    constructor(elems: Readonly<A>, _unsafe: "unstable" | "internal ponly" ) {
        this.elements = Object.freeze(elems) ; 
    }            
    /**  
     * supersedes `elements.toString()` which would use COMMA as delimiter ; 
     * this one is `argsAsString(this.elements ) ` which would choose SPACE (`0x20`) instead  
    */
    toString = (): string => (
        argsAsString(this.elements )      
    ) ;
    /** 
     * defined to be {@link elements.length}      
    */
    get length() { return this.elements.length ; };
    /**  
     * defined to be {@link elements} Iterator
     * */    
    [Symbol.iterator] = () => (
        this.elements[Symbol.iterator]()      
    ) ;  
    slice = (() => {
        ;        
        const { elements } = this ;  
        return (start: number, end: number = elements.length ) => (
            Argus.from<((typeof elements[0 ] ) )[] >((
                elements.slice(start, end)  
            ) )      
        ) ;    
    })() ;  

}            
const argus = Argus.from ;
export { 
    // Args,
    Argus,      
    argus ,  
    // ArgsElement , 
} ;
export {    
    Args,
    // Argus,               
    // argus ,  
    ArgsElement , 
} ;   
/**  
 * we can't simply use {@link Array.join } due to possible need for escaping    
*/
const argsAsString = (
    (a: readonly ArgsElement[] ) => {
        // TODO
        return (
            a
            .map((e: ArgsElement ) => String(e) )
            .map((e: string): string => (
                argsElementNeedsEscaping(e) 
            ) )
            .join(" ")
        ) ;
    }
) ;  
const argsElementNeedsEscaping = (
    (e: string): string => {
        return (
            e.match(/^[\w\-]+$/ ) 
            ? 
            e    
            : JSON.stringify(e)    
        ) ;
    }
) ;
export { argsAsString, argsElementNeedsEscaping } ;


  
const AcceptablePathComponent = {} ; // TS-1205
/**  
 * {@link pathByComponents }
*/
type AcceptablePathComponent = (
    string | number | boolean | null     
) ;
export { AcceptablePathComponent } ;
const pathByComponents = (
    function UrlComponentConcatAsString(
        { leadChar, separator, closingChar, } : {
            leadChar    : "none" | "separator" ;
            separator   : string ;           
            closingChar : "none" | "separator" ;
        } ,
        p: readonly AcceptablePathComponent[] ,
    ): string {      
        return (        
        
            [
                ({ "none": "", "separator": separator })[leadChar    ] , 
                p.join(separator), 
                ({ "none": "", "separator": separator })[closingChar ] , 
            ].join("")
        ) ;        
    }     
) ;
export { pathByComponents } ;

/**      
 * constructs a {@link URL forward-slash-delimited path } .    
 * {@link URL it's a thing in URL(s) }
 * 
 * @example 
 *   /path/to/my/im/  
 *   /path/to/ext/
 *   /!static/asssets/
*/
const urlPathByComponents = (  
    (p: readonly AcceptablePathComponent[] ): string => (
        pathByComponents({ separator: "/", leadChar: "separator", closingChar: "separator" }, p )   
    )
) ;            
const urlResolve = (
    (baseUrl : string, resolvend : string ): string => ( 
                                                    
        baseUrl                        
        .replace((              
            // TO match the trailing slash OPTIONALLY AND ONLY ONCE
            /\/?$/ 
        ), () => resolvend )       

    )    
) ;
export { 
    urlPathByComponents ,    
    urlResolve, 
} ;
