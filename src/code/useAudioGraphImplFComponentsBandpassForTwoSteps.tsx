
import { IterableOps } from "./generalUse11";
import React, { useReducer, useState } from "react";   
import { K, ComponentProps, ContextReturnType } from "./commonElements";      
import { 
    useOneWayCompletiveState ,      
            
} from "./useCompletion";    
import { useAsyncMemo } from "./useAsyncMemo";          

     
   
// domain-imports         
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";   
import { useACtxMtWithoutAnyFilter1 } from "./useAudioNodexCtxInitAndBeepNcaOnce1";  
import { 
    CHalfSecndBeepAtAbsoluteT ,     
} from "./useAudioGraphImplFromUseYyyNodes1";  
import {            
    CurrentCtxTInfoDisplay ,    
    Prv1 ,                
    useADestNdRefCtx1 , 
    
} from "./useAudioGraphImplCurrentDestNdRefCtx";     
import { WGD_DIV } from "./useAudioGraphImplCurrentDestNdRefCtx";             
import { 
    CFnValue1 ,
    
    CHalfSecndBeep1 , CPersistingBeep , CWaveTable1 , CWhiteNoise ,    
    CBassDrumKickFluidly1 ,
    CSnareDrumFluidly1 , 
    
    CAmpModulated , CBiquadFilterModulated ,  CFreqDmAnalyF ,  CConstantValue , CAmpModulated0 ,    

    MetronomeAndResponseGraph , 
    
} from "./audioLoopDemoComponents1"; 
import { CBriefHiHatFluidly } from "./useAudioGraphImplFComponentsCymbals";
import * as BBVR from "./audioLoopDemoSpecimens";  
import {
    CBassDrumLoop , 
    CAmbientNoise , 
    WithNSecondsFadeInBF ,     

} from "./audioLoopDemoSpecimens1";

    

  

            


   
  


       
const {
   XTreeble,
   XLowpass, 
   
} = (() => {
   type Props1 = (
      { children: React.ReactElement ; }
      &
      Pick<ComponentProps<typeof CBiquadFilterModulated> , "freqArgument" | "freqArgumentInterpretation" >
      &
      Pick<ComponentProps<typeof CBiquadFilterModulated> , "gainValArgument" | "gainValArgumentInterpretation" >
   ) ;
   function impl1(...[[fltType11, fltType12 ] ] : [
      ["highshelf", "highpass" ] | ["lowshelf" , "lowpass"] ,
   ] ) {
      return (
         function XLowpassOrTreebleImpl({
            children : payload,
            //
            freqArgument, 
            freqArgumentInterpretation,
            gainValArgument,
            gainValArgumentInterpretation,
         } : Props1 ) {
            const gm = (
               (gainValArgument && gainValArgumentInterpretation) ? 
               ({ gainValArgument, gainValArgumentInterpretation } as const ) 
               : {} 
            ) ;
            return (
               <CBiquadFilterModulated
               type={fltType11 }
               freqArgumentInterpretation={freqArgumentInterpretation }
               freqArgument={freqArgument}
               {...gm }
               >
               <CBiquadFilterModulated
               type={fltType12 }
               freqArgumentInterpretation={freqArgumentInterpretation }
               freqArgument={freqArgument}
               >
                  { payload }
               </CBiquadFilterModulated>
               </CBiquadFilterModulated>
            ) ;
         }
      )  ;
   } //
   return {
      XTreeble : (
         impl1(["highshelf", "highpass"] )
      ) , 
      XLowpass : (
         impl1(["lowshelf", "lowpass"] )
      ) , 
   } ;
})() ;





export {
   XTreeble ,
   XLowpass ,
} ;