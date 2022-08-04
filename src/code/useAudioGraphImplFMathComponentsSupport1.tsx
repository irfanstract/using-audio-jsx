 
// utility imports                  
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue, OmitM } from "./generalUse11";   
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";        
import { K, asVoidElement, NUMERIC, useDebugDispatcher } from "./commonElements";             
import { CBC } from "./useStateInCallback";  
import { useRealTimeQueryInterval1 } from "./useNonHookValue";             
import { useDeferredTrue as useDeferredTrue0 } from "./usingDeferredBoolean";       
import { 
    useOneWayCheckBox , 
} from "./useCompletion";   
        



// 
import {  
    WithGivenDest ,  
    Prv1 ,        
    Consm as WithCtxtualOut , 

} from "./useAudioGraphImplCurrentDestNdRefCtx";     
import * as audioFltAtAbsTNodes from "./useAudioNodesBasicFlt11";     
import { USEM } from "./useAudioNodesParamAutomativeAsRegularNodes";      
import {
    SpecialUsageExplainer,   
    xWithUsableYyy ,      
    xWithUsableYyy1 ,   
} from "./useAudioGraphImplUsableYyyNodes1";            
import { 
    useConstantParamSrcNodeWithGivenFadeoutTimeConstant1 , 
      
} from "./useAudioNodesMounting11";    
import {  
    useElasUsageOnMount,
    useGainElas ,   
    useGainElasD ,      
    useConstantParamSrcElas ,            
    useConstantParamSrcElasD ,   

} from "./useAudioNodesBasicFixedElas";     
import {
    terminalUsageWrapC ,     
    nonterminalUsageWrapC , 

    AGCtxtualOutUsageProps ,         
    CTXTUALOUTPUTUSAGE_CBC , 
} from "./useAudioGraphImplCurrentDestNdRefCtxC1";  
import { useAParamModulativeNode } from "./useAudioNodesParamAutomative1";  
import {    
    useUnexpectedZeroingBackCheck ,      
} from "./useAudioNodesParamAutomativeElas";   
import {   
    useDeferredTrue ,   
    useDeferredTrue1 as useDeferredTrueAlt ,                      

    DbbOrHovered , 
    dBBC , 

} from "./useAudioGraphImplUseDeferredBoolean";     
import { XDC } from "./useAudioGraphImplFComponentsSemanticsBasic";

         







  
    
const useUnmountLogging = (    
    function (v: false | true ) {  
        const LOGGING = (
            useDebugDispatcher()          
        ) ;
        React.useLayoutEffect(() => {
            ;  
            return () => {
                v && LOGGING(() => (console.warn(TypeError(`component unmounting` ) ), true ) ) ;
            } ;
        }, [] ) ;      
    }  
) ;      
      
