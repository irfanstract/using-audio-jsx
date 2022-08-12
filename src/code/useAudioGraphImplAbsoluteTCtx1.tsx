 
// utility imports     
import Immutable from "immutable";    
import { IterableOps } from "./generalUse11";  
import { 
    AudioTrackConcatClippingMode , 
    avTrackConcatShallPropagate ,   
} from "./timelineConcatClippingMode";    
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
    useCurrentTInf ,          
                     
}  =newInstance() ;        
function CurrentTDisplay() {      
    const { t, tScale } = (
        useCurrentTInf()        
    ) ;                     
    return (       
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
        const tInf = (  
            useCurrentTInf()           
        ) ;
        /**   
         * tale caution of 'current t-scale'
         */
        return (() => {      
            const { t: parentTVal, tScale } = (   
                tInf 
            ) ;    
            return (     
                <currentTCtx.Provider 
                value={parentTVal + (addend * tScale ) } 
                >
                    <ModifyingCompPayloadDiv>
                    { c || null }
                    </ModifyingCompPayloadDiv>              
                </currentTCtx.Provider> 
            ) ;     
        })() ;
    }     
);     
const WithCurrentTInfo = (
    currentTInfCtx.Consumer  
) ;
//                         
const LoopingWithPeriod = (
    IterableOps.identity<(                 
        React.FC<(                                      
            (   
                /**  domain properties   */   
                {             
 
                    /**       
                     * the markup children will be the *repeand*.        
                     */  
                    children : (   
                        React.ReactNode  
                        | 
                        ((ctx: { perInstanceRelativeT: number ; } ) => React.ReactElement )
                    ) ;
        
                    value: {      
                        period: number ;                                             
                        initialOffset ?: number ;         
                        // clippingMode ?: AudioTrackConcatClippingMode ;          
                    } ;                     
           
                }    
                &    
                /**   display properties  */        
                {      
                   
                    visual ?: false | true ;     
                    /**    
                     *  controls the number of looping to display   
                     * */      
                    renderRange : (
                        Readonly<{ n: number ; }>  
                    ) ;                        
                    // autoUnmountMode ?: AudioTrackConcatClippingMode ;      
                     
                }        
            )           
        )>                  
    )>((                           
        function ({      
            children: item ,              
            value: props ,            

            renderRange ,   
            // autoUnmountMode = AudioTrackConcatClippingMode.BOTH_ENDS_DROPPED ,       
            visual = true ,                   

        } ) {      
            const {              
                period : vPeriod ,    
                initialOffset : vInitialOffset = 0 ,        
            } = props ;     
            const effectiveLoopRange = (  
                Immutable.Range(0, renderRange.n )       
            );
            const itemsRendered = (        
                effectiveLoopRange          
                .map((i: number) => (
                    { 
                        t: vInitialOffset + (i * vPeriod ) ,
                    } as const  
                ) )             
                .map(function ({ t: itemT }): React.ReactElement  {       
                    const itemRendered = (
                        (typeof item === "function" ) ?  
                        item({ perInstanceRelativeT: itemT }) : item
                    ) ;
                    return (                      
                        <div  >    
                            <p> item at <code>t= { itemT }</code> </p>
                            <WithDelay value={itemT} >
                                { itemRendered }    
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
    useCurrentTInf ,    
    WithCurrentTInfo ,        

    CurrentTDisplay , 
    WithDelay , 
    LoopingWithPeriod , 
} ;           