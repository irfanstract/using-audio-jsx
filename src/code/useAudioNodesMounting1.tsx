import {   
    IterableOps ,      
    memoize,                   
    BoundedIdentityFunction,    
} from "./generalUse11" ; 
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react";   
import { useWarnOnChange } from "./usingTimeoutOrInterval";     

                     
    
// domain omportd         
import { AudioSinkNode, AudioSourceNode } from "./useAudioNodesBasicS";         
import { AUDIONODES_USEEFFECT } from "./useAudioNodesParamChgEffect1"; 












     
/**    
 * {@link globalADisconnectMode }
 */
enum GDCM {  
    NONE ,   
    /**    
     * this advocates that it should be within {@link usingC }.    
     */
    DISCONNECT_IN_USING_C ,     
    /**   
     * this advocates that it should be within {@link usingANodeCnnctM }.   
     */
    DISCONNECT_IN_USINGACNNCTM ,      
} ;      
let globalADisconnectMode :(   
    GDCM  
) = (  
    GDCM.DISCONNECT_IN_USING_C   
) ;     
/**  
 *      
 * WORK IN PROGRESS      
 *      
 * @deprecated
 * @see      
 * naming inspired by         
 * {@link usingTimeout }
 * 
*/    
const usingGainNode1 = (
    (dest: AudioNode, timeConstant1: number ) => {
        ; // TODO
    }
) ;
/**       
 * returns     
 * an independently-allocated Node connected into `dest` (if-and-only-if non-null ) . 
 *  
 * do not call `connect` and `disconnect`; 
 * the calls will be made automatically as necessary ;     
 * we can't {@link Omit } any method(s) since 
 * that'll prevent usability as `connect` and `disconnect` arg        
 *                 
 * NEEDS AMENDMENT. 
 * the naming  
 * does not suggest (the fact that it requires 'timeConstant' as second argument ).      
 */   
type USEYYYNODER<R extends {} > = (
    (dest: AudioNode | null , ...etc: [a: number | { timeConstant1 ?: number ; } ] ) 
    => (R | null )              
) ;  
const USEYYYNODER = {} ; // TS-1205                                        
/**               
 * this is supposed to be    
 * shared/common protocol 
 * extracted as necessary 
 * to support possible future extension trivially.      
 */      
const UABN_ARGPARSE = ( 
    (...[nd0, timeConstant10 = {} ] : Parameters<USEYYYNODER<{}> > ) => { 
        const timeConstant1 = ((): number => {
            if (typeof timeConstant10 === "number" ) {
                return timeConstant10 ; 
            }            
            if (typeof timeConstant10 === "object" ) {
                const { timeConstant1: v = 0.5 } = timeConstant10;
                return v ;   
            }
            return 0.5 ;  
        })() ;       
        return {
            nd0 ,       
            timeConstant1 ,                 
        } ;       
    }
) ;      
export {     
    UABN_ARGPARSE ,  
    USEYYYNODER ,     
} ;   
    

     

namespace ToUseYyNodeWithGivenFadeoutTimeConstant1 {
    export type Args<
        Dests1 ,             
        D1  ,        
        YyNode extends AudioNode ,                     
    > = [               
        Dests1,       
           
        { 
            /**  
             * {@link AudioParam.setTargetAtTime }
            */               
            timeConstant1: number ;
        },                   

        (ctx: BaseAudioContext, dest: (D1 & object) ) => YyNode , 

        {             
            /**                      
             * this method           
             * can be used to make fade-out AudioParam automation(s) (avoid `disconnect()`ing it ; such call will eventually happen automatically !) .  
             * this will fire around 3 or 5 seconds prior-to actually being `disconnect()` .     
             * avoid `stop()`ing it ; that {@link React.useEffect will happen automatically after (a few seconds ) unmount }               
             * {@link GainNode.gain}, {@link OscillatorNode.frequency}, {@link AudioBufferSourceNode.playba}
            */   
            onUnmount: (nd: YyNode , ctx: BaseAudioContext ) => void ;     
        } ,                   
       
    ]  
}      
/**        
*/                                    
type ToUseYyNodeWithGivenFadeoutTimeConstant1<
    Dests1 = AudioNode | null ,       
    D1 = AudioNode | null ,                         
