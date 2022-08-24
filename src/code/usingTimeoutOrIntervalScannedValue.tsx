/** 
 * concerned with the React-friendly usage of real-time-changing values     
 */
// import util from "util" ;
import { BoundedIdentityFunction, } from "./generalUse11";
import React, { 
    useState, useReducer,      
    useLayoutEffect, useEffect,
    useCallback, useMemo, useDeferredValue,  useContext, 
    useImperativeHandle,   
    useTransition, 
    useDebugValue ,
} from "react";          
import { usingInterval, useIntervalDeferredValue } from "./usingTimeoutOrInterval"; 
import { 
    useCanForceRefresh , 

    useRefreshByInterval1 ,  
    useRefreshByInterval ,  
 
} from "./usingIntervalRefresh";      
import { useRealTimeQueryIntervalSS } from "./usingTimeoutOrIntervalScannedValueSS";
import {
    RealTimeQueryIntervalUsageArgs ,
    useRealtimeQueryIntervalUsageArgsParse,
    useRealtimeQueryIntervalUsageArgsParse1,
} from "./usingTimeoutOrIntervalScanProperties" ;
import { useDepsChgCount } from "./usingComponentMountRenderStat";      


  
       
 





;
/**  
 * both {@link useRealTimeQueryInterval } and {@link useRealTimeQueryInterval1 }  
 * are based on {@link Window.setInterval } . 
 * however,          
 * {@link useRealTimeQueryInterval } will generalise the dispatch to even outside the tick-tock(s), while 
 * {@link useRealTimeQueryInterval1} will limit the dispatch to the tick-tock(s) .
 * 
 * some critial problems :  
 * - in variation {@link useRealTimeQueryInterval } of `useRealtimeQuery` , 
 *   dispatches will not be restricted to regular intervals and instead generalised to every refresh and therefore 
 *   unexpected behaviour will arise.       
 * - in case the invocand would be performance-heavy, 
 *   {@link useRealTimeQueryInterval } will hog CPU usage.  
 * - use the closely-named {@link useRealTimeQueryInterval1 } instead .   
 * 
 * note that this does not provide `deps` ;   
 * `deps` will be unnecessary for this, due to how {@link useRefreshByInterval} works
 * 
 * @deprecated       
*/  
const useRealTimeQueryInterval = (       
    function <A>(...args1 : RealTimeQueryIntervalUsageArgs<A> ): A {             
        const {
            props ,    
            timeoutMillis ,           
      
            LE ,             
            f ,          
            c ,   
            
            forceRefresh ,            
        } = useRealtimeQueryIntervalUsageArgsParse(...args1 ) ;                                  
        const vl = (               
            (function useM(): A {     
                useDebugValue({ f });        
                return f() ;  
            })()               
        ) ;        
        return vl ;   
    }                  
) ;     
/**         
 * 
 * both {@link useRealTimeQueryInterval } and {@link useRealTimeQueryInterval1 }  
 * are based on {@link Window.setInterval } . 
 * however,          
 * {@link useRealTimeQueryInterval } will generalise the dispatch to even outside the tick-tock(s), while 
 * {@link useRealTimeQueryInterval1} will limit the dispatch to the tick-tock(s)  
 * 
 * note that this does not provide `deps` ;       
 * `deps` will be unnecessary for this, due to how {@link useRefreshByInterval} works
*/  
const useRealTimeQueryInterval1 = (     
    function <A>(...args1 : RealTimeQueryIntervalUsageArgs<A> ): A {             
        const {
            props ,    
            timeoutMillis ,           
      
            LE ,             
            f ,          
            c ,   
            
            forceRefresh ,            
        } = useRealtimeQueryIntervalUsageArgsParse(...args1 ) ;      
        const vl = React.useMemo(() => f() , [c] ) ;
        useDebugValue({ c, vl }) ;
        return vl ;   
    }                   
) ;                      






export {
    useRealTimeQueryIntervalSS ,

    RealTimeQueryIntervalUsageArgs,
    useRealtimeQueryIntervalUsageArgsParse,
    useRealtimeQueryIntervalUsageArgsParse1,
} ;
export {
    useRealTimeQueryInterval1,
    useRealTimeQueryInterval,
} ;