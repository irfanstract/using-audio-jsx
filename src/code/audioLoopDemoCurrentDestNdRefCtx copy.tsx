 
// // utility imports     
// import Immutable from "immutable";    
// import { IterableOps, PromiseReturnValue } from "./generalUse11";  
// import React, { useMemo } from "react";               
// import { ComponentProps, ContextReturnType } from "./commonElementsTypes";
// import { K } from "./commonElements";      

// //
// import { getACtxMtWithoutAnyFilter1, useACtxMtWithoutAnyFilter1, AFeedableAndTappableNca } from "./useAudioNodexCtxInitAndBeepNcaOnce1"; 
// import { usePersistingBeep, YyyUsable } from "./useAudioNodesBasicFlt1";   
// import { 
//     useHalfSecondBeep as useHalfSecondBeepAtAbsoluteT  ,

// } from "./useAudioNodesBasicUseBeep"; 

       
 
  

          
              
                   
               
// /**   
//  * the same {@link React.Context `Context`} will be returned across calls.  
//  * defines 'the current `dest` '.  
//  * note the `null`ability intended to replect the `null`ability of the arg of {@link usePersistingBeep }
//  */        
// const ctx0 = (                                 
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
// const PRV = (                  
//     function <P extends {} >(c0: () => Promise<React.FC<P> > ) {
//         return (      
//             React.lazy(async () => ({ default: await c0() }) )  
//         ) ;   
//     }                                                  
// ) ;            
// // const PRV1 = (        
// //     function <P extends React.PropsWithChildren<{}> >(c0: () => Promise<React.FC<P> > ) {
// //         const C0 = (                        
// //             PRV<P>(c0 )  
// //         ) ;  
// //         return (
// //             function (props: (
// //                 React.PropsWithChildren<(
// //                     ComponentProps<typeof C0 > 
// //                 )>
// //             ) ) {          
// //                 return (
// //                     <React.Suspense>
// //                         <C0 {...props} >
// //                             { props.children }
// //                         </C0>
// //                     </React.Suspense>
// //                 ) ;
// //             }
// //         ) ;   
// //     }       
// // ) ;
// const Prv1 = (
//     PRV(async () => {
//         const C0 = (await ctx0() ).Provider ;    
//         return (
//             function (props: (
//                 React.PropsWithChildren<(
//                     ComponentProps<typeof C0 > 
//                 )>
//             ) ) {          
//                 return (
//                     <React.Suspense>
//                         <C0 {...props} >
//                             { props.children }
//                         </C0>
//                     </React.Suspense>
//                 ) ;
//             }
//         ) ;   
//     })
// ) ;             
// const Consm = (
//     PRV(async () => {
//         const C0 = (await ctx0() ).Consumer ;    
//         return (          
//             function (props: (
//                 React.PropsWithChildren<(
//                     ComponentProps<typeof C0 > 
//                 )>
//             ) ) {          
//                 return (        
//                     <React.Suspense>
//                         <C0 {...props} >
//                             { props.children }
//                         </C0>
//                     </React.Suspense>
//                 ) ;
//             }
//         ) ;   
//     })
// ) ;                      
// /*     */ 
// /**     */
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
//                         value={useMemo(() => ({ sideTapPt, feedPt: newDest }) , [sideTapPt, newDest] ) }   
//                         >       
//                             { children }
//                         </Prv1>            
//                     ) ;                 
//                 })
//             ) ,                   
//         } ;             
//     })                             
// ) ;                        
// const terminalUsageWrapC = (              
//     function <Props1>(useYyy: YyyUsable<Props1, void > ) { 
//         type C = (       
//             React.FC<(     
//                 React.PropsWithChildren<{ value: Props1 ; } > 
//             )> 
//         ) ;                          
//         return (
//             React.lazy(async () => {
//                 const ctx1 = await ctx0() ;                    
//                 return {    
//                     default: (   
//                         IterableOps.identity<C >(function ({ value, children }) {    
//                             const {                             
//                                 feedPt: nd0 ,                                              
//                             } = (
//                                 React.useContext(ctx1 ) 
//                             ) ;                                                          
//                             const _2 = (                 
//                                 useYyy(nd0, value )                         
//                             ) ;
//                             return (        
//                                 <p>
//                                     Graph 
//                                     <code>{useYyy.name }</code>
//                                 </p>    
//                             ) ;
//                         })
//                     ) ,             
//                 } ;  
//             })
//         ) ;     
//     }          
// ) ;     
// /**   
//  * DO NOT USE THIS AT HIGH-LEVEL LAYER ; 
//  * THIS RENDERER DOES NOT HONOUR `currentScheduletT`       
//  *  
//  */  
// const CHalfSecndBeepAtAbsoluteT = (
//     terminalUsageWrapC(useHalfSecondBeepAtAbsoluteT )
// ) ;  
// /**    
//  *  
//  */  
// const CPersistingBeep = (
//     terminalUsageWrapC(usePersistingBeep )
// ) ;    

              


  






// export {
//     Consm , 
//     WithGivenDest ,    
//     terminalUsageWrapC ,      

//     CHalfSecndBeepAtAbsoluteT as CHalfSecndBeepAtAbsoluteT ,   
//     CPersistingBeep , 
// } ;

export {} ;