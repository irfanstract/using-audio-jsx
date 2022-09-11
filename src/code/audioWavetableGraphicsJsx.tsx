
import { 
   IterableOps ,
   Immutable ,
} from "./generalUse11";
import { polylineAsPathD, polylineToPathD, } from "./polylineSvg";
import { 
   WavetableProperties ,
   
} from "./audioWavetableProperties";
import { 
   wavetableNameAsUnitPhasePrj ,
   
} from "./audioWavetablePlotting";
import React from "react";
import "./WavetablePlotSvgCss.css";








const WavetableNameC: (
   React.FC<(
      { value: NonNullable<WavetableProperties["shape"] > ; }
   )>
) = (
   ({ value }) => {
      return (
         <i>{ value && String(value) }</i>
      ) ;
   }
) ;
function wavetablePlot(...[{ shape, f, } , { samplingDomainSpan, } ] : [
   model: (
      NonNullable<(
         WavetablePlotCProps["model"]
      )>
   )  ,
   displayProperties : {
      samplingDomainSpan: (
         NonNullable<(
            WavetablePlotCProps["samplingDomainSpan"]
         )>
      ) ;
   } ,
]) {
   ;
   const fnc = (
      wavetableNameAsUnitPhasePrj
   )(shape ) ;
   const fncSampled = (
      fnc ?
      (
         Immutable.Range(0, samplingDomainSpan, 1 / (f * (4 * 5 ) ) )
         .map((t) => (
            { t, v: fnc(t * f ) , }
         ) )
         .map(({ t, v }, i: number ) => (
            { x: t, y: v, }
         ) )
      )
      : null
   ) ;
   return {
      eSampled: fncSampled ,
   } ;
}




type WavetablePlotCProps = (
   { 
      model : (
         WavetableProperties
         & { f : number ; }
      ) ;
      samplingDomainSpan : number ;
      
   }
) ;
const WavetablePlotCProps = {} ;
const WavetableBbPlotSvgGElementC: (
   React.FC<(
      WavetablePlotCProps
      & { style ?: React.CSSProperties ; }
   )>
) = (
   ({ model, samplingDomainSpan, style: elementStyle }) => {
      const { eSampled } = (
         wavetablePlot(model , { samplingDomainSpan } )
      ) ; //
      if (eSampled) {
         // const pathD0 = 
         //
         //
         //
         //
         ;
         const pathD = (
            polylineAsPathD((
               Immutable.Seq([
                  ...eSampled ,
                  ...(
                     eSampled
                     .reverse()
                     .map(({ x, y }) => ({ x: x + 0.1, y }) ) 
                  ) ,
               ])
            ) )
         ) ;
         return (
            <g style={{ fill: "gray", ...elementStyle }} >
               <g>
                  <title>
                     the wave-shape :
                     { String(model.shape ) }
                  </title>
                  <g style={{ filter: ` ` }} >
                     <path d={pathD } style={{ strokeWidth: "0.1px" }} />
                  </g>
               </g>
               { (() => {
                  const length = 1000 ;
                  const hoverRad = 0.1 ;
                  return (
                     <g>
                        <title>
                           '0'-line/meridian
                        </title>
                        <rect y={-hoverRad } height={hoverRad + hoverRad } width={length } style={{ fill: "rgba(0, 0, 0, 0.01)" }} />
                        <g style={{ pointerEvents: "none" }}>
                           <rect height={0.025 } width={length } style={{ fill: "yellow" }} />
                        </g>
                     </g>
                  ) ;
               })() }
            </g>
         ) ;
      }
      return null ;
   }
) ;
const WavetableBbPlotSvgC: (
   React.FC<(
      WavetablePlotCProps
      & { style ?: React.CSSProperties ; }
   )>
) = (
   ({ style: elementStyle, ...props } ) => {
      const { model, samplingDomainSpan, } = props ;
      const viewboxLen : (
         typeof samplingDomainSpan
      ) = (
         samplingDomainSpan
      ) ;
      const modelRendered = (
         <WavetableBbPlotSvgGElementC 
         {...props }
         />
      ) ;
      return (
         <div>
            <p>
               <WavetableNameC value={props.model.shape } />
            </p>
            <svg
            viewBox={`0 -1 ${viewboxLen} 2` }
            preserveAspectRatio="none"
            style={{
               background: "black" ,
               ...elementStyle ,
            }}
            >
               <g transform={`scale(1, -1) ` } >
                  { modelRendered }
               </g>
            </svg>
         </div>
      ) ;
   }
) ;





;
// TODO
export {
   WavetableNameC ,
   WavetablePlotCProps ,
   WavetableBbPlotSvgGElementC ,
   WavetableBbPlotSvgC ,
} ;