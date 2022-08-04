 
// utility imports        
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue } from "./generalUse11";  
import { ABandpassFreqArgInputRangeMode } from "./audioFltBandpassMetaRangeMode";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";     
import { K, NUMERIC } from "./commonElements";      
import { CBC } from "./useStateInCallback";  
import { 
    usingInterval ,            
} from "./usingTimeoutOrInterval";       
import { 
    useRealTimeQueryInterval ,    
    useNumericDigest ,   
    useLogScaleNumericDigest ,    
} from "./useNonHookValue";     
 
     
import { CFreqDmAnalyF1 } from "./useAudioNodesFreqDmAnalysisC";   
import { useDeferredTrue } from "./useAudioGraphImplUseDeferredBoolean";           







    


const {
    TIMEDOMAIN_NORMALISED ,  
    EFFECTIVE_INTENSITY_NORMALISED: RESULTING_MAGN_NORMALISED ,   

} = ABandpassFreqArgInputRangeMode ;   
         
const CFreqDmAnalyF1X = (() => {                  
    type MountageProps0 = (         
        ComponentProps<typeof CFreqDmAnalyF1 >      
    ) ;             
    type MountageProps1 = (
        MountageProps0  
        &
        { 
            inertialCoef ?: number ;    

            /**    
             * debugging panel is the way to discover the inner workings in case something goes wrong. 
             * sadly, in this case, it will significantly overhead the UI engine, so
             * it should be disabled by default  
             */
            showDebug ?: false | true ;     
        }               
    ) ;           
    type EngineProps = (                     
        NonNullable<(        
            MountageProps0["value"]  
        )>
    );          
    const useIntercepted = (
        function useIntercepted11(props0 : EngineProps | undefined ) {
            ;          
            const [v, setV] = (
                React.useState<number >(0 )    
            ) ;    
            const props1 = (       
                function intercepted(): (          
                    EngineProps | undefined           
                )   {                 
                    if (props0 ) {                                          
                        const {   
                            onValue: onValue0 = Object , 
                            ...vl1    
                        } = props0 ;         
                        const onValue1 = (
                            function ({ value } : { value: number ; } ) {
                                setV(() => value ) ;
                                onValue0({ value }) ;
                            } 
                        );        
                        return {
                            onValue: onValue1 ,  
                            ...vl1 ,         
                        } ;  
                    } else {
                        return undefined ;  
                    }        
                }       
            )() ;             
            return {                
                scnValue : v ,
                props1 : props1 ,                 
            } ; 
        }      
    ) ;       
    return (   
        IterableOps.identity<(                                             
            React.FC< MountageProps1 >      
        )>((                            
            function CFreqDmAnalyC({ 
                children: graph,   
                value : value0,  
                inertialCoef = 2 ** -3 ,      

                showDebug = false ,   
            }) {     
                const {   
                    props1 : value1 , 
                    scnValue : v0 ,         
                } = (   
                    useIntercepted(value0 )
                ) ;       
                const v = ( 
                    useLogScaleNumericDigest(v0 , {   
                        inertialCoef : inertialCoef , 
                        timeoutMillis : ( 2 ** -3 ) * 1000 ,
                    } )  
                ) ;   
                const vlDeferred = (        
                    React.useDeferredValue(v )           
                ) ;    
                const dbgBox : React.ReactElement = (() => {
                    const LIVE = (    
                        <i> non-constant value chnging ; </i>    
                    ) ;    
                    const rows: readonly ((null | false ) | React.ReactElement)[] = [  
                        showDebug && (
                            <tr key="value" title="the presently Value " >                  
                                <td> 
                                <i> Value </i>      
                                </td>                
                                <td> 
                                <NUMERIC maxPrecision={3 } >
                                {vlDeferred }         
                                </NUMERIC>       
                                </td>                
                            </tr>                    
                        ) ,          
                        (            
                            <tr key="iner-c" title="the Inertial Coefficient value" >        
                                <td>
                                <i> Inertial Coefficient </i>
                                </td>        
                                <td>   
                                <NUMERIC maxPrecision={3 } >
                                {  inertialCoef    }  
                                </NUMERIC>    
                                </td>    
                            </tr>     
                        ) , 
                    ] ;        
                    return (                
                        <table>           
                        <tbody>     
                            { rows }
                        </tbody>
                        </table>  
                    ) ; 
                })() ;  
                const el = ( 
                    <CFreqDmAnalyF1 value={value1} >
                        { graph } 
                    </CFreqDmAnalyF1>       
                );   
                const dBB = (
                    useDeferredTrue()        
                ) ;
                // TODO                               
                return (        
                    <div>        
                        <div>           
                            { el }     
                        </div>   
                        { useDeferredTrue() ? dbgBox : <></> }
                    </div>      
                ) ;    
            }                       
        ))
    ) ;   
})();

const graphAfterNrmInterpretativeMode = (
    function (...[   
        {       
            mode1 : interpretativeMde ,         
    
        }  , 
        graph , 
    ] : [    
        {    
            mode1 : ABandpassFreqArgInputRangeMode ;  
            //          
    
        } ,  
        React.ReactElement ,    
    ]) {
        return (
            (
                (interpretativeMde === TIMEDOMAIN_NORMALISED ? (
                    graph          
                ) : null )     
                ||
                (interpretativeMde === RESULTING_MAGN_NORMALISED ? (  
                    // TODO            
                    <CFreqDmAnalyF1X   
                    value={{
                        refreshIntervalMillis: (2 ** -5 ) * 1000 ,     
                    }}     
                    inertialCoef={2 ** -3.5 } 
                    >    
                        {graph }
                    </CFreqDmAnalyF1X >     
                ) : null )            
                ||                        
                null
            ) || <></>                
        ) ;      
    }
) ;   

       













export {
    graphAfterNrmInterpretativeMode ,  
} ;