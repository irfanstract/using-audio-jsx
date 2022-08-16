 
import { 
    interpolateBetweenTwo ,   
} from "./polynomialsC";       
import React, { useReducer, useState } from "react";   
import {    useEnumConstantPicker } from "./commonElements";     
import { K } from "./commonElements";    
               
    
           
// domain-imports           
import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";   
import { useACtxMtWithoutAnyFilter1 } from "./useAudioNodexCtxInitAndBeepNcaOnce1";
import {     
    // TIME-DOMAIN SOUrCES
    CConstantValue ,  CFnValue1 ,      

    // SIMPLE-OR-COMMON AUDIO SOURCES
    CHalfSecndBeep1 , CPersistingBeep , CWhiteNoise ,   
    CWaveTable1 ,        
    CBassDrumKick1 , 
    CBassDrumKickFluidly1 , 
    CPitchdownBassDrumKickFluidly1 ,                
    CSnareDrum1,  
    CSnareDrumFluidly1 ,         
    
    // ISOTEMPORAL FILTERS        
    CAmpModulated, CAmpModulated0 , CBiquadFilterModulated ,  CFreqDmAnalyF , 
    CAmpSlideDown ,                   

    // TIME-DILATING FILTERS, INCLUDING LOOPING  
    LoopingWithPeriod ,   

} from "./useAudioGraphImplFComponents";                    
import {         
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
                        renderRange={{ n: 0x10 } }                   
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
            useEnumConstantPicker              
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
                            useXOptions({ initialValue: Vr.BassDrumKick , static: Vr })          
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