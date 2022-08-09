




  

  

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
          <React.Suspense fallback={ <div /> } >
            { (this.state || {} ).error ? null : <App />    }       
          </React.Suspense>            
          </K>                    
        ) ;                 
      }         
      componentDidCatch(e: unknown ) { 
        console.error(e) ; 
        this.setState({ error: e }) ;
        setTimeout(() => {                  
          (window.location).reload() ;           
        } , 1 * 60 * 1000 ) ;       
      }   
    }        
    return (): React.ReactElement => (
      <K key={key} >   
        <App1/>   
      </K>                     
    ) ;           
  } ;       





  export { AppWrapper1 } ;