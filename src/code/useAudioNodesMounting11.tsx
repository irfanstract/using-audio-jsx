import {  
    // Unix , 
    IterableOps ,      
    // util ,  
    memoize,     
    BoundedIdentityFunction,   
    // PERIODIC ,         
} from "./generalUse11" ;  
import { newObjectToValueMappingMemoised } from "./useObjectToValueMappingMemoised1"; 
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react";
// import { ReactCompatibleJson } from "./commonElements"; 
// import { usingTimeout } from "./usingTimeoutOrInterval";  
// import {            
//     useMountDelay ,             
// } from "./useComponentDebug" ;
// import { useJsonStringifyInPerformanceSensitive } from "./useJsonStringify";  
import { fillWithWhiteNoise } from "./audioBufferFWhiteNoise"; 



import {   USEYYYNODER, UABN_ARGPARSE, } from "./useAudioNodesMounting1";       
import { 
    ToUseYyNodeWithGivenInitProperties1,  
    useYyNodeWithGivenFadeoutTimeConstant1,   
    useParamNodeWithGiven,    
    useSingularSrcDestConnect ,
             
} from "./useAudioNodesMounting1";  
import { AUDIONODES_USEEFFECT, AUDIONODES_USE_AUDIONODEEFFECT } from "./useAudioNodesParamChgEffect1";
       
   







   
const useGainNodeWithGivenFadeoutTimeConstant1 : (
    USEYYYNODER<GainNode >                 
) = (    
    function   (...args : Parameters<typeof UABN_ARGPARSE > ) {
        const {
            nd0: dest ,         
            timeConstant1 ,                 
            renewInstanceDeps: ctorRerunDeps ,          
        } = UABN_ARGPARSE(...args ) ;           
        return (
            useYyNodeWithGivenFadeoutTimeConstant1<GainNode>(dest, { timeConstant1 }, (
                (ctx: BaseAudioContext, dest: AudioNode ) => {
                    const gainNode1 = (
                        ctx                                         
                        .createGain()   
                    ) ;                   
                    // (              
                    //     gainNode1.gain.value = 0              
                    // );       
                    
                    return gainNode1 ;    
                }     
            ), {
                renewInstanceDeps: ctorRerunDeps ,      
                onUnmount: (gainNode1, ctx ) => {                  
                    ((c: AudioParam ) => {                   
                        c.setTargetAtTime(0, ctx.currentTime, timeConstant1 );
                    } )(gainNode1.gain ) ; 
                } ,    
            } )                    
        ) ;
    }           
) ;    
const useBiquadFilterNodeWithGivenFadeoutTimeConstant1 : (        
    USEYYYNODER<BiquadFilterNode >      
) = (
    function   (...args : Parameters<typeof UABN_ARGPARSE > ) {
        const {
            nd0: dest ,          
            timeConstant1 ,                    
            renewInstanceDeps: ctorRerunDeps ,              
        } = UABN_ARGPARSE(...args ) ;            
        return (
            useYyNodeWithGivenFadeoutTimeConstant1<BiquadFilterNode>(dest, { timeConstant1 }, (
                (ctx: BaseAudioContext, dest: AudioNode ) => {
                    const gainNode1 = (          
                        ctx                                         
                        .createBiquadFilter()   
                    ) ;                 
                    // (              
                    //     gainNode1.gain.value = 0               
                    // );                                                                  
                    
                    return gainNode1 ;    
                }       
            ), {     
                renewInstanceDeps: ctorRerunDeps ,      
                onUnmount: (gainNode1, ctx ) => {           
                    ((c: AudioParam ) => {                   
                        c.setTargetAtTime(0, ctx.currentTime, timeConstant1 );
                    } )(gainNode1.gain ) ; 
                } ,
            } )                  
        ) ;        
    }                
) ;    
const useDyamicsCompressingNodeWithGivenFadeoutTimeConstant1 : (        
    USEYYYNODER<DynamicsCompressorNode >           
) = (
    function   (...args : Parameters<typeof UABN_ARGPARSE > ) {
        const {
            nd0: dest ,          
            timeConstant1 ,                 
            renewInstanceDeps: ctorRerunDeps ,            
        } = UABN_ARGPARSE(...args ) ;                
        return (
            useYyNodeWithGivenFadeoutTimeConstant1<DynamicsCompressorNode     >(dest, { timeConstant1 }, (
                (ctx: BaseAudioContext, dest: AudioNode ) => {
                    const gainNode1 = (          
                        ctx                                            
                        .createDynamicsCompressor()   
                    ) ;                                                                                
                       
                    return gainNode1 ;    
                }     
            ), {  
                renewInstanceDeps: ctorRerunDeps ,      
                onUnmount: (gainNode1, ctx ) => {           
                    // ((c: AudioParam ) => {                   
                    //     c.setTargetAtTime(0, ctx.currentTime, timeConstant1 );
                    // } )(gainNode1.gain ) ; 
                } ,
            } )                  
        ) ;                                                          
    }                                         
) ;        
/**             
 * the returned {@link AudioScheduledSourceNode} will immediately `start()` .    
 * avoid `stop()`ing it ; that {@link React.useEffect will happen automatically after (a few seconds ) unmount }  .  
 * 
 * this is    
 * a generalisation of both (examples of {@link AudioScheduledSourceNode}s )      
 * - {@link useOscilltorNodeWithGivenFadeoutTimeConstant1 } 
 * - {@link useAudioBufferPlaybackNodeWithGivenFadeoutTimeConstant1 }   
 * - {@link useConstantParamSrcNodeWithGivenFadeoutTimeConstant1 }
*/
const useAudioScheduledSrcNodeWithGivenFadeoutTimeConstant1 = (  
    function <SNode1 extends AudioScheduledSourceNode> (...argsM : [                  
        ...args: Parameters<typeof UABN_ARGPARSE > ,        
        CREATE : (c: BaseAudioContext) => SNode1 ,               
                                            
    ]): ReturnType<(            
        USEYYYNODER<(        
            AudioNode
            &         
            /**           
             * in general,      
             * {@link AudioScheduledSourceNode}s will never be semantically good argument to other `AudioNode`'s `connect` so 
             * we can safely omit the two *connect-diconnect* methods .    
             * 
             * we hide {@link AudioScheduledSourceNode.start *the start-and-stop methods* } ; 
             * that'll happen automatically
             */
            Omit<SNode1, (
                keyof Pick<AudioScheduledSourceNode, "start" | "stop" | "connect" | "disconnect" | "numberOfInputs" | "dispatchEvent" >   
            )   >          
        ) >      
    )   > {                
        const args = [argsM[0], argsM[1] ] as const ;    
        const CREATE = argsM[2] ;
        const {   
            nd0 ,               
            timeConstant1 ,
            renewInstanceDeps: ctorRerunDeps , 

        } = UABN_ARGPARSE(...args ) ;                   
        ;  
        const nd1 = (
            useGainNodeWithGivenFadeoutTimeConstant1(nd0, timeConstant1 )     
        ) ;
        const nd2 = (                  
            (function use2 (dest: AudioNode | null) {
                return (    
                    useYyNodeWithGivenFadeoutTimeConstant1<SNode1 >(dest, { timeConstant1 }, (
                        (ctx: BaseAudioContext, dest: AudioNode ) => {
                            const gainNode1 = (            
                                CREATE(ctx )                   
                            ) ;                                
                            
                            gainNode1.start() ;
                            return gainNode1 ;     
                        }                                
                    ), {              
                        renewInstanceDeps: ctorRerunDeps ,         
                        onUnmount: (gainNode1, ctx ) => {   
                            gainNode1.stop(ctx.currentTime + Math.max(2, timeConstant1 ) ) ;
                        } ,
                    } )                     
                ) ;   
            } )(nd1 )              
        ) ;             

        return nd2 ;            
    }
);            
/**             
 * the returned {@link OscillatorNode} will immediately `start()` .    
 * avoid `stop()`ing it ; that {@link React.useEffect will happen automatically after (a few seconds ) unmount }  
*/
const useOscilltorNodeWithGivenFadeoutTimeConstant1: (  
    USEYYYNODER<(       
        Omit<OscillatorNode, (
            keyof Pick<AudioScheduledSourceNode, "start" | "stop" | "connect" | "disconnect" >   
        )>
    )>                   
) = (  
    function   (...args : Parameters<typeof UABN_ARGPARSE > ) {   
        return (
            useAudioScheduledSrcNodeWithGivenFadeoutTimeConstant1<OscillatorNode>(
                ...args , ctx => ctx.createOscillator() )
        ) ;                    
    }                    
);                        
/**                                                
 * in current version, 
 * as with {@link useOscilltorNodeWithGivenFadeoutTimeConstant1 } ,      
 * the returned {@link AudioBufferSourceNode} will always immediately `start()` 
 * (as making it require manual `start()` is not feasible given how {@link useYyNodeWithGivenFadeoutTimeConstant1} works ) ; 
 * for this reason, avoid using non-looping sounds with this utility .                                                        
 * avoid `stop()`ing it ; that {@link React.useEffect will happen automatically after (a few seconds ) unmount }  
*/
const useAudioBufferPlaybackNodeWithGivenFadeoutTimeConstant1: (       
    USEYYYNODER<(
        AudioNode         
        &                     
        Omit<AudioBufferSourceNode, (
            keyof Pick<AudioScheduledSourceNode, "start" | "stop" | "connect" | "disconnect" >   
        )     >    
    )>                  
) = (             
    function (...args : Parameters<typeof UABN_ARGPARSE > ) {         
        return (
            useAudioScheduledSrcNodeWithGivenFadeoutTimeConstant1<AudioBufferSourceNode>(
                ...args , ctx => ctx.createBufferSource() )
        ) ;                  
    }                              
);                              
/**                   
 * the returned {@link OscillatorNode} will immediately `start()` .    
 * avoid `stop()`ing it ; that {@link React.useEffect will happen automatically after (a few seconds ) unmount }  
*/
const useConstantParamSrcNodeWithGivenFadeoutTimeConstant1: (
    USEYYYNODER<(
        AudioNode    
        &  
        Omit<ConstantSourceNode, (
            keyof Pick<AudioScheduledSourceNode, "start" | "stop" | "connect" | "disconnect" >   
        )>
    )>           
) = (   
    function (...args : Parameters<typeof UABN_ARGPARSE > ) {        
        const nd1 = (   
            useAudioScheduledSrcNodeWithGivenFadeoutTimeConstant1(
                ...args , ctx => ctx.createConstantSource() )
        ) ;       
        React[AUDIONODES_USE_AUDIONODEEFFECT](() => {
            if (nd1) {
                if (1 ) {
                    ;
                    // nd1.offset.value = 0 ;      
                    nd1.offset.setValueAtTime(0, 0 ) ;  
                }   
            }
        }, [nd1]) ;
        return nd1 ;                  
    }                                  
);   
const AUDIOCTXWHITENOISEBUFFER = (
    (newObjectToValueMappingMemoised    )(function (c: BaseAudioContext ): AudioBuffer {
        console.info(TypeError("AUDIOCTXWHITENOISEBUFFER - initialising") );
        const b1 = (                 
            c.createBuffer(1, c.sampleRate, c.sampleRate )
        ) ;
        b1.copyToChannel((
            fillWithWhiteNoise((
                b1.getChannelData(0 )
            ) )
        ), 0 ) ;         
        return (
            b1 
        ) ;  
    })     
) ;
// TODO
const useGainNodeWithValue = (
    (dest: AudioNode | null, vl: number ) => {
        const nd1 = (                      
            useGainNodeWithGivenFadeoutTimeConstant1(dest, 0.5 )
        ) ;                                                           
    }
) ;
const useWhiteNoiseNodeWithGivenProps: (    
    (dest: AudioNode | null, options: {} ) => (
        AudioNode | null          
    )                                    
) = (    
    (dest, {} ) => {
        const nd = (
            useAudioBufferPlaybackNodeWithGivenFadeoutTimeConstant1(dest, 0.5 )       
        ) ;
        React[AUDIONODES_USE_AUDIONODEEFFECT](() => {
            if (nd) {
                const c = (
                    nd.context
                ) ;      

                const b1 = (
                    AUDIOCTXWHITENOISEBUFFER(c )     
                ) ;      
  
                {   
                    ;
                    nd.buffer = b1 ; // assign Buffer            
                    nd.playbackRate.value = 1 ; // make the speed the original speed     
                    nd.loop = true; // make it repeating            
                    nd.loopEnd = 1;   // the loop s end shall be 1s                         
                }
            }
        }, [nd]) ;
        return (    
            nd   
        ) ;
    }
) ;              
/**     
 * an {@link AudioNode } which 
 * produces silence even whilever having some sound-producing input(s).
 */
const useNullSinkNode = (
    (dest : AudioNode | null ) : ((AudioNode | AudioParam) & Pick<AudioNode, "context"> ) | null => (
        useMemo(() => (dest?.context.createGain() || null ) , [dest] )        
    )
) ;     



export * from "./useAudioNodesMounting1";
export {   
    useNullSinkNode,
    useGainNodeWithGivenFadeoutTimeConstant1 ,
    useBiquadFilterNodeWithGivenFadeoutTimeConstant1 ,          
    useDyamicsCompressingNodeWithGivenFadeoutTimeConstant1,

    useAudioScheduledSrcNodeWithGivenFadeoutTimeConstant1 ,
    useOscilltorNodeWithGivenFadeoutTimeConstant1 ,           
    useAudioBufferPlaybackNodeWithGivenFadeoutTimeConstant1 ,  
    useConstantParamSrcNodeWithGivenFadeoutTimeConstant1 ,    
    useWhiteNoiseNodeWithGivenProps ,     

    useParamNodeWithGiven , 
};                         