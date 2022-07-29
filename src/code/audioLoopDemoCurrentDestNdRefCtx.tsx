 
// // utility imports     
// import Immutable from "immutable";    
// import { IterableOps, PromiseReturnValue } from "./generalUse11";  
// import React, { useMemo } from "react";               
// import { ComponentProps, ContextReturnType } from "./commonElementsTypes";     
// import { K } from "./commonElements";      

// //
// import { 
//     WithGivenDest ,  
//     Prv1 ,        
//     Consm , 

// } from "./useAudioGraphImplCurrentDestNdRefCtx";    
// import { usePersistingBeep, YyyUsable } from "./useAudioNodesBasicFlt1";        
// import {                   
//     useHalfSecondBeep as useHalfSecondBeepAtAbsoluteT  ,
         
// } from "./useAudioNodesBasicUseBeep"; 
// import * as audioFltAtAbsTNodes from "./useAudioNodesBasicUseBeep";      

       
 
  

              
              
                   
         
// /**    
//  * 
//  * @example
//  * return (      
//  *   <CBC>{ () => {   
//  *      const data = (
//  *        useSyncExternalStore(() => ... , [....] ) 
//  *      ) ;
//  *      useYyyEffect(.... ... ) ;    
//  *      return (
//  *        <VData value={data } />
//  *      ) ;
//  *   } }</CBC>       
//  * ) ;   
//  */
// const CBC = (
//     function ({ children : useXYyy } : { 
//         /**   
//          * actual implementation is free to invoke `useEffect`, `useState`, etc .  
//          * 
//          */
//         children : () => React.ReactElement ;  
//     }  ) {
//         const e = (      
//             useXYyy()             
//         ) ;
//         // TODO remove this line
//         null && (
//             ({ } as ({ bar ?: () => void } ) ).bar!()  
//         ) ;        
//         return e ;    
//     }                         
// ) ;                            
// const terminalUsageWrapC = (              
//     function <Props1>(useYyy: YyyUsable<Props1, void > ) { 
//         type C = (       
//             React.FC<(     
//                 React.PropsWithChildren<{ value: Props1 ; } > 
//             )> 
//         ) ;                          
//         return (   
//             IterableOps.identity<C >(function ({ value, children }) {    
//                 return (
//                     <Consm>
//                         { function ({ feedPt: nd0 }) {
//                             ;     
//                             return ( 
//                                 <CBC>{ function () {
//                                     ;               
//                                     // return value                                      
//                                     const _2 = (                 
//                                         useYyy(nd0, value )                            
//                                     ) ;
//                                     return (        
//                                         <p>     
//                                             Graph 
//                                             <code>{useYyy.name }</code>
//                                         </p>    
//                                     ) ;         
//                                 } }</CBC>
//                             ) ; 
//                         } }
//                     </Consm>    
//                 ) ;                     
//             })
//         ) ;   
//     }          
// ) ;       
// const nonterminalUsageWrapC = (               
//     function <Props1>(useYyy: YyyUsable<Props1, AudioNode | null > ) { 
//         type C = (       
//             React.FC<(       
//                 React.PropsWithChildren<{ value: Props1 ; } > 
//             )>    
//         ) ;                          
//         return (   
//             IterableOps.identity<C >(function ({ value, children }) {    
//                 return (
//                     <Consm>
//                         { function ({ feedPt: nd0 }) {     
//                             ;     
//                             return (    
//                                 <CBC>{ function () {
//                                     ;               
//                                     // return value                                      
//                                     const nd2: AudioNode | null = (                 
//                                         useYyy(nd0, value )                            
//                                     ) ;
//                                     return (                                        
//                                         <div>            
//                                             <p lang="en"> 
//                                                 Graph       
//                                                 <code>{useYyy.name }</code>    
//                                             </p>   
//                                             <WithGivenDest value={nd2 }>
//                                                 { children }
//                                             </WithGivenDest>
//                                         </div>                        
//                                     ) ;         
//                                 } }</CBC>
//                             ) ; 
//                         } }
//                     </Consm>    
//                 ) ;                     
//             })
//         ) ;   
//     }          
// ) ;          
// /**    
//  * wrapper, for {@link useGainModulatedPt }   
//  */
// const modulatedAmpUsageWrapC = (        
//     // TODO       
//     function <Props1>(useYyy: (typeof audioFltAtAbsTNodes)["useGainModulatedPt"] ) {     
//         const {          
//             usePModulating ,                        
//         } = (
//             audioFltAtAbsTNodes               
//         ) ;                   
//         type C = (       
//             React.FC<(                  
//                 React.PropsWithChildren<{ 
//                     /**    
//                      * defines the control graph ; `null` for 'mute' . 
//                      * as opposed to `children` which would defines the main/primary graph.  
//                      */      
//                     value: React.ReactElement | null ;  
//                 } >   
//             )>              
//         ) ;                                   
//         const useC1 = (
//             function (nd0 : AudioNode | null ) {      
//                 ;                                 
//                 const {     
//                     ampCtrl ,            
//                     main : mainFeed ,       
//                 } = (               
//                     useYyy(nd0  )                                                                  
//                 ) ;      
//                 const ampCtrl1 = (
//                     // as AudioNode     
//                     usePModulating(ampCtrl, mainFeed?.context || null  )   
//                 ) ;   
//                 return {
//                     mainFeed ,     
//                     ampCtrl1 ,                   
//                 };
//             }
//         ) ;            
//         return (   
//             IterableOps.identity<C >(function ({ value: ctrlChildren, children }) {    
//                 const useC11 = (
//                     function ({ feedPt: nd0 } : ( 
//                         Parameters<(             
//                             Required<(
//                                 ComponentProps<typeof Consm > 
//                             )>["children"]     
//                         )>[0 ]
//                     ) ) {              
//                         ;                                 
//                         const {
//                             mainFeed , 
//                             ampCtrl1 ,                    
//                         } = (       
//                             useC1(nd0 )
//                         ) ;
//                         const c1 = (        
//                             // TODO                
//                             <ol>         
//                             <li>      
//                                 Modulating Mode :      
//                                 <WithGivenDest value={ ampCtrl1 }>
//                                     { ctrlChildren }
//                                 </WithGivenDest>                
//                             </li>   
//                             <li>  
                                   
//                                 Main :  
//                                 <WithGivenDest value={ mainFeed }>
//                                     { children }
//                                 </WithGivenDest>         
//                             </li>
//                             </ol>     
//                         ) ;         
//                         // TODO 
//                         return (                
//                             <div style={{ display: "flex", flexDirection: "column" }} >      
                            
//                             <p>
//                                 Graph      
//                                 <code>{useYyy.name }</code>   
//                             </p>          
//                             { true && c1 }
//                             </div >      
//                         ) ;         
//                     }         
//                 );                                    
//                 return (                  
//                     <Consm>                                   
//                         { a => (
//                             true && <CBC>{ () => useC11(a ) }</CBC>  
//                         ) }       
//                     </Consm>       
//                 ) ;              
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
// const CAmpModulated = (
//     modulatedAmpUsageWrapC(audioFltAtAbsTNodes.useGainModulatedPt )
// ) ;

              


       






// export {
//     Consm , 
//     WithGivenDest ,        
//     terminalUsageWrapC ,      
//     nonterminalUsageWrapC ,    
//     modulatedAmpUsageWrapC , 

//     CHalfSecndBeepAtAbsoluteT as CHalfSecndBeepAtAbsoluteT ,   
//     CPersistingBeep ,   
//     CAmpModulated , 
// } ;
    
const [] = [] ;
export * from "./useAudioGraphImplCurrentDestNdRefCtxC"; 