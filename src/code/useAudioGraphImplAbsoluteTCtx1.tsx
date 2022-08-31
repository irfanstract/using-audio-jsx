 
// utility imports     
import Immutable from "immutable";    
import { IterableOps } from "./generalUse11";  
import { 
    AudioTrackConcatClippingMode , 
    avTrackConcatShallPropagate ,   
} from "./timelineConcatClippingMode";    
import React from "react";               
import { K, ComponentProps, ContextReturnType, arrayIndexedOrderedList } from "./commonElements";    
        
// domain imports, and CSS imports
import newInstance from "./useAudioGraphImplAbsoluteTCtxFactory1" ;   
import { ModifyingCompPayloadDiv as ModifyingCompPayloadDiv, LoopingCompContentDiv } from "./useAudioGraphImplFComponentsSemanticsBasic";      
import {
    currentTCtx ,                              
    currentTScaleCtx ,              
    currentTInfCtx ,                          
    useCurrentTInf ,          
    
    WithDelay ,
    WithSlowdown ,
    WithSpeedF ,

    CurrentTDisplay ,
    WithCurrentTInfo ,

} from "./useAudioGraphImplAbsoluteTCtx1C" ;   
import {   
    LoopingWithPeriod ,   
    LwpPayloadCallback ,       
} from "./useAudioGraphImplAbsoluteTCtx1LoopingC" ;

   
                   

            
    

function useConditionalDeference1(e : React.ReactElement, perios : number ) {
    const e0 = React.useDeferredValue(e ) ;
    return (3 <= perios ) ? e0 : e  ;
}     
const useDescendantCurrentTDiffing = (    
    function () {
        const {   
            t: componentLevelT ,               
            tScale: componentLevelTScale ,        
        } = useCurrentTInf() ;         
        const renderWithInfo = (  
            function (...[cb] : [
                (ctx: { xTDiff : number ; xTScaleValueMultiplitude : number ; } ) => React.ReactElement ,  
            ] ) {   
                return (
                    <WithCurrentTInfo>     
                        { ({ t: descendantTVal, tScale: descendantTSclVal }) => (
                            cb({  
                                xTDiff: (              
                                    descendantTVal - componentLevelT
                                ) ,      
                                xTScaleValueMultiplitude : (
                                    descendantTSclVal / componentLevelTScale
                                ) , 
                            })
                        ) }
                    </WithCurrentTInfo>
                ) ;
            }
        ) ;  
        return {
            componentLevelT , 
            componentLevelTScale , 

            renderWithInfo , 

        } ;
    }
) ;
                      
            

           
  


       

export {   
    currentTCtx , 
    currentTScaleCtx ,       
    currentTInfCtx ,    
    useCurrentTInf ,    
    WithCurrentTInfo ,   
    useDescendantCurrentTDiffing ,      

    CurrentTDisplay , 
    WithDelay , 
    LoopingWithPeriod ,   
    LwpPayloadCallback ,       
    WithSlowdown ,
    WithSpeedF ,
} ;           