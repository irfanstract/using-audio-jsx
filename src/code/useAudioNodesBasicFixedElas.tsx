
import {   
    IterableOps ,   
    BoundedIdentityFunction,                    
} from "./generalUse11" ; 
import React, {      
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { useEfectToMap } from "./useEffectToMap";  
import { useOneWayChanger } from "./useCompletion";   


          
    
import { AUDIONODES_USEEFFECT, AUDIONODES_USE_AUDIONODEEFFECT } from "./useAudioNodesParamChgEffect1";      
import { 
    useBiquadFilterNodeWithGivenFadeoutTimeConstant1,
    useConstantParamSrcNodeWithGivenFadeoutTimeConstant1,
    useGainNodeWithGivenFadeoutTimeConstant1, 
    useOscilltorNodeWithGivenFadeoutTimeConstant1 , 
    useWhiteNoiseNodeWithGivenProps , 

    useParamNodeWithGiven ,   
  
} from "./useAudioNodesMounting11"; 
import { YyyUsable, YyyUsageDest, usePersistingBeep, useEternalBeep, useWhiteNoise1 } from "./useAudioNodesBasicFlt1";   
import { useBqFltPtModulated } from "./useAudioNodesBasicFltBandPass1";       
import { useGainELasParamImpl , GEParam } from "./useAudioNodesParamAutomativeElas";         





          
    




  
   
/**  
 * if the call argument changes, 
 * the `AudioParam` will reflect the change           
 */  
const useGainElas : (                        
    YyyUsable<(      
        GEParam                 
    ) , { asDest: AudioNode | null ; }["asDest"]   >        
) = (    
    (nd0, programProps ) => {       
        return (
            useGainElasD(nd0, programProps )
        ) ;   
    }                       
) ;            
/**    
 * {@link ConstantSourceNode } ;
 * if the call argument changes, 
 * the `AudioParam` will reflect the change     
 */
const useConstantParamSrcElas : (                        
    YyyUsable<(        
        GEParam                 
    ) , ( 
        // { asDest: AudioNode | null ; }["asDest"]       
        void     
    )  >           
) = (    
    (nd0, programProps ) => {          
        return (
            useConstantParamSrcElasD(nd0, programProps )
        ) ;       
    }       
) ;      
const useTimeDomainConstantValueShift : (
    (...a: Parameters<typeof useConstantParamSrcElas> ) 
    =>
    ReturnType<typeof useGainElas > 
)  = (
    // TODO
    (...[nd0, ...pp0 ] ) => {
        useConstantParamSrcElas(nd0, ...pp0 ) ;
        return nd0 ;
    }
) ;
const useConstantParamSrcElasD = (    
    (...[nd0, ...pp0 ] : GEPI_ARGS) => {
        ;                 
        const nd1 = (            
            useConstantParamSrcNodeWithGivenFadeoutTimeConstant1(nd0, 0.5 )   
        ) ;                      
        useGainELasParamImpl<(
            NonNullable<typeof nd1 >    
        )>(nd1, nd => nd.offset , ...pp0 );       
        ;                    
        return {                                   
            asDest: nd1 ,     
        }.asDest ;     
    }
) ;                     
const useGainElasD = (      
    (...[nd0, ...pp0 ] : GEPI_ARGS) => {                          
        const nd1 = (               
            useGainNodeWithGivenFadeoutTimeConstant1(nd0, 0.5 )   
        ) ;            
        useGainELasParamImpl<GainNode>(nd1, nd => nd.gain , ...pp0 );     
        ;                    
        return {                      
            asDest: nd1 ,         
        }.asDest ;       
    }     
) ;         
type GEPI_ARGS = ( 
    [        
        ...(          
            Parameters<(     
                YyyUsable<(        
                    GEParam     
                ) , { asDest: AudioNode | null ; }["asDest"]   >  
            )>      
        ) ,            
        Parameters<typeof useGainELasParamImpl >[3 ] ? ,              
    ]                   
) ; 
/**    
 * {@link OscillatorNode } ;
 * if the call argument changes, 
 * the `AudioParam`s will reflect the change(s)       
 */         
const useWaveTableNdElas : (                                      
    YyyUsable<(                  
        GEParam 
        &      
        { waveTable ?: Exclude<OscillatorType | PeriodicWave , "custom"> ; }          
    ) , (        
        // { asDest: AudioNode | null ; }["asDest"]       
        void                                 
    )  >                                        
) = (   
    (nd0, programProps ) => {         
        const nd1 = (            
            useOscilltorNodeWithGivenFadeoutTimeConstant1(nd0, 0.5 )   
        ) ;                       
        ;                     
        useGainELasParamImpl<(          
            NonNullable<typeof nd1 > 
        )>(nd1, nd => nd.frequency , programProps );  
        {
            ;
            const {   
                waveTable: waveTable  ,       
                  
            } = { waveTable: "sine" , ...programProps } as const ;                  
            React[AUDIONODES_USE_AUDIONODEEFFECT](() => {                           
                if (nd1) {                
                    A: {   
                        if (waveTable instanceof PeriodicWave) {
                            nd1.setPeriodicWave(waveTable ) ;      
                            break A ;    
                        }  
                        nd1.type = waveTable ;     
                        break A ; 
                    }          
                } ;               
            } , [nd1, waveTable ] );      
        }
        ;                      
        return {                               
            asDest: nd1 ,     
        }.asDest ;     
    }           
) ;                    
/**   
 * only occur as in `useLayoutEffect` with `deps` being `[] as const` (empty array)
 */
const useElasUsageOnMount = (() => {   
    return (  
        function useElasUsageOnMount <V>(...[{ v0, v1, efName = "useLayoutEffect" }] : [     
            (            
                { v0: V, v1: V, }   
                &             
                { efName ?: keyof Pick<(typeof React) , "useLayoutEffect" | "useEffect"> }
            ) ,      
        ] ) {               
            type VND = {     
                value: V ;     
                /**   
                 * time-difference ?? 
                 */
                d: number ; 
            } ;               
            return (
                function use1(): VND {
                    ;   
                    const [{ value: vPresently, d: dPresently }, complify] = (    
                        useOneWayChanger<VND >({ v0: { value: v0, d: 0 } , v1: { value: v1, d: 0.001 } })
                    ) ;   
                    React[efName ](() => {        
                        /**   
                         * note the indirection via `setTimeout(..., 0 )` to avoid race-condition
                         */
                        setTimeout(() => {
                            ;
                            complify() ;       
                        } , (
                            // ONE MILLISECOND
                            1
                        ) );  
                    }, [] );
                    return {
                        value: vPresently ,    
                        d: dPresently , 
                    } ;       
                }
            )() ;
        }
    ) ;   
})() ;  




 

 







export {
    useGainElas ,   
    useGainElasD , 
    useConstantParamSrcElas ,   
    useConstantParamSrcElasD ,   
    useTimeDomainConstantValueShift ,
    useWaveTableNdElas ,            

    useElasUsageOnMount , 
} ;
       