 


import React, { useReducer, useState } from "react";          
                






      

function useEnumConstantPicker<Vr0 extends number >(...[{ initialValue, static: Vr0 }] : [    
   {    
       initialValue : Vr0 ;           
       static : { readonly [k: string] : Vr0 | string ; } ; 
   } ,         
]) {     
   type Value = Vr0 ;
   const Value = Vr0 ;
   ;    
   const allOptions = (          
       Object.values(Value )         
       .filter((v) : v is Value => (typeof v === "number" ) )       
   ) ;       
   const [vl, setVl] = (      
       React.useReducer((
           function (v0: Value, v1: Value ) : Value {
               return v1 ;     
           }
       ) , initialValue )  
   ) ;                    
   const allOptionsAsBtns = (             
       allOptions            
       .map((value ) => {             
           return (     
               <span key={ value } >  
               <button type="button" onClick={() => setVl(value ) } >
                   {String(Value[value] ) } 
               </button>    
               </span>     
           ) ;
       })   
   ) ;         
   return {
        /**   
         * the presently value
         * 
         * @deprecated
         */
       vl ,  
       /**   
        * the presently value
        */
       presentlyValue: vl ,
       /**    
        * all of the options
        */
       allOptions ,      
       /**    
        * 
        */
       setVl ,           
       /**   
        * {@link allOptionsAsBtns}
        * 
        * @deprecated
        */
       btns: allOptionsAsBtns ,    
       allOptionsAsBtns,
   } ;
}   







export {
   useEnumConstantPicker , 
} ;

