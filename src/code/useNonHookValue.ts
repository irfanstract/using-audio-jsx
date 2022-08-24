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
import { 
    useRealTimeQueryInterval1,
    useRealTimeQueryInterval,
} from "./usingTimeoutOrIntervalScannedValue";
import { useDepsChgCount } from "./usingComponentMountRenderStat";      
try {
    const em1 = { v: 3 } as const ;
    const em2 : {} = em1 ;
    const em3 : { v ?: () => 5 } = em2 ;
    const em31 = ("v" in em3 ) && (() => { const e = (em3.v ) ; return e && e() ; } )() ;
    console.info({ em1, em2, em3, em31 }) ;     
} catch (e ) { 
    console.info(e ) ;    
}


  
       
  
const [] = [] ;
/**  
 * note that
 * `deps`
*/
const [] = [] ;
const {
    useNumericDigest , 
    useNumericDigestWith ,   

} = (() => {
    return new (class {
        useNumericDigestWith = (
            function useNumericDigestWith(...[        
                v0,   
                { inertialCoef: coef , timeoutMillis } , 
                { debug1 = false } = { debug1: false, } ,    
            ] : [
                presentlySrcValue : number ,          
                config : {     
                    /**      
                     * in range `[0 EXCLUSIVE, 1 INCLUSIVE ]`
                     */  
                    inertialCoef : number ;                  
                         
                    timeoutMillis : number ;         
                } ,                            
                debug ?: {
                    debug1 ?: boolean ;      
                } ,   
            ] ) {         
                const timeoutSeconds = (  
                    timeoutMillis / 1000        
                ) ;     
                const perRefreshCoef = ( 
                    coef ** timeoutSeconds                
                ) ;             
                const [v1, setV1] = (    
                    React.useState<number >(v0 )   
                ) ;                  
                const digest = (
                    function () {
                        if (debug1 === false ) {
                            ;
                            setV1(function (vLocally: number) {
                                return (  
                                    // TODO    
                                    (perRefreshCoef * vLocally )     
                                    +
                                    ((1 + -perRefreshCoef ) * v0 )      
                                ) ;    
                            }) ;       
                        } else {          
                            // TODO        
                        }   
                    }    
                );          
                (            
                    useRealTimeQueryInterval1({
                        f : ()  => { 
                            return digest() ;    
                        } ,  
                        LE : "useLayoutEffect" , 
                    } , timeoutMillis  ) 
                ) ;          
                const c1 = {
                    timeoutMillis ,     
                    timeoutSeconds , 
                    coef ,   
                    perRefreshCoef ,     
                    v0 , 
                    v1 ,       
                } ;
                useDebugValue(c1 ) ;  
                return c1 ;    
            }       
        ) ;      
        /**   
         * {@link useNumericDigestWith } yet only gives `vl` (*the value*).
         */
        useNumericDigest = (
            (...args : Parameters<typeof this.useNumericDigestWith > ) => {
                const { v1 } = (
                    this.useNumericDigestWith(...args )    
                ) ;  
                return v1 ;
            }   
        );
    }) ;
})() ;
const {
    useLogScaleNumericDigest , 
} = (() => {
    type UNDW0 = typeof useNumericDigestWith ;
    const AS_UNDW = (
        function <R extends number, A extends readonly unknown[] >(useNumericDigest : (...args : [number, ...A ] ) => R ) {
            return (
                function useLogScaleNumericDigest(...[v00, ...args ] : (
                    Parameters<typeof useNumericDigest>
                ) ) {          
                    const v0 = (                                
                        Math.log2(1E-5 + v00 )            
                    ) ;            
                    const v1 = (                     
                        useNumericDigest(v0, ...args )  
                    ) ;    
                    const v11 = (                 
                        2 ** v1 
                    );     
                    return v11 ;
                }              
            ) ;
        }      
    ) ;    
    return {         
        useLogScaleNumericDigest : (   
            AS_UNDW(useNumericDigest )           
        ) ,      
    } ;
})() ;
export {
    useCanForceRefresh ,        
    useRefreshByInterval ,           
    useRefreshByInterval1 ,   

    useRealTimeQueryIntervalSS,
    useRealTimeQueryInterval ,           
    useRealTimeQueryInterval1 ,     
    useIntervalDeferredValue as useIntervalDeferredValue1 ,  
  
    useNumericDigest ,      
    useNumericDigestWith ,  
    useLogScaleNumericDigest ,     
} ;        