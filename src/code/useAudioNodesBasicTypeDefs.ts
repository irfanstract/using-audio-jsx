










/**             
 * 
*/
type ANNN<A extends (AudioNode | null )> = (
    [A] extends [AudioNode] 
    ? AudioNode : null       
) ;       
type ACNN<A extends (CP | null ), CP, CR> = (
    [A] extends [CP] 
    ? CR : null
) ;  

    
/**      
 * {@link AudioNode.connect }
 * 
 * @deprecated   
*/  
type ASN1M = (
    AudioNode["connect"]
);
/**                                         
 * @deprecated   
*/  
type ASN1 = (
    Parameters<ASN1M /* & ((...a: [AudioNode, ...unknown[] ] ) => void ) */ >
) ;            
/**    
 * exposes the {@link AudioNode.connect } method (and `disconnect` )  
*/
type AudioSourceNode = (                    
    (                        
        // see how overloads become treated
        { disconnect(...args : readonly [AudioNode | AudioParam, ...unknown[] ] | readonly [] ) : void ;  }   
        &          
        // see how overloads become treated
        { connect(...args : readonly [AudioNode | AudioParam, ...[number? , number? ]] ) : void ;  }        
    )                
    &                        
    Pick<      
        AudioNode       
        , 
        "context" | "addEventListener" | "channelCount" | "channelCountMode" | "channelInterpretation"   
        | "numberOfInputs" | "numberOfOutputs"  
    >          
) ;
/**    
 * acceptable argument to {@link AudioNode.connect } - {@link AudioNode } or {@link AudioParam } 
*/
type AudioSinkNode = (   
    AudioNode | AudioParam        
) ;     

 









type XAudioNode = AudioNode ;
export type {
    AudioSourceNode ,   
    AudioSinkNode ,    
    XAudioNode as AudioNode , 
} ;
export type {
    ANNN ,   
    ACNN ,    
} ;       