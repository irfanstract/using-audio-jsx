 
// utility imports                  
import Immutable from "immutable";            
import { 
    IterableOps, PromiseReturnValue, OmitM, FrequencyAndPeriod  ,    
} from "./generalUse11";   
import { 
    fromTSeqComputedValueInterpolated ,
} from "./timeStampSeqMappedConnectedInterpolated1";
import React, { useMemo } from "react";                
import { 
    useRenderCount ,      
    useDepsChgCount , 
    useUnmountLogging ,   
    useTopicHeadedRenderCount ,    

} from "./commonElements";    
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";        
import { K, asVoidElement, NUMERIC, useDebugDispatcher, } from "./commonElements";             
import { CBC } from "./useStateInCallback";      
import { useRealTimeQueryInterval1 } from "./usingNonHooksValues";             
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
    AUDIONODES_USEEFFECT , 
    AUDIONODES_USE_AUDIONODEEFFECT ,  
} from "./useAudioNodesParamChgEffect1";      
import * as audioFltAtAbsTNodes from "./useAudioNodesBasicFlt11";        
import { USEM } from "./useAudioNodesParamAutomativeAsRegularNodes";        
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
    useHalfSecondBeep ,           
} from "./useAudioNodesBasicFlt11";        
import { useAParamModulativeNode } from "./useAudioNodesParamAutomative1";  
import {          
    useUnexpectedZeroingBackCheck ,      
} from "./useAudioNodesParamAutomativeElas";   
import AudioNodesParamAutomativeExecET from "./useAudioNodesParamAutomativeExecET";
import {       
    WithGivenDest ,  
    Prv1 ,           
    Consm as WithCtxtualOut ,    
    useWithCurrentSideTapPtRef, 
    useWithCurrentACtxCurrentT,            
    useCurrentDestNdRefAndCtxT ,

} from "./useAudioGraphImplCurrentDestNdRefCtx";        
import {
    SpecialUsageExplainer,            
    xWithUsableYyy ,            
    xWithUsableYyy1 ,   
} from "./useAudioGraphImplUsableYyyNodes1";    
import {
    terminalUsageWrapC ,     
    nonterminalUsageWrapC , 

    AGCtxtualOutUsageProps ,             
    CTXTUALOUTPUTUSAGE_CBC , 
} from "./useAudioGraphImplCurrentDestNdRefCtxC1";    
import {   
    useDeferredTrue ,   
    useDeferredTrue1 as useDeferredTrueAlt ,                      

    DbbOrHovered , 
    dBBC , 
 
} from "./useAudioGraphImplUseDeferredBoolean";     
import { XDC } from "./useAudioGraphImplFComponentsSemanticsBasic";  
import { AudioNodesParamAutomativeExecETSpc, } from "./useAudioGraphImplFMathComponentsSupport1C";

         
   


      



  
     
;

      
;
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
            <CTXTUALOUTPUTUSAGE_CBC name={"CBC_ConstantParamSrcElas1"}>    
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
 * either 
 * a) an `object` defining `value: number`
 * b) merely the value of `value` itself
 */
