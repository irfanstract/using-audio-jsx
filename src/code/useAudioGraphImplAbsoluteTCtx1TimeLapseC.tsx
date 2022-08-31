 
// utility imports     
import Immutable from "immutable";    
import { IterableOps } from "./generalUse11";  
import { 
    AudioTrackConcatClippingMode , 
    avTrackConcatShallPropagate ,   
} from "./timelineConcatClippingMode";    
import React from "react";               
import ReactDOM from "react-dom" ;
import { K, ComponentProps, ContextReturnType, arrayIndexedOrderedList } from "./commonElements";    
        
// domain imports, and CSS imports
import { ModifyingCompPayloadDiv as ModifyingCompPayloadDiv, LoopingCompContentDiv } from "./useAudioGraphImplFComponentsSemanticsBasic";      
import {
    currentTCtx ,                              
    currentTScaleCtx ,              
    currentTInfCtx ,                          
    useCurrentTInf ,          
    
    WithDelay ,
    WithSlowdown ,
    WithSpeedF ,

    CurrentTDisplay ,
    WithCurrentTInfo ,

} from "./useAudioGraphImplAbsoluteTCtx1C" ;   
import {   
    LoopingWithPeriod ,   
    LwpPayloadCallback ,       
} from "./useAudioGraphImplAbsoluteTCtx1LoopingC" ;

   
                   

            
    

const {
   AsGVis ,
   WithSpecifiedGVisTarget ,
   
} = (() : {
   AsGVis : (
      React.FC<{ children: (React.ReactElement) | React.ReactElement[] ; }>
   ) ;
   WithSpecifiedGVisTarget: (
      React.FC<(
         React.ProviderProps<null | SVGElement >
      )>
   ) ,
   
} => {
   const eCtx = (
       React.createContext<null | SVGElement >(null )
   ) ;
   const AsGVis0 = (
      function ({ children: payload } : { children: (React.ReactElement) | React.ReactElement[] ; }) {
         const target = (
            React.useContext(eCtx )
         ) ;
         const tInf = (
            useCurrentTInf()
         ) ;
         const { t, tScale } = tInf ;
         return (
            target ?
            <  >
            { (
                  ReactDOM.createPortal((
                     <g transform={`translate(${t}, 0 ) scale(${tScale} , 1 )` } >
                     { payload }
                     </g >
                  ) , target )
            ) }
            </ >
            : <></>
         ) ;
      }
   ) ;
   const WithSpecifiedGVisTarget0 = (
       eCtx.Provider
   ) ;
   return {
       AsGVis: AsGVis0 ,
       WithSpecifiedGVisTarget: (
           WithSpecifiedGVisTarget0
       ) ,
   } ;
})() ;




export {
   AsGVis ,
   WithSpecifiedGVisTarget ,
} ;