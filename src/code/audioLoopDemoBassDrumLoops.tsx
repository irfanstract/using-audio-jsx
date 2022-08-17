
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
} from "./useAudioGraphImplCurrentDestNdRefCtxC";  
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

    MetronomeCheckAndExpandingElem , 
    
} from "./audioLoopDemoComponents1"; 
import { CBriefHiHatFluidly } from "./useAudioGraphImplFComponentsCymbals";
import * as BBVR from "./audioLoopDemoSpecimens";  
import {
    CBassDrumLoop , 
    CAmbientNoise , 
    WithNSecondsFadeInBF ,     

} from "./audioLoopDemoSpecimens1";
import '../App.css';        

    

const {
    currentTCtx , 
    currentTScaleCtx ,         
    currentTInfCtx ,    

    CurrentTDisplay , 
    WithDelay ,     
    WithSlowdown,
    LoopingWithPeriod , 
} = tCtxs ;

    

  

            


   
  


       
const HouseMusicShortBrkDemo = () => {

   const dv : 1 | 2 = 2 ;
   const bassDrumLoopGraph = (
       <MetronomeCheckAndExpandingElem
       preFT={2 }
       postFT={3 }
       value={{ tickTockPeriod: 0.5 }}
       renderRange={{ n: 4 * 4 * 8 * dv }}
       >
       { ({ t }) => (
           <>
           
           { (
               (
                   (t % 1 ) === 0
                   &&
                   ([28, 29, 30, 31 ] as number[] ).indexOf(t % (4 * 8 ) ) === -1 
               ) ?
               <CBassDrumKickFluidly1 /> 
               :  null
           )}

           { (
               ((t % 2 ) === 1 ) ? <CSnareDrumFluidly1 /> : null
           ) }

           { (
               (((t * 2 ) % 2 ) === 1 ) ? 
               <CBriefHiHatFluidly />
               : null
           ) }

           </>
       ) }
       </MetronomeCheckAndExpandingElem>
   ) ;
   const bassLineGraph = (
      <CWaveTable1
      detuneInterpretation="timedomain-normalised"
      detune={(
         <>
         <CConstantValue value={-(3 + (11 / 12 ) ) } />
         <CFnValue1 
         value={({ ctxT: t }): number => {
            const t1 = t % 8 ;
            // TODO
            return (
               ((t: number ) => { 
                  {
                     if (t < 1 ) {
                        return 0 ;
                     }
                     if (t < 1.25 ) {
                        return 0 ;
                     }
                     if (t < 1.75 ) {
                        return -2 ;
                     }
                     if (t < 2.5 ) {
                        return 1 ;
                     }
                     if (t < 4.25 ) {
                        return 3 ;
                     }
                     if (t < 5 ) { 
                        return 3 + 2 ;
                     }
                     if (t < 5.25 ) { 
                        return 3 + 2 ;
                     }
                     if (t < 5.75 ) { 
                        return 3 ;
                     }
                     if (t < 6.5 ) { 
                        return -2 ;
                     }
                     if (t < 7.25 ) { 
                        return 0 ;
                     }
                     return -2 ;
                  }
               })(t1 )
               /
               12
            );
         } } 
         />
         </>
      ) }
      type="triangle"
      />
   );
   return (  
       <WithSlowdown 
       /**  this filtering is here to debug the one timing issues. */
       value={2 ** 0 } 
       >
       <WithSlowdown value={2 ** -1 }>
       <WithNSecondsFadeInBF>
           {true && bassDrumLoopGraph}
           { bassLineGraph }
           { null && <CAmbientNoise /> }
       </WithNSecondsFadeInBF>
       </WithSlowdown>
       </WithSlowdown>
   ) ;
} ;






export {
   HouseMusicShortBrkDemo ,
} ;