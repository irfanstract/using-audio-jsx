 
// utility imports                  
import Immutable from "immutable";            
import { IterableOps, PromiseReturnValue, OmitM } from "./generalUse11";   
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";        
import { K, asVoidElement, NUMERIC, useDebugDispatcher, } from "./commonElements";             
import { CBC } from "./useStateInCallback";      
import { useRealTimeQueryInterval1 } from "./useNonHookValue";             
import { useDeferredTrue as useDeferredTrue0 } from "./usingDeferredBoolean";       
import { 
    useOneWayCheckBox ,      
} from "./useCompletion";   
import { useAsyncStrm, useAsyncDictStrm } from "./useAsyncMemo";  
import {
    TAndVl , 
    tAndVlSqExpand ,  
} from "./useTValueSeqExpand1";      
        



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
    useInitUnconnectedYyyNodeFor ,     
      
} from "./useAudioNodesMounting11";    
import {      
    useAudioNodeConnectToDest, useDepsRemount,      
} from "./useAudioNodesBasicConnectToDest";    
import { useFixedGain } from "./useAudioNodesBasicFlt11";          
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
import { useWithCurrentSideTapPtRef } from "./useAudioGraphImplCurrentDestNdRefCtx";     
import { 
    useHalfSecondBeep ,           
} from "./useAudioNodesBasicFlt11";        
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
import eSupport from "./useAudioNodesParamAutomativeExecET";

         
   


    



  
    
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
      
