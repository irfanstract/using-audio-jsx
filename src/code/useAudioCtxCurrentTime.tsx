import {  
    // Unix , 
    IterableOps ,      
    // util ,  
    memoize,    
    BoundedIdentityFunction,   
} from "./generalUse11" ; 
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react"; 
import { usingInterval } from "./usingTimeoutOrInterval";  
import { useCanForceRefresh, useRealTimeQueryInterval1, useRefreshByInterval } from "./useNonHookValue";
import { isWindowActive, useWindowActivityStatus } from "./useWindowFocusState";        







/**    
 * this `useYyy`
 * is supposed to return 
 * the {@link BaseAudioContext.currentTime } 
 * {@link useRealTimeQueryInterval1 updated every `interval`}.
 * .
 */
const useAudioCtxCurrentTime1 = (  
    (...[c, { periodMillis }, refreshIntervalProperties] : [
        BaseAudioContext | null | undefined ,
        {
            /**    
             * this specifies *the refresh interval*, in milliseconds.
             * 
             * presently 
             * there's no known unambiguous way to (automatically) select the right *interval*
             * (apart from obvious need to throttle it if `c.state !== "running"` ), 
             * so 
             * you must have it explicitly given, 
             * possibly a value from externally-defined inference utility.
             */
            periodMillis : number ;  
        },
        (
            Required<(
                Parameters<typeof useRefreshByInterval >
            )>
        )[2] ,
    ] ) => {    
        const { isWindowOnFocus } = (         
            useWindowActivityStatus()        
        ) ;    

        /**   
         * the core part --
         * {@link useRealTimeQueryInterval1} 
         * for (after null-check ) {@link c.currentTime}!
         */
        const vl = (    
            useRealTimeQueryInterval1({
                f: () => (    
                    c ? 
                    c.currentTime
                    : null        
                ) , 
                ...refreshIntervalProperties , 
            } , (
                (      
                    /**   
                     * period millis, 
                     * with throttling in case of 'not running'
                     */
                    Math.max((
                        (c && c.state === "running") 
                        ? 
                        10 : 2500
                    ), periodMillis )    
                )  
            ) )
        ) ;

        return (() => {           
            return (          
                vl  
            ) ;
        })() ;
    }
) ;
/**   
 * {@link useAudioCtxCurrentTime1 }.
 * you should switch to the mangled variant ; 
 * this non-mangled variant does not provide means to make important config(s) like `period` etc.
 * 
 * @deprecated
 */
const useAudioCtxCurrentTime = (  
    (c: BaseAudioContext | null | undefined ) => {
        const vl = (
            useAudioCtxCurrentTime1(c , {
                periodMillis : (
                    (     
                        // 0.19          
                        // (1 / 3 )
                        // (isWindowOnFocus ? 0.11 : 0.5 )  
                        ((c && c.state === "running") ? 0.11 : 1.5 )    
                    ) * 1000
                ) , 
            } , { LE: "useLayoutEffect" } )
        ) ; 
        return (
            (typeof vl === "number" ) ?
            vl : undefined
        ) ;
    }
);
/**      
 * {@link useState allocates separate `state<number>`}, and 
 * a function to (programmatically) update its value to be the given {@link BaseAudioContext.currentTime}.
 * 
 * this `useYyy` is primarily for call by/from high-level, demonstrative apps.
 *     
*/
const useStateWithProgrammaticUpdateToBeAudioCtxCurrentT = (
    (c: BaseAudioContext | null ) => {
        const [t, setT ] = (
            useState<number>(-1 )        
        ) ;          
        const update = (  
            useCallback((       
                () => {  
                    console.log("c.currentT", c?.currentTime ) ;
                    setT((oldV: number ) => {
                        if (c ) {      
                            const { currentTime } = c ;
                            console.info({ currentTime }) ;
                            return currentTime ;
                        }
                        return oldV ;   
                    } ) ;
                }   
            ), [setT, c ])
        ) ;
        return [t, update] as const ;
    }
) ;     
/**      
 * {@link useState allocates separate `state<number>`}, and 
 * a function to (programmatically) update its value to be the given {@link BaseAudioContext.currentTime}.
 * {@link useStateWithProgrammaticUpdateToBeAudioCtxCurrentT}.
 * 
 * this `useYyy` constitutes misnomer.
 * this `useYyy` is primarily for call by/from high-level, demonstrative apps.
 *     
 * @deprecated  
 * use {@link useStateWithProgrammaticUpdateToBeAudioCtxCurrentT } instead        
*/
const useCanAudioCtxUpdateCurrentT = (
    useStateWithProgrammaticUpdateToBeAudioCtxCurrentT
);









export {
    useAudioCtxCurrentTime , 
    useAudioCtxCurrentTime1,
    useStateWithProgrammaticUpdateToBeAudioCtxCurrentT,
    useCanAudioCtxUpdateCurrentT ,      
} ;