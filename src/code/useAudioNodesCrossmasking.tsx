import {  
    // Unix , 
    IterableOps ,                
    // util ,    
    memoize, 
    BoundedIdentityFunction,                     
} from "./generalUse11" ;   
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef, Suspense ,
} from "react";
import { useIntervalDeferredValue1, useRealTimeQueryInterval, useRefreshByInterval } from "./useNonHookValue";        
import { useAsyncStrm } from "./useAsyncMemo";
// import { K, NUMERIC } from "./commonElements"; 
// import { Div, SequenceOfEquallySizedElements } from "./commonplaceSequenceOfEquallySizedElements";  
// import { JsonObjDisplay } from "./commonJsonObjDisplay";   
;



;
function useThrottledLog1 (v: Object | object | string | number , deps: React.DependencyList ) {
    ;    
    const LOG = (             
        useMemo(() => (          
            IterableOps.throttle((a: unknown ) => (
                console.log(a )    
            ) , 0.5 * 1000 , { leading: true  } )              
        ) , [] )     
    ) ;   
    (                                    
        useMemo(() => (        
            LOG (v )                      
        ) , deps )           
    );               
}     










/**               
 * {@link useRealTimeQueryInterval } ; 
 * this method shall select the first `n` values (hence, the amp/gain(s) of the `n` lowest freq(s) ) from the AnalyserNode and then find the maxima .  
 * I agree that this method name needs improvement . 
 *        
 * @param freqBinRatio the ratio from `n` to {@link AnalyserNode `gner.freqBinCount` }
*/  
const useAnalyserNodeValue1 = (                     
    function USE_AMOD_ANALV ({                  
        refreshIntervalMillis ,       
        //     
        freqBinRatio = (
            2 ** -8    
        ) ,          
    } : {   
        refreshIntervalMillis : number ;   
        freqBinRatio ?: number ;          
    }, gner05: AnalyserNode | null ): number {                       
        return (
            useRealTimeQueryInterval<number>(() => {        
                if (gner05) { 
                    ;                                                    
                    const buf = (
                        new Uint8Array(gner05.frequencyBinCount )    
                    ) ;   
                    gner05.getByteFrequencyData(buf ) ;                       
                    return (                                                           
                        // TODO                            
                        Math.max(...(       
                            ((a : readonly number[] ) => (  
                                a.slice(0, Math.max(2, Math.floor(freqBinRatio * a.length ) ) )
                            ) )([...buf ])
                            .map((v: number) => (v / 0x100 ) )
                        ))
                    ) ;            
                    ;                           
                } else {    
                    return 0 ; 
                }      
            }, refreshIntervalMillis )   
        ) ;     
    }   
) ;     
/**    
 * "CGM" stands for "component which plays some gain-modulating (...) "
*/
enum CGM_OUTPUT {
    NONE = 0 ,        
    PASSTHRU = 1 ,               
    MASKED = 0.5 ,         
}
function usePeriodicAnalyserNodeValueCopyIntoDestCsn({        
    vlSmoothingTConst = 2 ** -5 ,        
    src : srcNode ,     
    dest: gner1 , 
    md1: maskMode ,   
    refreshIntervalInSec ,    

    freqBinRatio ,     

    gnerNdChgLogging1 = false ,   
} : (
    Partial<{              
        /**         
         * {@link AudioParam.setTargetAtTime } -  
         * this will control the `timeConstant` parameter when making such calls
        */    
        vlSmoothingTConst : number ;     
        
        freqBinRatio : number ;        
    }>    
    &
    { 
        src: AnalyserNode | null ;   
        dest: ConstantSourceNode | null ; 
        md1: CGM_OUTPUT ; 
        refreshIntervalInSec : number ;      
    }
    &
    Partial<{ gnerNdChgLogging1 : boolean ; }>
) )   {                            
    ;                                  
    const vl = (useAnalyserNodeValue1)((  
        {           
            refreshIntervalMillis: (               
                refreshIntervalInSec * 1000     
            ) ,           
            ...(freqBinRatio ? { freqBinRatio } : {} ) ,
        }              
    ) , srcNode ) ;                                    
    (
        useMemo<(...a: Parameters<typeof useThrottledLog1> ) => void >(() => (
            gnerNdChgLogging1 ? useThrottledLog1 : Object
        ) , [gnerNdChgLogging1 ] )
    )({ gner1 }, [gner1]) ;              
    if (1 ) {                                                                    
        ;                           
        (function useChgTo(vl: number) {                          
            (true && useLayoutEffect )(() => {                         
                if (gner1 ) {                              
                    0 && console.log("gner1.offset" , { gner1 , vl }) ;
                    (                               
                        gner1.offset.setTargetAtTime(      
                            vl ,   
                            gner1.context.currentTime, vlSmoothingTConst )       
                    ) ;                   
                }                   
            } , [gner1, vl ] ) ;        
        } )(((): number => {  
            switch (maskMode) { 
                case 1 : return 1 ; 
                case 0 : return 0 ; 
                default : return vl ;       
            }
        })() ) ;                
    } else {      
        // dEBUGG 
        ;                                                        
        (true && useLayoutEffect )(() => {                         
            if (gner1 ) {   
                (                               
                    gner1.offset.setTargetAtTime(
                        0.5 ,   
                        gner1.context.currentTime, vlSmoothingTConst )       
                ) ;                       
            }                  
        } , [gner1  ] ) ;                 
    }                
    return {              
        vl: vl ,              
    } ;                                 
}        


































export { useThrottledLog1 } ;
export {  
    useAnalyserNodeValue1 , 
    CGM_OUTPUT , 
    usePeriodicAnalyserNodeValueCopyIntoDestCsn ,  
} ;
   