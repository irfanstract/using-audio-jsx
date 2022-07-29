
import {   
    IterableOps ,   
    BoundedIdentityFunction,                    
} from "./generalUse11" ; 
import React, {      
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { useEfectToMap } from "./useEffectToMap";  
import { useOneWayChanger } from "./useCompletion";   


          
    
import { AUDIONODES_USEEFFECT } from "./useAudioNodesParamChgEffect1";      
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





          
    




  

const useGainElas : (                        
    YyyUsable<(      
        GEParam                 
    ) , { asDest: AudioNode | null ; }["asDest"]   >        
) = (    
    (nd0, programProps ) => {     
        const nd1 = (               
            useGainNodeWithGivenFadeoutTimeConstant1(nd0, 0.5 )   
        ) ;            
        useGainELasParamImpl<GainNode>(nd1, nd => nd.gain , programProps );     
        ;                    
        return {            
            asDest: nd1 ,        
        }.asDest ;       
    }     
) ;       
/**    
 * {@link ConstantSourceNode }
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
        const nd1 = (            
            useConstantParamSrcNodeWithGivenFadeoutTimeConstant1(nd0, 0.5 )   
        ) ;                   
        useGainELasParamImpl<(
            NonNullable<typeof nd1 > 
        )>(nd1, nd => nd.offset , programProps );     
        ;                    
        return {                                   
            asDest: nd1 ,     
        }.asDest ;         
    }     
) ;               
/**    
 * {@link OscillatorNode }
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
            React.useLayoutEffect(() => {                           
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
const useElasUsageOnMount = (  
    function <V>(...[{ v0, v1, efName = "useLayoutEffect" }] : [     
        (            
            { v0: V, v1: V, }   
            &           
            { efName ?: keyof Pick<(typeof React) , "useLayoutEffect" | "useEffect"> }
        ) ,      
    ] ) {               
        const [{ value: vPresently, d: dPresently }, complify] = (    
            useOneWayChanger<{ value: V ; d: number }>({ v0: { value: v0, d: 0 } , v1: { value: v1, d: 0.001 } })
        ) ;   
        React[efName ](() => {
            complify() ;      
        }, [] );
        return {
            value: vPresently ,    
            d: dPresently , 
        } ;
    }
) ;  




 

 







export {
    useGainElas ,   
    useConstantParamSrcElas ,   
    useWaveTableNdElas ,            

    useElasUsageOnMount , 
} ;
       