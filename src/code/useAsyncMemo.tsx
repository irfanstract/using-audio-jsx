import {   
    IterableOps ,      
    memoize, 
    BoundedIdentityFunction,                
} from "./generalUse11" ;                  
// import { true16 } from "./useAudioNodesBasicsRegularlyDrumLooping";             
// import { TREMOLO_LINGRAPH } from "./audioGainCurveTrm";            
import {} from "lodash" ;
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react";      







const { throttle: throttledFunction } = IterableOps ;

type DCII = {              

    /**     
     * whether change in `deps` implies 
     * - the existing (cached) value be no longer valid
    */
    depsChangeImpliesInvalidation : boolean ;     

} ;                             
type AsyncMemoisedValue = (
    Exclude<({} | true | symbol | number | string ), 0 | "" >      
) ;
/**   
 * {@link useMemo } alternative for `async`
*/
const useAsyncMemo = (                                             
    function <A extends AsyncMemoisedValue > (...[      
        {                         
            depsChangeImpliesInvalidation ,                                                
            f ,                                                                        
        }  ,                    
        deps ,                                      
    ] : [       
        ...AsyncMemoUsageArgs<A> ,                                 
    ]) : A | undefined {     
        const [s, setS] = (                                           
            useState<A | undefined >(undefined )       
        ) ;         
        const p = (
            useMemo(async () => {     
                if (depsChangeImpliesInvalidation ) {
                    setS(() => undefined ) ;
                }                                           

                const v: A = (    
                    await f()                          
                ) ;      

                setS(() => v ) ;                          
            } , deps )               
        ) ;      
        return s ;
    }
) ;        
const AsyncMemoUsageArgs = {} ; // TS-1205   
type AsyncMemoUsageArgs<A> = (
    [      
        properties : DCII & {        
            /**          
             * the primary/main code
             * */      
            f : () => Promise<A > ;                           
        } ,                   
        deps: React.DependencyList,                                  
    ]  
) ;
const AsyncStrmUsageArgs = {} ; // TS-1205  
type AsyncStrmUsageArgs<A> = (
    [           
        properties : DCII & {              
            f : () => AsyncGenerator<A > ;                           
        } ,                   
        deps: React.DependencyList,                                  
    ]           
) ;
/**       
 * an alternative to {@link useAsyncMemo }    
 * based on `yield`s and intended to 
 * - facilitate iterative-algo-ic code to provide transient results one replaced by subsequently-returned values  
 * - implementing a stream of continuous change 
 * 
 * instantly consecutive `yield`s without intermediating `await`s     
 * could end up being effectively truncated leaving only the last one ;    
 * if "intermediate states" happen to be important,       
 * place `await new Promise(R => setImmediate(R) )` everywhere between the relevant `yield`s.  
*/
const useAsyncStrm = (                                                 
    function <A extends AsyncMemoisedValue > (   ...[      
        {                         
            depsChangeImpliesInvalidation ,                                                
            f ,                                                                   
        }  ,                      
        deps ,                                          
    ] : [     
        ...AsyncStrmUsageArgs<A> ,                                      
    ]) : A | undefined {       
        const [s, setS] = (                                    
            useState<A | undefined >(undefined )       
        ) ;        
        const {
            usingCurrentSeqInvalidation1 , 
        } = useMemoImplSeqInvalidation() ;                            
        const p = (   
            useMemo(async () => {               
                const {                
                    remainsValid ,                                           
                } = usingCurrentSeqInvalidation1() ;
                if (depsChangeImpliesInvalidation ) {
                    setS(() => undefined ) ;                                                       
                }                                                                                  
                
                const g = f() ;     
                 
                LOOP :      
                for await (const a of g ) {                                                         
                    if (!remainsValid() ) {          
                        // logging needs to be disabled, 
                        // to allow real-time usage.      
                        0 && console.info("invalidated") ;    
                        break LOOP ;                                                                           
                    }  

                    setS(() => a ) ;        
                }                           
            } , deps )                                    
        ) ;      
        return s ;  
    }
) ;      
const useAsyncDictStrm = (() => {    
    type Stat<A> = ( 
        { [k in keyof A] ?: A[k] ; }     
    ) ;   
    const logPrototypeOddity = (
        throttledFunction(function (...[v] : [NonNullable<unknown> ? ]): void {
            (
                console.error((   
                    TypeError((     
                        [
                            `detected occurence of obj whose 'prototype' is not 'Object.prototype'.`    ,  
                            `this indicates likelyhood of bugs like missing argument-lists like (examples below) (hence getting Function(s) instead of the intended object(s) ) .`  ,    
                            `'yield this.getState /* missing argument-list */ ;' ` ,   
                            `'yield data.clientSync.getLastStatChgs /* missing argument-list */ ;' ` ,
                        ].join("\n")
                    ))             
                ) , ...(v ? [v] : [] ) )
            ) ;                            
        } , 3 * 60 * 1000 , { leading: true } )            
    ) ;       
    return (             
        function <A extends {} > (   ...[       
            {    
                depsChangeImpliesInvalidation ,                                                    
                f ,     
            }  ,           
            deps ,                                          
        ] : [          
            ...AsyncStrmUsageArgs<Stat<A> > ,                                      
        ]): Stat<A> { 
            return (           
                useAsyncStrm<Stat<A> >({     
 
                    depsChangeImpliesInvalidation ,  
 
                    f: async function* () {
                        var s : Stat<A> = {} ;    
                        for await (const sAug of f() ) {     
                            {
                                const sAugObjProto = Object.getPrototypeOf(sAug) ;  
                                if (sAugObjProto && (sAugObjProto !== Object.prototype) ) {
                                    logPrototypeOddity(sAugObjProto ) ;
                                    // penalty
                                    await (
                                        new Promise(R => setTimeout(R, (3 + (5 * Math.random() ) ) * 1000 ) )
                                    ) ;
                                }
                            }                  
                            s = { ...s, ...sAug } ;           
                            yield s ;     
                        }
                    } , 
   
                } , deps)
                ||   
                { }
            ) ;   
        }    
    ) ;
})() ;    

const useMemoImplSeqInvalidation = (
    function () {             
        ;                                                               
        const CNT_REF = (
            useRef<number>(0 )                                       
        ) ;                    
        const usingCurrentSeqInvalidation1 = () => {          
            const c = ++CNT_REF.current ;  
            const remainsValid : (     
                () => boolean     
            ) = () => (
                CNT_REF.current <= c                                      
            ) ;       
            const close = () => {} ;
            return {    
                remainsValid ,     
                ...((      
                    BoundedIdentityFunction<{ close: () => void ; }>()({
                        close ,          
                    })
                )) ,
            } ;                                                         
        } ;                      
        return {
            usingCurrentSeqInvalidation1 ,   
        } ;
    }
) ;
   
  




export {  
    useAsyncMemo ,     
    useAsyncStrm ,       
    useAsyncDictStrm , 

    AsyncMemoUsageArgs , 
    AsyncStrmUsageArgs ,   
} ;  