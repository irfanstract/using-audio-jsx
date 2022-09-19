import {   
   IterableOps ,      
   Immutable ,
   memoize,                   
   BoundedIdentityFunction,    
} from "./generalUse11" ; 
import React, { 
   useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react";   
import { useWarnOnChange, } from "./usingTimeoutOrInterval";     

                    
   
// domain omportd         
import { AudioSinkNode, AudioSourceNode, } from "./useAudioNodesBasicTypeDefs";         
import { AUDIONODES_USEEFFECT, AUDIONODES_USE_AUDIONODEEFFECT, } from "./useAudioNodesParamChgEffect1"; 












    
// 
/**    
 * specialisation for {@link YyyNode }.
 * would be simple combn {@link React.useMemo `useMemo((): (c?.createGain() || null ) )` }, 
 * thus *lightweight* without causing *re-render*s.
 */
const useInitUnconnectedYyyNodeCtxFncLwt = /* chg */ (() => {
;
type WithAutostartConstraints<V> = (
      { autoStart : V ; }
) ;
type Args<YyyNode extends object, BAudioContext extends BaseAudioContext> = (
      [
         { ctx : null | BAudioContext ; } ,
         // the factory impl 
         (...ctx: [BAudioContext, {}? ] ) => YyyNode ,
         // semantic constraints
         ...(
            [YyyNode] extends [AudioScheduledSourceNode | null ] ?
            [
                  (
                     WithAutostartConstraints<false | (
                        [YyyNode] extends [(OscillatorNode | ConstantSourceNode | AudioBufferSourceNode ) | null ] ?
                        never
                        : "auto"
                     ) | true >
                  ) ,
            ]
            : 
            [
                  (
                     Partial<(
                     WithAutostartConstraints<never>
                     )>
                  ) ? ,
            ]
         ) ,
      ]
) ;
return (
      function <YyyNode extends object, BAudioContext extends BaseAudioContext>(...[{ ctx: c , }, newYyy, sematicProps = {}] : (
      Args<YyyNode , BAudioContext >
      ) ) : { gRef : null | YyyNode ; } {  
         const {
            autoStart = "auto" ,
         } = sematicProps ;
         ;                
         const gRef = (
            React.useMemo(() => {
                  if (c) {
                     //
                     const nd1 = (
                        newYyy(c )
                     ) ;
                     // may imply auto-start depending on 'options'
                     if (autoStart) {
                        (
                              (nd1 instanceof AudioScheduledSourceNode ) 
                              &&
                              (autoStart === true || !(nd1 instanceof AudioBufferSourceNode ) )
                              &&
                              nd1.start()
                        ) ;
                     } ;
                     // return with it
                     return (
                        nd1
                     ) ;
                  }
                  return null ;
            } , [c] )
         ) ; 
         return (     
            {
                  gRef ,
            }
         ) ;
      }
) ;
})() ;






export {
   useInitUnconnectedYyyNodeCtxFncLwt ,
} ;