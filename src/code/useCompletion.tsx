
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue } from "./generalUse11";       
import React, { useMemo } from "react";                    






    
/**   
 * Boolean Ref     
 */
class BRef {
    current : boolean = false ;    
}
/**    
 * to be used together with `useEffect` or `useLayoutEffect` ,     
 * to implement a callback only once even if a boolean could easily turn back to `false` . 
 * 
 * @example     
 * // check       
 * const { completed } = (     
 *   useBooleanCompletiveStat(() => (
 *     cacheWereAvailable() 
 *     || 
 *     isntItCompleted()  
 * 
 *   ) , {
 *     clearanceDeps : [] ,      
 * 
 *   } ) 
 * ) ; 
 * useEffect(() => { 
 *   .. ... 
 *   .. ... 
 *   .. ... 
 * } , [completed ] ) ; 
 * 
 */    
const useOneWayCheckedCompletiveStat = (
    function (...[runMain, { clearanceDeps = [] } ] : [ 
        main:() => { readonly done : true ; } ,         
        etc: {                 
            /** 
             * defining `length` as `undef` will prevent `Array`s from conforming .
             */
            length ?: undefined ;   

            /**   
             * whenever this arg changes then      
             * the stat will be reset back .      
             * defaults to `[]`.            
             */
            clearanceDeps ?: React.DependencyList ;    
        }    ,       
    ] ) {  
        const ref1 = (               
            React.useMemo((): BRef => {         
                const r = (   
                    new BRef        
                ) ;             
                r.current = false ;    
                return r ;           
            } , clearanceDeps )
        ) ;                 
        if (ref1.current ) {
            /**   
             *  no, avoid turning it back to `false`      
             */
            ;
        } else {
            ;
            const fRetunVl = runMain() ;             
            ref1.current = fRetunVl.done ;      
        }   
        ;
        return {
            completed : ref1.current ,    
        } as const ;
    }
) ;   
const [
    useBooleanEffect , 
    useBooleanLayoutEffect ,  
] = (    
    (
        function xxUseEffectWithSpecialisedDeps <Deps extends React.DependencyList>() {
            return (   
                (["useEffect", "useLayoutEffect"] as const )  
                .map(function (fName) {     
                    const useYyEffect = (     
                        React[fName]     
                    ) ;        
                    return (   
                        function useSpecialYyEffect(...a: [React.EffectCallback, Deps] ) {
                            return (
                                useYyEffect(...a )        
                            ) ;
                        }
                    ) ;       
                })              
            );   
        }
    )<readonly [boolean]>()
) ;   
const useOneWayCompletiveState = (  
    function (): [
        completed: boolean, 
        markAsCompleted: React.DispatchWithoutAction  , 
    ] {         
        return (
            React.useReducer((v0: boolean, ) => true, false )
        ) ;
    }
) ;      
const useOneWayChanger = (     
    function <V>(...[{ v0, v1 }] : [   
        Readonly<{ v0: V, v1: V , }> ,  
    ] ) : [  
        returnVal: V, 
        complify : React.DispatchWithoutAction  , 
    ] {     
        const [done, setDone] = (
            useOneWayCompletiveState()   
        ) ;
        return [done ? v1 : v0 , setDone ] ;   
    }
) ;







  
export {                  
    useOneWayCompletiveState ,     
    useOneWayCompletiveState as useOneWayCompletionalState ,       
    useOneWayCheckedCompletiveStat as useBooleanCompletiveStat ,   
    useOneWayCheckedCompletiveStat as useBooleanCompletionalState ,   
    useOneWayCheckedCompletiveStat ,          
    useOneWayChanger , 
    useOneWayCompletiveState as useOneWayCheckBox ,   
    useOneWayCompletiveState as useOneWayCheckMarking ,           
    useOneWayCompletiveState as useCompletionalState ,        
  
    useBooleanEffect ,   
    useBooleanLayoutEffect ,      

} ;            