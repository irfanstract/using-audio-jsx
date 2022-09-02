 
// utility imports     
import Immutable from "immutable";    
import { IterableOps } from "./generalUse11";  
import { 
    AudioTrackConcatClippingMode , 
    avTrackConcatShallPropagate ,   
} from "./timelineConcatClippingMode";    
import React from "react";               
import { useDeferredRecompute } from "./usingDeferredRecompute";
import ReactDOM from "react-dom" ;
import { K, ComponentProps, ContextReturnType, arrayIndexedOrderedList } from "./commonElements";    
import { 
   RDeferredRefreshPortal ,
   RDeferredAppearancePortal ,
} from "./usingPortalElement";
        
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
import { Consm as WithCurrentDestNdRef } from "./useAudioGraphImplCurrentDestNdRefCtx";

   
                   

            
    

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
      React.FC<{ children: object & React.ReactNode ; }>
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
   type RCB = (ContextReturnType<typeof eCtx > & object ) ;
   const renderPortalImpl = (() => {
   return (
   function renderPortalImpl({
      payload: [{}, payload ] ,
      target ,
   } : { 
      payload: [{} , object & React.ReactNode ] ; 
      target: SVGElement ;
   } ) {
      return (
         <WithCurrentTInfo>
            { (expectedTInf ) => {
               ;
               const { t: expectedT, tScale: expectedTScale } = expectedTInf ;
               const afterExpectedVsActualTPassageStateGrayoutFilter = (
                  (payload: object & React.ReactNode ) => (
                     <WithCurrentDestNdRef>
                     { ({ currentTime: aCtxT }) => (
                     (typeof aCtxT === "number" ) ? 
                     <g 
                     style={{ 
                        filter: (
                           (expectedT <= aCtxT ) ? 
                           undefined : `opacity(0.5) saturate(0)` 
                        ) ,
                     } } 
                     >
                     { payload }
                     </g>
                     : null
                     ) }
                     </WithCurrentDestNdRef>
                  )
               ) ;
               ;
               const p = (
                  <RDeferredRefreshPortal dest={target } >
                  <g 
                  style={{
                     transform: (
                        `translate(calc(var(--T ) * 1px ) , 0 ) scale(var(--T-SCL ) , 1 )`
                     ) ,
                     ...{
                        "--T": expectedT ,  
                        "--T-SCL": expectedTScale ,
                     } , 
                  }}
                  >
                  { afterExpectedVsActualTPassageStateGrayoutFilter(payload ) }
                  </g >
                  </RDeferredRefreshPortal>
               ) ;
               return p ;
            } }
         </WithCurrentTInfo>
      ) ;
   }
   ) ;
   })() ;
   const CImplRenderPortalWithLowAnimPriority = (
      (props : Parameters<typeof renderPortalImpl>[0 ] ) => (
         useDeferredRecompute(() => (
            <>
            { renderPortalImpl(props ) }
            </>
         ))
      )
   ) ;
   const AsGVis0 = (
      function ({ children: payload } : { children: object & React.ReactNode ; }) {
         const target = (
            React.useContext(eCtx )
         ) ;
         return (
            target ?
            <  >
            { target([{}, payload] ) }
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
         const r = (
            React.useMemo(() : RCB => (
               ([xInf, payload]) => (
                  target ?
                  <CImplRenderPortalWithLowAnimPriority {...{ payload: [xInf, payload], target }} />
                  : <></>
               )
            ) , [target, ] )
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
         const r = (
            React.useMemo((): RCB => (
               ([xInf, payload]) => (
                  target ?
                  <  >
                  { target([xInf, flt1(<K>{ payload }</K> ) ]) }
                  </ >
                  : <></>
               )
            ) , React.useDeferredValue([target, flt1 ]) )
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