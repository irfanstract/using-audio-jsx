 
// utility imports     
import Immutable from "immutable";    
import { IterableOps, PromiseReturnValue } from "./generalUse11";      
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";     
import { K, NUMERIC } from "./commonElements";               
import { useAsyncMemo } from "./useAsyncMemo";      
import { useRealTimeQueryInterval1 } from "./useNonHookValue";     
import { CBC } from "./useStateInCallback";      
import {
    PWrp ,    
    asyncLoadedComponentWrp , 
 } from "./usingComponentLazySuspense";
import { 
    isWindowActive , 
    useWindowActivityStatus ,      
} from "./useWindowFocusState";
           
import { useAudioCtxCurrentTime, useAudioCtxCurrentTime1 } from "./useAudioCtxCurrentTime";
//        
import { 
    getACtxMtWithoutAnyFilter1, 
    useACtxMtWithoutAnyFilter1, 
    AFeedableAndTappableNca ,

} from "./useAudioNodexCtxInitAndBeepNcaOnce1";  
import { ModifyingCompPayloadDiv as ModifyingCompPayloadDiv } from "./useAudioGraphImplFComponentsSemanticsBasic";      
// import { WithCtxtualDestCtxTInfo1 } from "./useAudioGraphImplCurrentDestNdACtxCurrentTimeC";  
;   

       
 
  
       
          
                
                     
                                               
type NCtxValue = (                                              
    {         
        [k in keyof (
            Pick<AFeedableAndTappableNca, "sideTapPt">    
        ) ] : NonNullable<AFeedableAndTappableNca["sideTapPt"] > | null ;
    }
    &     
    Record<keyof Pick<AFeedableAndTappableNca, "feedPt"> , AudioNode | null >             
);                  

