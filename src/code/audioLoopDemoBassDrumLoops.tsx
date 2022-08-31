
import { IterableOps, Immutable } from "./generalUse11";
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

    

  

            


   
  


       
const isAtSecondHalf = (
   (t: number) => (
      Math.floor(t * 2 ) % 2
   )
) ;
const isAtModulo : (
   (...args : [number, number, readonly number[] ] ) => boolean
) = (
   (v, md1, c2 ) => (
      0 <= c2.indexOf(v % md1 )
   )
) ;
const BootlegMusicDv : (
   React.FC<(
      {
         subhalvesN ?: number ;
      } 
      &
      {
         renderRange ?: (
            Required<(
               ComponentProps<(
                  typeof MetronomeAndResponseGraph
               )>
            )>["renderRange"]
         ) ;
      }
   )>
) = (
   function ({
      subhalvesN: dv = 1 ,
      renderRange ,
   } ) {
   const bassDrumLoopGraph = (
      <MetronomeAndResponseGraph
      preFT={2 }
      postFT={3 }
      value={{ tickTockPeriod: 0.5 / dv }}
      renderRange={{ n: 4 * 4 * 8 * dv , ...renderRange }}
      >
      { ({ t }) => (
         <>
         
         { (
            (
                  (t % 1 ) === 0
                  &&
                  !isAtModulo(t, 4 * 8 , [28, 29, 30, 31 ] )
            ) ?
            <CBassDrumKickFluidly1 /> 
            :  null
         )}

         { (
            ((t % 2 ) === 1 ) ? <CSnareDrumFluidly1 /> : null
         ) }
         { (
            isAtModulo(t, 8, [5.5, 6 ] ) ? (
               <WithDelay value={0.25 } >
                  <CAmpModulatedTimeDomain value={<CConstantValue value={2 ** -1 } /> } >
                     <CSnareDrumFluidly1 />
                  </CAmpModulatedTimeDomain>
               </WithDelay>
            ) : null
         ) }

         { ((xn: 1 | 2 ) => (
            isAtModulo(t, 1, [...Immutable.Range(0.5, 1, 0.5 / xn ) ] ) ? 
            <CBriefHiHatFluidly duration={0.25 / xn } />
            : null
         ))(2 ) }

         </>
      ) }
      </MetronomeAndResponseGraph>
   ) ;
   return bassDrumLoopGraph ;
   }
) ;
const BassDrumLoopDv = (
   BootlegMusicDv
) ;
const MercerTchamiMusicDemo1 = ({ mode: ac = 2, } : { mode ?: 0 | 2 | 7 ; }) => {

   const dv : 1 | 2 = 2 ;
   const bassDrumLoopGraph = (
      <BassDrumLoopDv 
      subhalvesN={dv }
      />
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
      <CWaveTable1
      detuneInterpretation="timedomain-normalised"
      detune={(
         <>
         <CConstantValue value={-3 } />
         <CConstantValue value={1 } />
         { tnLn } 
         </>
      ) }
      type="sine"
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
         <CWaveTable1
         detuneInterpretation="timedomain-normalised"
         detune={(
            <>
            <CConstantValue value={-3 } />
            <CConstantValue value={3 } />
            { tnLn } 
            </>
         ) }
         type="triangle"
         />
      </CAmpModulated0>
      {(
         (2 <= ac )
         ?
         <>
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
         </>
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
const MercerTchamiMusicDemoIntro = (
   function ({ ...props1 } : (
      Exclude<(
         ComponentProps<typeof MercerTchamiMusicDemo1 >
      ), "mode">
   )) {
      const bPeriod = 0.5 ;
      const baseFreq1 = 32 ;
      return (
         <>
         <CBiquadFilterModulated
         type="lowpass"
         freqArgumentInterpretation="timedomain-normalised"
         freqArgument={(
            <>
            <CFnValue1 
            value={({ ctxT: t0 }) => {
               const t = t0 / bPeriod ;
               return (
                  (64 <= t)
                  ?
                  1 
                  : 
                  IterableOps.clamp((
                     (
                        (2 ** (
                           IterableOps.clamp((
                              isAtSecondHalf(t ) ?
                              ( (t / 64 ) )
                              : ( ((t - 32 ) / 32 ) )
                           ), 0, 1 ) * Math.log2(48000 / baseFreq1 )  
                        ) ) 
                        * 
                        baseFreq1
                     ) 
                     / 
                     48000 
                  ), 0, 1 )
               ) ;
            } }
            />
            </>
         ) }
         >
         <MercerTchamiMusicDemo1 mode={0 } {...props1} />
         </CBiquadFilterModulated> 
         </>
      ) ;
   }
) ;
const HouseMusicShortBrkDemo = (
   () => (
      <MercerTchamiMusicDemoIntro />
   )
) ;






export {
   BassDrumLoopDv ,
   BootlegMusicDv ,
   MercerTchamiMusicDemo1 ,
   MercerTchamiMusicDemoIntro ,
   HouseMusicShortBrkDemo ,
} ;