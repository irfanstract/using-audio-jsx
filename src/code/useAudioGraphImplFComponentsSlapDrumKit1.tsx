
import { 
    interpolateBetweenTwo ,   
} from "./polynomialsC";       
import { IterableOps } from "./generalUse11";  
import React, { useReducer, useState } from "react";   
import { K , NUMERIC } from "./commonElements";               
import { CBC } from "./useStateInCallback";      
import { useRealTimeQueryInterval1 } from "./useNonHookValue";  
               
 
         
// domain-imports           
import {       
    currentTCtx , 
    currentTScaleCtx ,        
    currentTInfCtx ,    
  
    CurrentTDisplay , 
    WithDelay ,           
    LoopingWithPeriod ,        
    AsGVis ,
} from "./useAudioGraphImplAbsoluteTCtx1";      
import { Consm as NdRefConsm  } from "./useAudioGraphImplCurrentDestNdRefCtx";           
import { 
    CConstantValue, 
} from "./useAudioGraphImplFMathComponentsSupport1";
import { 
    CFnValueByRelativeT as CFnValue1,         
} from "./useAudioGraphImplFMathComponentsSupport11";
import { CWaveTable1 } from "./useAudioGraphImplFComponentsBasicWaveTable";
import { CAmpModulated as CAmpModulated0 } from "./useAudioGraphImplFromUseYyyNodes1";
import { 
    WithAutoUnmount as WithAutoUnmount0 ,    
    WithAutoStopmount as WithAutoStopmount0 ,  
} from "./useAudioGraphImplFComponentsSlapCompAutoUnmounting";    
import { standardSnareDrumInstrumentAmp } from "./useAudioGraphImplFComponentsSustainingInstruments";
import { CContinuousSnareDrumSound } from "./useAudioGraphImplFComponentsSustainingInstruments";
      
   




 

; 
const clampWithinZeroAndOne = (      
    function (v: number) {
        return IterableOps.clamp(v, 0, 1 ) ;
    }   
) ;  
const { max, min, } = Math ;     
       
// const WithAutoUnmount = (() => {
//     const AbsoluteScheduledTCons = (
//         currentTInfCtx.Consumer   
//     ) ;   
//     const useRealTimeQueryInterval11 = (
//         useRealTimeQueryInterval1  
//     ) ;
//     return (
//         function ({ children: expectedChildren, preFT, postFT } : (
//             React.PropsWithChildren<{
//                 /**        
//                  * pre-incidential tolerance        
//                  */  
//                 preFT : number ;      
//                 /**         
//                  * post-incidential tolerance   
//                  */  
//                 postFT : number ;     
//             }>    
//         ) ) { 
//             return (
//                 <>    
//                 <AbsoluteScheduledTCons>         
//                     { ({ t: expectedT }) => (        
//                         <>            
//                         <NdRefConsm>            
//                             { ({ feedPt: nd0 }) => (          
//                                 <CBC>{ function useC1() {      
//                                     enum Stat {               
//                                         TOO_EARLY = "too early" ,   
//                                         SUPPOSEDLY_NOW = "available" ,
//                                         SUPPOSEDLY_ALREADY_CONCLUDED = "already concluded"
//                                     } 
//                                     const stat = (   
//                                         useRealTimeQueryInterval11((): Stat => {  
//                                             const ctxT = nd0 ? nd0.context.currentTime : -30000 ; 
//                                             ;                      
//                                             return (    
//                                                 ((expectedT + -preFT ) <= ctxT ) 
//                                                 ?
//                                                 (   
//                                                     (ctxT <= (expectedT + postFT ) ) ?
//                                                     Stat.SUPPOSEDLY_NOW : Stat.SUPPOSEDLY_ALREADY_CONCLUDED
//                                                 )   
//                                                 : Stat.TOO_EARLY
//                                             ) ;                 
//                                         } , 100 )       
//                                     ) ;     
//                                     return (     
//                                         <>{ (      
//                                             (stat === Stat.SUPPOSEDLY_NOW ) ?
//                                             expectedChildren : <p>{ stat }</p>
//                                         ) } </>     
//                                     ) ;            
//                                 } }</CBC> 
//                             ) }   
//                         </NdRefConsm>     
//                         </>
//                     ) }
//                 </AbsoluteScheduledTCons>
//                 </> 
//             ) ;      
//         }  
//     ) ;  
// })() ;            
const WithAutoUnmount = (
    WithAutoUnmount0              
);    
                 
