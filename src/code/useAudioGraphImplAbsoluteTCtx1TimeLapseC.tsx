 
// utility imports     
import Immutable from "immutable";    
import { IterableOps } from "./generalUse11";  
import { 
    AudioTrackConcatClippingMode , 
    avTrackConcatShallPropagate ,   
} from "./timelineConcatClippingMode";    
import React from "react";               
import { useDeferredRecompute } from "./usingDeferredRecompute";
import { useRealTimeQueryInterval1 } from "./usingTimeoutOrIntervalScannedValue";
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
import { useCurrentDestNdRefAndCtxT } from "./useAudioGraphImplCurrentDestNdRefCtx";

   
                   

            
    

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
   const CXPortalImpl = (
   function ({
      payload: [{}, payload ] ,
      target ,
   } : { 
      payload: [{} , object & React.ReactNode ] ; 
      target: SVGElement ;
   } ) {
      const { currentTime: aCtxT } = (
         useCurrentDestNdRefAndCtxT()
      ) ;
      const expectedTInf = (
         useCurrentTInf()
      ) ;
      const { t: expectedT, tScale: expectedTScale } = expectedTInf ;
      return (
         React.useMemo((): React.ReactElement => (
            ( (/* expectedTInf */ ) => {
               ;
               const afterExpectedVsActualTPassageStateGrayoutFilter = (
                  (payload: object & React.ReactNode ) => (
                     <>
                     { (
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
                     </>
                  )
               ) ;
               ;
               const p = (
                  /**   
                   * mounting {@link React.createPortal }s can impose significant overhead.
                   * for this reason,
                   * it's strongly recommended to use a {@link React.useDeferredValue deferring } indirection like this.
                   */
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
            } )()
         ) , [aCtxT && Math.floor(aCtxT / 2 ) , expectedT, expectedTScale ] )
      ) ;
   }
   ) ;
   return ( 
      (...[a]: Parameters<typeof CXPortalImpl > ) => (
         <CXPortalImpl {...a } />
      )
   ) ;
   })() ;
   const CImplRenderPortalWithLowAnimPriority = (
      (props : Parameters<typeof renderPortalImpl>[0 ] ) => {
         const ml: number = 4 ;
         const scanTs = (
            Immutable.Range(-2, 2E5, ml )
         ) ;
         const {
            currentTime: aCtxTime ,
         } = (
            useCurrentDestNdRefAndCtxT()
         ) ;
         /**    
          * the {@link aCtxTime } when this *component* was mounted.
          * this will generally not necessarily be the actual, user-noticeable pop-up time.
          */
         const mount0T = (
            React.useMemo((): number => (
               aCtxTime 
               || 0 
            ) , [!!aCtxTime ] )
         ) ;
         /**   
          * the {@link aCtxTime } at which the actual (user-noticeable ) pop-up shall take place at.
          * not necessarily {@link mount0T }.
          */
         const popupT = (
            React.useMemo(() => (
               mount0T && 
               (scanTs.find((scnT: number) => (mount0T <= (scnT + ml ) ) )! + 0 )
            ) , [typeof mount0T ] )
         ) ;
         return (
            React.useMemo<null | React.ReactElement>(() => {
               if ( (popupT && aCtxTime ) ) {
                  if (popupT <= aCtxTime ) { 
                     const payload0 = props.payload[1] ;
                     const payload1 = (
                        <g>
                        <title>
                           {JSON.stringify({ mount0T, popupT, aCtxTime }) }
                        </title>
                        <g>
                           { payload0 }
                        </g>
                        <rect 
                        width={0.333 }
                        height={0.2 }
                        fill={"blue" }
                        />
                        </g>
                     ) ;
                     return (
                        <>
                        { renderPortalImpl({ target: props.target, payload: [props.payload[0], payload1 ] } ) }
                        </>
                     ) ;
                  }
               }
               return (
                  null
               ) ;
            } , [aCtxTime && Math.floor(aCtxTime ) ] )
         ) ;
      }
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