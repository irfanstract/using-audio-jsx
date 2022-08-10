
import React, { 
    useState, useReducer, 
    useInsertionEffect,  useLayoutEffect, useEffect, 
    useCallback, useMemo, useContext, useDeferredValue, 
    useRef ,
    useImperativeHandle ,   
} from "react";
     
    
                





      
/**     
 * which of the two ({@link useEffect } and {@link useLayoutEffect} and {@link useInsertionEffect } ) 
 * - {@link useEffect } - timing is equivalent to {@link useDeferredValue }  
 * - {@link useLayoutEffect } - timing is equivalent to `componentDidUpdate`   
 * - {@link useInsertionEffect } - prior to (display-level) comission
 *           
 * currently that should be `"useLayoutEffect"`.                                     
 * normally,            
 * React-based apps should choose {@link useEffect `useEffect` } since      
 * use of `uselayoutEffect` can easily overhead causing the platform to become unresponsive and
 * `useEffect` overcomes this by deferring the dispatch(es) .      
 * however, when it comes to {@link AudioNode}s, 
 * the patterns of timing distortions introduced by {@link useEffect} (and, to less extent, {@link useLayoutEffect} ) can intensely disrupt the synth, so       
 * the codebase had to switch to `useLayoutEffect` .                    
*/          
const AUDIONODES_USEEFFECT : (
    keyof Pick<typeof React, "useEffect" | "useLayoutEffect" | "useInsertionEffect" >
) = (
    "useInsertionEffect"     
) ;      

     
















export {
    AUDIONODES_USEEFFECT , 
} ;   