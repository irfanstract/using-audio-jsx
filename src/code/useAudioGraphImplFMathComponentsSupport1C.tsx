
// utility imports                  
import { 
   OptionsCouldBeOmittedAltogether ,
   EitherBothSetOrBothUnset , EitherSetAndOthersUnset , EitherSetOrBothUnset ,
   PromiseReturnValue, OmitM, FrequencyAndPeriod  ,    
   IterableOps, 
   Iterable as Immutable , Iterable,
} from "./generalUse11";   
import { 
    fromTSeqComputedValueInterpolated ,
} from "./timeStampSeqMappedConnectedInterpolated1";
import React, { useMemo } from "react";              
import { useDeferredRecompute, } from "./usingDeferredRecompute";  
import { useDeferredTrue as useDeferredTrue0 } from "./usingDeferredBoolean";       
import { 
    useRenderCount ,      
    useDepsChgCount , 
    useUnmountLogging ,   
    useTopicHeadedRenderCount ,    

} from "./commonElements";    
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";        
import { K, asVoidElement, NUMERIC, useDebugDispatcher, } from "./commonElements";             
import { CBC } from "./useStateInCallback";      
import { useRealTimeQueryInterval1 } from "./usingNonHooksValues";             
import { 
    useOneWayCheckBox ,      
} from "./useCompletion";    
import { useAsyncStrm, useAsyncDictStrm, } from "./useAsyncMemo";       
import {    
    TAndVl , 
    tAndVlSqExpand ,  
} from "./useTValueSeqExpand1";      
        


 
// 
import { 
    AUDIONODES_USEEFFECT , 
    AUDIONODES_USE_AUDIONODEEFFECT ,  
} from "./useAudioNodesParamChgEffect1";      
import * as audioFltAtAbsTNodes from "./useAudioNodesBasicFlt11";        
import { 
    useConstantParamSrcNodeWithGivenFadeoutTimeConstant1 , 
    useInitUnconnectedYyyNodeFor ,      
             
} from "./useAudioNodesMounting11";        
import {      
    useAudioNodeConnectToDest, useDepsRemount,      
} from "./useAudioNodesBasicConnectToDest";    
import { useFixedGain } from "./useAudioNodesBasicFlt11";          
import {  
    useElasUsageOnMount,
    useGainElas ,      
    useGainElasD ,      
    useConstantParamSrcElas ,            
    useConstantParamSrcElasD ,   

} from "./useAudioNodesBasicFixedElas";           
import { 
    useHalfSecondBeep ,           
} from "./useAudioNodesBasicFlt11";        
import { useAParamModulativeNode } from "./useAudioNodesParamAutomative1";  
import {          
    useUnexpectedZeroingBackCheck ,      
} from "./useAudioNodesParamAutomativeElas";   
import {       
    WithGivenDest ,  
    Prv1 ,           
    Consm as WithCtxtualOut ,    
    useWithCurrentSideTapPtRef, 
    useWithCurrentACtxCurrentT,            
    useCurrentDestNdRefAndCtxT ,

} from "./useAudioGraphImplCurrentDestNdRefCtx";        
import AudioNodesParamAutomativeExecET from "./useAudioNodesParamAutomativeExecET";

         
   


      



  
     

