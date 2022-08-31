import {   
    IterableOps ,   
    BoundedIdentityFunction,                    
} from "./generalUse11" ; 
import React, {      
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { useEfectToMap } from "./useEffectToMap";   


          
          
import { AUDIONODES_USEEFFECT } from "./useAudioNodesParamChgEffect1"; 
     












type YyyUsageDest = (             
    AudioNode | null 
) ;                              
const YyyUsageDest = {} ;
type YyyUsable<P extends NonNullable<unknown> , R = { } > = (        
    (dest: YyyUsageDest, properties: P ) => R       
) ;
const YyyUsable = {} ;























export { // see also TS-1205
    YyyUsageDest , 
    YyyUsable , 
} ;