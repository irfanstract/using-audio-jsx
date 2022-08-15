
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
   CHalfSecndBeep1 , 
} = (function () {
   /**   
    * {@link tCtxs.currentTInfCtx.Consumer }
    *  */    
   const TC = (           
       tCtxs.currentTInfCtx.Consumer
   ) ;       
   return {
       CHalfSecndBeep1 : (                                
           function C1() {    
               const { t } = (
                   tCtxs.useCurrentTInf()   
               ) ;       
               return (
                   <>
                   <code>CH { t } </code>  
                   <CHalfSecndBeepAtAbsoluteT value={{ t: t, toneFreq: 418 }} />
                   </>
               ) ;          
           }                            
       ) ,           
   } ;
} )() ;







export {
   CHalfSecndBeepAtAbsoluteT , 
   CHalfSecndBeep1 as CHalfSecndBeepAtRelativeT , 
} ;