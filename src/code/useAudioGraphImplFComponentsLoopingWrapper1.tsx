
import { 
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
 
} from "./useAudioGraphImplCurrentDestNdRefCtxC";           
import {
   Consm as WithCurrentDestNdRef , 
   useWithCurrentSideTapPtRef , 

} from "./useAudioGraphImplCurrentDestNdRefCtx";           
import { WithAutoUnmount } from "./useAudioGraphImplFComponentsSlapCompAutoUnmounting";   

// CSS imports
      


// destructuring  
const {    
} = tCtxs ;           
 






  
 
                       
const LoopingWithPeriodAndAutoUnmounting = (() => { 
   type PeerChildrenPropType = (                            
       (
           ComponentProps<typeof LoopingWithPeriodSimple >["children"]
       )
   ) ;    
   return (        
       function LoopingWithPeriodC (props10 : (          
           ComponentProps<typeof LoopingWithPeriodSimple>     
           &              
           { 
               autoUnmountMode ?: AudioTrackConcatClippingMode ;
           }
       ) ) {     
           const { 
               children: item  , 
               autoUnmountMode = AudioTrackConcatClippingMode.BOTH_ENDS_DROPPED ,   
               ...
               props1             
   
           } = props10 ;  
           const { value: { period } } = props1 ;            
           const getOverflowDeservesVisibility = (   
               (p: 0 | 1 ) => (
                   avTrackConcatShallPropagate(autoUnmountMode, 0 )
                   || 
                   OmitOrPropagate.OMIT    
               )     
           ) ;   
           const itemAfterAutoUnmounting: (PeerChildrenPropType & Function ) = (  
               function ({ perInstanceRelativeT }) { 
                   return (    
                       <WithAutoUnmount
                           preFT={(  
                               (
                                   getOverflowDeservesVisibility(0 )
                                   === 
                                   OmitOrPropagate.PROPAGATE       
                               ) ?        
                               // TODO            
                               100 : 1    
                           )}                    
                           postFT={(      
                               (
                                   getOverflowDeservesVisibility(1 )
                                   === 
                                   OmitOrPropagate.PROPAGATE                 
                               ) ?          
                               // value should be at-least `preFT` 
                               30000 : (period + 0.5)   
                           ) }  
                       >  
                           { (
                               (typeof item === "function") ?           
                               item({ perInstanceRelativeT }) : item  
                           )  }              
                       </WithAutoUnmount>                     
                   ) ; 
               }
           ) ;
           return (                                     
               <LoopingWithPeriodSimple {...props1 } >    
                   { itemAfterAutoUnmounting  }
               </LoopingWithPeriodSimple>     
           ) ;
       }     
   ) ;  
})() ;   
const LoopingWithPeriod = (
   LoopingWithPeriodAndAutoUnmounting
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
 * 
 * for performance reasons, it might be necessary to make the return-type `null` ; 
 * see {@link LwpPayloadCallback}.
 */ 
const MetronomeCheckAndExpandingElem = (
   function ({ children: givenChildren , value: { tickTockPeriod = 0.5 } = {} } : ( 
      {
         children : (
            (ctx: { t: number ; } ) 
            =>  
            ReturnType<LwpPayloadCallback >
         ) ;    
         /**        
          * the engine constraints
          */
         value ?: {    
            tickTockPeriod ?: number ;
         } ;
      }        
   )) {                  
      if (!(0 < tickTockPeriod ) ) {
         throw TypeError(`'tickTockPeriod' must be nonzero.`) ;  
      } ;                
      if (!(0.05 < tickTockPeriod ) ) {     
         throw TypeError(`such a low 'tickTockPeriod' is unacceptable.`) ;
      } ;   
      const [lastRenderT1, setLastRenderT1] = (
         React.useState<number>(0 )
      ) ;         
      return (                
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
         renderRange={{     
            n: (    
               // TODO
               Math.round((
                  (0x40 / tickTockPeriod) 
               ))
            ) ,      
         }}   
         /**     
          * `autoUnmountMode` - begn shall be clipped, while overflows shall be left exposed
         */
         autoUnmountMode={(
            AudioTrackConcatClippingMode.START_CLIPPED_ENDING_FULLVOLUME
         ) }
    
         >       
            { ({ perInstanceRelativeT: t }) => givenChildren({ t }) }    
         </LoopingWithPeriodAndAutoUnmounting>
      ) ;
   }
) ;











  

export {
   LoopingWithPeriodSimple , 
   LoopingWithPeriodAndAutoUnmounting , 
   LoopingWithPeriod ,         
   LwpPayloadCallback , 
   MetronomeCheckAndExpandingElem , 
} ;   