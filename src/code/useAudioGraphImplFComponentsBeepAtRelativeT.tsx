
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
import { CHalfSecndBeepAtAbsoluteT } from "./useAudioGraphImplFromUseYyyNodes1";       
import {
   Consm as WithCurrentDestNdRef , 
   useWithCurrentSideTapPtRef , 

} from "./useAudioGraphImplCurrentDestNdRefCtx";            
import * as audioFltAtAbsTNodes from "./useAudioNodesBasicUseBeep";      

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
      /**   
       * half-second beep.
       */
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