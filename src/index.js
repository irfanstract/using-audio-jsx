import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
     
/**       
 * some arguments to automatic `reload()` .    
 * - "the WebPack server has diconnnected. refresh the page of necessary."  
 * avoid doing this in production, since 
 * - that will mean loss of usability when internet-access goes away
 */
if (1) {
  setTimeout(() => {
    (window.location).reload() ;
  } , 30 * 60 * 1000 ) ;
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
