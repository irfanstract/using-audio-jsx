 
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

   
                   

            
    

const {
   AsGVis ,
   WithSpecifiedGVisTarget ,
   WithSpecifiedGVisGFlt ,
   
} = (() : {
   /**    
    * this *component* will 
    * attach a plot with 
    * effective *horizontal direction* and display-scale (`XScale*YScale`) `1 * 2` .
    */
   AsGVis : (
      React.FC<{ children: (React.ReactElement) | React.ReactElement[] ; }>
   ) ;
   /**    
    * this *component* 
    * shall (re)direct all attachments implied by {@link AsGVis } into given {@link SVGElement}.
    * 
    * @deprecated
    */
   WithSpecifiedGVisTarget: (
      React.FC<(
         React.ProviderProps<null | SVGElement >
      )>
   ) ,
   /**   
    * use this *boundary* 
    * to apply *isometric filtering* (eg `saturate`, `gray`, `brightness`, `blur`, but not `scale` ) onto the plotting.
    */
   // TODO
   WithSpecifiedGVisGFlt : (
      React.FC<(
         React.ProviderProps<(src : React.ReactElement) => React.ReactElement >
      )>
   ) ;
   
} => {
   const eCtx = (
       React.createContext<null | (
         (payload : Parameters<typeof renderPortalImpl >[0]["payload"] & object ) 
         =>
         (React.ReactPortal | React.ReactElement )
      )>(null )
   ) ;
   function renderPortalImpl({
      payload: [tInf, payload ] ,
      target ,
   } : { 
      payload: [ReturnType<typeof useCurrentTInf> , React.ReactElement | React.ReactElement[] ] ; 
      target: SVGElement ;
   } ) {
      ;
      const { t, tScale } = tInf ;
      ;
      return (
         ReactDOM.createPortal((
            <g transform={`translate(${t}, 0 ) scale(${tScale} , 1 )` } >
            { payload }
            </g >
         ) , target )
      ) ;
   }
   const AsGVis0 = (
      function ({ children: payload } : { children: (React.ReactElement) | React.ReactElement[] ; }) {
         const target = (
            React.useContext(eCtx )
         ) ;
         const tInf = (
            useCurrentTInf()
         ) ;
         return (
            target ?
            <  >
            { target([tInf, payload] ) }
            </ >
            : <></>
         ) ;
      }
   ) ;
   const WithSpecifiedGVisTarget0 = (
      function ({ value: target, children: payload } : (
         React.ProviderProps<null | SVGElement >
      ) ) {
         const C1 = (
            eCtx.Provider
         ) ;
         const r : ContextReturnType<typeof eCtx > & object = (
            ([tInf, payload]) => (
               target ?
               <  >
               { renderPortalImpl({ payload: [tInf, payload], target }) }
               </ >
               : <></>
            )
         ) ;
         return (
            <C1 value={r } >
               { payload }
            </C1>
         ) ;
      }
   ) ;
   const WithSpecifiedGVisFlt0 = (
      function ({ value: flt1, children: payload } : (
         (
            React.ProviderProps<(src : React.ReactElement) => React.ReactElement >
         )
      ) ) {
         const target = (
            React.useContext(eCtx )
         ) ;
         const C1 = (
            eCtx.Provider
         ) ;
         const r : ContextReturnType<typeof eCtx > & object = (
            ([tInf, payload]) => (
               target ?
               <  >
               { target([tInf, flt1(<K>{ payload }</K> ) ]) }
               </ >
               : <></>
            )
         ) ;
         return (
            <C1 value={r } >
               { payload }
            </C1>
         ) ;
      }
   ) ;
   return {
      AsGVis: AsGVis0 ,
      WithSpecifiedGVisTarget: (
         WithSpecifiedGVisTarget0
      ) ,
      WithSpecifiedGVisGFlt: (
         WithSpecifiedGVisFlt0
      ) ,
   } ;
})() ;




export {
   AsGVis ,
   WithSpecifiedGVisTarget ,
   WithSpecifiedGVisGFlt ,
} ;