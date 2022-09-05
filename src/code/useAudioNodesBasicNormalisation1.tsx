import {   
    Immutable ,
    IterableOps ,   
    BoundedIdentityFunction,                    
} from "./generalUse11" ; 
import React, {      
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { useEfectToMap } from "./useEffectToMap";  
import { 
    useWarnOnChange ,     
} from "./usingTimeoutOrInterval";    

  
    
import { AUDIONODES_USEEFFECT, AUDIONODES_USE_AUDIONODEEFFECT } from "./useAudioNodesParamChgEffect1";    
import { useFixedGain } from "./useAudioNodesBasicFixedGain";   
import { useParamModulation } from "./useAudioNodesParamAutomative1";      
import { //
    useDestParamBoundsCorrective as useXDestParamBoundsCorrective ,
} from "./useAudioNodesParamAutomativeIntrinsicValBoundsCorrective1";
import { 
    useBiquadFilterNodeWithGivenFadeoutTimeConstant1,
    useConstantParamSrcNodeWithGivenFadeoutTimeConstant1,
    useGainNodeWithGivenFadeoutTimeConstant1, 
    useOscilltorNodeWithGivenFadeoutTimeConstant1 ,   
  
    useParamNodeWithGiven ,        

} from "./useAudioNodesMounting11";    





   
 
          
         
/**     
 * the sample-rate of the {@link BaseAudioContext}.
 */
const ctxFrameRateOf = (
    function (c: BaseAudioContext ): typeof c.sampleRate {
        return (
            // TODO needs to find out whether this includes the count-of-channels 
            c.sampleRate   
        ) ;     
    }    
) ;  

/**    
 * bundles 
 * two `AudioParam`s for the `frequency` cannel, one *unnormalised* and one *normalised after `f`* .   
 * normalisation becomes
 * necessary since it's impractical to synth up to `40k`
 */           
//                 
const {     
    useBiquadFltNdFreqArgumentChnl , 
    useNormalisedArgumentativeChnl ,     
    useNormalisedArgumentativeChnl1 ,    
      
} = (() => {          
    const doubleInitCheckEnabled : 0 | 1 = 0 ;
    /**   
     *      
     * @deprecated     
     * typical structore of code-flow in apps means that 
     * application of this `useYyy` will cause your app to violently thrash the console logging.   
     */
    function useCheckNoDoubleInit(nd1 : object | null ) {
        ;   
        React["useInsertionEffect"](() => {      
            if (nd1 && doubleInitCheckEnabled ) {              
                if (!(((nd1 as any ).AUDIOBASICNORMALISATIONIMPL += "+" ) === "undefined+" ) ) {
                    console.error(TypeError(`double initialisation detected` ) , { nd1 }) ;;
                }    
            }                    
        }, [nd1 ] ) ;    
    }     
    type BqdProps = (    
        {   
            /**   
             * {@link BiquadFilterNode } `param`s
             */
            type : keyof Pick<BiquadFilterNode, "frequency" | "gain" | "Q"> ;   
             
            /**     
             * specifying this prop, 
             * is a way to customise the norm range (defaulting to `c.sampleRate` )
             */
            f ?: number ;        
        }                 
    ) ;  
    /**   
     * - {@link AudioNode.context }
     * - {@link BqdProps.f }   
     *       
     * @param f0 {@link BqdProps.f }
     */
    const cFArgsParse = (   
        function (dest : BiquadFilterNode | null, f0: BqdProps["f"] ) {
            ;      
            const c: (
                null | BaseAudioContext
            ) = (             
                dest?.context
                || null                  
            ) ;                   
            const f = ( 
                f0 || (      
                    c   ?   ctxFrameRateOf(c) : 48000 
                )
            ) ;                
            return {      
                c , 
                f ,       
            } ;
        }              
    ) ;  
    const cfArgsParseFArgNormalValueSpecOmissionErrorWarn = (
        (() => {
            ;
            const pre = (
                Immutable.Range(0, 7 )
                .map(() => (
                    IterableOps.throttle(({ inferredValue } : { inferredValue : number ; }  ): void => {
                        console.error((
                            TypeError((
                                [
                                    `the 'f' value was left 'undefined' ; please fix your code to (explicitly) specify it .` ,
                                    `inferred value : ${inferredValue } `
                                ]
                                .join("\n")
                            ))
                        )) ;
                    } , (
                        // 5 minutes
                        5 * 60 
                        * 
                        1000
                    ) , { leading: true } )
                ))
                .toArray()
            ) ;
            return (() => {
                const gn = (function * () {
                    for (;;) {
                        for (const f of pre ) {
                            yield f ;
                        }
                    }
                } )() ;
                return (...a: Parameters<(typeof pre )[number] & object > ) => (
                    gn.next().value
                    (...a )
                ) ;
            })() ;
        })()
    ) ;
    const useNormalisedArgumentativeChnlGna = (
        function <YyNode1 extends {} >(...[              
            dest, which1, f ,   
            { 
                destNdIntrinsicValue: absoluteRequestedIntrinsicValue = "default" as "default", 
                postInitDisconnectiveDebug = false ,
            } = {}  ,  
        ] : (   
            [       
                dest : (Pick<AudioNode, "context"> & Record<keyof YyNode1, AudioParam > ) | null, 
                key : keyof YyNode1,    
                maxv : number ,                            
                etc ?: {   
                    /**   
                     * this would default to `"default"` .        
                     * if set to a `number`,  
                     * there will be `setValue(...)` with given value as argument
                     */
                    destNdIntrinsicValue ?: "default" | number ;   
                    
                    postInitDisconnectiveDebug ?: false | true | 2 | 3 | 4 ;         
                } ,
            ]                         
        ) ) {                 
            const aCtx : null | BaseAudioContext = (
                dest?.context || null
            ) ;
            const gnAfterMul: (              
                null | AudioParam  
            ) = (                   
                dest?.[which1] || null                   
            ) ;        
            useCheckNoDoubleInit(gnAfterMul ) ;          
            /**   
             * intrinsic value
             *  */   
            (
                useXDestParamBoundsCorrective
                ({ ctx: aCtx } , gnAfterMul, { absoluteRequestedIntrinsicValue } )
            ) ;
            React[AUDIONODES_USE_AUDIONODEEFFECT](() => { 
                if (gnAfterMul ) {
                    ;    
                    if (typeof absoluteRequestedIntrinsicValue === "number" ) { 
                        (
                            function implAssigningInitialValue(a: AudioParam, v: number) {
                                // a.value = v ;   
                                a.setValueAtTime(v, 0 ) ;   
                            }
                        )(gnAfterMul, absoluteRequestedIntrinsicValue);
                    }                      
                }                               
                ;                 
            } , [
                gnAfterMul , 
                // TODO     
                // intrinsicValue ,           
            ]) ;             
            useWarnOnChange(f , { severity: "warn" , name: "nrmValue" } ) ;
            const gnBeforeMul1 = (    
                function use1() {
                    const ndx = (          
                        /**          
                         * {@link gnAfterMul } (an AudioParam) as an AudioNode  
                         */
                        useParamModulation(gnAfterMul, aCtx )                  
                    ) ;     
                    useCheckNoDoubleInit(ndx ) ;  
                    return (                      
                        useFixedGain(ndx , f )      
                    ) ;      
                }
            )() ;               
            const gnBeforeMulX = ( 
                (
                    useConstantParamSrcNodeWithGivenFadeoutTimeConstant1(( 
                        gnBeforeMul1 
                    ), 0.5 )          
                )                  
            ) ;      
            useCheckNoDoubleInit(gnBeforeMulX ) ;        
            const gnBeforeMul = (   
                gnBeforeMulX?.offset      
                ||     
                null              
            ) ;                
            useCheckNoDoubleInit(gnBeforeMul ) ;               
            /**                        
             * {@link postInitDisconnectiveDebug }       
             */  
            {         
                ;                     
                React[AUDIONODES_USE_AUDIONODEEFFECT](() => {
                    if (postInitDisconnectiveDebug === true ) {      
                        (dest instanceof AudioNode ) && dest.disconnect() ;          
                    }       
                }, [dest ]) ;   
                React[AUDIONODES_USE_AUDIONODEEFFECT](() => {
                    if (postInitDisconnectiveDebug === 2 ) {      
                        gnBeforeMul1 && gnBeforeMul1.disconnect() ;    
                    }       
                }, [gnBeforeMul1 ]) ;                 
                React[AUDIONODES_USE_AUDIONODEEFFECT](() => {  
                    if (postInitDisconnectiveDebug === 3 ) {        
                        if (gnBeforeMul1 && gnAfterMul ) {
                            gnBeforeMul1.disconnect() ;              
                            (function aParamReset (a: AudioParam ) {    
                                a.value = a.defaultValue ; 
                            } )(gnAfterMul ) ;  
                            ;   
                        }        
                    }       
                }, [gnBeforeMul1 && gnAfterMul ]) ;            
                React[AUDIONODES_USE_AUDIONODEEFFECT](() => {
                    if (postInitDisconnectiveDebug === 4 ) {      
                        gnBeforeMulX && gnBeforeMulX.disconnect() ;    
                    }       
                }, [gnBeforeMulX ]) ;                                          
            }                
            return {
                /**   
                 * unnormalised form 
                 */
                gnAfterMul ,                          
                /**    
                 * normalised form 
                 */  
                gnBeforeMul ,                           
                /**    
                 * normalised form  
                 */  
                gnBeforeMul1 ,      
            } ;    
        }
    ) ;
    const useBiquadFltNdFreqArgumentChnl1 = (
        function (dest: BiquadFilterNode | null, { f: f0 , type: type1 } : BqdProps ) {      
            const {
                c ,          
                f ,       
            } = (
                cFArgsParse(dest, f0 )  
            ) ;        
            (
                (typeof f0 === "number" )
                ||cfArgsParseFArgNormalValueSpecOmissionErrorWarn({ inferredValue: f })
            ) ;
            const cd = (
                useNormalisedArgumentativeChnlGna<(
                    Pick<NonNullable<typeof dest > , "Q" | "frequency" | "gain">
                )>(dest, type1, f )
            ) ;
            return cd ;                            
        }               
    ) ;      
    return {    
        useBiquadFltNdFreqArgumentChnl : (
            useBiquadFltNdFreqArgumentChnl1   
        ) ,      
        useNormalisedArgumentativeChnl1 : (
            useNormalisedArgumentativeChnlGna  
        ) ,     
        useNormalisedArgumentativeChnl : (      
            function (...[dest, props ] : (
                [
                    Parameters<typeof useBiquadFltNdFreqArgumentChnl1>[0] , 
                    (
                        Parameters<typeof useBiquadFltNdFreqArgumentChnl1>[1] & (
                            { readonly f: unknown ; }
                        )
                    ) ,           
                ] 
            ) ) {    
                return (
                    useBiquadFltNdFreqArgumentChnl1(dest, props )  
                ) ;        
            } 
        ) ,
    } ;   
})() ;    





   

          
         






export {
    useBiquadFltNdFreqArgumentChnl ,  
    useNormalisedArgumentativeChnl1 , 
    useNormalisedArgumentativeChnl , 

    ctxFrameRateOf , 
} ;    