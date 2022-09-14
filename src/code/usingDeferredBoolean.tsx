
// utility imports     
import Immutable from "immutable";    
import { IterableOps } from "./generalUse11";  
import React from "react";               
     






/**     
 * *initially this will return `false`*. however,
 * *after some delay characteristic of {@link React.useEffect} and {@link React.useDeferredValue}*
 * (eg a-few milliseconds), 
 * this will switch to `true`.
 * 
 * this can be used to *delay* *mounting a component known to have intense overheads*.
 * also, *`IonLoading` had bugs in case `isOpen` were initially `true` the first-time mounted* ,
 * 
 */
function useDeferredTrue(): boolean {  
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