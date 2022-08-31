










/**             
 * 
*/
type ANNN<A extends (AudioNode | null )> = (
    [A] extends [AudioNode] 
    ? AudioNode : null       
) ;       
const ANNN = {} ; // TS--1205
type ACNN<A extends (CP | null ), CP, CR> = (
    [A] extends [CP] 
    ? CR : null
) ;  
const ACNN = {} ; // TS--1205

    
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
const AudioSourceNode = {} ; // TS-1205
/**    
 * acceptable argument to {@link AudioNode.connect } - {@link AudioNode } or {@link AudioParam } 
*/
type AudioSinkNode = (   
    AudioNode | AudioParam        
) ;     
const AudioSinkNode = {} ; // TS-1205

 









type XAudioNode = AudioNode ;
const XAudioNode = {} ; // TS-1205
export {
    AudioSourceNode ,   
    AudioSinkNode ,    
    XAudioNode as AudioNode , 
} ;
export {
    ANNN ,   
    ACNN ,    
} ;       