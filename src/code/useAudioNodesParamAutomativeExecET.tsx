 
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
            type CSN1 = (   
                NonNullable<(     
                    ReturnType<(   
                        typeof useConstantParamSrcNodeWithGivenFadeoutTimeConstant1
                    )>    
                )>             
            ) ;
            return {                      
                SETTARGETATTIME : (        
                    function<Dest extends AudioNode > (...[nd1, { t: t2, vl } , DP ] : [
                        dest: Dest | null ,    
                        value: TAndVlL ,             
                        destParam : (...a: [Dest] ) => AudioParam  ,    
                    ]) {  
                        if (nd1  ) {               
                            if (0 <= t2 ) {       
                                (             
                                    DP(nd1 )     
                                    .setTargetAtTime(vl, (
                                        timingArgMode ? t2 : nd1.context.currentTime      
                                    ) , swingTConst )    
                                ) ;                 
                            }  
                        }                               
                    }        
                ) ,                              
                SETVALUECURVE_AT_TIME : (
                    function<Dest extends AudioNode > (...[nd1,  evtSq0, DP ] : [                    
                        dest: Dest | null ,        
                        values: (readonly TAndVlL[] ) ,                
                        destParam : (...a: [Dest] ) => AudioParam  ,      
                    ])  {   
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
                            0 && console.log({ evtSq }) ;
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
                                            DP(nd1 )      
                                            .cancelAndHoldAtTime(( 
                                                // TODO   
                                                tm   
                                            )  )  
                                        );                   
                                    }        
                                    if (mode === 2) {  
                                        ;                 
                                        (   
                                            DP(nd1 )     
                                            .cancelScheduledValues(0 )    
                                        );        
                                        (
                                            DP(nd1 )     
                                            .cancelScheduledValues(tm) 
                                        );          
                                    }    
                                } )(0 ) ;                           
                                ((   ) => {
                                    // if (! (((nd1 as any).PARAMAUTOMATIVESEQEXEC_ET += "+") === `${undefined }+` ) ) {
                                    //     throw TypeError(`assertion error     `) ;
                                    // }
                                } )(  ) ;      
                                (                      
                                    DP(nd1 )                   
                                    .setValueCurveAtTime(( 
                                        // TODO avoid the assumption that the timing is regular.    
                                        evtSq     
                                        .map(({ vl }): TAndVlL["vl"] => vl )    
                                    ), (       
                                        Math.max((
                                            nd1.context.currentTime     
                                            + 0.001
                                        ), (          
                                            tm       
                                        ))         
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