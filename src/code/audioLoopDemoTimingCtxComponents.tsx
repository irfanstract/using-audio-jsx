
import { IterableOps } from "./generalUse11";
import { linearSlidingStateAtT } from "./timeDomainClosedGradientSampling1";
import { SupportedFShiftAmtInterpretation } from "./audioFreqShiftInterpretation1";
import { periodicTRestrictedLinearlyApproachedValueAtT1 } from "./audioTDomainPeriodicPlotSamplingAtT1";
import React, { useReducer, useState } from "react";   
import { K, ComponentProps, ContextReturnType } from "./commonElements";      
import { CBC } from "./useStateInCallback";
import { 
    useOneWayCompletiveState ,      
            
} from "./useCompletion";    
import { useAsyncMemo } from "./useAsyncMemo";          

     
   
// domain-imports         
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";   
import {            
    CurrentCtxTInfoDisplay ,    
    Prv1 ,                
    Consm as WithCurrentDestNdRef ,
    useCurrentDestNdRefAndCtxT ,
    
} from "./useAudioGraphImplCurrentDestNdRefCtx";     
import { WGD_DIV } from "./useAudioGraphImplCurrentDestNdRefCtx";             

    

const {
} = tCtxs ;

    

  

            


   
  


       
;
const TPTC = (() => {
   ;
   /**    
    * {@link tCtxs.currentTCtx.Provider }
    */
   const {
      Provider: TP ,     
   } = (
      tCtxs.currentTCtx             
   ) ;                        
   const {  
      Consumer: TCP ,    
   } = tCtxs.currentTInfCtx ;
   const withADestCtxTCompletionStatCtx = (() => {
      type InnerRenderer = (
         (ctx: {
               absolT0 : number ;
               absolT1 : number ;
               tScale : number ;
               relativeTDiff : number ;
         } )
         => React.ReactElement
      ) ;
      type OuterRenderer = (
         (ctx : {
               withADestCtxCompletionStat : (
                  (payload : InnerRenderer ) => React.ReactElement
               ) ;
         } )
         => React.ReactElement
      ) ;
      return (
         (...[payload0 ] : [
               payload : (
                  OuterRenderer
               ) ,
         ] ): React.ReactElement => {
               return (
                  <TCP>
                  { ({ 
                     t: absolT0, 
                     /**   
                      * cannot use `tScale` from this `ctx`, as
                      * in general the `tScale` at the *site* of the *inner payload* can be different.
                      */
                  }) => {
                     ;
                     const withADestCtxCompletionStat = (
                           (...[payload1 ] : (
                              [InnerRenderer ]
                           )) => (
                           <CBC>
                           { function useCCS() {
                              ;
                              const { 
                                 /**   
                                  * again,
                                  * cannot use `tScale` from the outer `ctx`, as
                                  * in general the `tScale` here can be different.
                                  */
                                 tScale: tScale, 
                              } = tCtxs.useCurrentTInf() ; // ) => (
                              // <WithCurrentDestNdRef>  
                              const { currentTime: absolT1 } = (
                                 useCurrentDestNdRefAndCtxT()
                              ) ;
                              return (
                                 (typeof absolT1 === "number") ?
                                 ((): React.ReactElement => {
                                       const relativeTDiff = (
                                          (absolT1 - absolT0 ) / tScale
                                       ) ;
                                       return (
                                          payload1({ 
                                             absolT0: absolT0, 
                                             absolT1: absolT1, 
                                             tScale: tScale,
                                             relativeTDiff ,
                                          })
                                       ) ;
                                 })()
                                 : <></>
                              ) ;
                           } }
                           </CBC>
                           )
                     ) ;
                     return (
                           payload0({ withADestCtxCompletionStat })
                     ) ;
                  } }
                  </TCP>
               ) ;
         }
      ) ;
   })() ;
   const WithADestCtxTCompletionStatCtx = (
      ({ children: payload } : (
         { children: Parameters<typeof withADestCtxTCompletionStatCtx >[0 ] ; }
      ) ) => (
         withADestCtxTCompletionStatCtx(payload )
      )
   ) ;
   ;
   return {
      TCP ,
      TP ,
      withADestCtxTCompletionStatCtx ,
      WithADestCtxTCompletionStatCtx ,
   } ;
})() ;





export default TPTC ;