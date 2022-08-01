import React, { useReducer, useState } from "react";   
import { K } from "./commonElements";    
  


// domain-imports           
import * as tCtxs from "./audioLoopDemoScheduledTCtx";   
import { useACtxMtWithoutAnyFilter1 } from "./useAudioNodexCtxInitAndBeepNcaOnce1";
import { CHalfSecndBeepAtAbsoluteT } from "./audioLoopDemoCurrentDestNdRefCtx";  
import { 
    CHalfSecndBeep1 , CPersistingBeep , CWhiteNoise ,    
    CAmpModulated , CBiquadFilterModulated ,  CFreqDmAnalyF , 
    CConstantValue ,   
    CAmpSlideDown ,         
} from "./audioLoopDemoComponents1"; 
import { CWaveTable1 } from "./useAudioGraphImplFComponents";

   
         
  

            


   



       
const {
    currentTCtx , 
    currentTScaleCtx ,        
    currentTInfCtx ,    
  
    CurrentTDisplay , 
    WithDelay ,     
    LoopingWithPeriod ,   
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
            <ol>                           
            <LoopingWithPeriod value={{ period: 0.4 } } renderRange={{ n: !lowNumber ? 0x0C : 0x1 }} >
                <li>  
                    <CurrentTDisplay />         
                    <CHalfSecndBeep1    />           
                </li>
            </LoopingWithPeriod>          
            <LoopingWithPeriod value={{ period: 5 } } renderRange={{ n: !lowNumber ? 0x20 : 0x1 }} >
                <li>  
                    <CurrentTDisplay />              
                    <CHalfSecndBeep1    />          
                </li>
            </LoopingWithPeriod>                 
            </ol>    
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
const BEEPBOPVR = (
    function ({ 
        quantityReductiveDbgMode ,      
    } : (
        {
            quantityReductiveDbgMode : boolean ;    
        }
    ) ) {
        const beepBopGraph1 = ( 
            <BeepsInLoop lowNumber={quantityReductiveDbgMode} />
        ) ;    
        const c10 = (() => {    
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
            } ; 
            const onv = ((version: Vr ): React.ReactElement => {  
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
                    return (         
                        <CAmpSlideDown   > 
                            <CPersistingBeep value={ { toneFreq: 55 } } />         
                        </CAmpSlideDown>                   
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
                        ) , Vr.AmpSlideDown )
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
                    <C />               
                ) ;
            })() ;  
        })() ;        
        React.useEffect(() => console.log({ BEEPBOPVRKEY }), [BEEPBOPVRKEY ] ) ;
        const c1 = (         
            <K key={BEEPBOPVRKEY } >   
            <div>   
                DEFKEY : {BEEPBOPVRKEY }
            </div>   
            <div>
            { c10 }
            </div>   
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
   
        





    











export {
    BeepsInLoop , 
    BEEPBOPVR ,     
} ;   