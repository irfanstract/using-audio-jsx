import util from "util" ;
import { Unix } from "./generalUse11";
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue ,
} from "react";
import { Fragment as K } from "react";







const NUMERIC = (
    /**  
     * using `<input type=number readonly >`, rather than `<code>`, is for the following reasons :   
     * - there's currently no way to animate (with dynamically-changing contents) element-widths ; 
     *   `<input>`s already fixed-width hence does not suffer from this problem               
     * - `<input type=number readonly >`s feels more semantic and may later be replaced with the `editable` one
    */
    (...[{ children: value, maxPrecision = 7 }] : [
        {         
            children: number ;   
            maxPrecision ?: false | number ;   
        } ,     
    ]) => {               
        const altText = (
            String(+value.toPrecision(5) )     
        ) ;
        if (1) {
            return (   
                <code 
                    className="numeric"                
                    title={altText } 
                    style={{ textAlign: "end", }}                
                > 
                    { maxPrecision ? +value.toPrecision(maxPrecision ) : value }                    
                </code>              
            ) ;                               
        }       
        {      
            return (   
                <input             
                    type={"number"} 
                    title={ altText }
                    value={value }   
                    readOnly
                    style={{ textAlign: "end" }}
                />
            ) ;
        }
    }
) ;     
const CodeSnippet = (
    ({ value  , } : { value : string ; }) => {
        const shortEnough : boolean = (!!value) && (value.length <= 16 );
        return (
            <code 
                className={[(shortEnough && 0 ) ? "" : "long-enough"].join(" ") }  
                title="a snippet of code"
            >                
              { value   }                
            </code>       
        ) ;            
    } 
) ;     
export {
    NUMERIC , 
    CodeSnippet , 
} ;