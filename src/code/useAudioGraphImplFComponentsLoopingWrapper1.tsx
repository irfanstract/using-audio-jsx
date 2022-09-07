
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
         if (clippingMode === AudioTrackConcatClippingMode.BOTH_ENDS_DROPPED ) {
            // TODO return the exclusively-mounting version
            ;
         }
         {
         const itemAfterAutoUnmounting: (PeerComponentPayload & Function) = (
            function ({ perInstanceRelativeT, componentLevelAbsoluteT }) {
               const getOverflowDeservesVisibility = (
                  (p: 0 | 1) => (
                     avTrackConcatShallPropagate(clippingMode, p)
                     ||
                     OmitOrPropagate.OMIT 
                  )
               ); //
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
      ;
      const mainRendered = (
      (function useMainRenderedImpl() {
         const {
            feedPt : nd0 ,
            currentTime: actualCtxT0 ,
         } = (
            useCurrentDestNdRefAndCtxT()
         ) ;
         const actualCtxT = (
            React.useMemo(() => (
               (typeof actualCtxT0 === "number" ) ?
               actualCtxT0
               : false
            ) , [actualCtxT0 && Math.floor(actualCtxT0 * 4 ) ] )
         ) ;
         return (
            <CBC>
            { function useEF() {
               ;
               const {
                  tScale: tCtxTScaleVl , 
                  t: absoluteScheduledTE ,
               } = (
                  tCtxs.useCurrentTInf()
               ) ;
               const lastRenderT1 = (
                  (typeof actualCtxT === "number") ?
                  Iterable.Range(0, actualCtxT - absoluteScheduledTE , 5 )
                  .last(0 )
                  : 3E5
               ) ;                       
               const {   
                  renderRange = {      
                     n: (   
                        // TODO
                        Math.round((
                           (0x40 / tickTockPeriod) 
                        ))         
                     ) ,      
                     start: ( 
                        Math.floor((
                           (lastRenderT1 + -1.5 ) / tickTockPeriod
                        ))
                     ) ,
                  } ,  
          
               } = properties11 ; 
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
                        /**      
                         * estimation of 
                         * the {@link BaseAudioContext.currentTime `aDestCtx.currentTime` } for the current *item*.
                         */
                        const CURRENTITEM_VATX1 = (
                           CVATX + (t * tCtxTScaleVl )
                        ) ;
                        const e0 = (   
                           givenChildren({ t })          
                        );    
                        const e = (             
                           e0 && (            
                              (
                                 (CURRENTITEM_VATX1 + -(Math.max(mtPreFT , 2 * tickTockPeriod ) ) ) <= actualCtxT
                                 && 
                                 (Iterable.Range(-10, actualCtxT, 3.5 ).last(0 ) ) <= (CURRENTITEM_VATX1 + (Math.max(mtPostFT , 2 * tickTockPeriod ) ) )
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
         ) ;
      } )()
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
