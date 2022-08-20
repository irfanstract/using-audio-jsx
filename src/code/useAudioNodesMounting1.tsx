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
import { AudioSinkNode, AudioSourceNode } from "./useAudioNodesBasicTypeDefs";         
import { AUDIONODES_USEEFFECT } from "./useAudioNodesParamChgEffect1"; 












     
/**    
 * {@link globalADisconnectMode }
 */
enum GDCM {  
    /**   
     * *neither*.
     */
    NONE ,   
    /**    
     * this advocates that it should be within {@link useInitUnconnectedYyyNodeFor }.    
     */
    DISCONNECT_IN_USING_C ,     
    /**   
     * this advocates that it should be within {@link usingANodeCnnctM }.   
     */
    DISCONNECT_IN_USINGACNNCTM ,      
} ;      
/**    
 * this 
 * is to specify 
 * in which (one) of the following methods (see {@link GDCM } )
 * the *unmount-time* `aNode.disconnect()` call(s) shall reside within.
 */
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
 * CAVEATS !
 *  
 * note that, whenever the existing Node unmounts and becomes substituted with new one,
 * settings made on the previously Node ref will not be visible in the new one, so
 * callers become responsible for (manual) reconfig.
 * do not call `connect` and `disconnect`; 
 * the calls will be made automatically as necessary ;     
 * we can't {@link Omit } any method(s) since 
 * that'll prevent usability as `connect` and `disconnect` arg.
 *                 
 * NEEDS AMENDMENT. 
 * the naming  
 * does not suggest (the fact that it requires 'timeConstant' as second argument ).      
 */           
type USEYYYNODER<R extends {} > = (         
    (...args : [          
        dest: AudioNode | null ,       
        properties: number | { 
            timeConstant1 ?: number ; 

            rerunCtorEveryDestChg ?: false ;        
            renewInstanceDeps ?: React.DependencyList ;                
        } ,      
    ])        
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
    (...[nd0, timeConstant10 = {} ] : Parameters<USEYYYNODER<{}> > ): (
        Required<(
            (object & Exclude<Parameters<USEYYYNODER<{}> >[1 ], number > )    
        )>
        &
        { nd0: AudioNode | null ; }   
    ) => {             
        const {              
            timeConstant1 = 0.5 ,      

            rerunCtorEveryDestChg = false ,       
            renewInstanceDeps: ctorRerunDeps = [] as const , 
         
        } = ((): (object & Exclude<Parameters<USEYYYNODER<{}> >[1 ], number > ) => {
            if (typeof timeConstant10 === "number" ) {
                return {
                    timeConstant1: timeConstant10 ,          
                } ;      
            }       
            if (typeof timeConstant10 === "object" ) {
                const { timeConstant1: v , rerunCtorEveryDestChg } = timeConstant10;
                return {   
                    timeConstant1: v ,     
                    rerunCtorEveryDestChg ,           
                } ;               
            }     
            return {    
            } ;                       
        })() ;           
        return {
            timeConstant1 , 
  
            nd0 ,  
                         
            rerunCtorEveryDestChg ,       
            renewInstanceDeps: ctorRerunDeps ,               
        } ;       
    }
) ;      
export {     
    UABN_ARGPARSE ,  
    USEYYYNODER ,     
} ;   
    

     

namespace ToUseYyNodeWithGivenFadeoutTimeConstant1 {
    const unused = {} ; // TS-1205
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

            /**       
             * defaults to never happen ;       
             * would be the case for empty array (`[]`). 
             */
            renewInstanceDeps ?: React.DependencyList ; 
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
const useInitAndConnectYyyNodeFor: (      
    ToUseYyNodeWithGivenFadeoutTimeConstant1
        
) = (
    function <YyNode extends AudioNode , Dst1 extends AudioSinkNode & Pick<AudioNode, "context"> = AudioNode  > (...[
        nd0   ,  
        { timeConstant1 } ,    
        newInstanceNd ,       
        properties3  ,       
        
    ] : [       
        (Dst1 ) | null,  
        {  
            timeConstant1: number ;  
        },          
        (ctx: BaseAudioContext, dest: Dst1 ) => YyNode , 
        ToUseYyNodeWithGivenFadeoutTimeConstant1.Args<unknown, unknown, YyNode >[3 ] ,   
                
    ]) {          
        /**    
         * {@link useInitUnconnectedYyyNodeFor }   
         */               
        const {                         
            gRef: gRef1 ,  
        } = (     
            useInitUnconnectedYyyNodeFor<YyNode, Dst1 >(nd0, {}, newInstanceNd, properties3 )
        ) ;    
        useSingularSrcDestConnect(gRef1 , nd0 ) ;                  
    
        return gRef1 ;                                
    }            
);         
/**                   
 * {@link useInitAndConnectYyyNodeFor } without the `useCnnectAndDiscnnct(...)` .
 *                 
 * this `useYyy` will    
 * 1) allocate independent {@link AudioNode} for the Component's lifetime, 
 * 2) return it  
 * 
 * @param OeGainNode1 this `new` `YyNode`   
*/     
const useInitUnconnectedYyyNodeFor = (    
    function useC <YyNode extends AudioNode , Dst1 extends AudioSinkNode & Pick<AudioNode, "context"> = AudioNode > (  ...[
        dest ,  
        {   } ,         
        OeGainNode1  ,          
        { onUnmount, renewInstanceDeps = [] }  ,                   
          
    ] : [        
        (Dst1 ) | null,                    
        {  },                
        (ctx: BaseAudioContext, dest: Dst1 ) => YyNode ,    
        ToUseYyNodeWithGivenFadeoutTimeConstant1.Args<unknown, unknown, YyNode >[3 ] ,   
               
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
                            (
                                // if it were a GainNode ...
                                (gainNode1 instanceof GainNode && gainNode1.gain.value !== 0 ) ? 
                                0.5 : 0 
                            ) 
                            * 
                            1000
                        ) ) ;    
                    }             
                } ;                           
            }             
        }, [dest, ...renewInstanceDeps ] ) ;                    
        ;                         
        return { gRef , } ;
    }
) ;       
/**    
 * ensure that `src` have exactly one output which be `dest`.
 */
