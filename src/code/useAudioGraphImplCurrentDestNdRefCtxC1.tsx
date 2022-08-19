
// utility imports        
import Immutable from "immutable";        
import { IterableOps, PromiseReturnValue } from "./generalUse11";  
import { ABandpassFreqArgInputRangeMode } from "./audioFltBandpassMetaRangeMode";  
import React, { useMemo } from "react";               
import { ComponentProps, ContextReturnType } from "./commonElementsTypes";     
import { K } from "./commonElements";      
import { CBC } from "./useStateInCallback";  

// 
import { 
    WithGivenDest ,  
    Prv1 ,        

    useWithCurrentSideTapPtRef ,   
    Consm as WithCtxtualOut , 
    useWithCurrentACtxCurrentT, 

} from "./useAudioGraphImplCurrentDestNdRefCtx";   
import { usePersistingBeep, YyyUsable } from "./useAudioNodesBasicFlt1";   
import {      
    SpecialUsageExplainer, 
    xWithUsableYyy ,        
    xWithUsableYyy1 ,   
} from "./useAudioGraphImplUsableYyyNodes1";     

            
 
  
    
                   
              
                        
           
const {      
    terminalUsageWrapC ,   
    nonterminalUsageWrapC ,    

} = (function () {             
    return {              
        terminalUsageWrapC : (                 
            function   <Props1>(useYyy: YyyUsable<Props1, void > ) { 
                const {   
                    dbgBox1 ,    
                    
                } = xWithUsableYyy1({ useYyy }) ;       
                type C = (         
                    React.FC<(     
                        { value: Props1 ; }          
                    )>    
                ) ;   
                return (   
                    IterableOps.identity<C >(function CAUsageWrapTerminal ({ value, }) {    
                        return (
                            useWithCurrentSideTapPtRef(function ({ feedPt: nd0 }) {
                                ;     
                                return ( 
                                    <CBC>{ function use1() { 
                                        ;               
                                        // return value                                       
                                        const _2: void = (                 
                                            useYyy(nd0, value )                            
                                        ) ;
                                        return (         
                                            <>{ dbgBox1 } </>
                                        ) ;         
                                    } }</CBC> 
                                ) ; 
                            } )       
                        ) ;                     
                    })     
                ) ;   
            }              
        ) ,         
        nonterminalUsageWrapC : (               
            function  <Props1>(useYyy: YyyUsable<Props1, AudioNode | null > ) { 
                const {   
                    dbgBox1 ,          
                    
                } = xWithUsableYyy1({ useYyy }) ;         
                type C = (       
                    React.FC<(             
                        React.PropsWithChildren<{ value: Props1 ; } >  
                    )>    
                ) ;                            
                return (   
                    IterableOps.identity<C >(function CAUsageWrapNonterminal ({ value, children }) {    
                        return ( 
                            useWithCurrentSideTapPtRef(({ feedPt: nd0 }) => (    
                                <CBC>
                                { function use1() { 
                                    ;                  
                                    // return value                                                
                                    const nd2: AudioNode | null = (                    
                                        useYyy(nd0, value )                            
                                    ) ;
                                    return (                                        
                                        <div>        
                                            { dbgBox1 }
                                            <WithGivenDest value={nd2 }>
                                                { children }   
                                            </WithGivenDest>
                                        </div>                        
                                    ) ;         
                                } }
                                </CBC>
                            ) )
                        ) ;                      
                    })
                ) ;   
            }          
        ) ,       
    } ;           
})() ;      
const AGCtxtualOutUsageProps = {} ; // TS-1205
type AGCtxtualOutUsageProps = (  
    Parameters<(                            
        Required<(     
            ComponentProps<typeof WithCtxtualOut >  
        )>["children"]         
    )>[0 ]      
) ;          
const CTXTUALOUTPUTUSAGE_CBC = (    
    IterableOps.identity<( 
        React.FC<{ 
            children : (
                {
                    useC11 : (props: AGCtxtualOutUsageProps ) => React.ReactElement ;
                }["useC11"]
            ) ;         
        }>  
    )>((    
        function ({ children: useC11 , }) {
            ;       
            return (
                useWithCurrentACtxCurrentT(a => (
                    <CBC>{ () => useC11(a ) }</CBC>     
                ))                
            );                
        }   
    )) 
) ;  





         
 
  
    
                   
              
                   
           



export {
    terminalUsageWrapC ,    
    nonterminalUsageWrapC , 

    AGCtxtualOutUsageProps ,         
    CTXTUALOUTPUTUSAGE_CBC , 
} ;     