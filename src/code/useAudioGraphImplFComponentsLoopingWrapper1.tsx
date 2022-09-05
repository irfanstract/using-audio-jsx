
import { 
   Iterable,
   IterableOps , 
    
} from "./generalUse11";     
import { 
   AudioTrackConcatClippingMode , 
   avTrackConcatShallPropagate, 
   OmitOrPropagate,          

} from "./timelineConcatClippingMode";    
import React, { useReducer, useState } from "react";  
import { ComponentProps } from "./commonElementsTypes";
import { K } from "./commonElements";         
import { CBC } from "./useStateInCallback";  
import { useRealTimeQueryInterval1 } from "./useNonHookValue";   

          

// domain-imports        
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";        
import {
   WithDelay ,              
   LoopingWithPeriod as LoopingWithPeriodSimple ,  
   LwpPayloadCallback , 
    
   WithCurrentTInfo as WithCurrentScheduledTInfo ,              
                 
   //  
} from "./useAudioGraphImplAbsoluteTCtx1";      
import { 
   CHalfSecndBeepAtAbsoluteT ,         
   CAmpModulated as CAmpModulatedTimeDomain ,      
   CAmpSlideDownAtAbsoluteT ,   
   CBiquadFilterModulated ,             
     
   CPersistingBeep as CPersistingBeep0 ,       
   CConstantValueModulated ,     
   CConstantValue ,      
   CFnValue as CFnValueAtAbsoluteT ,    
      
   nonterminalUsageWrapC ,   
   terminalUsageWrapC ,          
   modulatedWaveTableUsageWrapC ,      
 
} from "./useAudioGraphImplFromUseYyyNodes1";           
import {
   Consm as WithCurrentDestNdRef , 
   useWithCurrentSideTapPtRef , 
   useCurrentDestNdRefAndCtxT ,

} from "./useAudioGraphImplCurrentDestNdRefCtx";           
import { 
   PreFTAndPostFTProps ,
   WithAutoUnmount , 
   withAutoUnmount , 
   passageStateBy1 ,   

} from "./useAudioGraphImplFComponentsSlapCompAutoUnmounting";   

// CSS imports
         
  

// destructuring  
const {         
} = tCtxs ;         
 






  
   
                       
const LoopingWithPeriodAndAutoUnmounting = (() => { 
   type PeerComponentPayload = (                            
       (
           ComponentProps<typeof LoopingWithPeriodSimple >["children"]
       )
   ) ;                  
   const payloadEval = (
      (...[item, itemRenderCtx] : [
         PeerComponentPayload ,
         Parameters<LwpPayloadCallback >[0] ,
      ] ): ReturnType<LwpPayloadCallback > => (   
         (typeof item === "function") ?      
            (() => {            
               const item110 = (
                  item(itemRenderCtx)           
               );
               return item110  ;   
            })()
            : (<>{ item }</> )  
      )
   ) ;
   return (    
      function LoopingWithPeriodC(props10: (
         ComponentProps<typeof LoopingWithPeriodSimple>
         &
         {
            clippingMode?: AudioTrackConcatClippingMode;
         }
      )) {
         const {
            children: item,
            clippingMode = AudioTrackConcatClippingMode.BOTH_ENDS_DROPPED,
            ... 
            props1      

         } = props10;
         const { value: { period } } = props1;
         const getOverflowDeservesVisibility = (
            (p: 0 | 1) => (
               avTrackConcatShallPropagate(clippingMode, p)
               ||
               OmitOrPropagate.OMIT 
            )
         );
         if (clippingMode === AudioTrackConcatClippingMode.BOTH_ENDS_DROPPED ) {
            // TODO return the exclusively-mounting version
            ;
         }
         const itemAfterAutoUnmounting: (PeerComponentPayload & Function) = (
            function ({ perInstanceRelativeT, componentLevelAbsoluteT }) {
               const premountTime = (
                  (
                     getOverflowDeservesVisibility(0)
                     ===
                     OmitOrPropagate.PROPAGATE
                  ) ?
                     // TODO                         
                     100 : 1
               );
               const mountDuration = (     
                  (
                     getOverflowDeservesVisibility(1)
                     ===
                     OmitOrPropagate.PROPAGATE
                  ) ?
                     // value should be at-least `preFT` 
                     30000 : (period + 0.5)
               );             
               const item11 = (   
                  ((itemRenderCtx: Parameters<LwpPayloadCallback >[0] ) => (   
                  payloadEval(item, itemRenderCtx )
                  ))({ perInstanceRelativeT, componentLevelAbsoluteT })
               ) ;
               // return (                         
               //    withAutoUnmount((
               //       passageStateBy1({ preFT: premountTime, postFT: mountDuration })
               //    ) )          
               // ) ;  
               return (             
                  (item11 !== null || (typeof item11 === "boolean") ) ?
                  (          
                     item11
                     &&
                     <WithAutoUnmount  
                        preFT={(  
                           premountTime
                        )}                    
                        postFT={( 
                           mountDuration
                        )}   
                     >    
                        {item11 }               
                     </WithAutoUnmount>          
                  )
                  : null
               ) ;
            }
         );
         return (
            <LoopingWithPeriodSimple {...props1} >
               {itemAfterAutoUnmounting}
            </LoopingWithPeriodSimple>
         );
      }     
   ) ;  
})() ;        
/**      
 * this Component renders a loop(ing) (every `t` *seconds* ) of children.  
 *             
 * {@link LoopingWithPeriod } is simple in usage. however, 
 * it's recommended to switch to {@link MetronomeAndResponseGraph} instead.  
 *   
 * for performance reasons, it might be necessary to make the return-type `null` ; 
 * see {@link LwpPayloadCallback}.   
 */
