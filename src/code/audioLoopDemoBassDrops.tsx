
import { IterableOps, Immutable } from "./generalUse11";
import React, { useReducer, useState } from "react";   
import { K, ComponentProps, ContextReturnType } from "./commonElements";      
import { 
    useOneWayCompletiveState ,      
            
} from "./useCompletion";    
import { useAsyncMemo } from "./useAsyncMemo";          

     
   
// domain-imports         
import { AsGVis } from "./useAudioGraphImplAbsoluteTCtx1";
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
    
    CAmpModulatedTimeDomain ,
    CAmpModulated , CBiquadFilterModulated ,  CFreqDmAnalyF ,  CConstantValue , CAmpModulated0 ,    

    MetronomeAndResponseGraph , 
    
} from "./audioLoopDemoComponents1"; 
import {
   XTreeble ,
   XLowpass ,
} from "./useAudioGraphImplFComponentsBandpassForTwoSteps";
import { CBriefHiHatFluidly } from "./useAudioGraphImplFComponentsCymbals";
import * as BBVR from "./audioLoopDemoSpecimens";  

    

  

            


   
  


       
const CFourSecondsBassDrop = (
   ({ coreFreq = 55 } : { coreFreq ?: number ; } ) => (
      <>
      <AsGVis>
         <g>
         <title>
            N-Second Bass Drop
         </title>
         <rect 
         width={4 }
         height={2 }
         style={{ fill: "blue" } }
         />
         </g>
         <></>
      </AsGVis>
      <CAmpModulated0
      value={(
         <K>
            <CFnValue1 value={({ ctxT: t }) => (0 <= t ? (2 ** (1 + (t * -0.5 ) ) ) : 0 ) } />
         </K>
      )}
      >
         <CWaveTable1 
         freqArgumentInterpretation="timedomain-normalised"
         freqArgument={(
            <CConstantValue value={ coreFreq / 440 } /> 
         )}
         detuneInterpretation="timedomain-normalised"
         detuneSemitoneCentsNormalVal={12 * 100 }
         detune={(
            <CFnValue1 value={({ ctxT: t }) => (6 + (t * -4 ) ) / 12 } />
         )}
         />
      </CAmpModulated0>
      </>
   )
) ;



export {
   CFourSecondsBassDrop ,
} ;