




  

  

import React from 'react';           
import { K } from './commonElements';   
import componentWithLoadingScreen from './componentWithLoadingScreen';         
        



/**   
 * important consideration :  
 * - needs Error-bounding ; 
 *   otherwise HMR will not restart the mounting even on save .  
 * - needs {@link React.Suspense }       
 * - see "process is not defined, on hot-reload"
 */         
 const AppWrapper1 = (App: () => React.ReactElement ) => {    
    const key = (    
      String(Math.random() )         
    ) ;                             
    console.log({ k: key }) ;
    class App1 extends React.Component<{}, { error ?: unknown } > {   
      render() {                  
        return (  
          <K key={key }> 
          <p> Application (id: <code>{key }</code> ) </p> 
          { (this.state || {} ).error ? null : (
               <React.Suspense fallback={ <div /> } >
                  <App />         
                </React.Suspense>      
          )   }       
          </K>                    
        ) ;                 
      }         
      componentDidCatch(e: unknown ) { 
        console.error(e) ; 
        this.setState({ error: e }) ;  
        const {
            globalReload = true , 
            autoClearError = true ,     
        } = (              
            {} as {         
                globalReload ?: boolean ;      
                autoClearError ?: boolean ;       
            }   
        ) ;   
        if (globalReload ) {   
            ;                      
            setTimeout(() => {          
                if (this.state.error ) {
                    ;        
                    (window.location).reload() ;                         
                }            
            } , 1 * 60 * 1000 ) ;              
        }  
        if (autoClearError ) {      
            ;
            setTimeout(() => {                
                this.setState({ error: null }) ;      
            } , 28 * 1000 ) ;          
        }  
      }   
    //   static getDerivedStateFromError() { return {} ; }   
    }        
    return (): React.ReactElement => (
      <K key={key} >   
        <App1/>   
      </K>                     
    ) ;           
  } ;       





  export { AppWrapper1 } ;