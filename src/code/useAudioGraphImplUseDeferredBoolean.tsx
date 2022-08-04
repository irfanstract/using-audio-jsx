
// utility imports                  
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue, OmitM } from "./generalUse11";  
import { ABandpassFreqArgInputRangeMode } from "./audioFltBandpassMetaRangeMode";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";        
import { K, asVoidElement, NUMERIC } from "./commonElements";             
import { CBC } from "./useStateInCallback";  
import { useRealTimeQueryInterval1 } from "./useNonHookValue";     
import { useDeferredTrue as useDeferredTrue0 } from "./usingDeferredBoolean";       
     













const useDeferredTrue = (     
    (...[{ deps = [] } = {} ] : [
        {
            deps ?: React.DependencyList ;    
        } ? ,    
    ]) : boolean => {
        const [s, setS] = (   
            React.useState<boolean>(false ) 
        );  
        React.useLayoutEffect(() => {   
            setTimeout(() => {
                setS(() => true ) ; 
            } , 1 * 1000 ) ;
        } , deps ) ;;
        return s ;       
    }
);





export {
    useDeferredTrue ,  
} ;