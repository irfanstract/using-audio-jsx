
import { IterableOps } from "./generalUse11";
import { SupportedFShiftAmtInterpretation } from "./audioFreqShiftInterpretation1";
import React, { useReducer, useState } from "react";   
import { K, ComponentProps, ContextReturnType } from "./commonElements";      
import { 
    useOneWayCompletiveState ,      
            
} from "./useCompletion";    
import { useAsyncMemo } from "./useAsyncMemo";          

     
   
import {            
   CurrentCtxTInfoDisplay ,    
   Prv1 ,                
   useADestNdRefCtx1 , 
   Consm as WithCurrentDestNdRef ,
   
} from "./useAudioGraphImplCurrentDestNdRefCtx";     
import { WithSpecifiedGVisTarget } from "./useAudioGraphImplAbsoluteTCtx1TimeLapseC";











const WithAuInstrumentsVisualisation = (
   function ({ children: c1 } : (
       { children: object & React.ReactElement ; }
   ) ) {
      ;
      const tT = 0 ;
      const [gVisTarget, setGVisTarget] = (
         React.useState<null | SVGElement >(null )
      ) ;
      ;
      const instrumentsVisualiView = (
         <div 
         title={(
            `Graphical visualisation of the simulated instruments in time-lapse.`
         )} 
         >
         <svg 
         viewBox="0 0 512 16" 
         preserveAspectRatio={"none" } 
         style={{ height: "3em", width: "98%", background: "yellow" }}
         >
            <WithCurrentDestNdRef>
                  { ({ currentTime: aCtxT }) => (
                     <g 
                     /**   
                     * string-concatenation on SVG JSX
                     * should be substituted with combination between CSS *custom properties* and *transforms*
                     * to maintain performance `XD`
                     */
                     style={{
                        transform: (
                              [
                                 `scale(24, 16 )` ,
                                 `translate(calc(var(--COMPONENTLOCALLY-DATA-ACTX-T ) * -1px ) , 0px )` ,
                              ].join(" ")
                        ) ,
                        ...({
                              "--COMPONENTLOCALLY-DATA-ACTX-T" : (
                                 (typeof aCtxT === "number") ? aCtxT : tT 
                              ) ,
                        }) ,
                     }}
                     >
                        <g ref={setGVisTarget } />
                     </g>
                  ) }
            </WithCurrentDestNdRef>
         </svg>
         </div>
      ) ;
      ;
      return (
         <WithSpecifiedGVisTarget value={gVisTarget} >
            <div>   
            <K>
                  { instrumentsVisualiView }
            </K>
            <K>
                  { true && c1 }    
            </K>
            </div>                 
         </WithSpecifiedGVisTarget>  
      ) ;
   }
) ;



export {
   WithAuInstrumentsVisualisation ,
} ;