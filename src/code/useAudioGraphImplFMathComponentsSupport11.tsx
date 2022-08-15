
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
   WithDelay ,              
          
} = tCtxs ;     

            
const {
   CFnValue1 ,  
 
} = (function () {     
   /**   
    * {@link tCtxs.currentTInfCtx.Consumer }
    *  */    
   const TC = (           
       tCtxs.currentTInfCtx.Consumer
   ) ;       
   return {  
       CFnValue1 : (
           function ({ value: compute, ...otherProps0 } : Parameters<typeof CFnValueAtAbsoluteT >[0 ] ) {
               const {
                   codeDeps: higherLevelCodeDeps = [] ,  
                   ...
                   otherProps   
               } = otherProps0 ; 
               const renderSrcCodeView = (
                   () => (  
                       <code style={{ whiteSpace: "pre-wrap" }}> 
                           { String(compute ) }    
                       </code> 
                   )     
               ) ;
               ;      
               return (                   
                   <TC>     
                       { ({ t: originPtAbsoluteT, tScale }) => (                 
                           <>                
                           <code>CFnValue  </code>                 
                           { [      
                               null &&  
                               <span key={1} style={{ display: "block" }}>    
                                   at <i>absolute t</i> { originPtAbsoluteT }      
                                   value { JSON.stringify(compute({ ctxT: originPtAbsoluteT }) ) }   
                               </span>             ,   
                               null &&  
                               <span key={2} style={{ display: "block" }}>                 
                                   code :   
                                   { renderSrcCodeView() }     
                               </span>       ,                     
                           ] }                               
                           <CFnValueAtAbsoluteT       
                           value={({ ctxT: ctxTAbsolutely }) => {  
                               const ctxTRelativelyAfterScaled = (
                                   ctxTAbsolutely - originPtAbsoluteT  
                               );        
                               const ctxTRelatively = (  
                                   ctxTRelativelyAfterScaled
                                   /
                                   tScale         
                               ) ;               
                               return (
                                   compute({ ctxT: ctxTRelatively })
                               ) ;  
                           } }
                           codeDeps={[originPtAbsoluteT, ...higherLevelCodeDeps ]}       
                           { ...otherProps }    
                           />                   
                           </>   
                       ) }          
                   </TC>
               ) ;          
           }    
       ) ,     
   } ;
})() ;         







export {
   CFnValueAtAbsoluteT , 
   CFnValue1 as CFnValueFromRelativeT ,  
} ;