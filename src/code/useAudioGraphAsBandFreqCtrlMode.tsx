 
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
} from "./useNonHookValue";     
 
     
import { CFreqDmAnalyF1 } from "./useAudioNodesFreqDmAnalysisC";      







    


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
        { inertialCoef ?: number ; }  
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
            function C({ children: graph, value : value0, inertialCoef = 0.3,  }) {    
                const {   
                    props1 : value1 , 
                    scnValue : v0 ,       
                } = (   
                    useIntercepted(value0 )
                ) ;                     
                const v = (                  
                    useNumericDigest(v0, {  
                        inertialCoef : inertialCoef , 
                        timeoutMillis : ( 2 ** -3 ) * 1000 ,
                    })
                ) ;
                const vlDeferred = (
                    React.useDeferredValue(v )        
                ) ;   
                // TODO                               
                return (  
                    <div>   
                        <div>
                        <CFreqDmAnalyF1 value={value1} >
                            { graph } 
                        </CFreqDmAnalyF1>          
                        </div>   
                        <table>    
                        <tbody>
                        <tr>
                            <td>value </td>
                            <td> 
                            <NUMERIC maxPrecision={3 } >
                            {vlDeferred }
                            </NUMERIC>
                            </td>
                        </tr>        
                        </tbody>
                        </table>
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
                    inertialCoef={0.95 } 
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