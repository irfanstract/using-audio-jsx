/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';           
import { K } from './code/commonElements';   
import componentWithLoadingScreen from './code/componentWithLoadingScreen';       
// asset imports
import logo from './logo.svg';
// App Code Imports
import { AudioLoopDemoApp } from './code/audioLoopDemo';  
   
// CSS imports         
import './App.css';

function OriginalApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>             
          Edit <code>src/App.js</code> and save to reload.        
        </p>
        <a   
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );        
}   
      
function LoadingScreenApp() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
          <p>                                      
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered with React and Create React App 
          </a>
        </header>
      </div>
    );   
  }   
          
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
export default (    
  function AppApp() {                  
    return ( 
      AppWrapper1(AudioLoopDemoApp )()              
    ) ;
  }    
);
                