const AudioNodesParamAutomativeExecETSpc = (
   () => { 
      const {               
         swingTConst ,                
         timingArgMode ,          

         SETTARGETATTIME , 
         SETVALUECURVE_AT_TIME ,      

      } = AudioNodesParamAutomativeExecET({}    ) ;               
      ;
      const xANodeDisconnectFromAll = (
         function (...[cnd11] : [Pick<AudioNode, "disconnect"> , ] ): void {
            setTimeout(() => {
                  cnd11.disconnect() ;
            } , 0.02 * 1000 ) ;
         }
      ) ;
      const useSimplePolylineSource : (
         (...args : [
            null | AudioNode , 
            Parameters<typeof SETVALUECURVE_AT_TIME >[1 ] ,
         ] )
         => null | object
      ) = ( //
         1 ?
         function useSimplePolylineSourceImpl(...[nd10, graph ] ): null | object {
            const [ref1, setRef1] = (
                  React.useState<null | ConstantSourceNode >(null )
            ) ;
            (             
               React.useLayoutEffect(() => {      
                  if (nd10) {             
                     const cnd11 = (
                           xTryStartNewConstantSourceOn(nd10, graph )        
                     ) ;     
                     {
                           ;
                           setRef1(cnd11 ) ;
                           return () => {
                              xANodeDisconnectFromAll(cnd11 , ) ;
                           } ;
                     }
                  } else {
                     return ;         
                  }  
               } , [nd10, React.useDeferredValue(graph), ] )              
            ) ;
            return (
                  ref1
            ) ;
         }
         :
         function useSimplePolylineSourceImpl(nd10, graph ) {
            const [gen1, { GN_TRYAGAIN, GN_NULLDST, }, ] = (
                  useSimplePolylineSourceImplIteratedImpl( )
            ) ;
            return (             
                  React.useMemo(():(
                     (  Omit<ConstantSourceNode, "start" | "stop" | "connect" | "disconnect"> ) 
                     | null     
                  ) => {                  
                     LOOP_1 :
                     for (const _ of [true, true, true, ] ) {
                        ;      
                        const vl = (
                              gen1.next([nd10, graph] )
                              .value
                        ) ;
                        if (vl) {
                              if ((typeof vl === "object") && (vl instanceof AudioNode)) {
                                 return vl ;
                                 continue LOOP_1 ;
                              }
                              if (vl === GN_TRYAGAIN ) {
                                 continue LOOP_1 ;
                              }
                              if (vl === GN_NULLDST ) {
                                 return null ;
                              }
                        } else {
                              return null ;
                        }
                     }
                     return null ;
                  } , [nd10, React.useDeferredValue(graph), ] )
            ) ;
         }
      ) ;
      const useSimplePolylineSourceImplIteratedImpl = (
         function (...[  ] : [  ] ) {
               const GN_TRYAGAIN = "try again" ;
               const GN_NULLDST  = "null dst";
               return (
                  function <A extends [unknown, unknown] >(a: A ) { return a ; }
               )([(
                  React.useMemo(function* () {
                     if (1 ) {
                           /**    
                            * `var` introduced to work-around the lack of 
                            * Scala `IterableOps`'s `unfold(...)` or `sliding(...)`
                            * 
                            */
                           var existingNode: (
                              (typeof GN_TRYAGAIN) | (typeof GN_NULLDST) | ConstantSourceNode
                           ) = GN_TRYAGAIN ;
                           type Graph = (
                              Parameters<typeof SETVALUECURVE_AT_TIME >[1 ]
                           ) ;
                           for (;;) {
                              /**   
                               * 1) yield {@link existingNode }.
                               *    would be the {@link AudioNode } previously initialised-or-obtained, or
                               *    {@link GN_TRYAGAIN } for the first run .
                               * 
                               * 2) the value passed into the `next(...)` call.  
                               * 
                               */
                              const continualValue : (
                                 [null | AudioNode, Graph]
                              ) = yield existingNode ;
                              ;
                              const previouslyRef = (
                                 existingNode
                              ) ;
                              ;
                              ;
                              ;
                              /**    
                               * assigns as the new value for {@link existingNode }.
                               * 
                               */
                              existingNode = (() => {
                                 ;
                                 /**    
                                  * for the following call to {@link xTryStartNewConstantSourceOn }.
                                  * *the graph/replicand*.
                                  * 
                                 */
                                 const graph : (
                                    Graph
                                 ) = continualValue[1] ;
                                 ;
                                 const [nd10, ] = continualValue ;
                                 if (nd10 ) {
                                    ;
                                    /**   
                                     * the main init.
                                     * 
                                     */
                                    const newNode = (
                                          xTryStartNewConstantSourceOn(nd10, graph )
                                    ) ;
                                    ;
                                    return (
                                          newNode
                                    ) ;
                                 } else {
                                    return GN_NULLDST ;
                                 }
                              })() ;
                              ;
                              /**    
                               * `disconnect()`.
                               * necessary to eliminate leak, 
                               * now that a new Node has been initialised.
                               * 
                               */
                              if ((
                                 (typeof previouslyRef === "object")
                                 && (previouslyRef instanceof AudioNode )
                              ) ) {
                                 xANodeDisconnectFromAll(previouslyRef , ) ;
                              }
                           } ;
                     } else {
                           for (;;) yield null ;
                     }
                  } , [  ] )
               ) , { GN_TRYAGAIN, GN_NULLDST, } as const ]);
         }
      ) ;
      const xTryStartNewConstantSourceOn = (
         function (...[nd10, graph, ] : (
               [(
                  Parameters<typeof useSimplePolylineSource >
               )] extends [[ infer ODest, infer OGraph ] ] ?
               [ODest & object, OGraph ]
               : never
         )) {             
                        const cnd11 = (
                              nd10.context.createConstantSource()        
                        ) ;     
                        cnd11.connect(nd10 ) ;     
                        {        
                              ;              
                              (graph[0] ) && (                    
                                 cnd11.offset
                                 .setValueAtTime((graph[0] ).vl , 0 )     
                              );   
                              SETVALUECURVE_AT_TIME(cnd11, (      
                                 graph       
                              ) , a => a.offset )    ;      
                        }
                        cnd11.start() ;         
                        return cnd11;    
         }
      ) ;
      ;
      return {
         swingTConst ,                
         timingArgMode ,          

         SETTARGETATTIME , 
         SETVALUECURVE_AT_TIME ,      

         // added 

         useSimplePolylineSource ,

      } ;
   }
) ;



  
export {
   AudioNodesParamAutomativeExecET ,
   AudioNodesParamAutomativeExecETSpc ,
} ;