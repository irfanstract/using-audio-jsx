 
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
      
        CFnValue : (        
            function CFncValueC({ value: compute , scanPeriodMillis = 32 } : ( 
                {    
                    value : (              
                        Required<(  
                            CFnVIProps
                        )>["compute"]  
                    ) ;                   
                    scanPeriodMillis ?: (                
                        Required<(  
                            CFnVIProps
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
                const delayInSeconds = 0.07 ;         
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
                const {           
                    e ,                      
                } = (   
                    (
                        function useCFVI(): { e: React.ReactElement ; } {          
                            const e = (        
                                useWithCurrentSideTapPtRef(({ feedPt: nd0 }) =>  (
                                    nd0      
                                    ?     
                                    <CBC>
                                    { function useE() {               
                                        const {  
                                            ctxT ,     
                                        } = (      
                                            useRealTimeQueryInterval1X(() => {
                                                const ctxT = (
                                                    nd0.context.currentTime           
                                                ) ;         
                                                return {  
                                                    ctxT ,      
                                                } ;  
                                            } , scanPeriodMillis )   
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
                                                        ctxTFloored, ctxTFloored + 1,   
                                                        scanPeriodMillis / 1000 )   
                                                ) ;                 
                                                return {
                                                    tScan1 ,     
                                                } ;
                                            } , [ctxTFloored ] )   
                                        ) ;         
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
                                            ) , [tScan1.first() ] )
                                        ) ;                                
                                        ;       
                                        // TODO      
                                        const {           
                                            swingTConst ,                
                                            timingArgMode ,         
                             
                                            SETTARGETATTIME , 
                                            SETVALUECURVE_AT_TIME ,      
                           
                                        } = eSupport({}    ) ;               
                                        ;       
                                        // TODO                             
                                        const nd10 = (  
                                            (                          
                                                useDepsRemount         
                                            )({ deps: [tScan1.first() ], dest: nd0 })
                                        ) ;
                                        // TODO remove this LOC ; this is only for debugging   
                                        {
                                            ;        
                                            const nd11 = (          
                                                useFixedGain(nd10, (     
                                                    // 2 ** -4   
                                                    2 ** -32      
                                                ) )          
                                            ) ;    
                                            useHalfSecondBeep(
                                                nd11, { t: (nd11 ? nd11.context.currentTime : 1E5 ) }) ;      
                                        }          
                                        const nd1 = (             
                                            useConstantParamSrcNodeWithGivenFadeoutTimeConstant1(nd10 , 0.5 )        
                                        ) ;              
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
                                                    SETVALUECURVE_AT_TIME(nd1, (      
                                                        graph       
                                                    ) , a => a.offset )    ;       
                                                }  
                                            };    
                                            // TODO           
                                        } ,   
                                        // eslint-disable-next-line react-hooks/exhaustive-deps            
                                        [nd1 ]) ;                     
                                        ;                
                                        // TODO           
                                        return (         
                                            <>     
                                            <pre>  
                                            { (             
                                                JSON.stringify((  
                                                    { 
                                                        ctxTFloored,  
                                                        tScan1First : tScan1.first() , 
                                                        mountRandom1, 
                                                    }
                                                ), null, 2 )
                                            ) }    
                                            </pre>
                                            </>
                                        ) ;                
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
                    )()
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