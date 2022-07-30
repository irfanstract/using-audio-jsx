import {   
    IterableOps ,   
    BoundedIdentityFunction,                    
} from "./generalUse11" ; 
import React, {      
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { useEfectToMap } from "./useEffectToMap";   


          
import { AUDIONODES_USEEFFECT } from "./useAudioNodesParamChgEffect1"; 
import { 
    useGainNodeWithGivenFadeoutTimeConstant1, 
    useOscilltorNodeWithGivenFadeoutTimeConstant1 , 
    useWhiteNoiseNodeWithGivenProps  ,
     
} from "./useAudioNodesMounting11";     
import {
    YyyUsageDest , 
    YyyUsable , 
} from "./useAudioNodesBasicFltTypes1";
 










const usePersistingBeep = (() => {
    return IterableOps.identity<(      
        YyyUsable<(                       
            Readonly<{         
                toneFreq ?: number | undefined;
            } >    
        ) , (       
            // AudioNode    
            EventTarget 
        ) | null >   
    )>((               
        function (nd1, { toneFreq = 440 } ) {
            const nd2 = (
                useOscilltorNodeWithGivenFadeoutTimeConstant1(nd1 , 0.5 )   
            ) ;                 
            const X_EFFECT = AUDIONODES_USEEFFECT ;
            React[X_EFFECT ](() => {      
                if (nd2) {    
                    nd2.frequency.value = toneFreq ;       
                } ;  
            } , [nd2 ]) ;                 
            React[X_EFFECT ](() => {     
                if (nd2) {     
                    /**    
                     * {@link nd2.frequency.value } , smoothly   
                     */   
                    nd2.frequency.setTargetAtTime(toneFreq, (
                        // TODO 
                        nd2.context.currentTime   
                    ), 0.5 ) ;
                } ;                     
            } , [nd2, toneFreq, 0 ]) ;         
            ;
            return nd2 ;     
        }   
    )) ;  
})() ;      



export {
    usePersistingBeep ,  
} ;  