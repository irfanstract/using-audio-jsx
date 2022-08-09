 
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

         







  
    

/**    
 * {@link BaseAudioContext.currentTime  `t`s will be treated as WRT the `nd.ctx`'s `currentTime` }.
 */
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
                    function<Dest extends Pick<AudioNode, "context"> > (...[nd1, { t: t2, vl } , DP ] : [
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
                    function<Dest extends Pick<AudioNode, "context"> > (...[nd1,  evtSq0, DP ] : [                    
                        dest: Dest | null ,        
                        values: (readonly TAndVlL[] ) ,                
                        destParam : (...a: [Dest] ) => AudioParam  ,        
                    ])  {      
                        const OMBT = (                          
                            () : { 
                                omitBypassedT ?: boolean ;   
                                shrinkDurationAsNecessary ?: boolean ,    
                            } => ({})        
                        )();     
                        const {       
                            omitBypassedT = true ,        
                        } = OMBT ;  
                        const {         
                            shrinkDurationAsNecessary = omitBypassedT ? true : false ,   
                        } = OMBT ;     
                        ;                                  
                        // TODO                                           
                        if (0 ) {          
                            return ;   
                        } ;                  
                        ;      
                        if (nd1) {                                      
                            const actualCtxTime = (
                                nd1.context.currentTime    
                            ) ;                 
                            const evtSq = (() => {
                                const sq1 = (                    
                                    evtSq0                  
                                    // omit negative `t`s                 
                                    .filter(({ t }, _1, sq ) =>  (  0 <= t ) )      
                                    // omit bypassed `t`s                         
                                    .flatMap(({ t, vl }, i, sq) => (
                                        ( 
                                            (                 
                                                omitBypassedT ?
                                                ((actualCtxTime + 0.01 ) <= t )
                                                : true                            
                                            )
                                        ) ?          
                                        [{ t, vl }]                    
                                        : [ ]
                                    ) )          
                                ) ;
                                return (
                                    2 <= sq1.length 
                                    ?
                                    sq1 : evtSq0      
                                ) ;
                            })() ;            
                            0 && console.log({ evtSq }) ;
                            ;          
                            if (evtSq.length ) {                      
                                const {                           
                                    lastEvtT , 
                                    lastEvtVl ,          
                                    firstEvtT ,  
                                    vl0 ,      
                                    duration: idealDuration ,    
                                }  = (
                                    tAndVlSqExpand(evtSq )
                                ) ;        
                                const feasibleDuration = (
                                    idealDuration           
                                ) ;
                                // 'AudioParam'       
                                const tm = (                 
                                    timingArgMode ?            
                                    firstEvtT     
                                    : actualCtxTime       
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
                                    const nd11 = (
                                        nd1 as { PARAMAUTOMATIVESEQEXEC_ET ?: undefined | string ; }      
                                    ) ;                      
                                    if ((                             
                                        nd11.PARAMAUTOMATIVESEQEXEC_ET       
                                        || 
                                        ! ((nd11.PARAMAUTOMATIVESEQEXEC_ET += "+") === `${undefined }+` )    
                                    ) ) {  
                                        throw TypeError(`cannot run this twice on same AP.    `) ;
                                    }      
                                } )(  ) ;       
                                (                 
                                    // TODO avoid the assumption that the timing is regular.           
                                    DP(nd1 )                          
                                    .setValueCurveAtTime((    
                                        evtSq     
                                        .map(({ vl }): TAndVlL["vl"] => vl )    
                                    ), (       
                                        Math.max((
                                            // it's important to give 'tolerance' .           
                                            actualCtxTime             
                                            + 0.00       
                                        ), (                     
                                            tm                              
                                        ))                    
                                    ) , (        
                                        // it's important to give 'tolerance' .    
                                        Math.max(0.03, feasibleDuration )  
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
            
            /**    
             * {@link BaseAudioContext.currentTime  `t`s will be treated as WRT the `nd.ctx`'s `currentTime` }.
             */      
            SETTARGETATTIME , 
            /**      
             * {@link BaseAudioContext.currentTime  `t`s will be treated as WRT the `nd.ctx`'s `currentTime` }.
             */      
            SETVALUECURVE_AT_TIME ,     
        } ;    
    }      
) ;       

 



export default eSupport ;