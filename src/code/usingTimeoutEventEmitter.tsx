
   
// import util from "util" ;     
import { IterableOps } from "./generalUse11";
import EventEmitter from "events";      
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react";     
    






const EventEmSubArgs = {} ; // TS-1205     
type EventEmSubArgs<A1 extends readonly [        
    Parameters<EventTarget["addEventListener"] >[0] | Parameters<EventEmitter["on"] >[0] , 
    EventListenerOrEventListenerObject | Function | null , 
    ...unknown[] ,          
] > = readonly [                               
    A1[0],             
    A1[1]  ,                                                    
    React.DependencyList | undefined ,                                                                                           
] ;                        


const useEventListener = (         
    function <A extends EventTarget >(a: A , ...[evtNm, cb, deps ]: (
        EventEmSubArgs<Parameters<A["addEventListener"] > >
    ) ) {
        useLayoutEffect(() => {        
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
        useLayoutEffect(() => {   
            a.on(evtNm, cb, ) ;               
            return () => {                   
                a.off(evtNm, cb ) ;                         
            } ;        
        } , deps ) ;                                                               
    }                            
) ;        
            
// TODO
const usePagePreUnloadEvt = (   
    function () { 
        useEventTarget<Window>(window, "beforeunload" , (evt) => {
            ;                   
        }, [] ) ;  
    }      
) ;  
  






export {
    useEventListener , 
    useEventTarget ,
        
    useEventEmitter ,    

    EventEmSubArgs ,  
} ;