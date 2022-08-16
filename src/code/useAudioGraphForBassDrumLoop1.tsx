 
import { 
   interpolateBetweenTwo ,   
} from "./polynomialsC";       
import { Iterable, IterableOps } from "./generalUse11";
import React, { useReducer, useState } from "react";   
import {    useEnumConstantPicker } from "./commonElements";     
import { K, ComponentProps, ContextReturnType } from "./commonElements";    
 
    
           
// domain-imports           
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";    
import { MetronomeCheckAndExpandingElem } from "./useAudioGraphImplFComponentsLoopingWrapper1";
import { CBassDrumKickFluidly1 } from "./useAudioGraphImplFComponentsSlapDrumKit1";           
import {         
} from "./useAudioGraphImplFComponentsSlapDrumKit1" ;

               
         
  
  
            


   



    
// TODO define some speciments
const CBassDrumLoop = (() => { 
   const BD : (typeof CBassDrumKickFluidly1) = (
      CBassDrumKickFluidly1
   );
   return (
      function CMetronomousBassDrumKickLoopC({ instrumentProps = {}, metronomeProps = {} } : {   
         instrumentProps ?: (
            Omit<(
               ComponentProps<typeof BD  > 
            ) , "children">
         ) ; 
         metronomeProps ?: (
            Omit<(
               ComponentProps<typeof MetronomeCheckAndExpandingElem >
            ), "children">
         ) ;
      }) {      
         return (       
            <MetronomeCheckAndExpandingElem
            {...{ preFT: 2, postFT: 3, ...metronomeProps, } }
            >  
               { ({ }) => (                   
                  <BD {...instrumentProps } />       
               ) }
            </MetronomeCheckAndExpandingElem>
         ) ;
      }
   ) ;  
})() ;     








export {
   CBassDrumLoop ,   
} ;