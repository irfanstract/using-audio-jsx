
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
      const e = (
         wavetableNameAsUnitPhasePrj
      )(model.shape ) ;
      if (e) {
         const pathD0 = (
            Immutable.Range(0, samplingDomainSpan, 1 / (4 * 5) )
            .map((t) => (
               { t, v: e(t ) , }
            ) )
         ) ;
         const pathD = (
            [
               ...(
                  pathD0
                  .map(({ t, v }, i: number ) => (
                     `${(i === 0 ) ? "M" : "L" } ${t} ${v}`
                  ) )
               ) ,
               // no 'z' !
               "z" ,
            ]
            .join(" ")
         ) ;
         return (
            <g style={{ fill: "gray", ...elementStyle }} >
               <path d={pathD } />
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