> = (    
    /**  
     * @param dest        if `null`, this node will be(come) inactive    
     * 
     * @param OeGainNode1 instantiations of {@link YyNode }
    */                    
    <YyNode extends AudioNode > 
    (...[          
        dest ,            
        { timeConstant1 } ,        
        OeGainNode1 ,           
        { onUnmount } ,                   
       
    ] : ToUseYyNodeWithGivenFadeoutTimeConstant1.Args<Dests1, D1, YyNode > )    
    => 
    (YyNode | null )                                            
) ;   
/**  
 * {@link ToUseYyNodeWithGivenFadeoutTimeConstant1 }  . 
 * 
 * this `useYyy` will    
 * 1) allocate independent {@link AudioNode} for the Component's lifetime, 
 * 2) connect it to `dest`    
 * 5) return it             
 * 
 * @param OeGainNode1 instantiation of {@link YyNode }
*/        
const useYyNodeWithGivenFadeoutTimeConstant1: (      
    ToUseYyNodeWithGivenFadeoutTimeConstant1
        
) = (
    function <YyNode extends AudioNode , Dst1 extends AudioSinkNode & Pick<AudioNode, "context"> = AudioNode  > (...[
        dest   ,  
        { timeConstant1 } ,    
        OeGainNode1 ,       
        { onUnmount } ,   

    ] : [
        (Dst1 ) | null,  
        {  
            timeConstant1: number ;  
        },          
        (ctx: BaseAudioContext, dest: Dst1 ) => YyNode , 
        {                                
            onUnmount: (nd: YyNode , ctx: BaseAudioContext ) => void ;          
        } ,   

    ]) {          
        /**    
         * {@link usingC }
         */
        const {               
            gRef: gRef1 ,  
        } = (     
            usingC<YyNode, Dst1 >(dest, {}, OeGainNode1, { onUnmount })
        ) ;    
        useSingularSrcDestConnect(gRef1 , dest ) ;           
    
        return gRef1 ;                               
    }                                      
);        
const useSingularSrcDestConnect = (                          
    function useReconnectSingleSrcSingleDest(...[gRef1, dest, ...etc ] : [   
        src: AudioSourceNode | null ,       
        dest: AudioSinkNode | null ,   
        ...etc : (
            [Parameters<typeof usingANodeCnnctM>] extends [readonly [  unknown,  unknown, ...( infer Args)] ] 
            ?
            Args  : never      
        ),                                 
    ] ) {                                                 
        ;      
        React[AUDIONODES_USEEFFECT](() => {     
            /**             
             * only if both are present   
             */
            if (dest && gRef1) {            
                return (
                    usingANodeCnnctM(gRef1, [dest ] as const, ...etc )
                ) ;                                                                    
            };                                           
        }, [dest, gRef1] );    
    }  
);  
const PN_LOG = (
    (...a: any[] ) => console.log(...a )  
) ;
const useParamNodeWithGiven = (
    function (dest: AudioParam | null, c: BaseAudioContext | null ) {
        const {
            gRef: gRef1 , 
        } = (function () {  
            ;                
            type YyNode = AudioNode ;
            type Dst1 = AudioNode ;
            const dest = c?.destination || null ; 
            const onUnmount = (
                () => {} 
            );
            const OeGainNode1: (ctx: BaseAudioContext, dest: Dst1 ) => AudioNode = (      
                (c, _1) => (
                    c.createGain()       
                )
            ) ;            
            return (     
                usingC<YyNode, Dst1 >(dest, {}, OeGainNode1, { onUnmount })
            ) ;
        })() ;          
        const cncDebug : 0 | 1 = 0 ;
        {        
            ;    
            React.useLayoutEffect(() => { cncDebug &&  PN_LOG("=========") ; } , []);
            useSingularSrcDestConnect(gRef1 , dest, (
                { dbg: cncDebug ? 1 : 2 } as const
            ) ) ;         
        }
        ;                            
        return gRef1 ;  
    }  
);     
/**                                   
 * this `useYyy` will    
 * 1) allocate independent {@link AudioNode} for the Component's lifetime, 
 * 2) return it  
 * 
 * @param OeGainNode1 this `new` `YyNode` 
*/
const usingC = (    
    function useC <YyNode extends AudioNode , Dst1 extends AudioSinkNode & Pick<AudioNode, "context"> = AudioNode > (  ...[
        dest ,  
        {   } ,         
        OeGainNode1  ,          
        { onUnmount }  ,               
          
    ] : [        
        (Dst1 ) | null,    
        {  },           
        (ctx: BaseAudioContext, dest: Dst1 ) => YyNode ,    
        {                             
            onUnmount: (nd: YyNode , ctx: BaseAudioContext ) => void ;     
        } ,   
               
    ]) {
        const [gRef, setGRef ] = (                                               
            useState<YyNode | null >(null )                                               
        ) ;                      
        React[AUDIONODES_USEEFFECT](() => {  
            if (dest) {             
                const ctx = dest.context ;          
                 
                const gainNode1 = (                              
                    OeGainNode1(ctx, dest )                        
                ) ;                                   
                setGRef(gainNode1 ) ;                              
                  
                return () => {                                                                  
                    onUnmount(gainNode1, gainNode1.context ) ;                
                    if (globalADisconnectMode === GDCM.DISCONNECT_IN_USING_C ) {      
                        setTimeout(() => {
                            gainNode1.disconnect() ;           
                        }, (          
                            ((gainNode1 instanceof GainNode && gainNode1.gain.value !== 0 ) ? 0.5 : 0 ) 
                            * 
                            1000
                        ) ) ;    
                    }             
                } ;                           
            }             
        }, [dest ] ) ;                 
        ;                         
        return { gRef , } ;
    }
) ;     
const usingANodeCnnctM = (     
    (...[gRef, dests, options = {} ] : [       
        src  : AudioSourceNode,    
        dests: readonly (AudioNode | AudioParam )[] ,      
        a ?: {
            dbg ?: false | 1 | 2 ;   
        } ,          
    ] ) => {            
        const {      
            dbg = false ,    
        } = options ;   
        return (                                      
            ((gainNode1 : AudioSourceNode ) => {        
                if (dbg === 1) { 
                    PN_LOG(`usingANodeCnnctM`, { src: gainNode1, dests }) ;  
                    PN_LOG(`usingANodeCnnctM`, "src and dests", ...[gainNode1, ...dests ]) ;  
                }
                ;    
                /**   
                 * disconnect, and then reconnect  
                 *  
                 * */  
                {
                    ;  
                    if (dbg !== 2 ) {
                        ;
                        gainNode1.disconnect() ;       
                    }                                                         
                    for (const dest of dests ) {      
                        ;       
                        gainNode1.connect(dest ) ;                     
                    }     
                }       
                return () => {        
                    if (globalADisconnectMode === GDCM.DISCONNECT_IN_USINGACNNCTM ) {
                        ;   
                        setTimeout(() => {  
                            gainNode1.disconnect() ;           
                        }, 3 * 1000 ) ;          
                    }                                  
                } ;                                               
            })(gRef )        
        ) ;           
    } 
) ;           
/**                    
 * {@link useState } analogue for {@link AudioNode }s .                
 * to consume output, like querying the current `state` form `useState` or `useReducer` , 
 * use the first {@link AudioNode} .  
 * to write into, like `setState` or `dispatch`, 
 * use the second {@link AudioNode}
*/   
const useATapNode = (() => {                                
    type CND = (
        {                                        
            connect(...args : readonly [AudioNode | AudioParam, ...unknown[] ] ) : void ;  
            disconnect() : void ;      
        }     
    ) ;                        
    type ATapAndPeedPtPair = (
        Parameters<(tapoffPt: CND & AudioSourceNode , feedPt: AudioNode ) => void >
    ) ;   
    return (    
        (                                                    
            dest: AudioNode | null,      
        ) => {
            const {        
                gRef: gMainRef ,          
            } = (     
                usingC<GainNode>(dest, {}, (c, d) => c.createGain()  , { onUnmount: Object })
            ) ;                     
            const {                               
                gRef: gTapRef ,                
            } = (     
                usingC<GainNode>(dest, {}, (c, d) => c.createGain()  , { onUnmount: Object })
            ) ;        
            (() => {                                                             
                ;
                React[AUDIONODES_USEEFFECT](() => {
                    if ( gMainRef) {              
                        const dests1 = (     
                            [dest, gTapRef ]            
                            .filter<AudioNode>((e): e is AudioNode => !!e )
                        ) ;
                        return (
                            usingANodeCnnctM(gMainRef, dests1 )
                        ) ;                                                                                       
                    };                                 
                }, [gMainRef , dest , gTapRef,  ] );                                             
            })() ;                 
            return (() : (ATapAndPeedPtPair | [null, null]) => (
                (gTapRef && gMainRef) ? ([gTapRef, gMainRef] ) : [null, null ]   
            ))() ;                                           
        }
    ) ;   
})() ;      
export type {
    ToUseYyNodeWithGivenFadeoutTimeConstant1 ,  
} ;
export {
    useYyNodeWithGivenFadeoutTimeConstant1,   
    useParamNodeWithGiven , 

    useATapNode , 
} ;
  








