
// utility imports                  
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue, OmitM } from "./generalUse11";  
import { ABandpassFreqArgInputRangeMode } from "./audioFltBandpassMetaRangeMode";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";        
import { K, asVoidElement, NUMERIC } from "./commonElements";             
import { CBC } from "./useStateInCallback";  
import { useRealTimeQueryInterval1 } from "./usingNonHooksValues";     
import { 
    useDeferredTrue as useDeferredTrue0  ,   
} from "./usingDeferredBoolean";       
import { 
    useOneWayCheckBox , 
} from "./useCompletion";  



import { 
    XDC , 

} from "./useAudioGraphImplFComponentsSemanticsBasic";   
     












  
const useDeferredTrue1 = (     
    (...[options = {} ] : [        
        {
            deps ?: React.DependencyList ;  
            UE ?: keyof Pick<typeof React, "useEffect" | "useLayoutEffect"> ;
            ueDebug ?: false | true ;    
        } ? ,      
    ])  => {    
        const { deps = [], UE = "useLayoutEffect", ueDebug = false } = options;
        const [s, setS] = (   
            React.useState<boolean>(false )                       
        );          
        const setToTrue = (
            function (): void {
                setS(() => true ) ;     
            }         
        );                
        React[UE ](() => {             
            ueDebug && console.log(`useDeferredTrue1 > timeout effect  `) ; 
            setTimeout(() => {    
                ueDebug && console.log(`useDeferredTrue1 > timeout effect > callback `) ; 
                setToTrue() ;     
            } , 1 * 1000 ) ;
        } , deps ) ;;
        return [s, { setToTrue }] as const ;       
    }    
); 
const useDeferredTrue = (
    function (...a : Parameters<typeof useDeferredTrue1> ): boolean {
        const [s, {} ] = (
            useDeferredTrue1(...a )   
        ) ;      
        return s ;
    }
) ;     

const DbbOrHovered = (
    function ({ dBB, children: c1 } : React.PropsWithChildren<{ dBB : boolean ; }> ) {
        const [asHovered, markAsHovered] = (
            useOneWayCheckBox()        
        ) ;   
        return (   
            <div            
            style={{ background: `rgba(0, 0, 0, 0.01 )` }}
            onMouseMove={markAsHovered } 
            onPointerMove={markAsHovered}                    
            >         
                <div
                style={{ visibility: (dBB || asHovered ) ? undefined : "hidden" }}   
                >
                { c1 }       
                </div> 
            </div>                   
        ) ;
    }
);   
const dBBC = (() => {
    return (  
        function (...[dBB , { dbgBox1, c1 }] : [ 
            boolean,
            { dbgBox1 : React.ReactElement ; c1: React.ReactElement ; } ,     
        ]) {
            ;
            return (                
                <XDC>      
                         
                <aside 
                title={
                    [
                        "technical details. " ,
                        "an actual reflection of the actual implementation; merely to spot something wrong." ,
                        "unlikely useful for users. " ,
                    ].join("\n")
                }
                >
                { (dBB) ? dbgBox1 : <></> }    
                </aside>
                <DbbOrHovered dBB={dBB } >
                { c1 }
                </DbbOrHovered>                   
                </XDC >      
            ) ;                      
        }
    ) ;  
})();        
   

  

          
export {
    useDeferredTrue ,  
    useDeferredTrue1 ,  

    DbbOrHovered , 
    dBBC ,   
} ;  