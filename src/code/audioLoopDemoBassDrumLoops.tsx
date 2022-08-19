
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
   return {
      XTreeble : (
         function ({
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
               type="highshelf"
               freqArgumentInterpretation={freqArgumentInterpretation }
               freqArgument={freqArgument}
               {...gm }
               >
               <CBiquadFilterModulated
               type="highpass"
               freqArgumentInterpretation={freqArgumentInterpretation }
               freqArgument={freqArgument}
               >
                  { payload }
               </CBiquadFilterModulated>
               </CBiquadFilterModulated>
            ) ;
         }
      ) , 
      XLowpass : (
         function ({
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
               type="lowshelf"
               freqArgumentInterpretation={freqArgumentInterpretation }
               freqArgument={freqArgument}
               {...gm }
               >
               <CBiquadFilterModulated
               type="lowpass"
               freqArgumentInterpretation={freqArgumentInterpretation }
               freqArgument={freqArgument}
               >
                  { payload }
               </CBiquadFilterModulated>
               </CBiquadFilterModulated>
            ) ;
         }
      ) , 
   } ;
})() ;
const HouseMusicShortBrkDemo = () => {

   const [ac, setAc ] = (
      React.useState<0 | 2 | 7 >(0 )
   ) ;
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
   const tnLn = (
      <>
      <CConstantValue value={-((11 / 12 ) ) } />
      <CFnValue1 
      value={({ ctxT: t }): number => {
         // TODO
         return (
            (( ) => {
               {
                  if (t % 8 < 1 ) {
                     return 0 ;
                  }
                  if (t % 8 < 1.25 ) {
                     return 0 ;
                  }
                  if (t % 8 < 1.5 ) {
                     return -2 ;
                  }
                  if (t % 8 < 1.75 ) {
                     return 0 ;
                  }
                  if (t % 8 < 2.5 ) {
                     return 1 ;
                  }
                  if (t % 8 < 4 ) {
                     return 3 ;
                  }
                  if (t % 8 < 4.5 ) {
                     return -12 + (3 + 2 ) ;
                  }
                  if (t % 8 < 5.25 ) { 
                     return 3 + 2 ;
                  }
                  if (t % 8 < 5.5 ) { 
                     return 3 ;
                  }
                  if (t % 8 < 5.75 ) { 
                     return 0 ;
                  }
                  if (t % 8 < 6.5 ) { 
                     return -2 ;
                  }
                  if (t % 8 < 7 ) { 
                     return 0 ;
                  }
                  if (t % 8 < 7.25 ) { 
                     return 0 ;
                  }
                  return -2 ;
               }
            })(  )
            /
            12
         );
      } } 
      />
      </>
   );
   const bassLineGraph = (
      <CAmpModulated0 value={<CConstantValue value={2 ** -1 } /> }>
      <CWaveTable1
      detuneInterpretation="timedomain-normalised"
      detune={(
         <>
         <CConstantValue value={-3 } />
         { tnLn } 
         </>
      ) }
      type="triangle"
      />
      </CAmpModulated0>
   );
   const treebleGraph = (
      <CAmpModulated0 value={<CConstantValue value={2 ** -1 } /> }>
      <CAmpModulated0 value={<CConstantValue value={2 ** -0.5 } /> } >
         <CWaveTable1
         detuneInterpretation="timedomain-normalised"
         detune={(
            <>
            <CConstantValue value={-3 } />
            <CConstantValue value={1 + (7 / 12 ) } />
            { tnLn } 
            </>
         ) }
         type="sine"
         />
      </CAmpModulated0>
      <CAmpModulated0 value={<CConstantValue value={2 ** -2} /> } >
         <CWaveTable1
         detuneInterpretation="timedomain-normalised"
         detune={(
            <>
            <CConstantValue value={-3 } />
            <CConstantValue value={2 + (4 / 12 ) } />
            { tnLn } 
            </>
         ) }
         type="sine"
         />
      </CAmpModulated0>
      <CAmpModulated0 value={<CConstantValue value={2 ** -5} /> } >
         <CWaveTable1
         detuneInterpretation="timedomain-normalised"
         detune={(
            <>
            <CConstantValue value={-3 } />
            <CConstantValue value={2 } />
            { tnLn } 
            </>
         ) }
         type="triangle"
         />
      </CAmpModulated0>
      <CAmpModulated0 value={<CConstantValue value={2 ** -4} /> } >
               <CWaveTable1
               detuneInterpretation="timedomain-normalised"
               detune={(
                  <>
                  <CConstantValue value={-3 } />
                  <CConstantValue value={2 + (7 / 12 ) } />
                  { tnLn } 
                  </>
               ) }
               type="triangle"
               />
      </CAmpModulated0>
      {(
         (2 <= ac )
         ?
         <CAmpModulated0 value={<CConstantValue value={2 ** -4} /> } >
                  <CWaveTable1
                  detuneInterpretation="timedomain-normalised"
                  detune={(
                     <>
                     <CConstantValue value={-3 } />
                     <CConstantValue value={(2 + 1 ) + (7 / 12 ) } />
                     { tnLn } 
                     </>
                  ) }
                  type="triangle"
                  />
         </CAmpModulated0>
         :
         <></>
      )}
      {(
         (7 <= ac ) 
         ?
         <>
         <CAmpModulated0 value={<CConstantValue value={2 ** -5 } /> } >
                  <CWaveTable1
                  detuneInterpretation="timedomain-normalised"
                  detune={(
                     <>
                     <CConstantValue value={-3 } />
                     <CConstantValue value={(2 + 1 ) + (4 / 12 ) } />
                     { tnLn } 
                     </>
                  ) }
                  type="triangle"
                  />
         </CAmpModulated0>
         <CAmpModulated0 value={<CConstantValue value={2 ** -7 } /> } >
                  <CWaveTable1
                  detuneInterpretation="timedomain-normalised"
                  detune={(
                     <>
                     <CConstantValue value={-3 } />
                     <CConstantValue value={(2 + 1 + 1 ) + (4 / 12 ) } />
                     { tnLn } 
                     </>
                  ) }
                  type="triangle"
                  />
         </CAmpModulated0>
         </>
         :
         <></>
      )}
      </CAmpModulated0>
   );
   return (  
       <WithSlowdown value={2 ** -1 }>
       <WithNSecondsFadeInBF>
           {true && bassDrumLoopGraph}

           <CBiquadFilterModulated
           type="lowshelf"
           freqArgumentInterpretation="timedomain-normalised" 
           freqArgument={<CConstantValue value={110 / 44100 } /> } 
           gainValArgumentInterpretation="timedomain-normalised"
           gainValArgument={<CConstantValue value={2 ** 1.25 } /> }
           >
           { bassLineGraph }
           </CBiquadFilterModulated>
           
           <XTreeble 
           freqArgumentInterpretation="timedomain-normalised" 
           freqArgument={<CConstantValue value={110 / 44100 } /> } 
           gainValArgumentInterpretation="timedomain-normalised"
           gainValArgument={<CConstantValue value={2 ** 5 } /> }
           >
           { treebleGraph }
           </XTreeble>

           { null && <CAmbientNoise /> }
           
       </WithNSecondsFadeInBF>
       </WithSlowdown>
   ) ;
} ;






export {
   HouseMusicShortBrkDemo ,
} ;