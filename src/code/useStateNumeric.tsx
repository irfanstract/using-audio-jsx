
// utility imports                  
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue, OmitM } from "./generalUse11";   
import React, { useMemo } from "react";                
             





     




      
  
const useCounter = (() => {
    const WITH_INCB = (
        function useWithParameterisedIncrementer1 (...[{ incrementBy }] : [
            { incrementBy : React.Dispatch<number> ; } ,   
        ]) {
            ;                
            const increment = (
                React.useCallback((
                    (...[incr = 1 ] : [incr ?: number]) => (
                        incrementBy(incr  )     
                    )
                ), [incrementBy ])
            ) ;     
            const decrement = (      
                React.useCallback((
                    () => incrementBy(-1 )
                ), [incrementBy])   
            );        
            ;
            return {
                incrementBy , 
                increment , 
                decrement ,     
            } ;
        }
    ) ;
    return (     
        function useCounterIpml (...[{ initialValue = 0 , } = {} ] : [
            { initialValue ?: number ; } ?  ,   
        ] ) {
            const [v, incrementBy ] = (
                React.useReducer((v0: number, incr: number) => (
                    v0 + incr      
                ) , initialValue )   
            );                                 
            return {     
                v ,  
                ...WITH_INCB({ incrementBy }) , 
            } ;
        }
    ) ; 
})() ;
const useMonotonicallyIncrementation = (
    function useMI(...args : Parameters<typeof useCounter > ) {
        const [ { increment: increment0 , v: vl , }] = [(   
            useCounter(...args )            
        )] ;                    
        return [             
            vl ,   
            () => increment0() ,          
        ] as const;
    }
) ;



export {
    useCounter ,  
    useMonotonicallyIncrementation ,  
} ;  