type CFnValuePayloadReturn = (
    number | { value : number ; }
) ;
type CFnValuePropsPre = (      
    {     
        // CORE LOGIC    
        compute : (     
            (...args : [{ ctxT : number ; }] )   
            => 
            CFnValuePayloadReturn
        ) ;        

        // IMPLEMENTATIVE ARTIFACT CONTROL   
        delayInSeconds ?: number ;   
        scanPeriodMillis : number ;           
    }           
);
type CConstantValueProps = (            
    NonNullable<(
        Parameters<typeof renderConstantParamSrcElas1 >[0 ]
    )>          
    &
    { unmountDebug ?: boolean ; }
) ;
const CConstantValueProps = {} ; // TS-1205
type CFnValueProps = (
    {          
        value : (              
            Required<(  
                CFnValuePropsPre
            )>["compute"]  
        ) ;            
        /**   
         * `setTargetAtTime` and `setValueCurveAtTime` both can't easily be reconfigured.  
         * instead, the engine is supposed to do reconfig periodically, but    
         * this will mean that the autom will not be able to easily respond to higher-level changes, 
         * hence {@link React.useEffect `deps` as in `useEffect` }.    
         *    */            
        codeDeps ?: React.DependencyList ;  
        /**   
         * this is because `AudioParam`s are *polylineal* while *function*s are *continuous*.
        */
        scanPeriodMillis ?: (                
            Required<(  
                CFnValuePropsPre
            )>["scanPeriodMillis"]       
        )  ;                
    }              
);
const CFnValueProps = {} ; // TS-1205
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
    return {     
        CConstantValue : (     
            function CConstantValueC ( props1 : CConstantValueProps ) {                   
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
                        true 

                    ), { dbgBox1: dbg, c1: e })             
                ) ;            
            }             
        ) ,                   
      
        CFnValue : (() => {    
            type Props = (
                CFnValueProps      
            ) ;        
            const usePropsExpand = (   
                function (propsC: Props ) {
                    ;                                                              
                    const scanBatchFrequency = (
                        FrequencyAndPeriod.byPeriod(1 )            
                    ) ;      
                    const {  //
                        frequency: scanBatchFreqV ,     
                        period: scanBatchPeriod ,             
                    } = (         
                        scanBatchFrequency    
                    ) ;      //
                    const { 
                        value: compute ,   
                        scanPeriodMillis: samplingGranularityMillis = 32  ,      
                        codeDeps = [] ,                
                    } = propsC;    
                    // TODO
                    const {
                        scanChunkLengthS: scanBatchLengthS = (
                            Math.max(2, scanBatchPeriod, )
                            + 0.25 
                        ) ,
                    } = (() : (
                        Partial<{ 
                            /**   
                             * the subsumed range for the current scan batch.
                             * not necessarily {@link scanBatchPeriod }, but
                             * shall be at-least that value and should (ideally) exactly be that value.
                             */
                            scanChunkLengthS : number ; 
                        }>
                    )  => ({}))() ;
                    function useCScanTs(...[nd0, properties1 ] : [
                        AudioNode, 
                        {
                            /**   
                             * presently we have no idea exactly what we intended this for.
                             * it looks like this was to define the amt (*seconds*) each batch/chunk shall span/cover.
                             */
                            sp ?: number ;
                            /**    
                             * this would define 
                             * {@link BaseAudioContext.currentTime *the value which all code shall held `currentDestCtx.currentTime` as presently evaluating to* }.
                             */
                            currentTimeE : number ; 
                        } ,      
                    ]) { 
                        const {                
                            currentTimeE , 
                        } = properties1 ;         
                        ;
                        const {       
                            ctxT ,           
                        } = { ctxT: currentTimeE } ;         
                        const ctxTFloored = (               
                            Math.floor(ctxT / scanBatchPeriod )               
                            * scanBatchPeriod
                        ) ;                       
                        const {  
                            tScan1 ,           
                        } = (
                            React.useMemo(() => {      
                                ;                            
                                const tScan1 =  (             
                                    Immutable.Range(
                                        ctxTFloored, (
                                            // TODO
                                            ctxTFloored + scanBatchLengthS
                                        ) ,   
                                        (samplingGranularityMillis / 1000 ) ,
                                         )  
                                ) ;                 
                                return {
                                    tScan1 ,     
                                } ;       
                            } , [ctxTFloored ] )   
                        ) ;              
                        return {
                            /**    
                             * this would define 
                             * {@link BaseAudioContext.currentTime *the value which all code shall held `currentDestCtx.currentTime` as presently evaluating to* }
                             * (with acknw that the value was from only a-fraction-of-seconds ago ).
                             * 
                             */
                            ctxT ,       
                            /**    
                             * {@link ctxT } 
                             * rounded down to nearest multiply of {@link scanBatchPeriod }
                             * 
                             */
                            ctxTFloored     , 
                            /**    
                             * the 't-seq' which
                             * the presently `graph` shall be built upon.
                             * 
                             */
                            tScan1 ,     
                        } ;
                    } ;                 
                    const lComputeAtT = (
                        React.useCallback((           
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
                        ), codeDeps )     
                    );          
                    ; //
                    const {
                    } = (         
                        scanBatchFrequency    
                    ) ;      
                    const intendedDelayInSeconds = 0.02 ;    
                    ;                                              
                    ;                              
                    return {         
                        /**    
                         * the interval between two-consecutive `t`s of the samplings.
                         */
                        samplingGranularityMillis ,  
                        /**    
                         * the latency between the start(s) of two-consecutive batches .
                         * 
                         * not necessarily {@link scanBatchLengthS }.
                         * 
                         */
                        scanBatchPeriod,
                        /**    
                         * the number of batches per second
                         * 
                         */
                        scanBatchFreqV,
                        /**
                         * NOTE: the used data-structure is not React-friendly.
                         * 
                         * @deprecated
                         * 
                         */
                        scanBatchFrequency ,       
                        /**   
                         * the subsumed range for the current scan batch.
                         * not necessarily {@link scanBatchPeriod }, but
                         * shall be at-least that value and should (ideally) exactly be that value.
                         */
                        scanBatchLengthS ,
                        codeDeps ,   
      
                        useCScanTs , 
                        /**  
                         * this woul be one returned from {@link React.useCallback `useCallback`} and therefore
                         * it's safe to make this part of {@link React.useEffect `deps`}.
                         */
                        lComputeAtT ,         
                        
                        intendedDelayInSeconds,
                    } ;   
                }
            ) ;      
            function useCFVRenderImpl({ propsC } : (
                { propsC: Props ; }
            ) ) {                        
                const {
                    samplingGranularityMillis ,  
                    scanBatchPeriod,
                    scanBatchFreqV,
                    scanBatchFrequency ,   
                    codeDeps ,   

                    useCScanTs , 
                    /**  
                     * this woul be one returned from {@link React.useCallback `useCallback`} and therefore
                     * it's safe to make this part of {@link React.useEffect `deps`}.
                     */
                    lComputeAtT ,                  

                    intendedDelayInSeconds,
                } = usePropsExpand(propsC ) ;           
                ;      
                // TODO            
                const {               
                    swingTConst ,                
                    timingArgMode ,          
        
                    SETTARGETATTIME , 
                    SETVALUECURVE_AT_TIME ,      

                    // added 

                    useSimplePolylineSource ,
        
                } = AudioNodesParamAutomativeExecETSpc(    ) ;               
                const { 
                    remountDebugBeep = false ,     
                } = {} as { remountDebugBeep ?: boolean ; } ;  
                const tScanMappingDomainRoundPrec : "no-rounding" | (1 | 2 | 3 ) = (
                    "no-rounding"
                ) ;
                function useCScannedImpl(...[{ csiDebug = false, } = {} ] : [
                    { csiDebug ?: false | true ; } ? ,
                ] ): { e: React.ReactElement ; } {         
                    const { feedPt: nd0, currentTime: currentTimeE } = (
                        useCurrentDestNdRefAndCtxT()
                    ) ;
                    const e = (        
                        React.useMemo((...[] : (
                            []
                        ) ) =>  (
                            (nd0 && (typeof currentTimeE === "number") )         
                            ?                   
                            <CBC name="ToUseCScanTs">      
                            { function useE() {       
                                /**    
                                 * the amount of time
                                 * each mount(ing) shall fire within ahead of actual payload-specified time
                                 * */ 
                                const headTime: number = (
                                    0.001
                                ) ;
                                const {
                                    ctxT ,     
                                    ctxTFloored     ,        
                                    tScan1 ,                            
            
                                } = useCScanTs(nd0, { currentTimeE: currentTimeE } ) ;       
                                const actualScanKey : number = (
                                    Math.floor((
                                        (() => {
                                            const t0 = ctxT ;
                                            const t1 = t0 + headTime ;
                                            const t2 = t1 * scanBatchFreqV ;
                                            return (
                                                t2
                                            ) ;
                                        })()
                                    ) )  
                                ) ;     
                                const remountDeps1 = (       
                                    [actualScanKey, lComputeAtT ]  as const     
                                ) ;  
                                const useRelevantAutoRemountedNode = (
                                    function () { 
                                        ;
                                        // TODO     
                                        const nd10 = (  
                                            (                              
                                                useDepsRemount           
                                            )({          
                                                deps: remountDeps1,      
                                                dest: nd0  ,       
                                                    
                                                unmountTransitiveLenSeconds: (
                                                    headTime + ((0.2) * scanBatchPeriod )  
                                                ) ,  
                                            })              
                                        ) ;
                                        return {
                                            nd10, 
                                        } ;
                                    }
                                ) ;
                                ; 
                                ;      
                                ;     
                                const useCurrentCtxTDebugPanel = (
                                    () => (
                                        <p>
                                            Current Ctx T : 
                                            <NUMERIC maxPrecision={3 } >{ currentTimeE }</NUMERIC>
                                            (changes: { useDepsChgCount({}, [currentTimeE ]) } )
                                        </p>    
                                    )
                                ) ;
                                /**     
                                 * re-render(s) had been like brute-force trial-and-error, so  
                                 * there is need for indirection via using {@link CBC } and {@link React.useMemo }. 
                                 */
                                const emAfterRemountDeps = React.useMemo(() => {
                                ;
                                const graph = (                        
                                                tScan1             
                                                .map(v => (v + -intendedDelayInSeconds ) )        
                                                .map((t1 : number ): Parameters<typeof SETVALUECURVE_AT_TIME >[1][number ] => {             
                                                    /**    
                                                     * the argument to the following mapping/scanning thru {@link lComputeAtT }
                                                     */
                                                    const t2 = (         
                                                        (typeof tScanMappingDomainRoundPrec === "number" ) ?
                                                        +t1.toFixed(tScanMappingDomainRoundPrec )
                                                        : t1 
                                                    ) ;            
                                                    ;                              
                                                    const {    
                                                        vl ,            
                                                    } = (         
                                                        lComputeAtT((     
                                                            t2
                                                        ) )          
                                                    ) ;          
                                                    return {                 
                                                        t: t2 ,          
                                                        vl: vl ,                     
                                                    } ;          
                                                })     
                                                .toArray()          
                                ) ;
                                return (
                                    <CBC name="CFnValue_EmAfterRemountDeps_1" > 
                                    { function useCE1() {  
                                        ;
                                        ;     
                                        ;
                                        ;                              
                                        const {
                                            nd10, 
                                        } = (
                                            useRelevantAutoRemountedNode()
                                        ) ;
                                        return (
                                        <CBC name="CFnValue_EmAfterRemountDeps_2" >
                                        { function useCE2() {
                                        ;
                                        const nd1 = (             
                                            useSimplePolylineSource(nd10, graph )
                                        ) ;            
                                        ;
                                        ;     
                                        // DEBUGGING                         
                                        const mountRandom1 = [     
                                            (  
                                                React.useMemo(() => (       
                                                    Math.random()   
                                                ) , [nd10 ])  
                                            ) ,      
                                            ( 
                                                React.useMemo(() => (       
                                                    Math.random() 
                                                ) , [nd1 ])       
                                            ) ,       
                                        ] ;                             
                                        ;          
                                        const useBbgArray10 = (
                                            () => [               
                                                <>         
                                                { useTopicHeadedRenderCount((
                                                    <i> ConstantSourceNode init </i>
                                                ))  }   
                                                </>   ,       
                                                <p>               
                                                <i> Remount Deps Chg </i> : 
                                                { useDepsChgCount({}, remountDeps1 ) }    
                                                </p>   ,     
                                                <p>      
                                                    <i> <code>nd10</code> Instance </i> : 
                                                    { useDepsChgCount({}, [nd10 ] ) }      
                                                    ;  
                                                    <i> <code>nd1</code> Instance </i> :   
                                                    { useDepsChgCount({}, [nd1  ] ) }     
                                                </p>   ,  
                                                <p>    
                                                <i> <code>ctxT</code> chg </i> :     
                                                { useDepsChgCount({}, [ctxT] ) }              
                                                </p>   ,                           
                                                <p>     
                                                <i> <code>lComputeAtT</code> chg </i> : 
                                                { useDepsChgCount({}, [lComputeAtT] ) }    
                                                </p>   ,                             
                                            ]          
                                        );             
                                        const useDbgArray101 = (
                                            function () {              
                                                const depsChgCnt = (
                                                    useDepsChgCount({} , [
    
                                                        ctxT ,        
    
                                                        samplingGranularityMillis ,    
                                                        scanBatchFrequency ,   
                                                        codeDeps ,                    
                                
                                                        useCScanTs ,       
                                                        lComputeAtT ,  
                                                        
                                                        nd1,   
                                                    ])
                                                ) ;  
                                                return (
                                                    <> { depsChgCnt } </>
                                                ) ;
                                            }  
                                        );       
                                        // TODO       
                                        return (                        
                                        <CBC name="CBC_CFnValue_EmAfterRemountDeps_3">
                                        { function useCE3() {
                                        ;
                                        // TODO       
                                        return (                        
                                            <section>        
                                            <code>
                                                end-level effector
                                            </code>
                                            { useTopicHeadedRenderCount( <i> Automative Call ID </i> ) && null }       
                                            { (
                                            <p>
                                                <code>remountDeps</code> chg count :
                                                <NUMERIC>{ useDepsChgCount({}, remountDeps1) }</NUMERIC>
                                            </p>     
                                            ) && null }
                                            { (
                                                useCurrentCtxTDebugPanel()
                                            ) && null }
                                            { (
                                            <pre>     
                                                { (
                                                    JSON.stringify({  }, null, 2 )
                                                ) }   
                                            </pre>                    
                                            ) && null }
                                            { useDbgArray101() }
                                            </section>       
                                        ) ;            
                                        } }
                                        </CBC>
                                        ) ;            
                                        } }
                                        </CBC>
                                        ) ;                   
                                    } }
                                    </CBC >
                                ) ;
                                } , remountDeps1 ) ;               
                                const eRemountDepsCountCbcDebug = (
                                    React.useMemo(() => (
                                        <CBC name="eRemountDepsCountCbcDebug">
                                        { function useCbcd() {
                                            return (
                                                <section>
                                                <code>
                                                eRemountDepsCountCbcDebug
                                                </code>
                                                { useTopicHeadedRenderCount( <i> Automative Call ID </i> ) }
                                                </section>
                                            ) ;
                                        } }
                                        </CBC>
                                    ) , remountDeps1 )
                                ) ;
                                const edbx: React.ReactElement = (
                                    <section>
                                    <code>
                                    useCScannedImpl with a ctx current t
                                    </code>
                                    { useTopicHeadedRenderCount( <i> Automative Call ID </i> ) && null } 
                                    { (function useDebug() {
                                        ;
                                        const e = (
                                            <div>                                       
                                            { eRemountDepsCountCbcDebug && null }
                                            { useCurrentCtxTDebugPanel() && null }
                                            </div>
                                        ) ;
                                        return csiDebug && e ;
                                    })() }
                                    { emAfterRemountDeps }
                                    </section>
                                ) ;
                                return (
                                    edbx
                                ) ;
                            }    }                
                            </CBC>          
                            :              
                            <></>         
                        ), [nd0, React.useDeferredValue(currentTimeE && Math.floor(currentTimeE * 3 ) ) ])
                    ) ;   
                    return {            
                        e ,  
                    } ;  
                }            
                const {               
                    e ,                       
                } = (  
                    useCScannedImpl()    
                ) ;             
                ;                 
                const dbg = (   
                    <div>
                    { useTopicHeadedRenderCount( <i> Automative Call ID </i> ) && null }       
                    </div>  
                ) ;          
                return (        
                    dBBC((
                        true    
                            
                    ), { dbgBox1: dbg, c1: e })  
                ) ;                      
            }                    
            return (                    
                function CFncValueC(propsC : (  Props  ) ) {     
                    // debbugging               
                    {          
                        ;
                        React.useEffect(() => {     
                            0 && console.log(CFncValueC.name ) ;      
                        }, [] ) ;                   
                    }              
                    return (
                        useCFVRenderImpl({ propsC, })
                    ) ;
                }
            )  ;  
        })()
    } ;   
})() ;     
const CAbsoluteTValueSeq = (
    function ({ value: args0, deps: deps0 } : { 
        value: Parameters<typeof fromTSeqComputedValueInterpolated > ;
        deps ?: React.DependencyList ;
    }) {
        const deferredRandom1 = (
            useRealTimeQueryInterval1<number>(() => (
                Math.random()
            ) , 0.5 * 1000 )
        ) ;
        const deps1 : React.DependencyList = (
            deps0 || [deferredRandom1 ]
        ) ;
        const {
            valueAtT: valueAtAbsoluteT ,
        } = (
            React.useMemo(() => (
                fromTSeqComputedValueInterpolated(...args0 )
            ) , [deps1 ] )
        ) ;
        return (
            <CFnValue 
            value={({ ctxT }) => (
                valueAtAbsoluteT(ctxT ) 
                || 0
            ) } 
            codeDeps={deps1} 
            />
        ) ;
    }
) ;
 
  


 



export {

    CConstantValue , 
    CConstantValueProps ,
    CFnValue as CFnValueByAbsoluteT ,    
    CFnValueProps ,
    CAbsoluteTValueSeq ,
} ;  