 
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
const useDescendantCurrentTDiffing = (    
    function () {
        const {   
            t: componentLevelT ,               
            tScale: componentLevelTScale ,        
        } = useCurrentTInf() ;         
        const renderWithInfo = (  
            function (...[cb] : [
                (ctx: { xTDiff : number ; xTScaleValueMultiplitude : number ; } ) => React.ReactElement ,  
            ] ) {   
                return (
                    <WithCurrentTInfo>     
                        { ({ t: descendantTVal, tScale: descendantTSclVal }) => (
                            cb({  
                                xTDiff: (              
                                    descendantTVal - componentLevelT
                                ) ,      
                                xTScaleValueMultiplitude : (
                                    descendantTSclVal / componentLevelTScale
                                ) , 
                            })
                        ) }
                    </WithCurrentTInfo>
                ) ;
            }
        ) ;  
        return {
            componentLevelT , 
            componentLevelTScale , 

            renderWithInfo , 

        } ;
    }
) ;
/**    
 * {@link LwpPayloadCallback }. 
 * */               
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
                        LwpPayloadCallback
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
                        Readonly<{ n: number ; start ?: number ; }>    
                    ) ;                        
                    // autoUnmountMode ?: AudioTrackConcatClippingMode ;      
                     
                }             
            )             
        )>                  
    )>((                             
        function SimpleLoopingWithPeriodC ({      
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
            const {    
                start: renderRangeStart = 0 ,        
                n : renderRangeN ,   
            } = renderRange ;             
            const itemsRendered = (            
                function useIR() {             
                    const {
                        t : componentLevelAbsolTValue , 
                    } = ( 
                        useCurrentTInf() 
                    ) ;
                    return (      
                        (
                            React.useMemo(() => (   
                                Immutable.Range(0 , renderRangeStart + renderRangeN )  
                                .toSeq()   
                                .map<null | number >((i: number) => (
                                    (renderRangeStart <= i ) ?  
                                    i : null           
                                ) )               
                                .map((i: null | number ) => (     
                                    (typeof i === "number" ) ?  
                                    (              
                                        { 
                                            t: vInitialOffset + (i * vPeriod ) ,
                                        } as const         
                                    )           
                                    : null         
                                ) )                                 
                            ) , [renderRangeStart, renderRangeN, vInitialOffset, vPeriod  ])   
                        )                 
                        .map(function (prps1 , itemI ): ReturnType<LwpPayloadCallback > {   
                            if (prps1) {
                                const { t: itemT } = prps1 ; 
                                {  
                                    const itemRendered = (            
                                        (typeof item === "function" ) 
                                        ?   
                                        item({          
                                            perInstanceRelativeT: (
                                                itemT
                                            )  , 
                                            componentLevelAbsoluteT : (
                                                componentLevelAbsolTValue
                                            ) ,   
                                        }) 
                                        : 
                                        (<>{ item }</> )    
                                    ) ;
                                    return (   
                                        itemRendered ?
                                        (             
                                            <div  >    
                                                <p> item at <code>t= { itemT }</code> </p>     
                                                <WithDelay value={itemT} >
                                                    { itemRendered }    
                                                </WithDelay>                
                                            </div>          
                                        )
                                        : itemRendered      
                                    ) ;                        
                                }      
                            }   
                            return null ;     
                        })           
                    ) ;  
                }
            )() ;        
            return (        
                <div>              
                    <p> a loop </p>          
                    <div style={{ display: (visual === false ) ? "none" : "unset" }} >  
                        <LoopingCompContentDiv   >    
                        { arrayIndexedOrderedList(itemsRendered.toArray()  )   } 
                        </LoopingCompContentDiv >       
                    </div>
                </div>   
            ) ;                
        }  
    ))                 
) ;  
/**           
 * possible return values of implemts : 
 * - {@link LwpPayloadCallback.OmittedItem } - omitted item
 * - {@link LwpPayloadCallback.EmptyItem } - item as blank 
 * - concrete elements    
 */
type LwpPayloadCallback = (        
    (ctx: {
        /**    
         * relative to the whole component. 
         * */ 
        perInstanceRelativeT: number ;  

        /**     
         * the component-level {@link useCurrentTInf `absoluteTValue` }.  
        */
        componentLevelAbsoluteT : number ; 
    } )  
    => 
    (LwpPayloadCallback.OmittedItem | LwpPayloadCallback.EmptyItem | React.ReactElement )  
) ;      
namespace LwpPayloadCallback {
    export type EmptyItem = false ;   
    export type OmittedItem = null ;        
    const bar = {} ; // TS-1205            
} ;        
                      
            

           
  


       

export {   
    currentTCtx , 
    currentTScaleCtx ,       
    currentTInfCtx ,    
    useCurrentTInf ,    
    WithCurrentTInfo ,   
    useDescendantCurrentTDiffing ,      

    CurrentTDisplay , 
    WithDelay , 
    LoopingWithPeriod ,   
    LwpPayloadCallback ,       
} ;           