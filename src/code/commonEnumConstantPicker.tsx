 


import React, { useReducer, useState } from "react";    
import { K } from "./commonElements";    
                








function useEnumConstantPicker<Vr extends number >(...[{ initialValue, static: Vr }] : [    
   {    
       initialValue : Vr ;    
       static : { readonly [k: string] : Vr | string ; } ; 
   } ,         
]) {     
   const allOptions = (       
       Object.values(Vr )         
       .filter((v) : v is Vr => (typeof v === "number" ) )       
   ) ;       
   const [vl, setVl] = (      
       React.useReducer((
           function (v0: Vr, v1: Vr ) : Vr {
               return v1 ;     
           }
       ) , initialValue )  
   ) ;                    
   const btns = (             
       allOptions            
       .map((value ) => {             
           return (     
               <span key={ value } >  
               <button type="button" onClick={() => setVl(value ) } >
                   {String(Vr[value] ) } 
               </button>    
               </span>     
           ) ;
       })   
   ) ;         
   return {
       vl ,  
       setVl ,           
       allOptions ,      
       btns ,    
   } ;
}   







export {
   useEnumConstantPicker , 
} ;

