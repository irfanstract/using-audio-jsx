 
// utility imports     
import Immutable from "immutable";    
import { IterableOps, PromiseReturnValue } from "./generalUse11";  
import React, { useMemo } from "react";               
import { ContextReturnType } from "./commonElementsTypes";     
import { K } from "./commonElements";      
   
//        
import { 
    getACtxMtWithoutAnyFilter1, 
    useACtxMtWithoutAnyFilter1, 
    AFeedableAndTappableNca ,

} from "./useAudioNodexCtxInitAndBeepNcaOnce1";     

       
 
  

          
              
                   
               
/**   
 * the same {@link React.Context `Context`} will be returned across calls.  
 * defines 'the current `dest` '.  
 * note the `null`ability intended to replect the `null`ability of the arg of {@link usePersistingBeep }
 */        
 const ctx0 = (                                 
    IterableOps.once(async () => {    
        const c0 = (           
            React.createContext<(                                
                Pick<AFeedableAndTappableNca, "sideTapPt">   
                &  
                Record<keyof Pick<AFeedableAndTappableNca, "feedPt"> , AudioNode | null >             
            )>(await getACtxMtWithoutAnyFilter1() )
        ) ;                   
        c0.displayName = (
            `ACtxtualDesinationRefCtx`
        ) ;     
        return (                     
            c0     
        ) ;  
    })        
) ;    
/**   
 * for these reasons :               
 * - {@link React.lazy } 
 *   dislikes intrinsic, non-callable components (including `ctx.Provider` ) 
 * - use of {@link React.lazy }  
 *   will not play well with WebpackDevServer's HMR         
 */  
const PWrp = (
    function <P extends {
        children ?: unknown ;   
    }>(C : React.ExoticComponent<P> ) : React.FC<P > {
        return (
            function InPWrp(props : P ) {     
                return (       
                    <K key={C.length || 3 }  > 
                    <C {...props } >    
                        {props.children }
                    </C>   
                    </K>   
                ) ;                     
            }      
        ) ;         
    }                 
) ;                     
const {
    Prv1 ,    
    Consm ,  

} = (() => {             
    const wrapped0 = (
        function <P extends {    
            children ?: unknown ;   
        }>(C0 : () => Promise<React.ExoticComponent<P> > ) {
            return (                
                PWrp((
                    React.lazy(async () => ({ default: PWrp(await C0() ) }) )
                ))    
            ) ;  
        }
    ) ;       
    return {  
        Prv1 : (   
            wrapped0(async() => (await ctx0() ).Provider )
        ) ,                
        Consm : (   
            wrapped0(async() => (await ctx0() ).Consumer )
        ) ,   
    } ;     
})() ;       
const WithGivenDest = (                      
    React.lazy(async () => {       
        const ctx1 = await ctx0() ;       
        return {        
            default : (                   
                IterableOps.identity<(
                    React.FC<(     
                        React.ProviderProps<(
                            ContextReturnType<typeof ctx1>["feedPt"]
                        )>
                    ) >
                )>(function ({ value: newDest, children }) {             
                    const {
                        sideTapPt ,                 
                    } = (     
                        React.useContext(ctx1 )        
                    ) ;    
                    return (         
                        <Prv1 
                        // https://reactjs.org/docs/context.html#caveats 
                        value={(
                            useMemo(() => (
                                (null && console.log({ sideTapPt, newDest })   ) 
                                ,
                                (null && ({ } as { bar ?: () => void }).bar!()   )      
                                ,
                                { sideTapPt, feedPt: newDest }   
                            ) , [sideTapPt, newDest] )  
                        )}   
                        >       
                            { children }
                        </Prv1>            
                    ) ;                 
                })
            ) ,                   
        } ;             
    })                             
) ;                      




















       
 
  

          
              
                   
                
export {
    Prv1 , 
    Consm ,   
    WithGivenDest , 
} ;