const CFNVI0 = (() => {
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
const {
    usingCurrentTScanCtx ,         
} = (() => {
    type Vls = (
        Immutable.Seq.Indexed<number>     
    ) ;
    const currentTScanCtx = (      
        React.createContext<Vls | "unknown" >("unknown")
    ) ;  
    currentTScanCtx.displayName = "currentTScanCtx";           
    const usingCurrentTScanCtx = (  
        function (...[vls , r ] : [  
            Vls ,  
            (ctx: { vls: Vls ; } ) =>  React.ReactElement ,           
        ] ) {       
            const { Consumer: C, Provider: CP } = (    
                currentTScanCtx   
            ) ;               
            return (                                       
                <C>           
                { (vlsParent : Vls | "unknown") => {
                    if (vlsParent === "unknown" ) {
                        return (         
                            <CP value={vls} >  
                            { r({ vls: vls }) }   
                            </CP>       
                        ) ;     
                    }          
                    if (typeof vlsParent === "object" ) {
                        return (       
                            <>  
                             { r({ vls: vlsParent }) } 
                            </>
                        ) ;     
                    }       
                    return <>
                    ( error )
                    </> ;    
                } }
                </C>
            ) ;
            ;           
        }
    ) ;
    return {
        usingCurrentTScanCtx ,  
    } ;  
})() ;          
/**       
 * @deprecated  
 */
const CFNVI = (() => {
    ;               
    /**                
     *          
     * @see  
     * import  :          
     * {@link CFNVI0  }       
     */              
    const { 
        renderConstantParamSrcElas1 ,     
        useRealTimeQueryInterval1X ,  
    } = (  
        CFNVI0    
    ) ;        
    ;    
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
            const useDestNdCtxAsTScan1 = (   
                (...[nd0, config = {} ] : [AudioNode | null, { scnF1PeriodSeconds ?: number ; } ? ]) => { 
                    const {
                        scnF1PeriodSeconds = 3 ,    
                    } = config ;  
                    ;                   
                    /**            
                     * INTERVAL : {@link scnF1PeriodSeconds } SECOND
                     *  */               
                    const t10 = (          
                        useRealTimeQueryInterval1X({
                            // TODO    
                            f: () => (nd0 ? nd0.context.currentTime : -1 ) ,  
                            deps: [nd0 ] ,   
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
                                useDestNdCtxAsTScan1(nd0)    
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
                (
                    NonNullable<(
                        Parameters<typeof eSupport >[0 ]               
                    )>   
                ) ? ,                       
            ]) => {                      
                const {       
                    swingTConst ,   
                    timingArgMode , 
     
                    SETTARGETATTIME , 
                    SETVALUECURVE_AT_TIME ,     

                } = eSupport(mode1 ) ;      
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
                                        SETTARGETATTIME(nd1, { t: t2, vl }, (a ) => a.offset ) ;   
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
                        useWithCurrentSideTapPtRef(({ feedPt: nd0 }) => (
                            <CBC>
                            { function useC11() {  
                                // TODO    
                                const SCNFP : number = (                   
                                    React.useMemo(() => (     
                                        // 3 + (2 * Math.random() )     
                                         1.2 * (1 + Math.random() )
                                    ) , [] ) 
                                ) ;                                      
                                ;
                                return (  
                                    usingCurrentTScanCtx((   
                                        useDestNdCtxAsTScan1(nd0, { scnF1PeriodSeconds: SCNFP })
                                        .tScan1 
                                                    
                                    ), ({ vls: tScan1 }) => (  
                                        <CBC>
                                        { function useC12() {
                                            ;                
                                            const nd10 = (  
                                                (                          
                                                    useDepsRemount         
                                                )({ deps: [tScan1.first ], dest: nd0 })
                                            ) ;
                                            // TODO remove this LOC ; this is only for debugging   
                                            {
                                                ;        
                                                const nd11 = (  
                                                    useFixedGain(nd10, 2 ** -4 )          
                                                ) ;    
                                                useHalfSecondBeep(
                                                    nd11, { t: (nd11 ? nd11.context.currentTime : 1E5 ) }) ;      
                                            }  
                                            const nd1 = (             
                                                useConstantParamSrcNodeWithGivenFadeoutTimeConstant1(nd10 , 0.5 )        
                                            ) ;               
                                            //  
                                            React.useLayoutEffect(() => {                 
                                                ;                        
                                                0 && console.log({ tScan1 });              
                                                if (nd1  ) {   
                                                    // console.log((  
                                                    //     ((nd1 as any) )                          
                                                    // ));                    
                                                    if (( 
                                                        1 || (          
                                                            (() => {
                                                                const v = (
                                                                    ((nd1 as any).FNCMATHCOMPONENTSSS_MNT_PRM += "+")   
                                                                ) ;     
                                                                0 && console.log({ nd1, v });                
                                                                return v ;         
                                                            })()      
                                                            === 
                                                            `${undefined }+`        
                                                        )
                                                    )) {
                                                        const graph = (         
                                                            tScan1      
                                                            .map((t1 : number ): Parameters<typeof SETVALUECURVE_AT_TIME >[1][number ] => {             
                                                                const t2 = (        
                                                                    // +t1.toFixed(1 )    
                                                                    t1 + delayInSeconds       
                                                                ) ;    
                                                                ;                
                                                                const { 
                                                                    vl , 
                                                                } = (
                                                                    lComputeAtT(t2 )          
                                                                ) ;        
                                                                return {
                                                                    t: t2 ,        
                                                                    vl: vl ,               
                                                                } ;      
                                                            })     
                                                            .toArray()      
                                                        ) ;        
                                                        SETVALUECURVE_AT_TIME(nd1, (      
                                                            graph       
                                                        ) , a => a.offset )    ;    
                                                    }
                                                };    
                                                // TODO           
                                            } ,   
                                            // eslint-disable-next-line react-hooks/exhaustive-deps         
                                            [nd1 ]) ;        
                                            // TODO                                              
                                            return (  
                                                <div>                         
                                                <p>                  
                                                    now :                          
                                                    {  null && (
                                                        <code style={{ whiteSpace: "pre-wrap" }}>  
                                                        <> ctxT : {tScan1.first()  } </>            
                                                        </code>                     
                                                    ) }      
                                                    { null && (    
                                                        <code style={{ whiteSpace: "pre-wrap" }}>       
                                                        vlue(ctxT) :     
                                                        {lComputeAtT(tScan1.first() ).vl  }                     
                                                        </code>   
                                                    ) }                    
                                                    {  null &&  (  
                                                          <code style={{ whiteSpace: "pre-wrap" }}>   
                                                          [...vlue(ts) ] : 
                                                          {JSON.stringify( tScan1.toArray().map(t => +(lComputeAtT(t).vl ).toFixed(3 ) ) )  }     
                                                          </code> 
                                                    ) }         
                                                </p>                                      
                                                <p>    
                                                    directly using         
                                                    <code>{ useConstantParamSrcNodeWithGivenFadeoutTimeConstant1.name }</code>
                                                </p>     
                                                </div>
                                            ) ;                        
                                        } }
                                        </CBC>
                                    ))
                                ) ;                            
                            } }
                            </CBC>                 
                        ))       
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
            })("3" ) ;          
            return {
                C11 ,  
                e ,              
            } ;
        }    
    ) ;                
    ; 
    return { 
        default: cFnValueImpl1 ,           
    } ;
})() ;
      
     
const cFnValueCompImplSupport1 = (
    CFNVI0  
) ;
//
const {     
    CConstantValue ,   
    CFnValue ,                                                      
     
} = ((...[{ } = {} ] : [
    { 
        // omissiveDebug ?: boolean ;     
    } ? ,    
] ) => {             
    const useXDeferredTrue = (
        () => useDeferredTrue({ UE: "useLayoutEffect" }) 
    ) ;
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
    const {
         default: cFnValueImpl1 ,  
    } = CFNVI ;
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
                return (              
                    dBBC((
                        useXDeferredTrue() 

                    ), { dbgBox1: dbg, c1: e })      
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
                return (       
                    dBBC((
                        useXDeferredTrue()    
                            
                    ), { dbgBox1: dbg, c1: e })  
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