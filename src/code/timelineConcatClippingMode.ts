





        
enum OmitOrPropagate {     
    OMIT = 0 ,  
    PROPAGATE = "propagate" ,          
};

enum AudioTrackConcatClippingMode { 
    IMPLY_INTERIM_SILENCE = 0 , 
    BOTH_ENDS_DROPPED  ,           
    START_CLIPPED_ENDING_FADEOUT ,              
    START_CLIPPED_ENDING_FULLVOLUME,   
    CROSSFADED ,  
    FULLVOLUME ,  
}                
enum VideoClipConcatClippingMode {
    IMPLY_BRIEF_INTERIM_BLACKSCREEN = 0 ,  
    FANCY_TRANSITION ,    
    SHARP_TRANSITION ,      
    CROSSFADED ,    
    SCREENBLENDED ,                
    //               
}               
function avTrackConcatShallPropagate(...[md, ending ] : [
    AudioTrackConcatClippingMode  ,        
    0 | 1 ,                     
]) : null | OmitOrPropagate {                        
    switch (md) { 
        case AudioTrackConcatClippingMode.IMPLY_INTERIM_SILENCE :          
        case AudioTrackConcatClippingMode.BOTH_ENDS_DROPPED :             
        case AudioTrackConcatClippingMode.START_CLIPPED_ENDING_FADEOUT :       
        case AudioTrackConcatClippingMode.CROSSFADED :            
            return OmitOrPropagate.OMIT ;        
        case AudioTrackConcatClippingMode.START_CLIPPED_ENDING_FULLVOLUME :  
            return (
                ending ? OmitOrPropagate.PROPAGATE : OmitOrPropagate.OMIT
            ) ; 
        case AudioTrackConcatClippingMode.FULLVOLUME :  
            return OmitOrPropagate.PROPAGATE ;                 
    }         
    return null ;   
}
      

   
    


export {
    OmitOrPropagate , 

    AudioTrackConcatClippingMode ,     
    VideoClipConcatClippingMode , 
    avTrackConcatShallPropagate , 
} ;          