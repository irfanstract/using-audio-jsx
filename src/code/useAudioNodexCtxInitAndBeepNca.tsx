// export {} ;
import {   
    IterableOps ,     
    memoize, 
    BoundedIdentityFunction,       
} from "./generalUse11" ;         
// import { true16 } from "./useAudioNodesBasicsRegularlyDrumLooping";             
// import { TREMOLO_LINGRAPH } from "./audioGainCurveTrm";     
import React, {     
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, 
    useRef ,
} from "react";
import { useAsyncMemo } from "./useAsyncMemo";               
import { ComponentProps } from "./commonElements";  
// import { JsonObjDisplay } from "./commonElements";                 
// import { 
//     useMountDelay ,      
// } from "./useComponentDebug" ;         
import {} from "./useAudioNodesBasicS" ;


import { AUDIONODEDEMOKIT_T1BEEPAGAIN } from "./useAudioNodexCtxInitAndBeepBtns";   






const {         
    newAudioCtxAsync ,  
} = (() => {          
    const USEA = (
        function ({                
        } : {     
        } = { } ) {   
            ;
            const [explicitInter, markAsExplictInter ] = (
                useState<boolean>(() => false )
            ) ;            
            const {                      
                t1 ,  
                runInitialBeepAgain ,    
                lastBeepT ,         
                aCtx: _1 ,   
                ctxT ,     
                               
                beepBtn ,
                gv1,      
                setGv1 ,      
            
                ds0 ,        
     
                dbgInfo1 ,   
                dbgPanel1 ,             
            } = (
                AUDIONODEDEMOKIT_T1BEEPAGAIN((    
                    explicitInter           
                    ? 
                    { shallAutoStart: false , suspendOnWindowBlur: false }   
                    :   
                    { shallAutoStart: 1 , suspendOnWindowBlur: true }   
                ))   
            ) ;                     
            const aCtx = (
                ds0?.context         
            ) ; 
            const SUSPEND = (
                () => {
                    if (aCtx) {   
                        setTimeout(() => {
                            console.info(TypeError("explicit suspension requested") , { aCtx } ) ;
                            (aCtx instanceof AudioContext ) && aCtx.suspend() ;      
                            markAsExplictInter(() => true ) ;            
                        } , 0.15 * 1000 ) ;
                    }
                }                   
            ) ;   
            const RESUME = (             
                () => {                     
                    if (aCtx) {     
                        setTimeout(() => {
                            markAsExplictInter(() => true ) ;       
                            console.info(TypeError("explicit resumption requested") , { aCtx } ) ;
                            (aCtx instanceof AudioContext ) && aCtx.resume() ;      
                        } , 0.15 * 1000 ) ;
                    }      
                }                    
            ) ;        
            ;
            return {
                explicitInter, markAsExplictInter 
                ,  
                ds0 , aCtx  
                ,        
                SUSPEND , RESUME 
                , 
            } ;   
        }
    ) ;
    const AudioCtxInstantiatingMountComponent = (
        ({     
            audioNodeRef ,                
        } : {
            audioNodeRef : (a: AudioNode | null ) => void ;
        }) => {       
            audioNodeRef || (
                console.error("undefined argument", { audioNodeRef } ) 
            ) ;
            ;
            const {
                explicitInter, markAsExplictInter 
                ,  
                ds0 , aCtx          
                ,        
                SUSPEND , RESUME 
                , 
            } = USEA( ) ;      
            useEffect(() => {
                audioNodeRef(ds0 || null ) ;    
                return () => {   
                    audioNodeRef(null ) ;                                                   
                } ;
            }, [ds0 ]) ;    
            const ctxPauseBtn = (
                <button   
                    role="switch" 
                    type="button"    
                    disabled={!(aCtx && (aCtx.state === "running") ) } 
                    onClick={() => SUSPEND()  } 
                >
                    pause all audio        
                </button>                           
            ) ;                                                        
            const ctxResumButn = (
                <button role="switch" type="button" onClick={() => RESUME()  } >
                    resume all audio     
                </button>                                                  
            ) ;                          
            return (                  
                <nav style={{ background: "black" , color: "white" , }} >          
                    <p>      
                        audio output for this app is 
                        { aCtx ? <span> activated and { aCtx.state } </span> : <span> will be used here </span> }
                    </p>                    
                    <p style={{ display: "flex" , flexDirection: "column" }} >      
                        { ctxResumButn }
                        { ctxPauseBtn }           
                    </p>   
                </nav>        
            )  ;       
        }     
    ) ;                    
               
    return {
        newAudioCtxAsync: (   ) => new Promise<AudioNode>(async (R) => { 
            const withDbg : boolean = true ;
            TRY : {
                try {
                    ;        
                    {
                        ;
                        const ReactDOMClient = (
                            await import ("react-dom/client")        
                        ) ;                
                        const newDivElem = (                      
                            document.createElement("div")    
                        ) ;                      
                        if (withDbg ) {                          
                            ((dest: Element, addend: Node ) => (
                                dest.insertBefore(addend, dest.childNodes[0] )
                            ) )(document.body , newDivElem ) ;    
                        }
                        (                     
                            ReactDOMClient.createRoot(newDivElem )  
                            .render((
                                <AudioCtxInstantiatingMountComponent 
                                audioNodeRef={(c: AudioNode | null ) => (c && R(c) ) }  
                                />
                            ))                                                 
                        ) ;       
                        break TRY ;                        
                    }              
                } catch (z) {
                    console.error(z) ;
                }      
                // probably  
                // we're in desktop-based app where 'document' is unavailable but probably we're in Electron           
                try {
                    ;    
                    const aCtx = new AudioContext() ;                 
                    aCtx && R(aCtx.destination ) ;
                    break TRY ;           
                    ;             
                }    catch (z) {
                    console.error(z) ;
                }
            }
        })       ,    
    } ;  
})() ;    
;












export {
    newAudioCtxAsync , 
} ;
  