 
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
import {
    TAndVl , 
    tAndVlSqExpand ,  
} from "./useTValueSeqExpand1";
        



//     
import { USEM } from "./useAudioNodesParamAutomativeAsRegularNodes";      
import {
    SpecialUsageExplainer,   
    xWithUsableYyy ,      
    xWithUsableYyy1 ,   
} from "./useAudioGraphImplUsableYyyNodes1";                   
import { 
    useConstantParamSrcNodeWithGivenFadeoutTimeConstant1 , 
      
} from "./useAudioNodesMounting11";     

         







  
    

const eSupport = (
    (...[mode1 = {} ] : [
        {
            timingArgMode ?: false | 1 ;    
            swingTConst ?: number ;                  
        } ,      
    ] ) => {            
        type Dest = (
            NonNullable<(     
                ReturnType<(
                    typeof useConstantParamSrcNodeWithGivenFadeoutTimeConstant1
                )>    
            )>         
        ) ;          
        type TAndVlL = TAndVl ;     
        ;
        const {
            swingTConst = (        
                2 ** -4  
            ) ,   
            timingArgMode = 1 ,      

        } = mode1 ;            
        ;                     
        const {
            SETTARGETATTIME ,    
            SETVALUECURVE_AT_TIME , 

        } = (() => {    
            return {                 
                SETTARGETATTIME : ( 
                    (...[nd1, { t: t2, vl } ] : [
                        Dest | null ,    
                        TAndVlL ,           
                    ]) => {  
                        if (nd1  ) {        
                            if (0 <= t2 ) { 
                                (          
                                    nd1.offset  
                                    .setTargetAtTime(vl, (
                                        timingArgMode ? t2 : nd1.context.currentTime      
                                    ) , swingTConst )    
                                ) ;                 
                            }
                        }            
                    }
                ) ,                          
                SETVALUECURVE_AT_TIME : (
                    (...[nd1,  evtSq0 ] : [                 
                        Dest | null ,        
                        (readonly TAndVlL[] ) ,         
                    ]) => {   
                        // TODO
                        if (0 ) {
                            return ;            
                        } ;    
                        ;   
                        if (nd1) {                                 
                            const evtSq = (             
                                evtSq0 
                                .filter(({ t }) => (0 <= t ) )    
                            ) ;            
                            console.log({ evtSq }) ;
                            ;        
                            if (evtSq.length ) {                  
                                const {                
                                    lastEvtT , 
                                    lastEvtVl ,     
                                    firstEvtT ,  
                                    vl0 ,      
                                    duration ,    
                                }  = (
                                    tAndVlSqExpand(evtSq )
                                ) ;                  
                                // 'AudioParam'       
                                const tm = (          
                                    timingArgMode ?   
                                    firstEvtT   
                                    : nd1.context.currentTime      
                                ) ;
                                ((mode : 0 | 1 | 2) : void => {  
                                    if (mode === 1) {   
                                        ;        
                                        (            
                                            nd1.offset
                                            .cancelAndHoldAtTime((
                                                // TODO   
                                                tm   
                                            )  )  
                                        );                   
                                    }   
                                    if (mode === 2) {  
                                        ;                 
                                        (
                                            nd1.offset 
                                            .cancelScheduledValues(0 ) 
                                        );        
                                        (
                                            nd1.offset 
                                            .cancelScheduledValues(tm) 
                                        );        
                                    }    
                                } )(2 ) ;            
                                (                      
                                    nd1.offset                        
                                    .setValueCurveAtTime(( 
                                        // TODO avoid the assumption that the timing is regular.    
                                        evtSq     
                                        .map(({ vl }): TAndVlL["vl"] => vl )    
                                    ), (       
                                        tm   
                                    ) , (   
                                        duration  
                                    ) )      
                                ) ;          
                            }        
                        } ;              
                    }    
                ) ,
            } ;
        })() ;        
        ;
        ;        
        return {
            swingTConst , 
            timingArgMode , 

            SETTARGETATTIME , 
            /**   
             * caveat - the logic remains incomplete.
             * 
             * @deprecated  
             * 
             */
            SETVALUECURVE_AT_TIME ,     
        } ;    
    }      
) ;       

 



export default eSupport ;