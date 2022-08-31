 
// utility imports     
import Immutable from "immutable";    
import { IterableOps } from "./generalUse11";  
import { 
    AudioTrackConcatClippingMode , 
    avTrackConcatShallPropagate ,   
} from "./timelineConcatClippingMode";    
import React from "react";               
import { K, ComponentProps, ContextReturnType, arrayIndexedOrderedList } from "./commonElements";    
        
// domain imports, and CSS imports
import newInstance from "./useAudioGraphImplAbsoluteTCtxFactory1" ;   
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

   
                   

            
    

function useConditionalDeference1(e : React.ReactElement, perios : number ) {
    const e0 = React.useDeferredValue(e ) ;
    return (3 <= perios ) ? e0 : e  ;
}     
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
type LoopingComponentPropsWithPeriod = (   
    /**  domain properties   */   
    {             

        /**       
         * the payload will be the *repeand*.        
         */  
        children : (   
            React.ReactNode  
            | 
            LwpPayloadCallback
        ) ;

        /**    
         * this is (supposed) to define the domain properties (excluding `children`).
         */
        value: {      
            period: number ;                                                
            initialOffset ?: number ;         
            // clippingMode ?: AudioTrackConcatClippingMode ;          
        } ;                     

    }    
    &    
    /**   display properties  */        
    {      
       
        /**     
         * this parameterisation 
         * was intended to allow conditionally disabling *visualisation* in attempt to debug performance problems.
         * 
         * @deprecated
         */
        visual ?: false | true ;     
        /**    
         * this is 
         * to control the number of looping to be-or-remain *mounted* at-once 
         * (because there had been no other good algo to predict/approximate it).
         * */      
        renderRange : (
            Readonly<{ 
                /**  `i`s  */
                n: number ;  
                /**  `i`  */
                start ?: number ; 
            }>    
        ) ;                        
        // autoUnmountMode ?: AudioTrackConcatClippingMode ;      
         
    }             
) ;
/**    
 * this *component* is to implement looping with relative `t`.
 * 
 * {@link LwpPayloadCallback }. 
 * */               
const LoopingWithPeriod = (
    IterableOps.identity<(                 
        React.FC<(                                      
            LoopingComponentPropsWithPeriod
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
    WithSlowdown ,
    WithSpeedF ,
} ;           