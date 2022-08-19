
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
import { CAmpSlideDown } from "./useAudioGraphImplFComponentsAmpModulative";
import {
   Consm as WithCurrentDestNdRef , 
   useWithCurrentSideTapPtRef , 

} from "./useAudioGraphImplCurrentDestNdRefCtx";            
import * as audioFltAtAbsTNodes from "./useAudioNodesBasicUseBeep";      
import * as audioFrqAnlyAtAbsTNodes from "./useAudioNodesCrossmasking1";     

// CSS
import "./useAudioGraphImplFComponentsSty.css"     ;
 







 

/**   
 * infinite-duration, full-amplitude oscillator/wavetable.
 */
const CWaveTable1 = (  
   modulatedWaveTableUsageWrapC(audioFltAtAbsTNodes.useOinModulatedWaveTable )
) ;




export {
   CWaveTable1,
} ;