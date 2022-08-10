





        
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
      

   
    


export {
    AudioTrackConcatClippingMode ,     
    VideoClipConcatClippingMode , 
} ;        