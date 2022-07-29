
// import { 
//     IterableOps , 
     
// } from "./generalUse11";     
// import React, { useReducer, useState } from "react";  

         

// // domain-imports        
// import * as tCtxs from "./useAudioGraphImplAbsoluteTCtx1";   
// import { useACtxMtWithoutAnyFilter1 } from "./useAudioNodexCtxInitAndBeepNcaOnce1";
// import { 
//     CHalfSecndBeepAtAbsoluteT ,    
//     CAmpModulated as CAmpModulated0 ,    
//     CBiquadFilterModulated ,       
    
//     CPersistingBeep ,    
    
//     nonterminalUsageWrapC , 
//     terminalUsageWrapC ,  

// } from "./useAudioGraphImplCurrentDestNdRefCtxC";     
// import * as audioFltAtAbsTNodes from "./useAudioNodesBasicUseBeep";      
// import * as audioFrqAnlyAtAbsTNodes from "./useAudioNodesCrossmasking1";        
// const CHalfSecndBeep1 = (              
//     function () {     
//         const TC = (           
//             tCtxs.currentTInfCtx.Consumer
//         ) ;
//         return (    
//             <TC>
//                 { ({ t }) => (
//                     <>
//                     <code>CH { t } </code>  
//                     <CHalfSecndBeepAtAbsoluteT value={{ t: t, toneFreq: 418 }} />
//                     </>
//                 ) }
//             </TC>
//         ) ;   
//     }
// ) ;   
// const CFreqDmAnalyF = (   
//     nonterminalUsageWrapC(audioFrqAnlyAtAbsTNodes.useAuTapOutputFreqDmAnalyFlt )
// ) ;
// const CWhiteNoise = (
//     terminalUsageWrapC(audioFltAtAbsTNodes.useWhiteNoise )
// ) ;            
// const CAmpModulated1 = (
//     IterableOps.identity<typeof CAmpModulated0>((
//         function ({ children, value: ctrlSrc }) {                     
//             const ctrlFnl = (  
//                 // TODO
//                 <CFreqDmAnalyF value={{ refreshIntervalMillis: (2 ** -4 ) * 1000 } } >
//                     { ctrlSrc }
//                 </CFreqDmAnalyF>
//             ) ;               
//             ;         
//             return (          
//                 <CAmpModulated0 value={ctrlFnl} >
//                     { children }
//                 </CAmpModulated0>
//             ) ;
//         }    
//     ))
// ) ;  
// const CAmpModulated: typeof CAmpModulated0 = (  
//     CAmpModulated1   
// ) ;   
  











// export {
//     CHalfSecndBeep1 , 
//     CAmpModulated , 
//     CAmpModulated1 ,          
//     CAmpModulated0 ,   
//     CBiquadFilterModulated ,  
//     CPersistingBeep ,    
//     CFreqDmAnalyF , 
//     CWhiteNoise , 

//     CHalfSecndBeepAtAbsoluteT , 
// } ;                        

const [] = [] ;
export * from "./useAudioGraphImplFComponents";