const snKit = (() => {       
    const conventionalFreq : number | 440 = 440 ;    
    type SlapPlaybackProps = (
        Partial<( 
            {
                // TODO clarification
                /**   
                 * 
                 */
                tCoef1 : number ;         
            }  
        )>
        &
        Partial<( 
            { 
                //         
                autoUnmount : boolean ;     
            }  
        )>
    ) ;         
    type BassDrumPlaybackProps1 = (    
        SlapPlaybackProps
        &             
        Partial<( 
            {                      
                /**   
                 * the frequency decline 
                 * shall stop at this point.  
                 * *Hertz*.  
                 */
                minimumFreq : number ;     
                /**   
                 * such that `TM` be exactly {@link TM1 } times {@link tCoef1}
                 */          
                TM1 : number ;    
            }  
        ) >        
    ) ;
    const applicableScanPeriodMillisFromTCoef = (
        function (...[tCoef1] : [number] ) {
            return (
                IterableOps.clamp((
                    Math.max(1, tCoef1 ) 
                    * 
                    (2 ** -5 )
                ) , 0.01, 0.09 ) 
                * 
                1000  
            ) ;    
        }      
    );    
    const applicableDecliningAmpGraphFromTCoef = (
        function (...[expectedTLen1, { scanPeriodMillis } ] : [ 
            number ,        
            { scanPeriodMillis: number ; } ,   
        ]) {         
            const PDT : number = (
                (2 ** -3 )
            ) ;
            return (        
                <CFnValue1         
                value={               
                    ({ ctxT: t0 }) => {
                        const t = (
                            -PDT + t0
                        ) ; 
                        const p = (         
                            t / expectedTLen1    
                        ) ;          
                        return (      
                            (-PDT <= t ) ? (   
                                (  
                                    clampWithinZeroAndOne(1 + -p ,  )   
                                ) * (      
                                    max(0, -(2 ** -4 ) + (2 ** -( 6 * p ) ) )   
                                )   
                            ) : 0                         
                        ) ;     
                    }                 
                }   
                scanPeriodMillis={scanPeriodMillis }  
                />           
            ) ;  
        }
    ) ;  
    const applicableDecliningNormalisedToneFreqGraph1 = (          
        function (...[eqt, { maximumExp }, { scanPeriodMillis } ] : [
            ...mainConfig : [
                ReturnType<typeof interpolateBetweenTwo > ,  
                { maximumExp : number ; } ,    
            ] ,
            renderConfig : { scanPeriodMillis: number ; } ,    
        ]) {           
            return <CBC>{ function use1() {
                const key = (
                    React.useMemo(() => (
                        // TODO
                        // Math.random()
                        0   
                    ), [maximumExp, scanPeriodMillis ])
                ) ;            
                return (     
                    <K key={key}>                       
                    <CFnValue1                                         
                    value={                        
                        ({ ctxT }) => {         
                            const {                                    
                                c0,                           
                                f ,             
                            } = eqt ;   
                            const e10 = (
                                Math.min(maximumExp , c0 + Math.max(0, ctxT ) * f )    
                            );                   
                            const val1 = (              
                                2 ** -e10   
                            ) ;                                     
                            return val1  ;                     
                        }                      
                    }     
                    scanPeriodMillis={scanPeriodMillis }   
                    />           
                    </K>
                )  ;  
            } }</CBC>;       
        }    
    ) ;
    const slapDrumImplExpetctedTLenProps = (
        function (...[mainProps] : [BassDrumPlaybackProps1 ] ) {
            ;        
            const {     
                tCoef1 = (   
                    // 2 ** -3       
                    2 ** -3 
                )  ,      
                TM1 = 2 ** 3 ,                 
            } = mainProps ;        
            const expectedTLen1 : number = (    
                TM1 * tCoef1         
            ) ;          
            return {
                tCoef1 ,    
                TM1 ,   
                expectedTLen1 , 
            } as const ;     
        }  
    ) ;
    const slapDrumImplExpetctedTCoefProps = (
        function (...[mainProps ] : Parameters<typeof slapDrumImplExpetctedTLenProps > ) {
            ;  
            const {
                tCoef1 ,    
                TM1 ,   
                expectedTLen1 , 
            } = (
                slapDrumImplExpetctedTLenProps(mainProps )
            ) ;              
            const scanPeriodMillis = (   
                applicableScanPeriodMillisFromTCoef((
                    tCoef1
                ) )   
            ) ;        
            const ampModulGraph = (         
                applicableDecliningAmpGraphFromTCoef(
                    expectedTLen1 , { scanPeriodMillis } )
            ) ;              
            return {    
                tCoef1 ,    
                expectedTLen1 ,     

                TM1 , 
                scanPeriodMillis ,  
    
                ampModulGraph ,     
                
            } as const ;
        }
    ) ;
    const sVisMarkingGraph /* */ = (() => {
        const width: number = 0.5 ;
        const height: number = 1 ;
        return /* const sVisMarkingGraph = */ (
        <g>
            <g style={{ pointerEvents: "none" }} >
            <path 
            d={`M 0 0 L 0 ${height } L ${width } ${height } z `}
            fill="black"
            />
            </g >
            <rect 
                width={ width }
                height={ height }
                style={{ fill: "transparent" }}
            />
            <title>
                Slap Drum
            </title>
        </g>
        ) ;
    })() ;
    const sVisAttach = (
        <AsGVis>
            { sVisMarkingGraph }
        </AsGVis>
    ) ;
    return {  
        CPitchdownBassDrumKickFluidly1 : (      
            function (mainProps : (    
                BassDrumPlaybackProps1 
                &   
                {
                    dbg ?: false | 1 ;    
                }
            )) {                 
                const {      
                    minimumFreq = (          
                        (2 ** -(3 + 0.333 ) ) * 440               
                    ) ,                       
                } = mainProps ;    
                const {  
                    tCoef1 , 
                    expectedTLen1 ,    
    
                    scanPeriodMillis ,    
        
                    ampModulGraph ,     
                    
                } = slapDrumImplExpetctedTCoefProps(mainProps ) ;
                const {  
                    autoUnmount = true ,     
                    dbg: dbg1 = false ,    
 
                } = mainProps ;  
                const c1 = (() => {           
                    const maximumExp = (
                        -1 * Math.log2(minimumFreq / conventionalFreq )   
                    ) ;  
                    const freqArgumSupposedGraph = (
                        <WithDelay value={-0 } >
                        {(
                            applicableDecliningNormalisedToneFreqGraph1((
                                interpolateBetweenTwo({ c0: 2.3, c1: 3.2 , t: tCoef1 })
                            ) , { maximumExp }, { scanPeriodMillis } )  
                        )}
                        </WithDelay>
                    ) ;  
                    const e11 = (   
                        <CAmpModulated0                         
                        value={             
                            ampModulGraph        
                        }                   
                        >                                                            
                            { sVisAttach }
                            <CWaveTable1                           
                            detuneInterpretation="timedomain-normalised"  
                            detune={(
                                !dbg1 ? <></> : <CConstantValue value={-3 / 12 } /> 
                            )}
                            freqArgumentInterpretation="timedomain-normalised"     
                            freqArgument={(
                                !dbg1 ? freqArgumSupposedGraph : <CConstantValue value={2 ** -1 } /> 
                            )}       
                            />                         
                        </CAmpModulated0 >                            
                    ) ;        
                    return (   
                        e11    
                    ) ;     
                })() ;         
                return (
                    autoUnmount ?
                    (       
                        <WithAutoUnmount preFT={1.5} postFT={(1 * expectedTLen1 )} >
                        { c1 }
                        </WithAutoUnmount>                     
                    ) : c1 
                ) ;
            }
        ) ,   
        
        CSnareDrumFluidly1 : (      
            function (mainProps : (    
                BassDrumPlaybackProps1 
                &   
                {   
                    dbg ?: false | 1 ;    
                }
            )) {                 
                const {      
                    minimumFreq = (          
                        77
                    ) ,                       
                } = mainProps ;    
                const {  
                    tCoef1 , 
                    expectedTLen1 ,    
    
                    scanPeriodMillis ,    
        
                    ampModulGraph ,     
                     
                } = slapDrumImplExpetctedTCoefProps({ tCoef1: 2 ** -4, ...mainProps } ) ;
                const {  
                    autoUnmount = true ,     
                    dbg: dbg1 = false ,    
 
                } = mainProps ;  
                const c1 = (() => {            
                    return (   
                        <CAmpModulated0                         
                        value={             
                            ampModulGraph        
                        }                           
                        >                       
                            { sVisAttach }
                            <CContinuousSnareDrumSound 
                            {...{ dbg1, minimumFreq }}
                            />
                        </CAmpModulated0 >                            
                    ) ;             
                })() ;      
                return (
                    autoUnmount ?
                    (       
                        <WithAutoUnmount preFT={1.5} postFT={(1 * expectedTLen1 )} >
                        { c1 }
                        </WithAutoUnmount>                     
                    ) : c1 
                ) ;
            }
        ) ,     
    } ;
})() ;         
const {    
    CPitchdownBassDrumKickFluidly1 ,   
    CSnareDrumFluidly1 ,     

} = snKit;     
const CBassDrumKickFluidly1 = ( 
    CPitchdownBassDrumKickFluidly1       
);   
const {
    CBassDrumKick1 , 
    CSnareDrum1 ,   
       
} = (() => {          
    const NoChangeInTPlease = (        
        function ({ value } : { value: number ; }) {
            if ( value !== React.useState(value)[0] ) {
                throw TypeError(`value changed. ` ) ;
            }   
            return <></> ;     
        }
    ) ;
    const asSharpDueToKeying = (  
        function <ComponentProps1 extends ({} ) > (...[{ SDK , label , C  }] : [
            {     
                SDK : {               
                    shallRemountForEachKeystroke : boolean ;            
                    delay : number ;            
                } ,                                
                C : React.FC<ComponentProps1> ;        
                label ?: React.ReactElement ,     
            }     ,    
        ] ) {         
            const cStringLength = (
                C.toString().length
            ) ;   
            const keyPrefix: string = (
                String(C.name || cStringLength )  
            ) ;  
            /**   
             * note : name "CDK" is since the code were initiaally for "CBassDrumKit"
             */
            return (     
                function CDK(...[propsMain1] : [             
                    ComponentProps1 ,      
                ] ) {  
                    const TC = (       
                        currentTInfCtx   
                        .Consumer               
                    ) ;       
                    const TOff = (    
                        WithDelay  
                    ) ;                
                    const {        
                        shallRemountForEachKeystroke: remount , 
                        delay ,                
                    } = SDK ;      
                    return (                
                        <TC>               
                            { ({ t: ctxtualAbsoluteT, tScale: ctxtualTScl }) => (                     
                                // TODO    
                                <K key={`${keyPrefix } ${remount ? ctxtualAbsoluteT : 0 } `  }>      
                                    { remount && <NoChangeInTPlease value={ctxtualAbsoluteT} />  }
                                    <p> { label } At T {ctxtualAbsoluteT } </p>  
                                    { (function useM(topic: React.ReactElement ) {           
                                        const renderCount1 = (
                                            React.useRef<number>(0 ).current  ++             
                                        ) ;               
                                        return (                    
                                            <p>     
                                                { topic } : 
                                                <NUMERIC>{ renderCount1 }</NUMERIC>  
                                            </p>        
                                                    
                                        )     ;
                                    })( <i> { label } ID </i> ) }                
                                    <div>   
                                    <WithDelay value={delay / ctxtualTScl } >  
                                        <C {...propsMain1 } >          
                                        </C>       
                                    </WithDelay>                        
                                                                
                                    </div>            
                                </K>       
                            ) }          
                        </TC>    
                    );                
                }
            ) ;    
        }                    
    ) ;                     
    const remountProps: (
        Required<(           
            NonNullable<(
                Parameters<typeof asSharpDueToKeying>[0]  
            )> 
        )>["SDK"]      
    ) = (
        { shallRemountForEachKeystroke : false , delay : 0.02 } as const
    ) ;             
    return {          
        CBassDrumKick1 : (   
            asSharpDueToKeying({
                SDK : remountProps ,  
                label : <span> Bass Drum </span> ,  
                C : CBassDrumKickFluidly1      ,  
            } )            
        ) ,                        
        CSnareDrum1 : (     
            asSharpDueToKeying({  
                SDK : remountProps ,  
                label : <span> Snare Drum </span> ,  
                C : CSnareDrumFluidly1      ,  
            } ) 
        ) ,                 
    } ;                           
})() ;          
     
     


   






export {
    WithAutoUnmount , 

    CPitchdownBassDrumKickFluidly1 , 
    CBassDrumKick1 ,      
    CBassDrumKickFluidly1 ,            
    CSnareDrum1 ,   
    CSnareDrumFluidly1 , 
} ;        