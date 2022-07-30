
// utility imports                  
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue, OmitM } from "./generalUse11";   
import React, { useMemo } from "react";        
import {
    useMonotonicallyIncrementation , 
} from "./useStateNumeric" ;          
           












type TNowMethod = (
    (Performance | DateConstructor )["now"]  
) ;

const useStateStamped = (          
    function useStateStamped0 <V>(...[{    
        initialValue ,     
        getPresentlyTime = () => performance.now() ,   
    } ] : [                
        {   
            initialValue : V ;    
            getPresentlyTime ?: TNowMethod ;  
        } ,            
    ] ) {                  
        const [v0, setValue ] = (
            React.useState<V>(initialValue )  
        ) ;        
        const {        
            when ,   
        } = (
            React.useMemo<{ 
                when: ReturnType<TNowMethod > ;   
            }>(() => {
                return {
                    when : getPresentlyTime() ,       
                };
            } , [v0 ] )
        ) ;       
        return [
            { value : v0 , when , } ,    
            setValue ,    
        ] as const ;          
    }
) ;



 


export {
    useStateStamped , 
} ;