const LoopingWithPeriod: (    
   (typeof LoopingWithPeriodAndAutoUnmounting )
   |
   (typeof LoopingWithPeriodSimple )  
) = (    
   LoopingWithPeriodAndAutoUnmounting
) ;      
            
const MetronomeGraphingCallback = {} ; // TS-1205
/**    
 * `t` will be relative to the resulting M. 
 */
type MetronomeGraphingCallback = (
   ( 
      (ctx: { t: number ; } )  
      =>  
      ReturnType<LwpPayloadCallback >
   )     
) ;
/**    
 * using this, compared to using {@link LoopingWithPeriod }, would be way easier.  
 *     
 * merely increasing the `period` of an app of {@link LoopingWithPeriod }
 * will leave it one with the each turn being padded with idle period.   
 * copying the existing loop child, and shifting the `t`-argument(s) will not be an option.  
 * instead,    
 * it's preferable to mount a *metronome*, listen for each change in `t` (by default every `0.5 sec` ), and 
 * selectively fire an instrument depending on the `t`. 
 * `t` in call-time `ctx` shall be *interpreted relatively*.
 * 
 * for performance reasons, it might be necessary to make the return-type `null` ; 
 * see {@link LwpPayloadCallback}.  
 * 
 * `t` in call-time `ctx` is (meant) to be *interpreted relatively*.
 */ 
