import {   
   IterableOps ,   
   BoundedIdentityFunction,                    
} from "./generalUse11" ; 
import React, {      
   useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { useEfectToMap } from "./useEffectToMap";  
import { 
   useWarnOnChange ,     
} from "./usingTimeoutOrInterval";    

 
   
import { AUDIONODES_USEEFFECT, AUDIONODES_USE_AUDIONODEEFFECT } from "./useAudioNodesParamChgEffect1";    
import { useFixedGain } from "./useAudioNodesBasicFixedGain";   
import { useParamModulation } from "./useAudioNodesParamAutomative1";      
import { 
   useBiquadFilterNodeWithGivenFadeoutTimeConstant1,
   useConstantParamSrcNodeWithGivenFadeoutTimeConstant1,
   useGainNodeWithGivenFadeoutTimeConstant1, 
   useOscilltorNodeWithGivenFadeoutTimeConstant1 ,   
 
   useParamNodeWithGiven ,        

} from "./useAudioNodesMounting11";    





  

         
        
type DestParamIntrinsicsUsageArgs = [
   { ctx: null | BaseAudioContext ; } ,
   null | AudioParam ,
   {
      absoluteRequestedIntrinsicValue : "default" | number ;
   } ,
] ;
const useDestParamBoundsCorrective = (
   function (...[{ ctx: aCtx } , gnAfterMul, { absoluteRequestedIntrinsicValue } ] : (
      DestParamIntrinsicsUsageArgs
   ) ) {
      ;
      const destParamBoundsCompensativeNd = (
         useConstantParamSrcNodeWithGivenFadeoutTimeConstant1((
               useParamModulation(gnAfterMul , aCtx )
         ) , 0.5 )
      ) ;
      React[AUDIONODES_USE_AUDIONODEEFFECT ](() => {
         if (destParamBoundsCompensativeNd && gnAfterMul ) {
               (typeof absoluteRequestedIntrinsicValue === "number") && (
                  destParamBoundsCompensativeNd.offset
                  // TODO
                  .setTargetAtTime((
                     -(
                           Math.max(0, (
                              gnAfterMul.minValue - absoluteRequestedIntrinsicValue
                           ))
                     )
                     +
                     Math.max(0, (
                           absoluteRequestedIntrinsicValue - gnAfterMul.maxValue
                     ))
                  ), 0, 0.25 )
               ) ;
         }
      } , [destParamBoundsCompensativeNd, gnAfterMul] ) ;
      ;
   }
) ;



export {
   useDestParamBoundsCorrective ,
} ;