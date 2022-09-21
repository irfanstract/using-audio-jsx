
import { 
   Iterable,
   IterableOps , 
   EitherBothSetOrBothUnset ,
   EitherSetAndOthersUnset ,
   EitherSetOrBothUnset ,
    
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
import { useRealTimeQueryInterval1 } from "./usingNonHooksValues";   

          

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
 






  
   
                       
/**    
 * extra amount of info becomes necassary as otherwise
 * there would be no practical way to determine the right number of simultaneously-mounted Comp(s).
 * 
 */
type LWpamPayloadMountSpanProperties = (
   {
      premountTime : number ;
      mountDuration : number ;
   }
) ;
class LWpamPayloadMountSpanProperties1 implements LWpamPayloadMountSpanProperties {
   constructor(
      public premountTime : number ,
      public mountDuration : number ,
   ) {}
   toString(): string {
      return JSON.stringify(this) ;
   }
} ;
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
            clippingMode?: AudioTrackConcatClippingMode | LWpamPayloadMountSpanProperties1;
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
               const {
                  premountTime ,
                  mountDuration ,
               } = ((): LWpamPayloadMountSpanProperties => {
               if (clippingMode instanceof LWpamPayloadMountSpanProperties1 ) {
                  return clippingMode ;
               } 
               {
               const getOverflowDeservesVisibility = (
                  (p: 0 | 1) => (
                     avTrackConcatShallPropagate(clippingMode, p)
                     ||
                     OmitOrPropagate.OMIT 
                  )
               ); //
               return {
               premountTime : (
                  (
                     getOverflowDeservesVisibility(0)
                     ===
                     OmitOrPropagate.PROPAGATE
                  ) ?
                     // TODO                         
                     5 : 1
               ),//;
               mountDuration : (     
                  (
                     getOverflowDeservesVisibility(1)
                     ===
                     OmitOrPropagate.PROPAGATE
                  ) ?
                     // value should be at-least `preFT` 
                     16 : (period + 0.5)
               ),//;             
               } ; 
               }
               } )() ; 
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
 * extra amount of info becomes necassary as otherwise
 * there would be no practical way to determine the right number of simultaneously-mounted Comp(s).
 * 
 * for performance reasons, it might be necessary to make the return-type `null` ; 
 * see {@link LwpPayloadCallback}.  
 * 
 * `t` in call-time `ctx` is (meant) to be *interpreted relatively*.
 */ 
const MetronomeAndResponseGraph = /* */ (() => {
;
const useSchedulingCtxValue = (
   () => {
      ;
      const {
         tScale: tCtxTScaleVl , 
         t: absoluteScheduledTE ,
      } = (
         tCtxs.useCurrentTInf()
      ) ;
      ;
      return {
         tCtxTScaleVl ,
         absoluteScheduledTE ,
      } ;
   }
) ;
const useCtxValues1 = (
   function () {
      ;
      /**   
       * 
       */
      const {
         feedPt : nd0 ,
         currentTime: actualCtxTRaw ,
      } = (
         useCurrentDestNdRefAndCtxT()
      ) ;
      /**    
       * {@link actualCtxTRaw },
       * rounded for performance reasons
       * 
       */
      const actualCtxTRoundedToYThs = (
         React.useMemo(() => (
            (typeof actualCtxTRaw === "number" ) ?
            actualCtxTRaw
            : false
         ) , [actualCtxTRaw && Math.floor(actualCtxTRaw * 4 ) ] )
      ) ;
      /**    
       * {@link tCtxs.useCurrentTInf }
       * 
       */
      const {
         tCtxTScaleVl ,
         absoluteScheduledTE ,
      } = (
         useSchedulingCtxValue()
      ) ;
      ;
      return {
         nd0 ,

         actualCtxTRaw ,
         actualCtxTRoundedToYThs ,

         tCtxTScaleVl ,
         absoluteScheduledTE ,
      } ;
   }
) ;
type IRenderRangeAbsoluteSnapSize = { 
   /**   
    * in *seconds*, independent of *current t-ctx `tScale` value*.
    */
   renderRangeAbsoluteSnapSizeInSecs: number ; 
};
type IRenderRangeSnapSize = {
   /**    
    * frequent amendment of `renderRange` 
    * resulted in *brief silencing* even when the shift(s) were rather small.
    * 
    * to reduce the freq of amendments,
    * an idea is to round the values into multiples (of (...) ).
    * 
    */
   renderIRangeSnapSize : number ;
};
return (
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
      const { children: givenChildren , value: { tickTockPeriod: tickTockPeriodArg = 0.5 } = {} } = (
         properties11    
      ) ;    
      if (!(0 < tickTockPeriodArg ) ) {
         throw TypeError(`'tickTockPeriod' must be nonzero.`) ;  
      } ;                
      if (!(0.05 < tickTockPeriodArg ) ) {     
         // return (<></>) ;
      } ;      
      const unpublishedProps : (
         (
            EitherSetOrBothUnset<(
               {} 
               & IRenderRangeAbsoluteSnapSize 
               & IRenderRangeSnapSize 
            ) >  
         )
         &
         Partial<{ 
            /**   
             * to identify bugs in this library Component 
             * we needed to place diagnostics/debug/info/panel.
             * sadly, the debugging manifests themself will in-this-case heat up CPUs so
             * we need to keep these left-out by default.
             */
            startEndMountTimeDebug : boolean ;
         }>
      ) = {
      } ;
      const {
         startEndMountTimeDebug = false ,
      } = unpublishedProps ;
      ;
      const mainRendered = (
      (function useMainRenderedImpl() {
         ;
         /**    
          * 
          * while one migt be tempted to move this `useYyy` call out of this `<CBC>`,
          * such a change would constitute change in behaviour.
          * 
          * - {@link React.useContext } calls drectly of this {@link useMainRenderedImpl }
          *   will yield values at-the-point where the enclosing Component render(ing) were mounted
          * - {@link React.useContext } calls in this `<CBC>`
          *   will yield values at-the-point where the occurence of this rendered `<CBC>` takes place
          * 
          */
         const { //
            nd0 ,

            actualCtxTRaw ,
            actualCtxTRoundedToYThs ,

            tCtxTScaleVl ,
            absoluteScheduledTE ,
         } = ( //
            useCtxValues1()
         ) ;
         const tickTockPeriodAbsolutely = (
            tickTockPeriodArg * tCtxTScaleVl
         ) ;
         const { //
            renderRangeAbsoluteSnapSizeInSecs ,
            renderIRangeSnapSize ,
         } = (() : (
            {}
            & IRenderRangeAbsoluteSnapSize 
            & IRenderRangeSnapSize
         ) => {
            if (unpublishedProps.renderRangeAbsoluteSnapSizeInSecs ) {
               const { //
                  renderRangeAbsoluteSnapSizeInSecs = 5 ,
               } = unpublishedProps ;
               const { //
                  renderIRangeSnapSize = (
                     Math.floor((
                        renderRangeAbsoluteSnapSizeInSecs
                        / tickTockPeriodAbsolutely
                     ))
                  ) ,
               } = (
                  unpublishedProps
               ) ; //
               return {
                  renderRangeAbsoluteSnapSizeInSecs ,
                  renderIRangeSnapSize ,
               } ;
            }
            {
               // TODO
               ;
               const {
                  renderIRangeSnapSize = (
                     // TODO
                     Iterable.Seq([8, 16, 32, 64 ])
                     .filter(v => (16 <= v ))
                     // first
                     .first(8 )
                  ) ,
               } = (
                  unpublishedProps
               ) ;
               const renderRangeAbsoluteSnapSizeInSecs = (
                  renderIRangeSnapSize 
                  * tickTockPeriodAbsolutely
               ) ;
               return {
                  renderIRangeSnapSize ,
                  renderRangeAbsoluteSnapSizeInSecs ,
               } ;
            } ;
            ;
         } )() ;
         {
               ;
               /**   
                * apply `tScale`.
                * shall not apply `t`, by definition.
                */
               const {
                  preFT: mtPreFTArg = (
                     (renderRangeAbsoluteSnapSizeInSecs + 1 ) / tCtxTScaleVl
                  ) , 
                  postFT: mtPostFTArg = (
                     tickTockPeriodArg + 3
                  ) ,
               } = properties11 ;
               /**   
                * apply `tScale`.
                * shall not apply `t`, by definition.
                */
               // See more: https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess 
               const [mtPreFTAbsolute = 2, mtPostFTEAbsolute = 2, ] = (
                  [mtPreFTArg, mtPostFTArg, ]
                  .map((v: number ) => (
                     v * tCtxTScaleVl
                  ) )
               ) ;
               const mtPostFTAbsolute = (
                  // TODO remove this debugging-specific addition
                  mtPostFTEAbsolute
               ) ;
               /**   
                * note that the value needs to be adjusted by fingers of seconds.
                * 
                * ({@link actualCtxTRoundedToYThs } minus {@link absoluteScheduledTE } )
                * `floor`ed into being multiple of ({@link renderIRangeSnapSize } * {@link tickTockPeriodAbsolutely } ).
                * 
                */
               const lastRenderAbsoluteTMinusInitialAbsoluteTAndAdjusted = (
                  (typeof actualCtxTRoundedToYThs === "number") ?
                  (
                     /**   
                      * multiples of ({@link renderIRangeSnapSize } * {@link tickTockPeriodAbsolutely } )
                      * less than ({@link actualCtxT } minus {@link absoluteScheduledTE } )
                      */
                     Iterable.Range(0, actualCtxTRoundedToYThs - absoluteScheduledTE , (
                        renderIRangeSnapSize 
                        * tickTockPeriodAbsolutely
                     ) )
                     // the first value, or ZERO
                     .last(0 )
                  )
                  : 3E5
               ) ;                       
               const renderRangeCalcImplPreTInSeconds : number = 1.5 ;
               const {   
                  renderRange = ((): (ComponentProps<typeof MetronomeAndResponseGraphB >["renderRange"] & object) => {
                  ;
                  const renderRangeEnd = ( 
                     Math.floor((
                        ((lastRenderAbsoluteTMinusInitialAbsoluteTAndAdjusted + renderRangeAbsoluteSnapSizeInSecs ) ) 
                        / 
                        tickTockPeriodAbsolutely
                     ))
                  ) ;
                  const renderRangeStart = ( 
                     Math.floor((
                        ((lastRenderAbsoluteTMinusInitialAbsoluteTAndAdjusted ) + -Math.max(0, renderRangeCalcImplPreTInSeconds) ) 
                        / 
                        tickTockPeriodAbsolutely
                     ))
                  ) ;
                  return {      
                     n: (   
                        // TODO
                        renderRangeEnd - renderRangeStart
                     ) ,      
                     start: ( 
                        renderRangeStart
                     ) ,
                  } ;
                  } )() ,  
          
               } = properties11 ; 
               return (                      
                     (nd0 && (typeof actualCtxTRoundedToYThs === "number")) 
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
                     period: tickTockPeriodArg ,            
                                 
                     initialOffset: 0 , 
                  }}                                    
                  renderRange={renderRange }   
                  /**      
                   * `autoUnmountMode` - begn shall be clipped, while overflows shall be left exposed
                  */
                  clippingMode={(
                     AudioTrackConcatClippingMode.START_CLIPPED_ENDING_FULLVOLUME
                  ) }
                  visual={startEndMountTimeDebug }
            
                  >       
                     { ({ perInstanceRelativeT: t, componentLevelAbsoluteT: CVATX }): ReturnType<LwpPayloadCallback > => { 
                     ;
                     /**   
                      * additional optimisational auto-mount-and-unmount at this point remains necessary as
                      * the (built-in) mechanism within `LWPAM` did not sufficiently do the thing well.
                      */
                     {
                        ;
                        const actualCtxTReoundedDownToTens = (
                           Iterable.Range(-10, actualCtxTRoundedToYThs, 10 ).last(0 ) 
                        );
                        /**      
                         * estimation of 
                         * the {@link BaseAudioContext.currentTime `aDestCtx.currentTime` } for the current *item*.
                         */
                        const CURRENTITEM_VATX1 = (
                           CVATX + (t * tCtxTScaleVl )
                        ) ;
                        const { headTime1 = 1, } = {} as Partial<{ headTime1 : number ; }> ;
                        const { debugMode = false , } = {} as Partial<{ debugMode : false | "last" | 5 | 5.5 | 6 | 6.5 | 7 ; }> ;
                        // FOR OWN CODE, NOT THE COMPLEMENTARY CODE !
                        const absoluteMountStartT = (
                           ((CURRENTITEM_VATX1 /* add */ + (-headTime1 * tCtxTScaleVl ) ) + -(Math.max(mtPreFTAbsolute , 2 * tickTockPeriodAbsolutely ) ) )
                        );
                        const absoluteMountEndT = (
                           ((CURRENTITEM_VATX1 /* add */ + (-headTime1 * tCtxTScaleVl ) ) + (Math.max(mtPostFTAbsolute , 2 * tickTockPeriodAbsolutely ) ) )
                        ) ;
                        if (debugMode === 6.5 ) {
                           return <div /> ;
                        }
                        if (debugMode === 6 ) {
                           return false ;
                        }
                        const e0 = (   
                           givenChildren({ t })          
                        );    
                        if (debugMode === 5.5 ) {
                           return <div /> ;
                        }
                        if (debugMode === 5 ) {
                           return false ;
                        }
                        const e = (             
                           e0 && (            
                              (
                                 (
                                    /**    
                                     * {@link absoluteMountStartT } rounded down to nearest mul(s) of {@link renderRangeAbsoluteSnapSizeInSecs }
                                     */
                                    Iterable.Range(-renderRangeAbsoluteSnapSizeInSecs, absoluteMountStartT, renderRangeAbsoluteSnapSizeInSecs )
                                    .last(0 ) 
                                 ) <= actualCtxTRoundedToYThs
                                 && 
                                 (
                                    /**    
                                     * {@link actualCtxT } rounded down to nearest mul(s) of {@link renderRangeAbsoluteSnapSizeInSecs }
                                     */
                                    Iterable.Range(-renderRangeAbsoluteSnapSizeInSecs, actualCtxTRoundedToYThs, renderRangeAbsoluteSnapSizeInSecs )
                                    .last(0 ) 
                                 ) <= absoluteMountEndT
                              )    
                              ?             
                              e0  
                              : false   
                           )         
                        ) ;
                        return e ;   
                     }
                     } }    
                  </LoopingWithPeriodAndAutoUnmounting>
                  : 
                  <></>
               ) ; 
         }
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
})() ;




 






  

export {  
   LoopingWithPeriodSimple , 
   LoopingWithPeriodAndAutoUnmounting , 
   LoopingWithPeriod ,         
   LwpPayloadCallback ,   
   MetronomeAndResponseGraph ,  
   MetronomeGraphingCallback , 
} ;   