const useSingularSrcDestConnect = (                          
    function useReconnectSingleSrcSingleDest(...[gRef1, dest, ...otherArgs ] : [   
        src: AudioSourceNode | null ,       
        dest: AudioSinkNode | null ,   
        ...etc : (
            [(
                Parameters<typeof usingANodeCnnctM>
            )] extends [readonly [  unknown,  unknown, ...( infer Args)] ] 
            ?
            Args  
            : never             
        ),                                 
    ] ) {                                                 
        ;        
        /**   
         * the core part --
         * `useYyyEffect` for {@link usingANodeCnnctM } !
         */
        React.useInsertionEffect(() => {     
            /**             
             * only if both are *non-null*        
             */
            if (dest && gRef1) {            
                return (
                    usingANodeCnnctM(gRef1, [dest ] as const, ...otherArgs )
                ) ;                                                                    
            };                                           
        }, [dest, gRef1] );    
    }  
);            
/**     
 * specialised logging.
 * */     
const PN_LOG = (
    (...a: any[] ) => console.log(...a )       
) ; 
/**  
 * {@link useParamNodeWithGiven1 }
 * 
 * @deprecated
 * use the equivalent one, since
 * this one's *signature* is *semantically flawed*.
 */
const useParamNodeWithGiven = (
    (dest: AudioParam | null, c: BaseAudioContext | null ) => (
        useParamNodeWithGiven1({ ctx: c } , dest )
    )
) ;
/**    
 * with given {@link AudioParam} as *dest*.
 */
const useParamNodeWithGiven1 = (
    function (...mainArgs : [
        ctxOptions : {
            ctx: BaseAudioContext | null ;
        },
        dest: AudioParam | null,
        linkOptions1 ?: {
            cncStatChgDebugMode ?: 0 | 1 ;
        } ,
    ]) {
        const [{ ctx: c  }, dest , { cncStatChgDebugMode: cncDebug = 0 } = {} ] = mainArgs ;
        const {
            gRef: gRef1 , 
        } = (function useINC() {  
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
                useInitUnconnectedYyyNodeFor<YyNode, Dst1 >(dest, {}, OeGainNode1, { onUnmount })
            ) ;
        })() ;          
        {        
            ;    
            React[AUDIONODES_USEEFFECT](() => { cncDebug &&  PN_LOG("=========") ; } , []);
            useSingularSrcDestConnect(gRef1 , dest, (
                { dbg: cncDebug ? 1 : 2 } as const
            ) ) ;         
        }
        ;                            
        return gRef1 ;  
    }  
);     
/**    
 * {@link useSingularSrcDestConnect} and {@link useATapNode}.
 * can be run within {@link React.useInsertionEffect } callback.
 * 
 * this method will 
 * 1) {@link AudioNode.disconnect `src.disconnect()` }
 * 2) `src.connect(...)` for every `AUdioSinkNode` in the list  `dests`. 
 */
const usingANodeCnnctM = (     
    (...[gRef, dests, options = {} ] : [       
        src  : AudioSourceNode,    
        dests: readonly (AudioNode | AudioParam )[] ,      
        config ?: {
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
                 * 1) `disconnect` , except if {@link dbg } evaluates to `2`
                 * 2) *(re)connect* to *node*s in the list {@link dests } 
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
                /**   
                 * return,
                 * with an `EffectCallback.CleanUpFn`
                 */
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
 * use the second {@link AudioNode}.
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
                useInitUnconnectedYyyNodeFor<GainNode>(dest, {}, (c, d) => c.createGain()  , { onUnmount: Object })
            ) ;                     
            const {                               
                gRef: gTapRef ,                
            } = (     
                useInitUnconnectedYyyNodeFor<GainNode>(dest, {}, (c, d) => c.createGain()  , { onUnmount: Object })
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
export {
    ToUseYyNodeWithGivenFadeoutTimeConstant1 ,  
} ;
export { 
    useInitUnconnectedYyyNodeFor ,     
    useInitAndConnectYyyNodeFor as useYyNodeWithGivenFadeoutTimeConstant1,  
    useInitAndConnectYyyNodeFor ,    
    useParamNodeWithGiven1,
    useParamNodeWithGiven , 

    useATapNode , 
} ;
  








