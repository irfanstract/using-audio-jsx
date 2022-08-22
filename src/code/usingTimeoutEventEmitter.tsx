
   
// import util from "util" ;     
import { IterableOps } from "./generalUse11";
import EventEmitter from "events";      
import React, { 

    useLayoutEffect, useEffect, 
    useInsertionEffect ,

    useCallback, useMemo, useContext, useDeferredValue, 
    useState, useReducer, 
    useRef, 
} from "react";     
    






const EventEmSubArgs = {} ; // TS-1205     
type EventEmSubArgs<A1 extends readonly [        
    selector: Parameters<EventTarget["addEventListener"] >[0] | Parameters<EventEmitter["on"] >[0] , 
    callback: EventListenerOrEventListenerObject | Function | null , 
    ...otherArgs: unknown[] ,          
] > = readonly [                               
    selector: A1[0],             
    callback: A1[1]  ,                                                    
    callbackDependencies: React.DependencyList | undefined ,                                                                                           
] ;                        


const useEventListener = (         
    function <A extends EventTarget >(a: A , ...[evtNm, cb, deps ]: (
        EventEmSubArgs<Parameters<A["addEventListener"] > >
    ) ) {
        useInsertionEffect(() => {        
            a.addEventListener(evtNm, cb, ) ;                                      
            return () => {         
                a.removeEventListener(evtNm, cb ) ;                                 
            } ;            
        } , deps ) ;                                                                  
    }                       
) ;       
const useEventTarget = (
    useEventListener   
) ;  

const useEventEmitter = (                    
    function <A extends EventEmitter >(a: A , ...[evtNm, cb, deps ]: (
        EventEmSubArgs<Parameters<A["on"] > >
    ) ) {    
        useInsertionEffect(() => {   
            a.on(evtNm, cb, ) ;               
            return () => {                   
                a.off(evtNm, cb ) ;                         
            } ;        
        } , deps ) ;                                                               
    }                            
) ;        
            
// TODO
const {
    usePagePreUnloadEvt,
} = (() => {
    type PagePreUnloadEvtUsageArgs = [
        ctx: {}, 
        callback: (ctx: BeforeUnloadEvent) => unknown, 
        callbackDependencies: React.DependencyList ,
    ] ;
    return {
        usePagePreUnloadEvt: (   
            function (...[{}, callback, callbackDependencies] : PagePreUnloadEvtUsageArgs ) { 
                useInsertionEffect(() => {
                    /**   
                     * the actually-used callback argument to the `addEventListener` call.
                     */
                    const submittedFn1 = (
                        callback
                    );
                    return (
                        window.addEventListener("beforeunload", submittedFn1 )
                        ,
                        () : void => {
                            window.removeEventListener("beforeunload", submittedFn1 );
                        }
                    );
                }, callbackDependencies ) ;
            }      
        ),
    }
})() /* */ ;  
  






export {
    useEventListener , 
    useEventTarget ,
        
    useEventEmitter ,    

    EventEmSubArgs ,  
} ;