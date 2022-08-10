 
import { 
    interpolateBetweenTwo ,   
} from "./polynomialsC";       
import React, { useReducer, useState } from "react";    
import { K } from "./commonElements";    
               
 
      
// domain-imports           
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";   
import { useACtxMtWithoutAnyFilter1 } from "./useAudioNodexCtxInitAndBeepNcaOnce1";
import { CHalfSecndBeepAtAbsoluteT } from "./audioLoopDemoCurrentDestNdRefCtx";  
import {    
    CHalfSecndBeep1 , CPersistingBeep , CWhiteNoise ,    
    CAmpModulated, CAmpModulated0 , CBiquadFilterModulated ,  CFreqDmAnalyF , 
    CConstantValue ,  CFnValue1 ,      
    CAmpSlideDown ,              

    LoopingWithPeriod ,   
} from "./useAudioGraphImplFComponents";      
import { CWaveTable1 } from "./useAudioGraphImplFComponents"; 
// const CPitchdownBassDrumKickFluidly1 = (
//     function () {    
//         const conventionalFreq : number | 440 = 440 ;      
//         const minimumFreq : number = (    
//             (2 ** -(3 + 0.333 ) ) * conventionalFreq       
//         ) ;
//         return (               
//             <CAmpModulated0                 
//             value={      
//                 <CFnValue1         
//                 value={
//                     ({ ctxT: t }) => (   
//                         Math.max(0, -(2 ** -4 ) + (2 ** -(t * 4 ) ) )     
//                     )
//                 }   
//                 />     
//             }                
//             >                                     
//                 <CWaveTable1                   
//                 freqArgumentInterpretation="timedomain-normalised"     
//                 freqArgument={(       
//                     <CFnValue1                  
//                     value={        
//                         ({ ctxT }) => {  
//                             const {                  
//                                 c0,        
//                                 f ,             
//                             } = interpolateBetweenTwo({ c0: 2.3, c1: 2.9 , t: 2 ** -2 }) ;   
//                             const e10 = (
//                                 Math.min(Math.log2(conventionalFreq / minimumFreq ) , c0 + ctxT * f )    
//                             );                   
//                             const val1 = (             
//                                 2 ** -e10  
//                             ) ;        
//                             return val1  ;          
//                         }  
//                     } 
//                     />       
//                 )}       
//                 />                       
//             </CAmpModulated0 >                          
//         ) ;  
//     }
// ) ;  
// const CBassDrumKickFluidly1 = (
//     CPitchdownBassDrumKickFluidly1  
// );
// const CBassDrumKick1 = (
//     function (...[] : [
//         // TODO  
//     ] ) { 
//         const TC = (   
//             tCtxs.currentTInfCtx 
//             .Consumer      
//         ) ;       
//         const TOff = (    
//             tCtxs.WithDelay  
//         ) ;    
//         const {
//             shallRemountForEachKeystroke: remount , 
//             delay ,             
//         } = (() : {
//             shallRemountForEachKeystroke : boolean ; 
//             delay : number ;         
//         } => (
//             { shallRemountForEachKeystroke : false , delay : 0.1 }
//         ))() ; 
//         return (                                
//             <TC>           
//                 { ({ t }) => (            
//                     // TODO    
//                     <K key={remount ? t : 0  }>
//                         <WithDelay value={delay } > 
//                             <CBassDrumKickFluidly1 />           
//                         </WithDelay>
//                     </K>        
//                 ) }
//             </TC>
//         );       
//     }
// ) ;  
import {        
    CBassDrumKick1 , 
    CBassDrumKickFluidly1 , 
    CPitchdownBassDrumKickFluidly1 ,  
    CSnareDrum1,  
    CSnareDrumFluidly1 ,     
} from "./useAudioGraphImplFComponentsSlapDrumKit1" ;

               
         
  
  
            


   



       
const {
    currentTCtx , 
    currentTScaleCtx ,        
    currentTInfCtx ,    
  
    CurrentTDisplay , 
    WithDelay ,      
} = tCtxs ;
   
