
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
import { useACtxMtWithoutAnyFilter1 } from "./useAudioNodexCtxInitAndBeepNcaOnce1";
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
import { CHalfSecndBeepAtRelativeT } from "./useAudioGraphImplFComponentsBeepAtRelativeT";           
import { CFnValueFromRelativeT as CFnValue1 } from "./useAudioGraphImplFMathComponentsSupport11";    
import {
   Consm as WithCurrentDestNdRef , 
   useWithCurrentSideTapPtRef , 

} from "./useAudioGraphImplCurrentDestNdRefCtx";            
import * as audioFltAtAbsTNodes from "./useAudioNodesBasicUseBeep";      
import * as audioFrqAnlyAtAbsTNodes from "./useAudioNodesCrossmasking1";     
import { CFreqDmAnalyF } from "./useAudioGraphImplFComponentsAnalyticalF";    
import { 
   LoopingWithPeriod , 
   LoopingWithPeriodAndAutoUnmounting , 
   LoopingWithPeriodSimple , 
   MetronomeCheckAndExpandingElem ,  
    
} from "./useAudioGraphImplFComponentsLoopingWrapper1";
import { WithAutoUnmount } from "./useAudioGraphImplFComponentsSlapCompAutoUnmounting";   

// CSS
import "./useAudioGraphImplFComponentsSty.css"     ;
 







  

const {
   CAmpSlideDown ,       
 
} = (function () {     
   /**   
    * {@link tCtxs.currentTInfCtx.Consumer }
    *  */    
   const TC = (           
       tCtxs.currentTInfCtx.Consumer
   ) ;       
   return {  
       CAmpSlideDown  : (   
           function CAmpSlideDownC(...[{ children, ...mainProps }] : [
               (  
                   Omit<(
                       ComponentProps<typeof CAmpSlideDownAtAbsoluteT> 
                   ) , "t" > 
               ) ,        
           ]) {        
               const remountOnScheduledAbsoluteTChg : boolean = false ;
               return (                 
                   <TC>
                       { ({ t: originAbsoluteT }) => (     
                           <>         
                           <code>CAmpSlideDown : { originAbsoluteT } </code>     
                           <K key={remountOnScheduledAbsoluteTChg ? originAbsoluteT : 0 } >   
                           <CAmpSlideDownAtAbsoluteT t={originAbsoluteT } {...mainProps } >
                               { children }
                           </CAmpSlideDownAtAbsoluteT>    
                           </K>
                           </>
                       ) }             
                   </TC>
               ) ;        
           }
       ) ,
   } ;
})() ;    






export {
   CAmpSlideDown , 
} ;