type NCtxV1 = (
    NCtxValue & { currentTime : null | number ; }
);
const {     
    Prv1 ,    
    Consm ,   
    useCurrentDestNd0 ,  
   
    ctx0 ,            
     
} = ((): {    
    Prv1: React.FC<React.ProviderProps<NCtxValue>>;     
    Consm: React.FC<React.ConsumerProps<NCtxV1>>; 
    useCurrentDestNd0 : (
        null | (       
            () => NCtxV1  
        )        
    ) ;        
 
    ctx0: () => Promise<React.Context<NCtxValue>> ;  
      
     
} => {                
    /**   
     * the same {@link React.Context `Context`} will be returned across calls.  
     * defines 'the current `dest` '.  
     * note the `null`ability intended to replect the `null`ability of the arg of {@link usePersistingBeep }
     */        
     const ctx0 = (                                     
        IterableOps.once(async () => {     
            const c0 = (                 
                React.createContext<NCtxValue>(await getACtxMtWithoutAnyFilter1() )
            ) ;                   
            c0.displayName = (
                `ACtxtualDesinationRefCtx`      
            ) ;         
            return (                     
                c0                
            ) ;                   
        })     
    ) ;           
    {              
        const c0 = (                 
            React.createContext<(
                NCtxV1
            )  >( { feedPt: null, sideTapPt: null , currentTime: null , } )
        ) ;            
        const {
            XCons ,
        } = { 
            XCons : IterableOps.identity<(
                React.FC<React.ConsumerProps<NCtxV1 > >
            )>(function ({ children: payload }) {
                const ConsmImpl = c0.Consumer ;
                return (
                    <ConsmImpl>
                        { ({ ...p }) => payload({ ...p } ) }
                    </ConsmImpl>
                ) ;
            } ) , 
        }  ;
        const {
            XPrv ,  
        } = {
            XPrv : IterableOps.identity<(
                React.FC<React.ProviderProps<NCtxValue > >
            ) >(function ({ value, children: payload }  ) {
                const PrvImpl = c0.Provider ;
                const parentValue = (
                    React.useContext(c0 )
                );
                // const parentACtx = (
                //     (
                //         React.useContext(c0 )
                //     ).feedPt?.context
                //     ||
                //     null 
                // ) ;
                const requestedCtxCurrentTime = (
                    function useCtxCurrentT() {
                        const v0 = (
                            parentValue.currentTime
                        );
                        const v1 = (
                            useAudioCtxCurrentTime1(value.feedPt?.context || null , { periodMillis: 62.5 }, {} )
                            ||
                            null
                        ) ;
                        return ( 
                            (typeof v0 === "number" ) ?
                            v0 
                            : v1
                        ) ;
                    }
                )();
                const value1 = (
                    React.useMemo((): ContextReturnType<typeof c0 > => (
                        { 
                            ...value, 
                            currentTime: requestedCtxCurrentTime ,
                        }
                    ) , [value, requestedCtxCurrentTime ] ) 
                );
                // const requestedACtx = (
                //     ( 
                //         value1
                //     ).feedPt?.context
                //     ||
                //     null 
                // ) ;
                // const parentCT = (
                //     value1.currentTime
                // ) ;
                // const actualCT = (
                //     useRealTimeQueryInterval1(() => (
                //         value1.currentTime
                //     ) , 2.7 * 1000 )
                // ) ;
                return (
                    <PrvImpl value={value1 }>
                        { ( 
                            payload
                        ) }
                    </PrvImpl>
                ) ;
            } ) , 
        }  ;
        return {
            Prv1 : XPrv ,         
            Consm : XCons ,             
            useCurrentDestNd0 : () => React.useContext(c0 ) ,
            ctx0: async() => ctx0() ,      
        } ;           
    }
})() ;                                
const useWithCurrentSideTapPtRef: (
    (a: (v: Parameters<ComponentProps<typeof Consm >["children"] >[0] ) => React.ReactElement )
    =>             
    React.ReactElement               
) = (          
    useCurrentDestNd0 ?        
    (function useCurrentDest1 (ch0 ) {   
        const inf = useCurrentDestNd0() ;   
        return ch0(inf ) ;    
    })       
    :            
    (function renderWithDestNd (ch0 ) {    
        return (  
            <Consm>  
            { (inf ) => (   
                ch0(inf )
            ) }
            </Consm>                
        ) ;   
    })        
) ;                    
const WithGivenDest = (() => {          
    return (                  
        IterableOps.identity<(         
            React.FC<(       
                React.ProviderProps<(   
                    (NonNullable<NCtxValue> )["feedPt"]         
                )>       
            ) >
        )>(function WithGivenDestC({ value: newDest, children }) {        
            return (        
                useWithCurrentSideTapPtRef(({ sideTapPt }) => (
                    <ModifyingCompPayloadDiv              
                    >                    
                    <CBC>{ function useC1() {   
                        return (                                 
                            <Prv1 
                            // https://reactjs.org/docs/context.html#caveats 
                            value={(       
                                useMemo(() => (
                                    (null && console.log({ sideTapPt, newDest })   ) 
                                    ,
                                    (null && ({ } as { bar ?: () => void }).bar!()   )      
                                    ,
                                    { sideTapPt, feedPt: newDest }     
                                ) , [sideTapPt, newDest] )  
                            )}   
                            >        
                                { children }
                            </Prv1>                       
                        ) ;
                    } }</CBC>
                    </ModifyingCompPayloadDiv>            
                ))           
            ) ;                 
        })
    ) ;  
})() ;   
const useADestNdRefCtx10 = (
    () => (
        useAsyncMemo({  
            depsChangeImpliesInvalidation: true , 
            f: () => ctx0() ,        
        } , [ctx0 ] )      
    )  
);                 
const useADestNdRefCtx1 = (
    () => { 
        ;
        const aDestNdRefsCtx = ( 
            useADestNdRefCtx10()
        ) ;      
        type ADestNdRefsCtxValue = (   
            ContextReturnType<(
                NonNullable<typeof aDestNdRefsCtx >
            )>    
        ) ;
        const WithACtx : (    
            React.FC<(               
                React.ConsumerProps<(    
                    ADestNdRefsCtxValue         
                )>      
            ) >  
            |        
            null                  
        ) = (
            aDestNdRefsCtx ? 
            aDestNdRefsCtx.Consumer 
            : null    
        ) ;          
        return {
            aCtx: aDestNdRefsCtx , 
            WithACtx ,    
        } ;
    }
) ;     

const CurrentCtxTInfoDisplay = (
    function () {
        return (
            // TODO     
            useWithCurrentSideTapPtRef(({ feedPt }) => (    
                feedPt 
                ?         
                <CBC>
                { function useC() {                     
                    const { isWindowOnFocus } = (
                        useWindowActivityStatus() 
                    ) ;         
                    const ctxTime = (  
                        React.useDeferredValue((
                            useRealTimeQueryInterval1(
                                (): typeof feedPt.context.currentTime => feedPt.context.currentTime , 
                                (
                                    isWindowOnFocus
                                    &&
                                    (feedPt && (feedPt.context.state === "running" ) )
                                ) ? 100 : (3 * 1000 )  )
                        ))
                    ) ;    
                    return (   
                        <p>            
                        Global ACtx Time =      
                        <NUMERIC>{ +ctxTime.toFixed(3) }</NUMERIC>.  
                        if it's laggy then the workload is too heavy.
                        </p> 
                    ) ;
                } }    
                </CBC>
                : <>-</>        
            ) )
        ) ;   
    }
) ;     







  

        
  


     






       
 
  

          
              
                   
                
export {
    ModifyingCompPayloadDiv as WGD_DIV ,  

    CurrentCtxTInfoDisplay ,   
    Consm ,        
    useWithCurrentSideTapPtRef ,       
    useADestNdRefCtx1 ,                
        
    Prv1 , 
    WithGivenDest , 

    // WithCtxtualDestCtxTInfo1 , 
           
} ;                   