const BeepsInLoop = (
    function CBeepsInLoop ({ lowNumber = false } : (
        { lowNumber ?: boolean ;      }     
    )) {     
        return (         
            <div> 
            <p>                   
                here's, 
                a repetition, of an audio-sheet, at regularly-spaced time-stamps. 
                it demonstrates.
                , .
            </p>                         
            <LoopingWithPeriod value={{ period: 0.4 } } renderRange={{ n: !lowNumber ? 0x0C : 0x1 }} >
                    <CurrentTDisplay />         
                    <CHalfSecndBeep1    />              
            </LoopingWithPeriod>          
            <LoopingWithPeriod value={{ period: 5 } } renderRange={{ n: !lowNumber ? 0x20 : 0x1 }} >
                    <CurrentTDisplay />              
                    <CHalfSecndBeep1    />             
            </LoopingWithPeriod>        
            </div>
        ) ;  
    }
) ;         
console.log("") ;
const BEEPBOPVRKEY = (   
    String((
        Math.random()  
    ))
) ;                  
const {
    BEEPBOPVR ,  
    BEEPBOPVRAPP , 

} = (() => {                 
    function DemoesWithBBG({
        beepBopGraph1 , 
        quantityReductiveDbgMode ,          
    } : (
        {     
            beepBopGraph1 : React.ReactElement ;  
            quantityReductiveDbgMode : boolean ;         
        }
    )) {    
        enum Vr {
            SimpleBeep ,   
            /**   
             * Beep-Bops    
             */
            V1 ,            
            /**           
             * @example 
             * 
             *  <CAmpModulated value={ beepBopGraph1 } >
             *      <CPersistingBeep value={ { } } />         
             *  </CAmpModulated>       
             */   
            V2 ,  
            /**              
             * @example 
             *       
             *  <CAmpModulated  
             *  value={ (        
             *      <WithDelay value={-7 } > 
             *          { beepBopGraph1 }
             *      </WithDelay>
             *  ) }   
             *  > 
             *      <CWhiteNoise value={ { volume: 2 ** -3  } } />          
             *  </CAmpModulated>             
             */         
            V2P1 ,     
            /**     
             * 
             * @example 
             * 
             *  <CBiquadFilterModulated       
             *  type="lowpass"      
             *  freqArgument={(
             *      <CFreqDmAnalyF value={{ refreshIntervalMillis: (2 ** -3 ) * 1000 } } >
             *          { beepBopGraph1  }    
             *      </CFreqDmAnalyF>  
             *  )} 
             *  freqArgumentInterpretation="timedomain-normalised"   
             *  >
             *      <CWhiteNoise value={ { volume: 2 ** -3  } } />         
             *  </CBiquadFilterModulated>           
             */  
            V2XLwPassMsk ,           
            //   
            AmpSlideDown ,    
            BassDrumKick ,                 
            BassDrumLoop ,               
            BassDrumSnDrumLoop ,     
        } ;  
        const onv = (function F (version: Vr ): React.ReactElement  {  
            if (version === Vr.SimpleBeep ) {
                ;  
                return (          
                    <CHalfSecndBeep1 />     
                ) ;                   
            }                       
            if (version === Vr.AmpSlideDown ) {  
                ;      
                return (               
                    <CAmpSlideDown   >                  
                        <CWaveTable1 
                        freqArgument={<CConstantValue value={2 ** -0.5 } /> }
                        freqArgumentInterpretation="timedomain-normalised"    
                        />            
                    </CAmpSlideDown>       
                ) ;                      
            }                                                  
            if (version === Vr.BassDrumKick ) {    
                ;      
                return ((vrs : 1 | 2 | 2.25 ): React.ReactElement => {  
                    if (vrs === 2 ) {
                        ;                       
                        if (1) {}
                        return (      
                            <CBassDrumKick1 />                     
                        ) ;               
                    }          
                    if (vrs === 2.25) {   
                        ;      
                        return (   
                            F(Vr.BassDrumLoop )
                        ) ;        
                    }
                    return (          
                        <CAmpSlideDown   >         
                            <CPersistingBeep value={ { toneFreq: 55 } } />         
                        </CAmpSlideDown>                   
                    ) ;                  
                } )(2 ) ;                       
            }                       
            if (version === Vr.BassDrumLoop) {
                return (       
                    <div>                   
                    <LoopingWithPeriod               
                    value={(   
                        { period: 2 * 0x04 * 0.5 }  as const            
                    )} 
                    renderRange={{ n: 0x08 } }                  
                    >         
  
                        <LoopingWithPeriod                   
                        value={(     
                            { period: 0x04 * 0.5 }  as const            
                        )}         
                        renderRange={{ n: 2 } }            
                        >  
                                   
                            <LoopingWithPeriod             
                            value={( 
                                { period: 0.5 }  as const            
                            )} 
                            renderRange={{ n: 0x04 } }     
                            > 
                                 <CBassDrumKick1 tCoef1={2 ** -4 } /> 
                            </LoopingWithPeriod>      
                            
                        </LoopingWithPeriod>            

                    </LoopingWithPeriod>                
                    </div >        
                ) ;           
            }                            
            if (version === Vr.BassDrumSnDrumLoop) {
                return (       
                    <div>             
                        <LoopingWithPeriod   
                        value={( 
                            { period: 1.0 }  as const         
                        )} 
                        renderRange={{ n: 0x08 } }                   
                        >       
                            <WithDelay value={0 } >          
                                <CBassDrumKick1 tCoef1={2 ** -4 } />       
                            </WithDelay>      
                            <WithDelay value={0.5 } >          
                                <CBassDrumKick1 tCoef1={2 ** -4 } />     
                                <CSnareDrum1 tCoef1={2 ** -4 } />             
                            </WithDelay>      
                        </LoopingWithPeriod>     
                    </div >        
                ) ;           
            }                 
            if (version === Vr.V2 ) {    
                ; 
                return (
                    <CAmpModulated value={ beepBopGraph1 } > 
                        <CPersistingBeep value={ { } } />         
                    </CAmpModulated>                 
                ) ;                     
            }                     
            if (version === Vr.V2P1 ) {     
                ;      
                return (       
                    <CAmpModulated     
                    value={ (        
                        <WithDelay value={-7 } >
                            { beepBopGraph1 }  
                        </WithDelay> 
                    ) }   
                    >
                        <CWhiteNoise value={ { volume: 2 ** -3  } } />         
                    </CAmpModulated>            
                ) ;               
            }            
            if (version === Vr.V2XLwPassMsk ) {                  
                ;         
                return (  
                    <CBiquadFilterModulated       
                    type="lowpass"      
                    freqArgument={(
                        <CFreqDmAnalyF value={{ refreshIntervalMillis: (2 ** -3 ) * 1000 } } >
                            { beepBopGraph1  }    
                        </CFreqDmAnalyF> 
                    )} 
                    freqArgumentInterpretation="timedomain-normalised"  
                    >
                        <CWhiteNoise value={ { volume: 2 ** -3  } } />         
                    </CBiquadFilterModulated>          
                ) ;               
            }      
            return (            
                <>{ beepBopGraph1 }</>     
            ) ;                 
        })  ;   
        const useXOptions = (       
            function () {   
                const allOptions = (
                    Object.values(Vr )         
                    .filter((v) : v is Vr => (typeof v === "number" ) )       
                ) ; 
                const [vl, setVl] = (      
                    React.useReducer((
                        function (v0: Vr, v1: Vr ) : Vr {
                            return v1 ;     
                        }
                    ) , Vr.BassDrumKick )
                ) ;         
                const btns = (      
                    allOptions            
                    .map((value ) => {             
                        return (     
                            <span key={ value } >  
                            <button type="button" onClick={() => setVl(value ) } >
                                {String(Vr[value] ) } 
                            </button>    
                            </span>     
                        ) ;
                    })   
                ) ;         
                return {
                    vl ,  
                    setVl ,     
                    allOptions ,   
                    btns ,    
                } ;
            }             
        ) ;        
        return (function useE() {              
            const C = (            
                // TODO        
                React.useCallback((            
                    function ReactIoBasedAudioLoopDemoSpcSelectApp () {     
                        const {
                            vl: selectedVl ,  
                            btns: btns ,   
                        } = (         
                            useXOptions()          
                        ) ; 
                        return (               
                            <div>   
                                <p>{ btns } </p>
                                <div> 
                                    { onv(selectedVl ) }   
                                </div>
                            </div>
                        ) ;     
                    }   
                ) , [BEEPBOPVRKEY ] )   
            ) ;
            React.useLayoutEffect(() => {
                console.log({ C }) ;
            } , [C ]) ;  
            return (   
                <div>
                    <p>  
                        Bp . .
                        <code>{ BEEPBOPVRKEY } </code> 
                    </p>
                    <C />
                </div>               
            ) ;
        })() ;  
    }             
    const BBVR_APP = (     
        function BEEPBOPVR0({ 
            quantityReductiveDbgMode ,      
        } : (
            {   
                quantityReductiveDbgMode : boolean ;      
            }
        ) ) {     
            React.useLayoutEffect(() => {  
                ;
                console.log(`there's ${DemoesWithBBG.name } `);    
            } , [DemoesWithBBG ] ) ;
            const beepBopGraph1 = ( 
                <BeepsInLoop lowNumber={quantityReductiveDbgMode} />
            ) ;              
            const c10 = (
                <DemoesWithBBG {...{ beepBopGraph1, quantityReductiveDbgMode } } />
            ) ;
            React.useEffect(() => console.log({ BEEPBOPVRKEY }), [BEEPBOPVRKEY ] ) ;
            const c1 = (         
                <K>        
                <K key={BEEPBOPVRKEY } >                
                <div>   
                    APPL DEF-KEY ; : {BEEPBOPVRKEY }
                </div>   
                <div>     
                { c10 }
                </div>   
                </K>                
                </K>   
            ) ;
            ;  
            return {    
                quantityReductiveDbgMode ,  
                beepBopGraph1 , 
                c1 ,        
            } ;  
        }
    ) ;               
    return {
        BEEPBOPVR : BBVR_APP ,      
        BEEPBOPVRAPP : (
            function (...[p] : Parameters<typeof BBVR_APP > ) {
                const {
                    c1 ,    
                } = BBVR_APP(p ) ;
                return c1 ;
            }
        ) ,    
    } ;       
})() ; 
       
        





     





 





export {
    BeepsInLoop , 

    BEEPBOPVR ,            
    BEEPBOPVRAPP ,  
} ;     