
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
import { CAmpModulated as CAmpModulatedTimeDomain } from "./useAudioGraphImplFromUseYyyNodes1";       
import { CPersistingBeep as CPersistingBeep0 } from "./useAudioGraphImplFromUseYyyNodes1";
import { CFnValueByAbsoluteT as CFnValueByAbsoluteT } from "./useAudioGraphImplFMathComponentsSupport1";
import { CAbsoluteTValueSeq, } from "./useAudioGraphImplFMathComponentsSupport1";
import {
   Consm as WithCurrentDestNdRef , 
   useWithCurrentSideTapPtRef , 

} from "./useAudioGraphImplCurrentDestNdRefCtx";            

// CSS
import "./useAudioGraphImplFComponentsSty.css"     ;
 







  

const {
   WithDelay ,              
          
} = tCtxs ;     

            
const {
   CFnValueByRelativeT ,  
 
} = (function () {     
   /**   
    * {@link tCtxs.currentTInfCtx.Consumer }
    *  */    
   const TC = (           
       tCtxs.currentTInfCtx.Consumer
   ) ;       
   return {  
       CFnValueByRelativeT : (
           function ({ value: compute, ...otherProps0 } : Parameters<typeof CFnValueByAbsoluteT >[0 ] ) {
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
                           <CFnValueByAbsoluteT       
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
   CFnValueByAbsoluteT as CFnValueAtAbsoluteT , 
   CFnValueByRelativeT as CFnValueByRelativeT ,  
} ;