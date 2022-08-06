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

type DCII = {              

    /**   
     * whether change in `deps` implies that the existing (cached) value is no longer valid
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
        properties : DCII & {              
            f : () => Promise<A > ;                           
        } ,                   
        deps: React.DependencyList,                                  
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
/**     
 * an alternative to {@link useAsyncMemo } 
 * based on `yield`s and intended to 
 * - facilitate iterative-algo-ic code to provide transient results one replaced by subsequently-returned values  
 * - implementing a stream of continuous change 
*/
const useAsyncStrm = (                                                 
    function <A extends AsyncMemoisedValue > (   ...[      
        {                         
            depsChangeImpliesInvalidation ,                                                
            f ,                                                                   
        }  ,                      
        deps ,                                          
    ] : [      
        properties : DCII & {              
            f : () => AsyncGenerator<A > ;                           
        } ,                   
        deps: React.DependencyList,                                  
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
                        1 && console.info("invalidated") ;    
                        break LOOP ;                                                                           
                    }  

                    setS(() => a ) ;        
                }                           
            } , deps )                                    
        ) ;      
        return s ;  
    }
) ;          
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
} ;