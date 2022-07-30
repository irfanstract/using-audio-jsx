import {   
    IterableOps ,   
    BoundedIdentityFunction,                    
} from "./generalUse11" ; 
import React, {      
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { useEfectToMap } from "./useEffectToMap";  

  
    
import { AUDIONODES_USEEFFECT } from "./useAudioNodesParamChgEffect1";    
import { useFixedGain } from "./useAudioNodesBasicFixedGain";   
import { useParamModulation } from "./useAudioNodesParamAutomative1";      
import { 
    useBiquadFilterNodeWithGivenFadeoutTimeConstant1,
    useConstantParamSrcNodeWithGivenFadeoutTimeConstant1,
    useGainNodeWithGivenFadeoutTimeConstant1, 
    useOscilltorNodeWithGivenFadeoutTimeConstant1 ,   
  
    useParamNodeWithGiven ,        

} from "./useAudioNodesMounting11";    





   
 
          
         
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
    const GNA = (
        function <YyNode1 extends {} >(...[dest, type1, f , { destNdIntrinsicValue: destNdIntrinsicValue = "default" as "default" } = {} ] : (   
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
                } ,
            ]                
        ) ) {               
            const gnAfterMul: (    
                null | AudioParam
            ) = (                   
                dest?.[type1] || null                   
            ) ;                
            /**   
             * intrinsic value
             *  */   
            React.useLayoutEffect(() => { 
                if (gnAfterMul ) {
                    ;
                    if (typeof destNdIntrinsicValue === "number" ) {
                        gnAfterMul.value = destNdIntrinsicValue ;
                    }                      
                }                               
                ;           
            } , [
                gnAfterMul , 
                // TODO 
                // intrinsicValue ,
            ]) ;             
            const gnBeforeMul1 = (                      
                useFixedGain((    
                    /**         
                     * {@link gnAfterMul } (an AudioParam) as an AudioNode  
                     */
                    useParamModulation(gnAfterMul, dest?.context || null )                  
                ) , f )      
            ) ;                
            const gnBeforeMul = ( 
                (
                    useConstantParamSrcNodeWithGivenFadeoutTimeConstant1(( 
                        gnBeforeMul1 
                    ), 0.5 )    
                )?.offset      
                ||
                null             
            ) ;              
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
            const cd = (
                GNA<(
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
            GNA  
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