/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';           
import { K } from './code/commonElements';   
import componentWithLoadingScreen from './code/componentWithLoadingScreen';  
import { AppWrapper1 } from './code/useAppWrapper1';       
// asset imports
import logo from './logo.svg';   
// App Code Imports   
import { AudioLoopDemoApp } from './code/audioLoopDemo';  
import { MediaStreamRecDemo1 } from './code/useMediaStreamRecDemo1';
   
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
          
;    
export default (    
  function AppApp() {                  
    return ( 
      AppWrapper1(MediaStreamRecDemo1 )()              
    ) ;
  }    
);
                