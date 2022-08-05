
import {   
    IterableOps ,   
    BoundedIdentityFunction,                    
} from "./generalUse11" ; 
import React, {      
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { 
    useDebugDispatcher ,      
} from "./commonElements";    


          
    
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
                    (nd1 && !(  scheduledT0 < 0 )) ?              
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
                ...args : [
                    ...[
                        Args1<Nd1 >[0] ,
                        Args1<Nd1 >[1] , 
                        Args1<Nd1 >[2] ,     
                    ] , 
                    {  
                        putInitailValue ?: 0 | 1 | "debug value" ; 
                        UGEPI_DEBUG1 ?: boolean ;      
                    } ?   ,  //  
                ]      
            ) {                                
                ;      
                const {
                    putInitailValue = 1 ,   
                    UGEPI_DEBUG1 = UGEPI_DEBUG ,   
                } = ( 
                    args[3]     
                    || {               
                    } as const       
                ) ;     
                const  {  
                    value: expectedValue , 
                    swingTConstant ,            
       
                    scheduledT ,     
                    p ,     
                } = (        
                    useFromArgs([args[0], args[1], args[2] ]  )
                ) ;                   
                ;                
                {     
                    ;    
                    const {    
                        UZM_CHECK ,   
                    } = (
                        useUnexpectedZeroingBackCheck()
                    ) ;          
                    if (true ) {         
                        ;                            
                        /**   
                         * like above or below, yet to define its initial value  
                         */        
                        React[AUDIONODES_USEEFFECT](() => {      
                            if (putInitailValue) {
                                ;                    
                                if (p) {                  
                                    if (putInitailValue === "debug value" ) {
                                        UZM_CHECK({           
                                            newValue : expectedValue , 
                                            presentlyValue : p.value ,  
                                        }) ;  
                                        console.log({
                                            expectedValue, 
                                            scheduledT , 
                                        });
                                    }              
                                    p.setValueAtTime(expectedValue, scheduledT )          
                                    ;             
                                }                      
                            }
                        } ,      
                        // eslint-disable-next-line  react-hooks/exhaustive-deps                 
                        [(putInitailValue && p) || null ] );      
                    }          
                    /**    
                     * note : 
                     * intentionally left {@link scheduledT } out of `deps` ! 
                     *  
                     *                      
                     */  
                    React[AUDIONODES_USEEFFECT ](() => {         
                        if (p) {                 
                            if (UGEPI_DEBUG1 ) {    
                                ;                   
                                console.log({ p, value: expectedValue, scheduledT, swingTConstant, args, }) ; 
                                console.log((() => {
                                    const c = args[0]?.context || null ;      
                                    return c && { ctxT : c.currentTime } ;
                                })()) ;      
                            }
                            {
                                ;  
                                // TODO            
                                if (1) { 
                                    p.cancelAndHoldAtTime(scheduledT + 0.5E-4 ) ;        
                                }
                                p.setTargetAtTime(expectedValue, scheduledT + 1E-4, swingTConstant ) ;  
                            }                           
                        };                         
                    } , 
                    // eslint-disable-next-line  react-hooks/exhaustive-deps       
                    [p, expectedValue ]);           
                }              
            }   
        ) ,  
    } ;         
})({ UGEPI_DEBUG: false });    

   



 

 




 
const useUnexpectedZeroingBackCheck = (
    function useUnexpectedZeroingBackCheck1 () {
        ;  
        const UZM_DEBUG = (   
            useDebugDispatcher<null>()   
        ) ;        
        const UZM_CHECK = (
            function (...[{ newValue, presentlyValue }] : [
                {
                    newValue : number ; 
                    presentlyValue : number ;      
                } ,  
            ] ) {
                ;         
                const pvSign = (       
                    Math.sign(presentlyValue )         
                ) ;
                const allDumpsVars = {     
                    newValue  , 
                    presentlyValue  ,
                } ;
                if ((  
                    /**             
                     * must respect the `sign`, and           
                     * must respect that it's sometimes what's expected   
                     */              
                    (pvSign * newValue) < (0.001 * (pvSign * presentlyValue ) )     
                )) {
                    UZM_DEBUG(() => {      
                        ;      
                        console.warn((
                            new TypeError(`unexpected zeroing during mount ` )  
                        ) , allDumpsVars ) ;          
                        return null ;               
                    }) ; 
                }                
                console.log(allDumpsVars ) ;        
            }  
        ) ;       
        return {
            UZM_DEBUG , 
            UZM_CHECK ,    
        } ;
    }
);
export { 
    useGainELasParamImpl ,    
    useUnexpectedZeroingBackCheck , 
} ;     
export type {
    GEParam , 
} ;     