const MetronomeAndResponseGraph = (
   function MetronomeAndResponseGraphB(properties11 : ( 
      { 
         /**    
          * the payload
          */
         children : ( 
            MetronomeGraphingCallback  
         ) ;         
         /**        
          * the engine constraints
          */ 
         value ?: {    
            tickTockPeriod ?: number ;      
         } ; 
         /**        
          * {@link LoopingWithPeriodAndAutoUnmounting } and 
          * {@link LoopingWithPeriod }
         */
         renderRange ?: (
            Required<(
               ComponentProps<typeof LoopingWithPeriodAndAutoUnmounting >
            )>["renderRange"]
         ) ;       
      }        
      &
      Partial<(
         Required<(
            PreFTAndPostFTProps
         )>
      )>  
   )): React.ReactElement {                  
      const { children: givenChildren , value: { tickTockPeriod = 0.5 } = {} } = (
         properties11    
      ) ;    
      if (!(0 < tickTockPeriod ) ) {
         throw TypeError(`'tickTockPeriod' must be nonzero.`) ;  
      } ;                
      if (!(0.05 < tickTockPeriod ) ) {     
         // return (<></>) ;
      } ;      
      const {
         preFT: mtPreFT = 2 , 
         postFT: mtPostFT = 3 ,
      } = properties11 ;
      const {  
         renderRange = {       
            n: (    
               // TODO
               Math.round((
                  (0x40 / tickTockPeriod) 
               ))         
            ) ,      
         } ,  
 
      } = properties11 ;
      const [lastRenderT1, tryAdvanceLastRenderT1] = (     
         React.useReducer((v0: number, v1: number) => (
            ((v0 + 20 ) <= v1 ) ?
            v1 
            : v0       
         ) , 0 )
      ) ;                          
      const mainRendered = (
         <WithCurrentDestNdRef>  
         { ({ feedPt: nd0 }) => (        
            <CBC>
            { function useE () {  
               const actualCtxT = (
                  useRealTimeQueryInterval1({
                     f: () => (
                        nd0 ?  
                        nd0.context.currentTime
                        : false    
                     ) , 
                     deps: [nd0 ] ,   
                  } , (
                     // TODO 
                     1100
                  ) )    
               ) ;
               const {
                  tScale: tCtxTScaleVl , 
               } = (
                  tCtxs.useCurrentTInf()
               ) ;
               return (                      
                     (nd0 && (typeof actualCtxT === "number")) 
                     ?         
                  <LoopingWithPeriodAndAutoUnmounting        
                        
                  /**          
                   * the engine properties 
                   *      
                   * assign the looping period      
                   * 
                   * assign `renderRange` and `initialOffset` as appropriate 
                   */ 
                  value={{  
                     // TODO make this configurable
                     period: tickTockPeriod ,            
                                 
                     initialOffset: lastRenderT1 , 
                  }}                                    
                  renderRange={renderRange }   
                  /**      
                   * `autoUnmountMode` - begn shall be clipped, while overflows shall be left exposed
                  */
                  clippingMode={(
                     AudioTrackConcatClippingMode.START_CLIPPED_ENDING_FULLVOLUME
                  ) }
            
                  >       
                     { ({ perInstanceRelativeT: t, componentLevelAbsoluteT: CVATX }): ReturnType<LwpPayloadCallback > => { 
                        ;
                        const actualCtxTReoundedDownToTens = (
                           Iterable.Range(-10, actualCtxT, 10 ).last(0 ) 
                        );
                        const e0 = (   
                           givenChildren({ t })          
                        );    
                        const e = (             
                           e0 && (            
                              (
                                 ((CVATX + (t * tCtxTScaleVl ) ) + -(Math.max(mtPreFT , 2 * tickTockPeriod ) ) ) <= actualCtxT
                                 && 
                                 (actualCtxTReoundedDownToTens ) <= ((CVATX + (t * tCtxTScaleVl) ) + (Math.max(mtPostFT , 2 * tickTockPeriod ) ) )
                              )    
                              ?             
                              e0  
                              : false   
                           )         
                        ) ;
                        return e ;   
                     } }    
                  </LoopingWithPeriodAndAutoUnmounting>
                  : 
                  <></>
               ) ; 
            } }
            </CBC>
         ) }
         </WithCurrentDestNdRef> 
      ) ;
      return (
         // TODO 
         <div style={{ display: undefined }} >
         { true && mainRendered }
         </div>
      )  ;
   }     
) ;




 






  

export {  
   LoopingWithPeriodSimple , 
   LoopingWithPeriodAndAutoUnmounting , 
   LoopingWithPeriod ,         
   LwpPayloadCallback ,   
   MetronomeAndResponseGraph ,  
   MetronomeGraphingCallback , 
} ;   
