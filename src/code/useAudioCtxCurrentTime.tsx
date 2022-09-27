import {  
    OptionsCouldBeOmittedAltogether ,
    // Unix , 
    IterableOps ,      
    Iterable ,
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
    (...[c, { periodMillis: requestedPeriodMillis }, refreshIntervalProperties] : [
        BaseAudioContext | null ,
        ...OptionsCouldBeOmittedAltogether<{
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
        }>,
        ...OptionsCouldBeOmittedAltogether<(
            Required<(
                Parameters<typeof useRefreshByInterval >
            )>
        )[2]> ,
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
            (function useACtxPeriodicImpl(...cctArgs : [
              null | BaseAudioContext ,
              ... OptionsCouldBeOmittedAltogether<(
                { periodMillis : number ; }
              )>,
            ] ) : number | null {
                ;
                const [c, { periodMillis: requestedPeriodMillis, }, ] = cctArgs ;
                ;
                const { isWindowOnFocus } = (         
                    useWindowActivityStatus()        
                ) ;    
                const [v, setV] = (
                    useState<number >(0 )
                ) ;
                React["useLayoutEffect"](() => {
                    let cancelled1 : boolean = false ;
                    (async () => {
                      const requestedPeriodSeconds = (
                          requestedPeriodMillis / 1000
                      ) ;
                      if (c) {
                        const initialCtxT = (
                          c.currentTime
                        ) ;
                        ;
                        /**    
                         * for devs :
                         * - do not store the returned {@link Iterable.Seq `Seq`} since
                         *   {@link Iterable.Seq that would result in memory-leak }.
                         *   only store {@link symbol.iterator Iterator } over it instead.
                         * 
                         */
                        LOOP1 :
                        for (const { expectedCtxT, } of (
                          Iterable.Range().toSeq()
                          .map((i) => ({
                              expectedCtxT : (
                                initialCtxT 
                                +
                                (i * requestedPeriodSeconds )
                              ) ,
                          }) )
                          [Symbol.iterator]()
                        ) ) {
                          /**   
                           * IF CANCELLED - BREAK.
                           * 
                           */
                          if (cancelled1) {
                              break LOOP1 ;
                          }
                          AWAITLOOP11 :
                          while (true ) {
                              /**   
                               * IF CANCELLED - BREAK.
                               * 
                               */
                              if (cancelled1) {
                                  break LOOP1 ;
                              }
                              /**    
                               * provided that {@link c.currentTime } is ahead of this,
                               * it's time to exit this waiting ,
                               * 
                               */
                              if (expectedCtxT <= c.currentTime ) {
                                break AWAITLOOP11 ;
                              }
                              /**    
                               * brute-force code will result in CPU 100% usage, so
                               * a milliseconds-long recess will be very important.
                               * 
                               * it can't be guaranteed that the ctx is actually running at this point, and
                               * 
                               * 
                               */
                              await (
                                null 
                                || (
                                  c.state === "running" ?
                                  (
                                    isWindowOnFocus ?
                                    new Promise(R => setTimeout(R , 25 ) )
                                    : new Promise(R => setTimeout(R , 490 ) )
                                  )
                                  : null
                                )
                                || new Promise(R => setTimeout(R , 1 * 1000 ) )
                              ) ;
                          }
                          /**   
                           * IF CANCELLED - BREAK.
                           * 
                           */
                          if (cancelled1) {
                              break LOOP1 ;
                          }
                          /**    
                           * apply update.
                           */
                          setV(() => expectedCtxT ) ;
                        }
                      }
                    } )() ;
                    return () => {
                        cancelled1 = true ;
                    } ;
                } , [requestedPeriodMillis, c, isWindowOnFocus, ] );
                return v ;
            } )(c , { periodMillis: requestedPeriodMillis, } , )
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
    (...[c] : (
      Parameters<typeof useAudioCtxCurrentTime1 > extends [infer Ctx, ... (infer Args ) ] ?
      [
        Ctx ,
      ] 
      : never
    ) ) => {
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