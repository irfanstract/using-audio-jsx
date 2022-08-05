

import Lodash, {  } from "lodash" ;         
  
 
 
const {
    Seq ,        
    SeqOps ,  
    Iterable ,        
    IterableOps ,  
    IterableOnce ,    
    IterableOnceOps , 
    Map , 
    MapOps ,       
} = (
    function <A>(v: A ) {
        return {
            Seq : v , 
            SeqOps : v , 
            Iterable: v , 
            IterableOps: v , 
            IterableOnce: v , 
            IterableOnceOps: v , 
            Map: v ,             
            MapOps: v ,             
        } ;
    }
)(Lodash);
const {      
} = Lodash ; 
export {     
    identity ,      
    clamp , 
    max , 
    min ,            

    once ,  
    memoize ,         
    throttle , 
    debounce ,    

    upperCase  , 
    toUpper , 
    lowerCase , 
    toLower , 
          
} from "lodash";
export { 
    Lodash ,   

    Seq ,        
    SeqOps ,  
    Iterable ,        
    IterableOps ,  
    IterableOnce ,    
    IterableOnceOps , 
    Map , 
    MapOps ,       
} ;