 
// // utility imports     
// import Immutable from "immutable";    
// import { IterableOps } from "./generalUse11";  
// import React from "react";               
// import { K } from "./commonElements";      

// // domain imports, and CSS imports
// import newInstance from "./useAudioGraphImplAbsoluteTCtxFactory1" ;    


                

            
  

// // import newInstance from "./audioLoopDemoScheduledTCtxConstructor" ;      
// const {       
//     currentTCtx ,                              
//     currentTScaleCtx ,           
//     currentTInfCtx ,                       
                     
// }  =newInstance() ;        
// function CurrentTDisplay() {     
//     return (                  
//         <currentTInfCtx.Consumer>           
//             { ({ t } ) => (
//                 <p> current <code>t</code>: <code>{t }</code> </p> 
//             ) }
//         </currentTInfCtx.Consumer>
//     ) ;
// }              
// /**             
//  * applies `delay` ;    
//  * this will be `relatively`, 
//  * in face of {@link currentTScaleCtx presence of `current t-scale` }
//  */    
// const WithDelay = (
//     function WithRelativeDelay({ children: c, value: addend }: (
//         React.PropsWithChildren<{ value: number ; }>      
//     ) ) {
//         ; 
//         /**   
//          * tale caution of 'current t-scale'
//          */
//         return (                             
//             <currentTInfCtx.Consumer>                     
//                 { ({ t: parentTVal, tScale }) => (
//                     <currentTCtx.Provider value={parentTVal + (addend * tScale ) } >
//                         <>{ c } </>          
//                     </currentTCtx.Provider>
//                 ) }
//             </currentTInfCtx.Consumer>
//         ) ;
//     }
// );
// //                        
// const LoopingWithPeriod = (
//     IterableOps.identity<(                 
//         React.FC<(     
//             React.PropsWithChildren<{      

//                 /**  domain properties   */      
//                 value: {   
//                     period: number ;             
//                 } ;          
  
//                 /**   display properties  */ 
//                 renderRange : (
//                     Readonly<{ n: number ; }>
//                 ) ;                  

//             }>   
//         )>           
//     )>((                    
//         function ({
//             children: item ,             
//             value: props ,                 
//             renderRange ,                
//         } ) {               
//             const vPeriod: typeof props.period = (
//                 props.period         
//             ) ;                      
//             const itemsRendered = (   
//                 Immutable.Range(0, renderRange.n )  
//                 .map((i: number) => ({ t: i * vPeriod }) )
//                 .map(function ({ t }): React.ReactElement  {     
//                     return (           
//                         <K key={t } > 
//                             <WithDelay value={t} >
//                                 { item }
//                             </WithDelay>  
//                         </K>
//                     ) ;    
//                 })       
//             ) ;       
//             return (              
//                 <> { itemsRendered } </>        
//             ) ;          
//         }  
//     ))
// ) ;
                
            

           
  


       

// export {
//     currentTCtx , 
//     currentTScaleCtx ,       
//     currentTInfCtx ,      

//     CurrentTDisplay , 
//     WithDelay , 
//     LoopingWithPeriod , 
// } ;  

const [] = [] ;
export * from "./useAudioGraphImplAbsoluteTCtx1";