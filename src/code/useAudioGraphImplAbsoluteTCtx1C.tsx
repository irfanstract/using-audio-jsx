 
// utility imports     
import Immutable from "immutable";    
import { IterableOps } from "./generalUse11";  
import React from "react";               
import { K, ComponentProps, ContextReturnType, arrayIndexedOrderedList } from "./commonElements";    
        
// domain imports, and CSS imports
import newInstance from "./useAudioGraphImplAbsoluteTCtxFactory1" ;   
import { ModifyingCompPayloadDiv as ModifyingCompPayloadDiv, LoopingCompContentDiv } from "./useAudioGraphImplFComponentsSemanticsBasic";      

   
                   

            
    

// import newInstance from "./audioLoopDemoScheduledTCtxConstructor" ;      
const {       
   currentTCtx ,                              
   currentTScaleCtx ,              
   currentTInfCtx ,                          
   useCurrentTInf ,          
                    
}  =newInstance() ;        

/**               
* applies `delay` ;    
* this will be `relatively`, 
* in face of {@link currentTScaleCtx presence of `current t-scale` }
*/    
const {
   WithDelay ,  
   WithSlowdown ,  
   
} = (() => {
   type DelayOrSlowdownCProps = (
      {
         value: number;
         children: React.ReactNode & object ;
      }
   );
   return {
      WithDelay: (
         function WithRelativeDelay({ children: payload, value: addendBeforeScaling }: (
            DelayOrSlowdownCProps
         )) {
            ;
            const tInf = (
               useCurrentTInf()
            );
            /**   
             * tale caution of 'current t-scale'
             */
            return (() => {
               const { t: parentTVal, tScale } = (
                  tInf
               );
               const v = (
                  parentTVal
                  +
                  (addendBeforeScaling * tScale)
               );
               return (
                  <currentTCtx.Provider
                     value={v}
                  >
                     <ModifyingCompPayloadDiv>
                        {payload || null}
                     </ModifyingCompPayloadDiv>
                  </currentTCtx.Provider>
               );
            })();
         }
      ),
      WithSlowdown: (
         function WithSlowdown1({ children: payload, value: specifiedFct }: (
            DelayOrSlowdownCProps
         )) {
            ;
            const tInf = (
               useCurrentTInf()
            );
            /**   
             * tale caution of 'current t-scale'
             */
            return (() => {
               const { t: parentTVal, tScale: parentTSclVal } = (
                  tInf
               );
               return (
                  <currentTScaleCtx.Provider
                     value={specifiedFct * parentTSclVal}
                  >
                     <ModifyingCompPayloadDiv>
                        {payload || null}
                     </ModifyingCompPayloadDiv>
                  </currentTScaleCtx.Provider>
               );
            })();
         }
      ),
   };
})() ;     
const WithSpeedF = (
   // TODO
   ({ value, children, ...props } : ComponentProps<typeof WithSlowdown > ) => (
      <WithSlowdown value={1 / value } {...props } >
         { children }
      </WithSlowdown>
   )
) ;

function CurrentTDisplay() {
   const { t, tScale } = (
      useCurrentTInf()
   );
   return (
      <div>
         <p> <i> Absolute/Canonical Timing </i> information </p>
         <table>
            <tbody>

               <tr>
                  <td> <code>t</code> </td>
                  <td> <code>{t}</code>      </td>
               </tr>
               <tr>
                  <td>  <code>t-scale</code> </td>
                  <td> <code>{tScale}</code>      </td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}              

const WithCurrentTInfo = (
   currentTInfCtx.Consumer  
) ;         






export {
   currentTCtx ,                              
   currentTScaleCtx ,              
   currentTInfCtx ,                          
   useCurrentTInf ,          
   
   WithDelay ,
   WithSlowdown ,
   WithSpeedF ,

   CurrentTDisplay ,
   WithCurrentTInfo ,
} ;