import {  
    // Unix , 
    IterableOps ,      
    // util ,       
    memoize,       
    BoundedIdentityFunction,       
} from "./generalUse11" ;                         
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react";



import { useATapNode } from "./useAudioNodesMounting1";       
import { useSingularSrcDestConnect } from "./useAudioNodesMounting1";
import { AudioSourceNode, AudioSinkNode } from "./useAudioNodesBasicTypeDefs";  
   








const useAuTapOutputFreqDmAnalysis = (
    (nd0: AudioSourceNode | null ): AnalyserNode | null => {    
        /**   
         * this `useMemo` call will allocate independent {@link AnalyserNode } ;  
         * later on there shall be `useYyEffect` to `theNode.disconnect()` .   
         *  */                  
        const nd11 = (        
            useMemo((): AnalyserNode | null => {   
                if ( nd0 ) {                   
                    ;
                    const nd1 = (
                        nd0.context
                        .createAnalyser()          
                    ) ;        
                    return nd1 ;                                             
                } else {
                    return null ;
                }             
            } , [nd0 ] )     
        ) ;           
        /**   
         *  */    
        useSingularSrcDestConnect(nd0, nd11 ) ;  
        ;     
        return (
            nd11   
        ) ;
    }   
) ;  
const useAuTapOutputFreqDmAnalysis1 = (
    function (
        {
            fftSize ,          
            src: src ,              
        } : {            
            fftSize: number ;  
            src: AudioSourceNode | null ;    
        },
    ) {                      
        ;                                  
        const analyserNd1 = (
            useAuTapOutputFreqDmAnalysis(src  )   
        ) ;
        useLayoutEffect(() => {                    
            if (analyserNd1) {            
                analyserNd1.fftSize = fftSize ;  
                ((a: AnalyserNode ) => {     
                    a.minDecibels = -95 ;     
                    a.smoothingTimeConstant = 0.2 ;
                })(analyserNd1 ) ;    
            } ;    
        } , [analyserNd1 ]) ;  
        return {
            analyserNd1 ,      
        } ;
    }
) ;    
// TODO
const useAuTapOutputFreqDmAnalysed = (
    function (nd0: Parameters<typeof useATapNode>[0 ] ) : readonly [AnalyserNode | null, AudioNode | null] {
        const [nd2, nd1 ] = (    
            useATapNode(nd0 )        
        ) ;          
        return (
            [(
                useAuTapOutputFreqDmAnalysis(nd2 )
            ), nd1 ] as const   
        ) ;
    }   
) ;         
const useAuTapOutputFreqDmAnalysed1 = (   
    function (...[    
        nd0 , { fftSize } ,        
    ] : [         
        dest: Parameters<typeof useATapNode>[0 ] , 
        properties : (
            /**   
             * parameter 'src' shall be omitted as 
             * it shall be specified our own way      
             */
            Omit<(
                Parameters<typeof useAuTapOutputFreqDmAnalysis1 >[0 ] 
            ) , "src">   
        ),     
    ]) : readonly [AnalyserNode | null, AudioNode | null] {
        const [nd2, nd1 ] = (            
            useATapNode(nd0 )                
        ) ;        
        return (
            [(
                useAuTapOutputFreqDmAnalysis1({ fftSize, src: nd2 } )
                .analyserNd1
            ), nd1 ] as const
        ) ;
    }
) ;         




 




 


  







   

export {
    useAuTapOutputFreqDmAnalysis ,  
    useAuTapOutputFreqDmAnalysis1 , 
    useAuTapOutputFreqDmAnalysed , 
    useAuTapOutputFreqDmAnalysed1 , 
} ;
