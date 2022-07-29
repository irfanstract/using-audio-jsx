
import {   
    IterableOps ,   
    BoundedIdentityFunction,                    
} from "./generalUse11" ; 
import React, {      
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 


          
    
import { AUDIONODES_USEEFFECT } from "./useAudioNodesParamChgEffect1";      







/**    
 * {@link useGainELasParamImpl }
 */
type GEParam = {                
    value : number ;   
    swingTConstant ?: number ;          
    scheduledT ?: number | "presently" ;
}      ;  
/**    
 * `c: (nd: Nd1) => AudioParam ` shall never change
 */  
const {
    useGainELasParamImpl ,          
     
} = ((...[{ UGEPI_DEBUG = false } = {} ] : [
    { UGEPI_DEBUG ?: boolean ; } ? ,      
] ) => {    
    type NdAbstract = (
        Pick<AudioNode, "context">          
    ) ;          
    type Args1<Nd1 extends NonNullable<NdAbstract > > = [      
        dest : Nd1 | null ,             
        destWhichParam: (nd: Nd1) => AudioParam ,                       
        etc: GEParam ,                   
    ] ;                
    const useFromArgs = (
        function useFromArgsE<Nd1 extends NdAbstract >(args : Args1<Nd1 > ) {
            const [nd1, c,  { value, scheduledT: scheduledT0 = "presently", swingTConstant = 2 ** -4 }] = args ;                 
            ;        
            const { scheduledT: scheduledT, p } = (() : {            
                scheduledT: number ;      
                p: AudioParam | null ; 
            } => (         
                (                                
                    nd1 ?              
                    { 
                        scheduledT : ( 
                            scheduledT0 !== "presently" 
                            ?     
                            scheduledT0 : nd1.context.currentTime 
                        ) ,   
                        p : c(nd1 ) , 
                    }                     
                    : null         
                ) 
                ||
                { scheduledT: 0, p: null }         
            ))() ;     
            // TODO
            const c1 = (          
                React.useCallback(c, [] )  
            ) ;                             
            ;
            return {
                value , 
                swingTConstant ,    

                scheduledT , 
                p ,     
            } ;   
        }       
    ) ;    
    return {            
        useGainELasParamImpl : (  
            function <Nd1 extends NdAbstract >(   
                ...args : Args1<Nd1 > 
             ) {       
                const  {  
                    value , 
                    swingTConstant ,        
     
                    scheduledT , 
                    p ,     
                } = (
                    useFromArgs(args )
                ) ;             
                ;                
                /**   
                 * note : 
                 * intentionally left {@link scheduledT } out of `deps` ! 
                 * 
                 *              
                 */
                React[AUDIONODES_USEEFFECT ](() => {         
                    if (p) {       
                        if (UGEPI_DEBUG ) {
                            ;                   
                            console.log({ p, value, scheduledT, swingTConstant, args, }) ; 
                            console.log((() => {
                                const c = args[0]?.context || null ;      
                                return c && { ctxT : c.currentTime } ;
                            })()) ;      
                        }
                        {
                            ;
                            // TODO           
                            if (1) {
                                p.cancelAndHoldAtTime(scheduledT ) ;    
                            }
                            p.setTargetAtTime(value, scheduledT + 0.0001, swingTConstant ) ;  
                        }                      
                    };         
                } , [p, value ]);        
            }   
        ) ,  
    } ;    
})({ UGEPI_DEBUG: true });    

   











export {
    useGainELasParamImpl , 
} ;     
export type {
    GEParam , 
} ;