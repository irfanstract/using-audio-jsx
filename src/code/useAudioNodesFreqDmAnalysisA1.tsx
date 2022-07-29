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



import { AUDIONODES_USEEFFECT } from "./useAudioNodesParamChgEffect1";      
import { 
    useBiquadFilterNodeWithGivenFadeoutTimeConstant1,
    useGainNodeWithGivenFadeoutTimeConstant1, 
    useOscilltorNodeWithGivenFadeoutTimeConstant1 , 

    useParamNodeWithGiven ,   

} from "./useAudioNodesMounting11"; 
import { 
    useConstantParamSrcElas,
    useGainElas , 
    
    useBqFltPtModulated , 

} from "./useAudioNodesBasicUseBeep";  
import { 
    useAnalyserNodeValue1 ,        
    // 
} from "./useAudioNodesCrossmasking";     
import { 
    useAuTapOutputFreqDmAnalysed1 , 
    useAuTapOutputFreqDmAnalysed , 
} from "./useAudioNodesFreqDmAnalysisA"; 








// 
const useAuTapOutputFreqDmAnalysed11 = (
    function (dest: AudioNode | null, programProps : (
        Parameters<typeof useAnalyserNodeValue1 >[0 ]
        &                        
        ({ fftSize : number } | {} )      
    ) ) {
        const [nd2, nd1] = (                              
            ("fftSize" in programProps)        
            ?         
            // eslint-disable-next-line react-hooks/rules-of-hooks   
            useAuTapOutputFreqDmAnalysed1(dest, programProps )        
            : 
            // eslint-disable-next-line react-hooks/rules-of-hooks   
            useAuTapOutputFreqDmAnalysed(dest )
              
        ) ;   
        return [(
            useAnalyserNodeValue1(programProps, nd2 )          
        ) , nd1 ] as const ;
    }
) ;
// TODO
const useAuTapOutputFreqDmAnalyFlt = (
    function (nd0: AudioNode | null, propgramProps : (
        /**    
         * exactly the signature of the corresponding parameter of corresponding method
         */
        Parameters<(typeof useAuTapOutputFreqDmAnalysed11 )>[1 ]    
    ) = (
        // TODO
        { refreshIntervalMillis: (2 ** -5 ) * 1000 }
    ) ): AudioNode | null {          
        ;             
        /**     
         * {@link useAuTapOutputFreqDmAnalysed11 } requires `dest` to work, but
         * since this method is supposed to serve as fliter/filter rather than analyser,  
         * this wires needs a dummy/discarding node as the `dest` argument
         */
        const dummyNd3 = (
            useGainElas(nd0, { value: 2 ** -40 } )
        ) ;                
        const [presentlyVal, feedNd2] = (         
            useAuTapOutputFreqDmAnalysed11(dummyNd3 , propgramProps )
        ) ;    
        (       
            useConstantParamSrcElas(nd0, { value: presentlyVal } )
        ) ;
        // TODO                       
        ;
        return (
            feedNd2 as (AudioNode | null )
        ) ;
    }
) ;














export {
    useAnalyserNodeValue1 , 

    useAuTapOutputFreqDmAnalysed , 
    useAuTapOutputFreqDmAnalysed1 , 
    useAuTapOutputFreqDmAnalysed11 , 
    useAuTapOutputFreqDmAnalyFlt , 
} ;