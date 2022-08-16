 
// utility imports     
import Immutable from "immutable";    
import { IterableOps, PromiseReturnValue } from "./generalUse11";      
import React, { useMemo } from "react";               
import { ContextReturnType } from "./commonElementsTypes";     
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
           
//        
import { 
    getACtxMtWithoutAnyFilter1, 
    useACtxMtWithoutAnyFilter1, 
    AFeedableAndTappableNca ,

} from "./useAudioNodexCtxInitAndBeepNcaOnce1";  
import { ModifyingCompPayloadDiv as ModifyingCompPayloadDiv } from "./useAudioGraphImplFComponentsSemanticsBasic";      

       
 
  
       
          
                
                     
                                               
type NCtxValue = (                                              
    {         
        [k in keyof (
            Pick<AFeedableAndTappableNca, "sideTapPt">    
        ) ] : NonNullable<AFeedableAndTappableNca["sideTapPt"] > | null ;
    }
    &     
    Record<keyof Pick<AFeedableAndTappableNca, "feedPt"> , AudioNode | null >             
);                  

const {     
    Prv1 ,    
    Consm ,   
    useCurrentDestNd0 ,  
   
    ctx0 ,            
     
} = ((): {    
    Prv1: React.FC<React.ProviderProps<NCtxValue>>;     
    Consm: React.FC<React.ConsumerProps<NCtxValue>>; 
    useCurrentDestNd0 : (
        null | (       
            () => NCtxValue  
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
    if (0 ) {                        
        ;        
        return {              
            Prv1 : (     
                asyncLoadedComponentWrp(async() => (await ctx0() ).Provider )
            ) ,                
            Consm : (   
                asyncLoadedComponentWrp(async() => (await ctx0() ).Consumer )
            ) ,            
            useCurrentDestNd0 : null ,            
            ctx0 ,          
        } ;     
    }          
    {              
        const c0 = (                 
            React.createContext<NCtxValue  >( { feedPt: null, sideTapPt: null } )
        ) ;            
        const {
            XCons ,
        } = { 
            XCons : IterableOps.identity<(
                React.FC<React.ConsumerProps<NCtxValue > >
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
                return (
                    <PrvImpl value={value} >
                        { payload }
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
    (a: (v: NCtxValue ) => React.ReactElement )
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
           
} ;                   