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
import { 
    usePersistingBeep , 
    
} from "./useAudioNodesBasicBeep1";                
 










 
const useWhiteNoise1 = ( 
    function (...a: Parameters<typeof useWhiteNoiseNodeWithGivenProps> ): void {
        //
        (
            useWhiteNoiseNodeWithGivenProps(...a )  
        ); 
    }
) ;



















    




export type {
    YyyUsable , 
    YyyUsageDest , 
} ;
export {
    usePersistingBeep , 
    usePersistingBeep as useEternalBeep , 
    useWhiteNoise1 , 
} ;