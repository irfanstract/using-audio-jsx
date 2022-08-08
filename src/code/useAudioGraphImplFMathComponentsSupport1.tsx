 
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
import { useAsyncStrm, useAsyncDictStrm } from "./useAsyncMemo";  
        



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
        function (...[{ compute, scanPeriodMillis, delayInSeconds = 0.1 }] : [ 
            {   
                // CORE LOGIC 
                compute : (     
                    (...args : [{ ctxT : number ; }] )   
                    => 
                    (number | { value : number ; } )   
                ) ;        

                // IMPLEMENTATIVE ARTIFACT CONTROL   
                delayInSeconds ?: number ;   
                scanPeriodMillis : number ;     
            } ,              
        ] ) {        
            const idleCaseRefreshPeriodMillis = (
                (4.8 * 1000 )  
            );
            ;   
            const lComputeAtT = (
                function (...[t2] : [t: number ] ): (
                    {} & { 
                        t2 : number ;      
                        vl : number ;       
                    }  
                ) {
                    ;   
                    const vl0 = (
                        compute({ ctxT: t2 })  
                    ) ;
                    const { value: vl } = (            
                        (typeof vl0 === "number" ? { value : vl0 } : vl0 )
                    ) ;   
                    return { t2 , vl } ;        
                }  
            );   
            const useXTScan1 = (
                (...[nd0] : [AudioNode | null ]) => {
                    ;
                    const scnF1PeriodSeconds : number = 3 ;       
                    /**   
                     * INTERVAL : {@link scnF1PeriodSeconds } SECOND
                     *  */               
                    const t10 = (          
                        useRealTimeQueryInterval1X({
                            // TODO    
                            f: () => (nd0 ? nd0.context.currentTime : -1 ) ,  
                            LE: "useLayoutEffect" ,      
                        } , scnF1PeriodSeconds * 1000  )  
                    ) ;        
                    React.useLayoutEffect(() =>  {          
                        0 && console.log({ scnF1PeriodSeconds, t10 }) ;
                        // 
                    }, [t10 ] ) ;      
                    const tScan1 = (
                        React.useMemo(() => (
                            Immutable.Range(t10, t10 + scnF1PeriodSeconds , scanPeriodMillis / 1000 )  
                        ) , [t10, scnF1PeriodSeconds, scanPeriodMillis ])
                    ) ;            
                    return {      
                        tScan1 ,   
                    } ;
                }
            ); 
            /**                 
             *  
             * @see     
             * import  :     
             * none   
             * 
             * @deprecated          
             */                           
            const C11 = (() => { 
                return (   
                    IterableOps.identity<(     
                        (dest : AudioNode | null  )
                        =>        
                        ReturnType<typeof lComputeAtT >          
                    )>((               
                        1
                        ?
                        function useFn1(...[nd0] )  {          
                            const { tScan1  } = (
                                useXTScan1(nd0)    
                            ) ;
                            const return10 = (       
                                useAsyncStrm<ReturnType<typeof lComputeAtT > >({   
                                    depsChangeImpliesInvalidation : true ,      
       
                                    f: async function* () {
                                        {                                
                                            for (const t1 of ( 
                                                tScan1
                                            )) {                     
                                                const t2 = (        
                                                    // +t1.toFixed(1 )    
                                                    t1 + delayInSeconds       
                                                ) ;    
                                                ;          
                                                yield (
                                                    lComputeAtT(t2 ) 
                                                ) ;           
                                            }    
                                            ;   
                                        }      
                                    }  
  
                                } , [ tScan1.first ])
                            ) ;     
                            const return1: ReturnType<typeof lComputeAtT > = (      
                                return10
                                ||
                                { t2: -1, vl: 0 }
                            ) ;     
                            React.useLayoutEffect(() => {     
                                0 && console.log(return1 ) ;            
                            } , [return1.t2 < 0.5 , return1.vl !== 0 ] ) ;
                            return return1 ;
                        }   
                        :   
                        function useFn1(...[nd0] )  {             
                            const return1 = (       
                                useRealTimeQueryInterval1X({        
                                    f : () : (ReturnType<typeof lComputeAtT > ) => {       
                                        ;                      
                                        if (nd0 ) {                               
                                            const t1 = (   
                                                nd0.context.currentTime        
                                            ) ;         
                                            const t2 = (        
                                                // +t1.toFixed(1 )           
                                                t1 + delayInSeconds       
                                            ) ;         
                                            return (
                                                lComputeAtT(t2 )
                                            ) ;        
                                        } else {          
                                            return { t2 : -1, vl: 0 } ;                                  
                                        }                              
                                    } ,                   
                                    LE : "useLayoutEffect" ,       
                                } , (
                                    (nd0 && (nd0.context.state === "running") ) 
                                    ? 
                                    scanPeriodMillis : idleCaseRefreshPeriodMillis    
                                ) ) 
                            ) ;     
                            React.useLayoutEffect(() => {     
                                0 && console.log(return1 ) ;            
                            } , [return1.t2 < 0.5 , return1.vl !== 0 ] ) ;
                            return return1 ;
                        }        
                    ))
                ) ;
            })() ;                             
            /**      
             *  
             * @see  
             * import  : 
             * {@link useConstantParamSrcNodeWithGivenFadeoutTimeConstant1 }         
             * {@link CTXTUALOUTPUTUSAGE_CBC }   
             */           
            const e = ((...[mode, mode1 = {} ] : [
                1 | 2 | "3" ,  
                {
                    timingArgMode ?: false | 1 ;    
                    swingTConst ?: number ;           
                } ? ,          
            ]) => {               
                const {
                    swingTConst = (        
                        2 ** -4  
                    ) ,   
                    timingArgMode = 1 ,      

                } = mode1 ;     
                const SETTARGETATTIME = (
                    (...[nd1, { t: t2, vl } ] : [
                        NonNullable<(
                            ReturnType<(
                                typeof useConstantParamSrcNodeWithGivenFadeoutTimeConstant1
                            )>
                        )> | null , 
                        { t: number ; vl: number ; } ,     
                    ]) => {
                        ;                                 { 
                            ;   
                            if (nd1 && (0 <= t2 ) ) {        
                                ;                    
                                (          
                                    nd1.offset  
                                    .setTargetAtTime(vl, (
                                        timingArgMode ? t2 : nd1.context.currentTime      
                                    ) , swingTConst ) 
                                ) ;      
                            }     
                        }          
                    }
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
                                        SETTARGETATTIME(nd1, { t: t2, vl }) ;   
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
                if (mode === "3" ) {      
                    ;                       
                    return (                       
                        <CTXTUALOUTPUTUSAGE_CBC>   
                            { function useC11({ feedPt : nd0 }) {        
                                const nd1 = (
                                    useConstantParamSrcNodeWithGivenFadeoutTimeConstant1(nd0, 0.5 )   
                                ) ;               
                                const { tScan1  } = (
                                    useXTScan1(nd0)    
                                ) ;
                                React.useLayoutEffect(() => {       
                                    ;                 
                                    0 && console.log({ tScan1 });        
                                    if (nd1) {
                                        for (const t1 of tScan1 ) {               
                                            const t2 = (        
                                                // +t1.toFixed(1 )    
                                                t1 + delayInSeconds       
                                            ) ;         
                                            const {
                                                vl , 
                                            } = (
                                                lComputeAtT(t2 )          
                                            ) ;
                                            SETTARGETATTIME(nd1, { t: t2, vl }) ;   
                                        }
                                    };
                                    // TODO       
                                } , [nd1, tScan1.first ]) ;
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
                                {...(timingArgMode ? { scheduledT: t2 } : {} ) }
                                />  
                            ) ;      
                        } }             
                    </CTXTUALOUTPUTUSAGE_CBC>                   
                ) ;     
            })(1 ) ;         
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
                        <span 
                        style={{ 
                            display: "inline-block", 
                            width: "6em", 
                            height: "2em", 
                            overflow: "hidden" ,   
                        }} 
                        >
                        <NUMERIC>{ value }</NUMERIC>  
                        </span> 
                        (T-const specified : { props1.swingTConstant } )          
                    </p>     
                ) ;           
                const dBB = useDeferredTrue({ UE: "useLayoutEffect" }) ;             
                return (              
                    dBBC(dBB, { dbgBox1: dbg, c1: e })     
                ) ;            
            }             
        ) ,        
      
        CFnValue : (        
            function CFncValueC({ value: compute , scanPeriodMillis = 32 } : (
                {    
                    value : (              
                        Required<(
                            Parameters<typeof cFnValueImpl1 >[0]
                        )>["compute"]  
                    ) ;                   
                    scanPeriodMillis ?: (                
                        Required<(
                            Parameters<typeof cFnValueImpl1 >[0]
                        )>["scanPeriodMillis"]  
                    )  ;           
                }        
            ) ) {                   
                // debbugging   
                {
                    ;
                    React.useEffect(() => {    
                        0 && console.log(CFncValueC.name ) ;
                    }, [] ) ;                   
                }
                ;                   
                const {     
                    e ,                    
                } = (
                    cFnValueImpl1({ compute, scanPeriodMillis })      
                ) ;             
                ;              
                const dbg = (                 
                    <p> 
                    </p>         
                ) ;     
                const dBB = useDeferredTrue({ UE: "useLayoutEffect" }) ;           
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