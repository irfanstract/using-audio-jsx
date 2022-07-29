import {   
    IterableOps ,   
    BoundedIdentityFunction,                    
} from "./generalUse11" ; 
import React, {      
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { useEfectToMap } from "./useEffectToMap";  

  
    
import { AUDIONODES_USEEFFECT } from "./useAudioNodesParamChgEffect1";      
import {     
    useBiquadFilterNodeWithGivenFadeoutTimeConstant1,
    useConstantParamSrcNodeWithGivenFadeoutTimeConstant1,
    useGainNodeWithGivenFadeoutTimeConstant1, 
    useOscilltorNodeWithGivenFadeoutTimeConstant1 , 
    useWhiteNoiseNodeWithGivenProps ,     
 
    useParamNodeWithGiven ,   
  
} from "./useAudioNodesMounting11";          
 




    

    
// TODO
/**       
 * {@link AudioParam }
 */
const useAParamModulativeNode = (
    function (dest: AudioParam | null, c: (
        BaseAudioContext
        | 
        Readonly<{ c: BaseAudioContext ; }>
    ) | null ) {         
        return (   
            useParamNodeWithGiven(dest, c ? (              
                (("c" in c ) ? (c.c || null ) : null )  
                ||
                ((c instanceof BaseAudioContext) ? c : null )
                ||
                BaseAudioContext.prototype       
            ) : null )        
        ) ;
    }       
) ;         
/**       
 * {@link AudioParam } of an {@link AudioNode }
 */
const useAParamModulativeNode1 = (
    function <A extends (
        Pick<AudioNode, "context">     
    ), ParamName1 extends keyof A >(
        dest : (A & { [key in ParamName1] : AudioParam ; }) | null , 
        key : ParamName1 ,       
    ) {    
        const {
            context ,       
            [key] : p ,    
        } = (
            dest || { context: null, [key] : null, }     
        ) ;
        return (
            useAParamModulativeNode(p , context )
        ) ;
    }
) ;
/**   
 * {@link useAParamModulativeNode }     
 * 
 * @deprecated 
 * switch to the new name.  
 */
const useParamModulation = (
    useAParamModulativeNode 
) ;
     








  
 
          
     
export {
    useAParamModulativeNode , 
    useParamModulation , 
    useAParamModulativeNode1 , 
} ;  