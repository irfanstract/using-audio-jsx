import {  
    // Unix , 
    IterableOps ,      
    // util ,       
    // memoize,            
    BoundedIdentityFunction,       
} from "./generalUse11" ;                     
// import { TREMOLO_LINGRAPH } from "./audioGainCurveTrm";     
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react";
import { useAsyncMemo } from "./useAsyncMemo";      
// import { true16 } from "./useAudioNodesBasicsRegularlyDrumLooping";          


import { AudioSourceNode } from "./useAudioNodesBasicS";      
import { newAudioCtxAsync } from "./useAudioNodexCtxInitAndBeepNca"; 







type AFeedableAndTappableNca = {                     

    /**        
     * how to feed (into) this  
     */  
    feedPt: AudioNode ;     

    /**   
     * how to tap (from) this
     */
    sideTapPt: AudioSourceNode ;           

} ;  
const ACMT_TP = (
    function (...[P1] : [
        dest : AudioNode ,       
    ]): AFeedableAndTappableNca {    
        ;                              
        const P2Tap = (      
            P1.context.createGain()                  
        ) ;                              
        const P2C : DynamicsCompressorNode = (
            P1.context.createDynamicsCompressor()             
        ) ;  
        P2C.connect(P1) ;   
        P2C.connect(P2Tap ) ;        
        return {        
            feedPt: P2C ,             
            sideTapPt: P2Tap ,         
        } ;  
    }     
) ;

/**   
 * note : 
 * - will only run once ; caching       
 * - a {@link DynamicsCompressorNode } lies in middle of the stream,         
 *   preventing clipoff 
*/
// needs to prevent second-time init
const aCtxMt0 = (() => {
    const shareSymbol = "AudioNodexCtx&&Init BaseAudioCtxInit &&&" ;
    return (                           
        IterableOps.memoize((       
            async () : Promise<(
                AFeedableAndTappableNca    
            )> => {  
                const P1: AudioNode = (   
                    ((window as any )[shareSymbol] as (undefined | AudioNode) )
                    ||       
                    await newAudioCtxAsync( )      
                ) ;             
                (window as any )[shareSymbol] = P1 ;         
                return (
                    ACMT_TP(P1 )     
                ) ;                                                      
            }
        ) , IterableOps.identity )                    
    ) ;  
})() ;       
const useACtxMtWithoutAnyFilter1 = (
    () => (
        (              
            useAsyncMemo<(
                AFeedableAndTappableNca
            )> ({    
                depsChangeImpliesInvalidation: (             
                    false             
                ) ,         
           
                f: async () => {                 
                    const {
                        feedPt: feedPt ,       
                        sideTapPt: tapPt ,                        
                    } = (                                                      
                        await aCtxMt0()                                 
                    ) ;                                     
                    return {                   
                        feedPt: feedPt ,                  
                        sideTapPt: tapPt ,                           
                    } ;       
                }  ,            
      
            } , [] )                                                          
        ) || null                                   
    )              
) ;                





 








export {
    aCtxMt0 as getACtxMtWithoutAnyFilter1 ,   
    useACtxMtWithoutAnyFilter1 , 
} ;
export type {
    AFeedableAndTappableNca , 
} ;