const cFnValueCompImplSupport1 = (() => {
    /**   
     * 
     * @see  
     * import  :  
     * {@link useConstantParamSrcElasD}         
     * {@link CTXTUALOUTPUTUSAGE_CBC }
     */   
    const renderConstantParamSrcElas1 = (
        function (...args : (
            [Parameters<typeof useConstantParamSrcElasD> ] extends [readonly [unknown, ...(infer Args1 ) ] ]
            ?
            Args1
            : never      
        ) ) {        
            return (              
                <CTXTUALOUTPUTUSAGE_CBC>    
                    {  function useC11({ feedPt : nd0 }) {     
                            useConstantParamSrcElasD(   
                                nd0, ...args ) ;    
                            return <></> ;  
                        }  }     
                </CTXTUALOUTPUTUSAGE_CBC>              
            );   
        }
    ) ;      
    /**   
     * 
     * @see  
     * import  :  
     * {@link useRealTimeQueryInterval1 }
     */    
    const useRealTimeQueryInterval1X = (
        useRealTimeQueryInterval1       
    );          
    return { 
        renderConstantParamSrcElas1 ,     
        useRealTimeQueryInterval1X ,     
    } ;
})() ;      

            
//
const {     
    CConstantValue ,   
    CFnValue ,                                                      
     
} = ((...[{ } = {} ] : [
    {
        // omissiveDebug ?: boolean ;     
    } ? ,
] ) => {             
    /**                
     *          
     * @see  
     * import  :          
     * {@link cFnValueCompImplSupport1 }       
     */            
    const { 
        renderConstantParamSrcElas1 ,     
        useRealTimeQueryInterval1X ,  
    } = (  
        cFnValueCompImplSupport1
    ) ;   
    /**            
     * 
     * @see  
     * import  :          
     * {@link CTXTUALOUTPUTUSAGE_CBC }     
     * {@link CConstantValue }  
     * {@link useConstantParamSrcNodeWithGivenFadeoutTimeConstant1 }
     */         
    const cFnValueImpl1 = (     
        function (...[{ compute }] : [ 
            { 
                compute : (            
                    (...args : [{ ctxT : number ; }] )   
                    => 
                    (number | { value : number ; } )   
                ) ,   
            } ,         
        ] ) {
            ;  
            /**   
             *  
             * @see     
             * import  :     
             * none   
             */     
            const C11 = (
                function useFn1(...[nd0] : [dest : AudioNode | null ] ) : { 
                    t2 : number ;  
                    vl : number ;                         
                }  {                      
                    type R0 = ReturnType<typeof useFn1 > ;   
                    const return1 = (    
                        useRealTimeQueryInterval1X({        
                            f : () : R0  => {       
                                ;                   
                                if (nd0 ) {                               
                                    const t1 = (   
                                        nd0.context.currentTime        
                                    ) ; 
                                    const t2 = (  
                                        // +t1.toFixed(1 )           
                                        t1                     
                                    ) ;         
                                    const vl0 = compute({ ctxT: t2 }) ;
                                    const { value: vl } = (            
                                        (typeof vl0 === "number" ? { value : vl0 } : vl0 )
                                    ) ;
                                    return { t2 , vl } ;          
                                } else {   
                                    return { t2 : -1, vl: 0 } ;                               
                                }                 
                            } , 
                            LE : "useLayoutEffect" ,  
                        } , 0.06 * 1000  ) 
                    ) ;  
                    React.useLayoutEffect(() => {
                        0 && console.log(return1 ) ;      
                    } , [return1.t2 < 0.5 , return1.vl !== 0 ] ) ;
                    return return1 ;
                }        
            );                   
            /**   
             *  
             * @see  
             * import  : 
             * {@link useConstantParamSrcNodeWithGivenFadeoutTimeConstant1 }         
             * {@link CTXTUALOUTPUTUSAGE_CBC }   
             */          
            const e = ((mode : 1 | 2) => {        
                const swingTConst = ( 
                    2 ** -6      
                ) ;   
                if (mode === 2 ) {   
                    ;             
                    return (                       
                        <CTXTUALOUTPUTUSAGE_CBC>   
                            { function useC11({ feedPt : nd0 }) { 
                                const {              
                                    t2 ,      
                                    vl ,  
                                } = ( C11 )(nd0 ) ;      
                                const nd1 = (
                                    useConstantParamSrcNodeWithGivenFadeoutTimeConstant1(nd0, 0.5 )   
                                ) ;       
                                React.useLayoutEffect(() => {
                                    ;        
                                    if (1 ) {
                                        ; 
                                        if (nd1 ) {        
                                            ;             
                                            (        
                                                nd1.offset  
                                                .setTargetAtTime(vl, nd1.context.currentTime , swingTConst )
                                            ) ;     
                                        }     
                                    }
                                } , [nd1, vl ]) ;
                                // TODO                             
                                return (       
                                    <p>
                                        directly using   
                                        <code>{ useConstantParamSrcNodeWithGivenFadeoutTimeConstant1.name }</code>
                                    </p>
                                ) ;       
                            } }       
                        </CTXTUALOUTPUTUSAGE_CBC>         
                    ) ;    
                }    
                /**     
                 * 
                 * @see  
                 * import  :          
                 * {@link CTXTUALOUTPUTUSAGE_CBC }     
                 * {@link CConstantValue }
                 */          
                return (                       
                    <CTXTUALOUTPUTUSAGE_CBC>   
                        { function useC11({ feedPt : nd0 }) { 
                            const {              
                                t2 ,       
                                vl ,            
                            } = ( C11 )(nd0 ) ;       
                            // TODO                           
                            return (                     
                                <CConstantValue      
                                value={vl }                     
                                swingTConstant={swingTConst }
                                />  
                            ) ;      
                        } }           
                    </CTXTUALOUTPUTUSAGE_CBC>               
                ) ;     
            })( 1 ) ;  
            return {
                C11 , 
                e ,              
            } ;
        }
    ) ;      
    return {    
        CConstantValue : (     
            function CConstantValueC ( props1 : (            
                NonNullable<(
                    Parameters<typeof renderConstantParamSrcElas1 >[0 ]
                )>          
                &
                { unmountDebug ?: boolean ; }
            )) {                   
                const { value } = props1 ;      
                const { unmountDebug = false } = props1 ;           
                // TODO     
                ;                    
                useUnmountLogging(unmountDebug) ;     
                const e = (    
                    renderConstantParamSrcElas1(props1, { putInitailValue : 1 } )           
                ) ; 
                const dbg = (    
                    <p>      
                        Constant Value --      
                        <NUMERIC>{ value }</NUMERIC>   
                        (T-const specified : { props1.swingTConstant } )
                    </p>     
                ) ;     
                const dBB = useDeferredTrue() ;             
                return (              
                    dBBC(dBB, { dbgBox1: dbg, c1: e })  
                ) ; 
            }             
        ) ,      
      
        CFnValue : (        
            function CFncValueC({ value: compute } : {
                value : (              
                    Parameters<typeof cFnValueImpl1 >[0]["compute"]
                ) ;           
            } ) {     
                ;              
                const { 
                    e ,    
                } = (
                    cFnValueImpl1({ compute })
                ) ;
                ;              
                const dbg = (      
                    <p> 
                    </p>      
                ) ;     
                const dBB = useDeferredTrue() ;    
                return (    
                    dBBC(dBB, { dbgBox1: dbg, c1: e })  
                ) ;              
            } 
        )
    } ;
})() ;     
 



 



export {
    cFnValueCompImplSupport1 ,    

    CConstantValue , 
    CFnValue ,    
} ; 