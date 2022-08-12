
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
   WithDelay ,              
   LoopingWithPeriod : LoopingWithPeriodSimple ,   
    
   WithCurrentTInfo: WithCurrentScheduledTInfo ,    
          
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

const MetronomeCheckAndExpandingElem = (
   function ({ children: givenChildren } : ( 
      {
         children : (ctx: { t: number ; } ) => React.ReactElement ;
      }
   )) {         
      return (            
         <LoopingWithPeriodSimple 
         value={{ period: 1 }}      
         renderRange={{
            n: (   
               // TODO         
               0x20 
            ) ,    
         }} 
         >       
            { ({ perInstanceRelativeT: t }) => givenChildren({ t }) }    
         </LoopingWithPeriodSimple>
      ) ;
   }
) ;













export {
   LoopingWithPeriodSimple , 
   LoopingWithPeriodAndAutoUnmounting , 
   LoopingWithPeriod ,         
   MetronomeCheckAndExpandingElem , 
} ;
