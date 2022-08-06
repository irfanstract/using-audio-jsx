 
// utility imports     
import Immutable from "immutable";    
import { IterableOps } from "./generalUse11";  
import React from "react";               
import { K, arrayIndexedOrderedList } from "./commonElements";          
 
// domain imports, and CSS imports
import newInstance from "./useAudioGraphImplAbsoluteTCtxFactory1" ;   
import { ModifyingCompPayloadDiv as ModifyingCompPayloadDiv, LoopingCompContentDiv } from "./useAudioGraphImplFComponentsSemanticsBasic";      

   
                

            
  

function useConditionalDeference1(e : React.ReactElement, perios : number ) {
    const e0 = React.useDeferredValue(e ) ;
    return (3 <= perios ) ? e0 : e  ;
}     
// import newInstance from "./audioLoopDemoScheduledTCtxConstructor" ;      
const {       
    currentTCtx ,                              
    currentTScaleCtx ,           
    currentTInfCtx ,                       
                     
}  =newInstance() ;        
function CurrentTDisplay() {         
    return (                  
        <currentTInfCtx.Consumer>                  
            { ({ t, tScale } ) => (  
                <div>   
                    <p> <i> Absolute/Canonical Timing </i> information </p>  
                    <table>          
                    <tbody>        
                            
                    <tr>              
                        <td> <code>t</code> </td>  
                        <td> <code>{t }</code>      </td>  
                    </tr>            
                    <tr>           
                        <td>  <code>t-scale</code> </td>  
                        <td> <code>{tScale }</code>      </td>  
                    </tr>         
                    </tbody>
                    </table>    
                </div>
            ) }
        </currentTInfCtx.Consumer>
    ) ;     
}              
/**               
 * applies `delay` ;    
 * this will be `relatively`, 
 * in face of {@link currentTScaleCtx presence of `current t-scale` }
 */    
const WithDelay = (
    function WithRelativeDelay({ children: c, value: addend }: (
        React.PropsWithChildren<{ value: number ; }>      
    ) ) {
        ;   
        /**   
         * tale caution of 'current t-scale'
         */
        return (   
            <currentTInfCtx.Consumer>                             
                { ({ t: parentTVal, tScale }) => (
                    <currentTCtx.Provider 
                    value={parentTVal + (addend * tScale ) } 
                    >
                        <ModifyingCompPayloadDiv>
                        { c || null }
                        </ModifyingCompPayloadDiv>              
                    </currentTCtx.Provider>
                ) }
            </currentTInfCtx.Consumer>
        ) ;
    }
);
//                        
const LoopingWithPeriod = (
    IterableOps.identity<(                 
        React.FC<(     
            React.PropsWithChildren<{      

                /**  domain properties   */      
                value: {   
                    period: number ;   
                    initialOffset ?: number ;        
                } ;          
   
                /**   display properties  */       
                renderRange : (
                    Readonly<{ n: number ; }>
                ) ;         
                visual ?: false | true ;    
                 
            }>         
        )>                  
    )>((                           
        function ({
            children: item ,        
            value: props ,                     
            renderRange ,       
            visual = false ,                       
        } ) {   
            const {    
                period : vPeriod ,       
                initialOffset : vInitialOffset = 0 ,    
            } = props ;
            const itemsRendered = (        
                Immutable.Range(0, renderRange.n )  
                .map((i: number) => (
                    { 
                        t: vInitialOffset + (i * vPeriod ) ,
                    } as const  
                ) )
                .map(function ({ t }): React.ReactElement  {        
                    return (                             
                        <div  >    
                            <p> item at <code>t= { t }</code> </p>
                            <WithDelay value={t} >
                                { item }    
                            </WithDelay>                
                        </div>         
                    ) ;    
                })                 
            ) ;    
            return (    
                <div>              
                    <p> a loop </p>          
                    <div style={{ display: (visual === false ) ? "none" : "unset" }} >  
                        <LoopingCompContentDiv   >    
                        { arrayIndexedOrderedList(itemsRendered )   } 
                        </LoopingCompContentDiv >       
                    </div>
                </div> 
            ) ;                
        }  
    ))
) ;
                     
            

           
  


       

export {   
    currentTCtx , 
    currentTScaleCtx ,       
    currentTInfCtx ,      

    CurrentTDisplay , 
    WithDelay , 
    LoopingWithPeriod , 
} ;   