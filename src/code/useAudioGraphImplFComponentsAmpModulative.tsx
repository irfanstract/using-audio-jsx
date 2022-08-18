
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
import { CFnValueFromRelativeT as CFnValue1 } from "./useAudioGraphImplFMathComponentsSupport11";    
import {
   Consm as WithCurrentDestNdRef , 
   useWithCurrentSideTapPtRef , 

} from "./useAudioGraphImplCurrentDestNdRefCtx";            
import { CFreqDmAnalyF } from "./useAudioGraphImplFComponentsAnalyticalF";    

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