import React, { useReducer, useState } from "react";   
import { K } from "./commonElements";    
  


// domain-imports           
import * as tCtxs from "./audioLoopDemoScheduledTCtx";   
import { useACtxMtWithoutAnyFilter1 } from "./useAudioNodexCtxInitAndBeepNcaOnce1";
import { CHalfSecndBeepAtAbsoluteT } from "./audioLoopDemoCurrentDestNdRefCtx";  
import {    
    CHalfSecndBeep1 , CPersistingBeep , CWhiteNoise ,    
    CAmpModulated , CBiquadFilterModulated ,  CFreqDmAnalyF , 
    CConstantValue ,  CFnValue1 , 
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
                return ((vrs : 1 | 2 ): React.ReactElement => {
                    if (vrs === 2 ) {
                        ;              
                        return (              
                            <CAmpSlideDown  
                            swingTConst={2 ** -4 }  
                            >                     
                                <CWaveTable1            
                                freqArgument={(       
                                    <CFnValue1           
                                    value={
                                        ({ ctxT }) => { 
                                            return {           
                                                value: (
                                                    2 ** -(3 + ((-0.2 + ctxT) * 8 ) ) 
                                                ) ,   
                                            } ;  
                                        }  
                                    } 
                                    /> 
                                )}
                                freqArgumentInterpretation="timedomain-normalised"           
                                />                       
                            </CAmpSlideDown>                          
                        ) ;       
                    }      
                    return (         
                        <CAmpSlideDown   >        
                            <CPersistingBeep value={ { toneFreq: 55 } } />         
                        </CAmpSlideDown>                   
                    ) ;       
                } )(2 ) ;                       
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