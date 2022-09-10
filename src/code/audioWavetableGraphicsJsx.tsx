
import { 
   IterableOps ,
   Immutable ,
} from "./generalUse11";
import { 
   WavetableProperties ,
   
} from "./audioWavetableProperties";
import { 
   wavetableNameAsUnitPhasePrj ,
   
} from "./audioWavetablePlotting";
import React from "react";








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
const OscillatorNodePlotSvgGElementC: (
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
const OscillatorNodePlotSvgC: (
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
         <OscillatorNodePlotSvgGElementC 
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
   OscillatorNodePlotSvgGElementC ,
   OscillatorNodePlotSvgC ,
} ;