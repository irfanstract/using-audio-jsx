import {   
    IterableOps ,   
    BoundedIdentityFunction,                    
} from "./generalUse11" ; 
import React, {      
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { useEfectToMap } from "./useEffectToMap";  
   
  
    
import { AUDIONODES_USEEFFECT } from "./useAudioNodesParamChgEffect1";        
import {     
    useBiquadFilterNodeWithGivenFadeoutTimeConstant1,
    useConstantParamSrcNodeWithGivenFadeoutTimeConstant1,
    useGainNodeWithGivenFadeoutTimeConstant1, 
    useOscilltorNodeWithGivenFadeoutTimeConstant1 , 
    useWhiteNoiseNodeWithGivenProps ,     

    useParamNodeWithGiven ,   
  
} from "./useAudioNodesMounting11"; 
import { USEYYYNODER } from "./useAudioNodesMounting1";  
import { YyyUsable, YyyUsageDest, usePersistingBeep, useEternalBeep, useWhiteNoise1 } from "./useAudioNodesBasicFlt1";   
import {      
    useGainElas , 
    useConstantParamSrcElas ,
   
} from "./useAudioNodesBasicFixedElas";                  
import { 
    ctxFrameRateOf,
    useNormalisedArgumentativeChnl1 , 

} from "./useAudioNodesBasicNormalisation1";         
import { WaveTableNodeProps } from "./useAudioGraphImplBasicFltAutomableProps";  
import { 
    useOinModulatedWaveTable1 as useOinModulatedWaveTable0 , 
    
} from "./useAudioNodesBasicBeepModulatedD";        
 
         
  
          
    


 
const useAmpByValue : (                        
    YyyUsable<(         
        number                 
    ) , { asDest: AudioNode | null ; }["asDest"]   >        
) = (
    (dest, value ) => (
        useGainElas(dest, { value })
    )            
);      
/**   
 * {@link useAmpByValue }
 * 
 * @deprecated
 * use the new name . 
 */
const useFixedGain: (                         
    typeof useAmpByValue       
) = (     
    useAmpByValue     
); 
/**   
 * CAVEAT .     
 * these are {@link AudioParam}s rather than being {@link AudioNode}s . 
 * this `useYyy` will initialise `gain` to `initialValue` (`0`) ; calling-code can then subsequently    
 */
const {   
    useGainModulatedPt ,   
    useCModulatedPt ,   

} = (() => {           
    type Args = [             
        dest: AudioNode | null ,      
    ] ;                  
    function kUseM1ModulatedPt<YyNode1 extends {}, Key1 extends keyof YyNode1 , RetKey extends "ampCtrl" | "valCtrl" >(...[props0] : [
        Readonly<{          
            YYN : YyNode1[] ;        
            key : Key1 ;       
            pName : RetKey ;                    
            useYyNode1 : (             
                USEYYYNODER<(
                    { readonly [k in Key1 ] : AudioParam } 
                )>
            ) ;    
            intrinsicValue : number ;       
        }> ,                    
    ]) {    
        ;              
        /**                  
         * - {@link intrinsicValue } :
         *    see alse {@link AudioNode.connect }, info about {@link AudioParam}s 
         */     
        const {    
            key ,         
            pName ,     
            useYyNode1 ,             
            intrinsicValue ,      
        } = props0 ;    
        return (
            function useM1ModulatedPt(...[nd0] : Args ) {
                ;                  
                const nd1 = (
                    useYyNode1(nd0, 0.5 )      
                ) ;    
                React.useLayoutEffect(() => {      
                    nd1 && (nd1[key].value = intrinsicValue ) ;       
                } , [nd1 ]) ;        
                ;           
                const objToReturn = {
                    main : (nd1 as (AudioNode | null ) ) || null ,   
                    [pName] : (() => (
                        nd1?.[key] || null
                    ))() ,  
                } as (
                    {
                        main : AudioNode | null ; 
                        //       
                    } & { 
                        [k in typeof pName ] : AudioParam | null ;    
                    }
                ) ;            
                return objToReturn ;
            }
        ) ;                     
    }      
    return {       
        useGainModulatedPt : (
            // function useM1ModulatedPt(...[nd0] : Args ) {                
            //     /**                  
            //      * - {@link intrinsicValue } :
            //      *    see alse {@link AudioNode.connect }, info about {@link AudioParam}s 
            //      */     
            //     const {    
            //         key ,         
            //         pName ,     
            //         useYyNode1 ,          
            //         intrinsicValue ,      
            //     } = {  
            //         key : "gain" ,    
            //         pName : "ampCtrl" ,   
            //         useYyNode1 : useGainNodeWithGivenFadeoutTimeConstant1 ,     
            //         intrinsicValue : 0 ,         
            //     } as const ;                   
            //     const nd1 = (
            //         useYyNode1(nd0, 0.5 )      
            //     ) ;           
            //     React.useLayoutEffect(() => {      
            //         nd1 && (nd1[key].value = intrinsicValue ) ;       
            //     } , [nd1 ]) ;    
            //     ;    
            //     return {       
            //         main : (nd1 as (AudioNode | null ) ) || null ,            
            //         [pName] : nd1?.[key] || null ,  
            //     } as const ;    
            // }               
            (
                kUseM1ModulatedPt((
                    {   
                        YYN : [] as GainNode[] ,    
                        key : "gain" ,    
                        pName : "ampCtrl" ,   
                        useYyNode1 : useGainNodeWithGivenFadeoutTimeConstant1 ,     
                        intrinsicValue : 0 ,                   
                    } as const    
                ))
            )           
        ) ,          
        useCModulatedPt : (     
            kUseM1ModulatedPt((     
                {   
                    YYN : [] as ConstantSourceNode[] ,    
                    key : "offset" ,    
                    pName : "valCtrl" ,   
                    useYyNode1 : useConstantParamSrcNodeWithGivenFadeoutTimeConstant1 ,     
                    intrinsicValue : 0 ,                   
                } as const    
            ))
        ) ,
    } ;
})() ;                  
/**                      
 * CAVEAT .         
 * these are {@link AudioParam}s rather than being {@link AudioNode}s .          
 */        
const useOinModulatedWaveTable = (() => {
    // // DEPENDENCIES  
    // const useOscilltorNodeF = (
    //     useOscilltorNodeWithGivenFadeoutTimeConstant1    
    // ) ;
    // type WaveTableNodeProps1 = (
    //     WaveTableNodeProps         
    // ) ;          
    // const useNormalisedArgumentativeChnl11 = (
    //     useNormalisedArgumentativeChnl1      
    // ) ;
    // ;       
    // function setPeriodicWave1(...[nd1, wvTable] : (
    //     [
    //         NonNullable<(         
    //             ReturnType<(
    //                 typeof useOscilltorNodeF  
    //             )>  
    //         ) > ,            
    //         NonNullable<WaveTableNodeProps1["type"] > ,         
    //     ]                  
    // )) {
    //     return (
    //         ((wvTable instanceof PeriodicWave ) && (nd1.setPeriodicWave(wvTable), true )  )   
    //         ||
    //         (typeof wvTable !== "object" && (nd1.type = wvTable , true ) )  
    //         ||
    //         (void 0 )          
    //     ) ;       
    // };
    // return (                 
    //     function useWVT(...[nd0 , mainOptions11 = {} ] : [
    //         dest : AudioNode | null ,               
    //         etc ?: {               
    //             waveTable ?: NonNullable<WaveTableNodeProps1["type"] > ;     
    //             /**    
    //              * specifies,   
    //              * how much implied by input `1.0` increment  
    //              *  */         
    //             detuneScale1 ?: number ;          
                      
    //             /**        
    //              * specifies,   
    //              * how much for input of `1.0`     
    //              *  */      
    //             freqArgumentNormalValue ?: number ;    
    //             /**    
    //              * @deprecated    
    //              * you probably meant {@link freqArgumentNormalValue  }
    //              */      
    //             freqArgumentInitialValue ?: number ;    
    //         } ,    
    //     ] ) {                              
    //         const { 
    //             waveTable: wvTable = "sine",    
    //             detuneScale1 = (12 * 100 ) ,        
    //             freqArgumentNormalValue = 440 ,      
    //             freqArgumentInitialValue : freqArgumentInitialValue = (
    //                 freqArgumentNormalValue
    //             ) ,       
    //         } = mainOptions11 ;    
    //         const nd1 = (   
    //             useOscilltorNodeF(nd0, 0.5 )   
    //         ) ;                  
    //         /**   
    //          * `type`     
    //          */
    //         React.useLayoutEffect(() => {         
    //             nd1 && ( 
    //                 setPeriodicWave1(nd1, wvTable )          
    //             ) ;                 
    //         } , [nd1 ]) ;                    
    //         /**   
    //          * assigns initial value   
    //          */
    //         React.useLayoutEffect(() => {
    //             nd1 && (       
    //                 /**   
    //                  * using `yy.value = (...)` is not an option here, as    
    //                  * - {@link useWVT }    
    //                  *   - does not provide `freq` parameter and instead 
    //                  *   - leaves the responsibility to calling code     
    //                  * - using `currentTime` as `t` (which `value = (..)` exactly does )
    //                  *   would interfere with subsequent calls
    //                  */ 
    //                 nd1.frequency.setValueAtTime(0, 0 ) 
    //             ) ;              
    //         } , [nd1 ]) ;                 
    //         /**    
    //          * present the `AudioParams` as specified    
    //          */
    //         const {
    //             frqx ,                
    //             detunx ,            
    //         } = {                                       
    //             frqx : (       
    //                 useNormalisedArgumentativeChnl11<(
    //                     Pick<OscillatorNode, "frequency">      
    //                 )>(nd1 , "frequency", (     
    //                     // TODO    
    //                     // ( nd1 ? ctxFrameRateOf(nd1.context ) : 48000  )      
    //                     freqArgumentNormalValue        
    //                 ) , {             
    //                     // TODO        
    //                     destNdIntrinsicValue: freqArgumentInitialValue  ,  
    //                 } )       
    //             )         ,             
    //             detunx : (       
    //                 useNormalisedArgumentativeChnl11<(       
    //                     Pick<OscillatorNode, "detune">     
    //                 )>(nd1 , "detune", (  
    //                     // TODO     
    //                     detuneScale1
    //                 ) , {
    //                     // TODO
    //                     destNdIntrinsicValue: 0 , 
    //                 } )     
    //             )       ,              
    //         } ;   
    //         ;              
    //         return {       
    //             main : (nd1 as (AudioNode | null ) ) || null ,              
    //             // frequency : nd1?.frequency || null ,            
    //             // detune    : nd1?.detune    || null ,            
    //             frequency : frqx.gnBeforeMul    ,            
    //             detune    : detunx.gnBeforeMul  ,  
    //         } as const ;    
    //     }             
    // ) ;      
    return (
        useOinModulatedWaveTable0   
    ) ;
})() ;     

const useWhiteNoise = (       
    (...[dest, { volume } ] : [        
        dest: AudioNode | null ,    
        _1 : { volume : number ; } ,     
    ] ) => {                                            
        const gNd1 = (       
            useFixedGain(dest, volume )                                           
        ) ;                                     
        useWhiteNoiseNodeWithGivenProps(gNd1, {} );
        return {} ;                                                        
    }           
) ;     









 





export {
    // YyyModulatedPt   

    useGainModulatedPt ,       

    useCModulatedPt ,                
    useOinModulatedWaveTable ,     

    // Yyy
    
    useFixedGain ,             

    useWhiteNoise ,    
        
} ;      