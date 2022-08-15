 
// utility imports                  
import Immutable from "immutable";            
import { 
    IterableOps, PromiseReturnValue, OmitM, FrequencyAndPeriod  ,    
} from "./generalUse11";   
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
    AUDIONODES_USEEFFECT , 
    AUDIONODES_USE_AUDIONODEEFFECT ,  
} from "./useAudioNodesParamChgEffect1";      
import {       
    WithGivenDest ,  
    Prv1 ,           
    Consm as WithCtxtualOut ,    
    useWithCurrentSideTapPtRef ,            

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

         
   


      



  
     
;

      
// const useATimeDomainVisWithDeps = (
//     function (...[nd10 , deps ]     )
// ) ;  
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
    type CFnVIProps = (      
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
        }           
    );
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
      
        CFnValue : (() => {    
            type Props = (
                {          
                    value : (              
                        Required<(  
                            CFnVIProps
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
                     * this is because `AudioParam`s are *spline*-based while (...)      
                    */
                    scanPeriodMillis ?: (                
                        Required<(  
                            CFnVIProps
                        )>["scanPeriodMillis"]       
                    )  ;                
                }              
            ) ;        
            const usePropsExpand = (   
                function (propsC: Props ) {
                    ;                                                              
                    const scanChunkFrequency = (
                        FrequencyAndPeriod.byPeriod(1 )            
                    ) ;      
                    const { 
                        value: compute ,   
                        scanPeriodMillis = 32  ,      
                        codeDeps = [] ,                
                    } = propsC;    
                    function usePeriodicCtxTScan1  (...[nd0 ] : [ AudioNode ] ) {
                        const usedPausedStatePeriodSeconds = (
                            React.useMemo(() => (1.8 + (Math.random() * 2.2 ) ) , [] )
                        ) ;   
                        return (              
                            useRealTimeQueryInterval1X(() => {    
                                const ctxT = (
                                    nd0.context.currentTime                             
                                ) ;         
                                return {             
                                    ctxT ,      
                                } ;        
                            } , (
                                // TODO
                                (
                                    nd0 && (nd0.context.state === "running" ) ?
                                    (scanChunkFrequency.period / 4.7 )   
                                    : (usedPausedStatePeriodSeconds )      
                                )             
                                *    
                                1000
                            ) )            
                        ) ;
                    }  
                    function useCScanTs(...[nd0, properties1 = {}] : [
                        AudioNode, 
                        { sp ?: number ; } ? ,      
                    ]) { 
                        const {                
                            sp: sp0 = 2 ** -2 ,      
                        } = properties1 ;         
                        const sp = Math.max(2 ** -3  , sp0 );
                        ;
                        const {       
                            ctxT ,           
                        } = (             
                            usePeriodicCtxTScan1(nd0 )   
                        );         
                        const ctxTFloored = (               
                            Math.floor(ctxT )               
                        ) ;                       
                        const {  
                            tScan1 ,           
                        } = (
                            React.useMemo(() => {      
                                ;                            
                                const tScan1 =  (             
                                    Immutable.Range(
                                        ctxTFloored, ctxTFloored + 1 ,   
                                        scanPeriodMillis / 1000 ,
                                         )  
                                ) ;                 
                                return {
                                    tScan1 ,     
                                } ;       
                            } , [ctxTFloored ] )   
                        ) ;              
                        return {
                            ctxT ,       
                            ctxTFloored     , 
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
                    ;                                              
                    ;                              
                    return {         
                        scanPeriodMillis ,  
                        scanChunkFrequency ,       
                        codeDeps ,   
      
                        usePeriodicCtxTScan1 ,  
                        useCScanTs , 
                        /**  
                         * this woul be one returned from {@link React.useCallback `useCallback`} and therefore
                         * it's safe to make this part of {@link React.useEffect `deps`}.
                         */
                        lComputeAtT ,         
                    } ;   
                }
            ) ;      
            return (                    
                function CFncValueC(propsC : (  Props  ) ) {                        
                    const {
                        scanPeriodMillis ,  
                        scanChunkFrequency ,   
                        codeDeps ,   

                        usePeriodicCtxTScan1 ,       
                        useCScanTs , 
                        lComputeAtT ,                  

                    } = usePropsExpand(propsC ) ;           
                    const {
                        frequency: scanFrq ,     
                        period: scanPeriod ,             
                    } = (         
                        scanChunkFrequency    
                    ) ;      
                    // debbugging               
                    {          
                        ;
                        React.useEffect(() => {     
                            0 && console.log(CFncValueC.name ) ;      
                        }, [] ) ;                   
                    }           
                    ;      
                    const delayInSeconds = 0.07 ;          
                    // TODO            
                    const {               
                        swingTConst ,                
                        timingArgMode ,          
             
                        SETTARGETATTIME , 
                        SETVALUECURVE_AT_TIME ,      
              
                    } = eSupport({}    ) ;               
                    const { 
                        remountDebugBeep = false ,     
                    } = {} as { remountDebugBeep ?: boolean ; } ;  
                    function useCScannedImpl(): { e: React.ReactElement ; } {          
                        const e = (        
                            useWithCurrentSideTapPtRef(({ feedPt: nd0 }) =>  (
                                nd0         
                                ?                   
                                <CBC>      
                                { function useE() {       
                                    const {
                                        ctxT ,     
                                        ctxTFloored     ,        
                                        tScan1 ,                            
                
                                    } = useCScanTs(nd0 ) ;       
                                    const actualScanKey : number = (
                                        Math.floor(ctxTFloored / scanFrq )  
                                    ) ;     
                                    const remountDeps1 = (       
                                        [actualScanKey, lComputeAtT ]  as const     
                                    ) ;  
                                    ; 
                                    ;      
                                    ;     
                                    /**     
                                     * re-render(s) had been like brute-force trial-and-error, so  
                                     * there is need for indirection via using {@link CBC } and {@link React.useMemo }. 
                                     */
                                    return React.useMemo(() => (
                                        <CBC > 
                                        { function useCE1() {  
                                            ;
                                            const graph = (        
                                                React.useMemo(() => (                        
                                                    tScan1             
                                                    .map(v => (v + -delayInSeconds ) )        
                                                    .map((t1 : number ): Parameters<typeof SETVALUECURVE_AT_TIME >[1][number ] => {             
                                                        const t2 = (        
                                                            // +t1.toFixed(1 )    
                                                            t1  
                                                        ) ;            
                                                        ;                              
                                                        const {    
                                                            vl ,            
                                                        } = (         
                                                            lComputeAtT(( 
                                                                // TODO restore to 't2'   
                                                                // t2       
                                                                t2  
                                                            ) )          
                                                        ) ;          
                                                        return {                 
                                                            t: t2 ,          
                                                            vl: vl ,                     
                                                        } ;          
                                                    })     
                                                    .toArray()          
                                                ) , remountDeps1 )
                                            ) ;                                    
                                            ;     
                                            ;
                                            ;                           
                                            // TODO     
                                            const nd10 = (  
                                                (                              
                                                    useDepsRemount           
                                                )({          
                                                    deps: remountDeps1,      
                                                    dest: nd0  ,       
                                                         
                                                    unmountTransitiveLenSeconds: (
                                                        (0.2) * scanPeriod   
                                                    ) ,  
                                                })              
                                            ) ;
                                            // TODO remove this LOC ; this is only for debugging   
                                            {
                                                const beepT = (
                                                    React.useMemo(() => (        
                                                        (nd10 && remountDebugBeep )   
                                                        ?    
                                                        (nd10.context.currentTime ) 
                                                        : 
                                                        ((1 + Math.random() ) *  5E5  )     
                                                    ) , [nd10 ] )           
                                                ) ;  
                                                ;                              
                                                const nd11 = (           
                                                    useFixedGain(nd10, (            
                                                        // 2 ** -4        
                                                        2 ** -32      
                                                    ) )                 
                                                ) ;     
                                                useHalfSecondBeep(   
                                                    nd11, { t: beepT }) ;         
                                            }             
                                            const nd1 = (             
                                                React.useMemo(():(
                                                    (  Omit<ConstantSourceNode, "start" | "stop" | "connect" | "disconnect"> ) 
                                                    | null     
                                                ) => {                  
                                                    if (nd10) {             
                                                        const cnd11 = (
                                                            nd10.context.createConstantSource()        
                                                        ) ;     
                                                        cnd11.connect(nd10 ) ;     
                                                        {        
                                                            ;              
                                                            (graph[0] ) && (                    
                                                                cnd11.offset
                                                                .setValueAtTime((graph[0] ).vl , 0 )     
                                                            );   
                                                            SETVALUECURVE_AT_TIME(cnd11, (      
                                                                graph       
                                                            ) , a => a.offset )    ;      
                                                        }
                                                        cnd11.start() ;         
                                                        return cnd11;    
                                                    } else {
                                                        return null ;         
                                                    }  
                                                } , [nd10 ] )              
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
        
                                                            scanPeriodMillis ,    
                                                            scanChunkFrequency ,   
                                                            codeDeps ,                    
                                    
                                                            usePeriodicCtxTScan1 ,       
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
                                                <>        
                                                <pre>     
                                                    { (
                                                        JSON.stringify({  }, null, 2 )
                                                    ) }   
                                                </pre>                    
                                                { useDbgArray101() }
                                                </>       
                                            ) ;                               
                                        } }
                                        </CBC >
                                    ) , remountDeps1 ) ;               
                                }    }                
                                </CBC>          
                                :              
                                <></>         
                            ))
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
                        { useTopicHeadedRenderCount( <i> Automative Call ID </i> ) }       
                        </div>  
                    ) ;          
                    return (           
                        dBBC((
                            useXDeferredTrue()    
                                
                        ), { dbgBox1: dbg, c1: e })  
                    ) ;                      
                } 
            )  ;  
        })()
    } ;   
})() ;     
 
  


 



export {
    cFnValueCompImplSupport1 ,    

    CConstantValue , 
    CFnValue ,    
} ;  