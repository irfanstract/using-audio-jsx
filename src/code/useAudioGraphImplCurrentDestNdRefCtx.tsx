 
// utility imports     
import Immutable from "immutable";    
import { IterableOps, PromiseReturnValue } from "./generalUse11";      
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";     
import { K, NUMERIC } from "./commonElements";               
import { useAsyncMemo } from "./useAsyncMemo";      
import { useRealTimeQueryInterval1 } from "./usingNonHooksValues";     
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

       
 
  
       
          
                
                     
                                               
const AFeedableAndTappableNCc = {} ; // TS-1205
type AFeedableAndTappableNCc = (                                              
    {         
        [k in keyof (
            Pick<AFeedableAndTappableNca, "sideTapPt">    
        ) ] : NonNullable<AFeedableAndTappableNca["sideTapPt"] > | null ;
    }
    &     
    Record<keyof Pick<AFeedableAndTappableNca, "feedPt"> , AudioNode | null >             
);                  

type NCtxV1 = (
    AFeedableAndTappableNCc 
    & 
    { currentTime : null | number ; }
);
const {     
    Prv1 ,    
    Consm ,   
    useCurrentDestNd0 ,  
   
    ctx0 ,            
     
} = ((): {    
    Prv1: React.FC<React.ProviderProps<AFeedableAndTappableNCc>>;     
    Consm: React.FC<React.ConsumerProps<NCtxV1>>; 
    useCurrentDestNd0 : (
        (       
            () => NCtxV1  
        )        
    ) ;        
 
    ctx0: () => Promise<React.Context<AFeedableAndTappableNCc>> ;  
      
     
} => {                
    /**   
     * the same {@link React.Context `Context`} will be returned across calls.  
     * defines 'the current `dest` '.  
     * note the `null`ability intended to replect the `null`ability of the arg of {@link usePersistingBeep }
     */        
     const ctx0 = (                                     
        IterableOps.once(async () => {     
            const c0 = (                 
                React.createContext<AFeedableAndTappableNCc>(await getACtxMtWithoutAnyFilter1() )
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
            XCons : (
                IterableOps.identity<(
                    React.FC<React.ConsumerProps<NCtxV1 > >
                )>(function CCurrentDestNdRefUsage1({ children: payload }) {
                    const ConsmImpl = c0.Consumer ;
                    return (
                        <ConsmImpl>
                            { ({ ...p }) => payload({ ...p } ) }
                        </ConsmImpl>
                    ) ;
                } )
            ) , 
        }  ;
        const {
            XPrv ,  
        } = {
            XPrv : (() => {
                ;  
                type Props = (
                    React.ProviderProps<AFeedableAndTappableNCc > 
                ) ;
                const PrvImpl = c0.Provider ;
                const useConditionalTRefresh = (
                    function () {
                        ;
                    }
                ) ;
                const PrvI = (
                    ({
                        value ,
                        currentTimeValue: requestedCtxCurrentTime ,
                        children: payload ,
                    } : { 
                        value: NonNullable<Props["value"]> ; 
                        currentTimeValue: number ; 
                        children: Props["children"] ;
                    } ) => (
                        <PrvImpl 
                        value={(
                            React.useMemo((): ContextReturnType<typeof c0 > => (
                                { 
                                    ...value, 
                                    currentTime: requestedCtxCurrentTime ,
                                }
                            ) , [value, requestedCtxCurrentTime ] ) 
                        ) }
                        >
                            { ( 
                                payload
                            ) }
                        </PrvImpl>
                    )
                ) ;
                function CCurrentDestNdRefPrv1({ value, children: payload } : Props ): React.ReactElement {
                const parentValue = (
                    React.useContext(c0 )
                );
                const requestedCtxCurrentTime = (
                    /**   
                     * 
                     */
                    function useCtxCurrentT() {
                        const v0 = (
                            parentValue.currentTime
                        );
                        /**   
                         * this can't be made conditional - 
                         * `react-eslint/react-hooks`
                         */
                        const v1 = (
                            useAudioCtxCurrentTime1((
                                value.feedPt?.context 
                                || null
                            ) , { 
                                periodMillis: /* */ (
                                    (v0 === null ) ? 
                                    225.0 
                                    : 5800.0
                                ) ,
                            }, {} )
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
                return (
                    requestedCtxCurrentTime 
                    && 
                    <PrvI value={value} currentTimeValue={requestedCtxCurrentTime } >
                        { payload }
                    </PrvI>
                    || 
                    <></>
                ) ;
                } 
                return (
                function CCurrentDestNdRefPrvOptimising({ value, children: payload } : Props ): React.ReactElement {
                const parentValue = (
                    React.useContext(c0 )
                );
                const parentTValue = (
                    parentValue.currentTime
                ) ;
                return (
                    (typeof parentTValue === "number" ) ?
                    (
                        <PrvI value={value} currentTimeValue={parentTValue } >
                            { payload }
                        </PrvI>
                    )
                    : (
                        <CCurrentDestNdRefPrv1 value={value} >
                            { payload }
                        </CCurrentDestNdRefPrv1>
                    )
                ) ;
                }
                ) ;
            })() , 
        }  ;
        return {
            Prv1 : XPrv ,         
            Consm : XCons ,             
            useCurrentDestNd0 : () => React.useContext(c0 ) ,
            ctx0: async() => ctx0() ,      
        } ;           
    }
})() ;                                
/**    
 * 
 * __performance note__ .
 * *the frequency in which current 't' increment may be high enough to heat your device*.
 * *even when 
 * `currentTime` is 
 * omitted from the destructuring `const { feedPt, sideTapPt, // currentT omitted } = useCurrentYyyyy() `,
 * re-renders will still take place*.
 * *unless information about current 't' were necessary, 
 * avoid using this `useYyy`, and switch to {@link useWithCurrentSideTapPtRef } instead*.
 * 
 */
const useCurrentDestNdRefAndCtxT: (
    () => { [p in keyof NCtxV1 ] : NCtxV1[p ] ; }
) = (
    useCurrentDestNd0
) ; 
/**    
 * 
 * internal only.
 * 
 * *all variables in the ctx will be returned without any omission*.
 * 
 * __performance note__ .
 * *the frequency in which current 't' increment may be high enough to heat your device*.
 * see {@link useWithCurrentACtxCurrentT }.
 * 
 */
const useWithCurrentCtxValue: (
    (callback: (...args: Parameters<ComponentProps<typeof Consm >["children"] > ) => React.ReactElement )
    =>             
    React.ReactElement               
) = (          
    useCurrentDestNdRefAndCtxT ?        
    (function useCurrentDest1 (ch0 ) {   
        const inf = useCurrentDestNdRefAndCtxT() ;   
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
/**   
 * 
 * *with 
 * {@link useWithCurrentSideTapPtRef `feedPt` } for the component tree
 * being set to the given `null | AudioNode`
 * (without affecting {@link useWithCurrentCtxValue any other ctx values } )*.
 * 
 */
const WithGivenDest = (() => {          
    return (                  
        IterableOps.identity<(         
            React.FC<(       
                React.ProviderProps<(   
                    (NonNullable<AFeedableAndTappableNCc> )["feedPt"]         
                )>       
            ) >
        )>(function WithGivenDestC({ value: newDest, children }) {        
            return (        
                useWithCurrentSideTapPtRef(({ sideTapPt }) => (
                    <ModifyingCompPayloadDiv              
                    >                    
                    <CBC name="WithGivenDestC_CtxPrv">{ function useC1() {   
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
/**     
 * internal only.
 * 
 * 
 * @deprecated
 */
const useADestNdRefCtx10 = (
    () => (
        useAsyncMemo({  
            depsChangeImpliesInvalidation: true , 
            f: () => ctx0() ,        
        } , [ctx0 ] )      
    )  
);                 
/**     
 * internal only.
 * 
 * 
 * @deprecated
 */
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
/**    
 * 
 * omitting *the current 't'*,
 * this will 
 * avoid the high-frequency re-render which {@link useWithCurrentACtxCurrentT } and {@link useCurrentDestNdRefAndCtxT }
 * .
 * 
 */
const useWithCurrentSideTapPtRef: (
    (a: (v: AFeedableAndTappableNCc ) => React.ReactElement )
    =>             
    React.ReactElement               
) = (
    useCurrentDestNdRefAndCtxT ?
    (function useCurrentDest1 (ch0 ) {
        const {
            feedPt,
            sideTapPt,
        } = useCurrentDestNdRefAndCtxT() ;
        return (
            React.useMemo(() => (
                ch0({ feedPt, sideTapPt } )
            ), [React.useDeferredValue(ch0 ), feedPt, sideTapPt] )
        ) ;    
    })
    :
    useWithCurrentCtxValue
) ;

/**    
 * 
 * __performance note__ .
 * *the frequency in which current 't' increment may be high enough to heat your device*.
 * *even when 
 * `currentTime` is 
 * omitted from the destructuring `({ feedPt, sideTapPt, // currentT omitted } ) => ... `,
 * re-renders will still take place*.
 * *unless information about current 't' were necessary, 
 * avoid using this `useYyy`, and switch to {@link useWithCurrentSideTapPtRef } instead*.
 * 
 */
const useWithCurrentACtxCurrentT: (
    (callback: (
        (...ctx : (
            Parameters<(
                (
                    React.ConsumerProps<(
                        ReturnType<typeof useCurrentDestNdRefAndCtxT>
                    )>
                )["children"] 
            )>
        ) ) 
        => React.ReactElement
    ) )
    =>             
    React.ReactElement               
) = (
    useWithCurrentCtxValue
) ;
const CurrentCtxTInfoDisplay = (
    function () {
        return (
            // TODO     
            useWithCurrentACtxCurrentT(({ feedPt, currentTime: ctxTime }) => (    
                (feedPt && (typeof ctxTime === "number") ) 
                ?         
                <CBC name="CurrentCtxTInfoDisplay_Hks">
                { function useC() {                     
                    const { isWindowOnFocus } = (
                        useWindowActivityStatus() 
                    ) ;         
                    return (   
                        <p>            
                        Global ACtx Time =      
                        <NUMERIC maxPrecision={3 }>{ ctxTime }</NUMERIC>.  
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
    AFeedableAndTappableNca,
    AFeedableAndTappableNCc,

    ModifyingCompPayloadDiv as WGD_DIV ,  

    CurrentCtxTInfoDisplay ,   
    useWithCurrentACtxCurrentT , 
    Consm ,        
    useWithCurrentSideTapPtRef ,       
    useADestNdRefCtx1 ,                
    useCurrentDestNdRefAndCtxT ,
        
    Prv1 , 
    WithGivenDest , 

    // WithCtxtualDestCtxTInfo1 , 
           
} ;                   