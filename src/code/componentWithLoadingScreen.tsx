import React from 'react';   











export default (
    ({
        LoadingScreenApp , 
        MainApp ,    
      } : {
        LoadingScreenApp : React.FC<{}> ;  
        MainApp : React.FC<{}> ;      
      }) => {   
        return (
          function C() {                  
            const [e, setE ] = (        
              React.useState<React.ReactElement>(<LoadingScreenApp /> )
            ) ;  
            React.useEffect(() => {
              setTimeout(() => {
                
                setE(() => (
                  <MainApp />       
                ) ) ;                               
              } , 2 * 1000 ) ;   
            } , [] ) ;        
            return ( 
              e           
            ) ;
          }     
        ) ;      
      }
) ;
