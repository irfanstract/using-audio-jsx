
// utility imports     
import Immutable from "immutable";    
import { IterableOps } from "./generalUse11";  
import React from "react";               
import { K, arrayIndexedOrderedList } from "./commonElements";          
     






function useDeferredTrue() {  
    const [e, setE] = (
        React.useState<boolean>(false ) 
    ) ;
    React.useEffect(() => (setE(() => true ) ) , [] ); 
    return e ;
}              
function useDeferredSwitch<A>([v0, v1] : [v0: A, v1: A ]) {   
    return (
        useDeferredTrue() ? v1 : v0  
    ) ;
}            
export {
    useDeferredTrue ,     
    useDeferredSwitch , 
} ;