 
// // utility imports     
// import Immutable from "immutable";    
// import { IterableOps, PromiseReturnValue } from "./generalUse11";  
// import React, { useMemo } from "react";               
// import { ContextReturnType } from "./commonElementsTypes";     
// import { K } from "./commonElements";      
   
// //        
// import { 
//     getACtxMtWithoutAnyFilter1, 
//     useACtxMtWithoutAnyFilter1, 
//     AFeedableAndTappableNca ,

// } from "./useAudioNodexCtxInitAndBeepNcaOnce1";     

       
 
  

          
              
                   
               
// /**   
//  * the same {@link React.Context `Context`} will be returned across calls.  
//  * defines 'the current `dest` '.  
//  * note the `null`ability intended to replect the `null`ability of the arg of {@link usePersistingBeep }
//  */        
//  const ctx0 = (                                 
//     IterableOps.once(async () => {                           
//         return (                    
//             React.createContext<(                                
//                 Pick<AFeedableAndTappableNca, "sideTapPt">   
//                 &  
//                 Record<keyof Pick<AFeedableAndTappableNca, "feedPt"> , AudioNode | null >             
//             )>(await getACtxMtWithoutAnyFilter1() )
//         ) ;  
//     })        
// ) ;    
// /**   
//  * {@link React.lazy } dislikes intrinsic, non-callable components (including `ctx.Provider` )
//  */
// const PWrp = (
//     function <P extends { children ?: unknown ; }>(C : React.ExoticComponent<P> ) : React.FC<P > {
//         return (
//             function (props : P ) {   
//                 return ( 
//                     <C {...props } >    
//                         {props.children }
//                     </C>
//                 ) ;                     
//             }   
//         ) ;
//     }    
// ) ;            
// const Prv1 = (
//     React.lazy(async () => ({ default: PWrp((await ctx0() ).Provider ) }) )
// ) ;               
// const Consm = (
//     React.lazy(async () => ({ default: PWrp((await ctx0() ).Consumer ) }) )
// ) ;                    
// const WithGivenDest = (                      
//     React.lazy(async () => {       
//         const ctx1 = await ctx0() ;       
//         return {        
//             default : (                   
//                 IterableOps.identity<(
//                     React.FC<(     
//                         React.ProviderProps<(
//                             ContextReturnType<typeof ctx1>["feedPt"]
//                         )>
//                     ) >
//                 )>(function ({ value: newDest, children }) {             
//                     const {
//                         sideTapPt ,                 
//                     } = (     
//                         React.useContext(ctx1 )        
//                     ) ;    
//                     return (         
//                         <Prv1 
//                         // https://reactjs.org/docs/context.html#caveats 
//                         value={(
//                             useMemo(() => (
//                                 (null && console.log({ sideTapPt, newDest })   ) 
//                                 ,
//                                 (null && ({ } as { bar ?: () => void }).bar!()   )      
//                                 ,
//                                 { sideTapPt, feedPt: newDest }   
//                             ) , [sideTapPt, newDest] )  
//                         )}   
//                         >       
//                             { children }
//                         </Prv1>            
//                     ) ;                 
//                 })
//             ) ,                   
//         } ;             
//     })                             
// ) ;                      




















       
 
  

          
              
                   
                
// export {
//     Prv1 , 
//     Consm ,   
//     WithGivenDest , 
// } ;
const [] = [] ;
console.error((
    TypeError((
        `legacy import. please switch to that at the new path directly` 
    ))
) ) ;                   
export * from "./useAudioGraphImplCurrentDestNdRefCtx" ;