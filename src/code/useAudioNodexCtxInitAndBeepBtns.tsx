import {  
    OptionsCouldBeOmittedAltogether,
    // Unix , 
    IterableOps ,      
    // util ,                                      
    // memoize, 
    BoundedIdentityFunction,   
} from "./generalUse11" ;     
import React, {      
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { useEffectToMap as useEfectToMap } from "./useAudioNodexCtxInitAndBeepBtns1";      

    
// Domain Imports, and CSS Imports  
import { useAudioCtxCurrentTime, useAudioCtxWithInitBtn } from "./useAudioNodexCtxInitBtn";    
import { useCanAudioCtxUpdateCurrentT } from "./useAudioNodexCtxInitBtn"; 
import { useAudioCtxWithInitBtn1 } from "./useAudioNodexCtxInitAndBeepBtns1";  








const AUDIONODEDEMOKIT_T1BEEPAGAINIMPL = (
    (...[prps = {} ] : [
        Parameters<typeof useAudioCtxWithInitBtn>[0] ,
    ] ) => {   
        const [           
            {    
                t1,                                
                beepAgain: runInitialBeepAgain,                 
                lastBeepT,         
                lastReactivativeTime,           
                ...aCtx  // NO TRAILING COMMA AFTER REST-PARAMETER In DESTRUCTURING           
            } ,       
            aCtxInitBtn ,                         
        ] = (         
            useAudioCtxWithInitBtn1(prps )                   
        ) ;                                                                                                            
        const ctxT = (           
            ((
                useAudioCtxCurrentTime(aCtx.destination?.context )                
            ))
        ) || -1 ;     
        const [
            gv1,                                        
            setGv1,
        ] = (
            useState<number>(2 ** -3 )        
        ) ;                        
        return {
            t1 ,                    
            runInitialBeepAgain , 
            lastBeepT ,  
            lastReactivativeTime , 
            aCtx ,    
  
            aCtxInitBtn ,      

            ctxT ,     

            gv1 ,   
            setGv1 ,     

        } as const ;                                    
    }
) ;     

const AUDIONODEDEMOKIT_T1BEEPAGAIN = (
    (...args : Parameters<typeof AUDIONODEDEMOKIT_T1BEEPAGAINIMPL > ) => {
        ;  
        const {
            t1 , 
            runInitialBeepAgain , 
            lastBeepT ,  
            lastReactivativeTime , 
            aCtx ,    

            aCtxInitBtn ,         

            ctxT ,     

            gv1 ,   
            setGv1 ,     
            
        } = (
            AUDIONODEDEMOKIT_T1BEEPAGAINIMPL(...args ) 
        ) ;
        const ds0 = (
            aCtx.destination                 
        ) ;                
        const dbgInfoOfTAndLastBeepT = (             
            { t1, lastBeepT }        
        );            
        const beepBtn = (
            <button type="button" onClick={() => runInitialBeepAgain() } >
                beep again      
            </button>                                 
        ) ;             
        const dbgPanel1 : React.ReactElement = (
            // TODO 
            <div />
        ) ;
        return {                
            t1 , 
            runInitialBeepAgain ,         
            lastBeepT ,                                                                                            
            aCtx ,   
            ctxT ,
                           
            beepBtn ,
            gv1,
            setGv1 ,     

            ds0 ,     
   
            dbgInfo1: dbgInfoOfTAndLastBeepT , 
            dbgPanel1 , 
        } as const ;   
    }
) ;           









   











export {   
    useAudioCtxWithInitBtn1 ,      
    
    AUDIONODEDEMOKIT_T1BEEPAGAINIMPL ,      
    AUDIONODEDEMOKIT_T1BEEPAGAIN , 
} ;


