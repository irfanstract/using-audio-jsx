
import { IterableOps } from "./generalUse11";
import React, { useReducer, useState } from "react";   
import { K, ComponentProps, ContextReturnType } from "./commonElements";      
import { 
    useOneWayCompletiveState ,      
            
} from "./useCompletion";    
import { useAsyncMemo } from "./useAsyncMemo";          

     
   
// domain-imports         
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";   
import { 
    CHalfSecndBeepAtAbsoluteT ,     
} from "./useAudioGraphImplFromUseYyyNodes1";  
import {            
    CurrentCtxTInfoDisplay ,    
    Prv1 ,                
    useADestNdRefCtx1 , 
    
} from "./useAudioGraphImplCurrentDestNdRefCtx";     
import { CBiquadFilterModulated } from "./useAudioGraphImplFromUseYyyNodes1";

    

  

            


   
  


       
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
const XTwoStepBandpass: (
   React.FC<(
      {
         lowdropStepProps: (
            Exclude<(
               ComponentProps<typeof XLowpass>
            ), "children">
         ) ;
         highstopStepProps: (
            Exclude<(
               ComponentProps<typeof XTreeble>
            ), "children">
         ) ;
         children: React.ReactElement ;
      }
   )>
) = (
   ({ lowdropStepProps, highstopStepProps, children: payload }) => (
      <XTreeble {...lowdropStepProps} >
      <XLowpass {...highstopStepProps} >
         { payload }
      </XLowpass>
      </XTreeble>
   )
) ;





export {
   XTreeble ,
   XLowpass ,
   XTwoStepBandpass ,
} ;