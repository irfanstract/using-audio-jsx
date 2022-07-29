import {   
    IterableOps ,   
    BoundedIdentityFunction,                  
} from "./generalUse11" ; 
import React, {      
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react";




const useEfectToMap = (
    function useEffectToMap1<P , Q extends ({} | number) >(a: P , mp: (v: P ) => Q ) {
        const [rf1, setRf] = (
            useState<Q>(mp(a) )              
        ) ;                         
        useLayoutEffect(() => {   
            setRf(mp(a) ) ;            
        } , [a ] ); //  'mp' is deliberately excluded as lambdas break 'deps' !     
        return rf1 ;    
    }                                  
) ;  
export { useEfectToMap } ;