 
// utility imports                  
import Immutable from "immutable";            
import { IterableOps, PromiseReturnValue, OmitM } from "./generalUse11";   
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";        
import { K, asVoidElement, NUMERIC, useDebugDispatcher } from "./commonElements";             
import { CBC } from "./useStateInCallback";  
import { useRealTimeQueryInterval1 } from "./useNonHookValue";             
import { useDeferredTrue as useDeferredTrue0 } from "./usingDeferredBoolean";       
import { 
    useOneWayCheckBox , 
} from "./useCompletion";   
import { useAsyncStrm, useAsyncDictStrm } from "./useAsyncMemo";  
        


          
;       







   
     
const TAndVl = {} ; // TS-1205  
type TAndVl = (  
    { t: number ; vl: number ; }     
) ;          
// TODO
const tAndVlSqExpand = (
    (...[evtSq0 ] : [readonly TAndVl[] ]) => {              
        const evtSq = (             
            evtSq0 
            .filter(({ t }) => (0 <= t ) )        
        ) ;             
        ;   
        const {      
            t: lastEvtT , 
            vl: lastEvtVl ,            
        } = (              
            // only ufor 'last', hence 'Seq' rather than 'List'
            Immutable.Seq(evtSq )   
            .last()!           
        ) ;
        const { t: firstEvtT , vl: vl0 } = evtSq[0] ;    
        const duration = (
            lastEvtT - firstEvtT  
        ) ;      
        ;    
        return {
            evtSq ,         
            lastEvtT , 
            lastEvtVl ,     
            firstEvtT ,  
            vl0 ,   
            duration ,    
        } ;                      
    }
) ;



 
export {
    TAndVl , 
    tAndVlSqExpand ,  
} ;    