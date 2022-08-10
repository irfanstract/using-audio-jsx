
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react";









/**     
 * which of the two ({@link useEffect } and {@link useLayoutEffect} ) 
 * .
 *           
 * currently that should be `"useLayoutEffect"`, but .                
 * normally,    
 * React-based apps should choose `useEffect` since      
 * use of `uselayoutEffect` can easily overhead causing the platform to become unresponsive and
 * `useEffect` overcomes this by deferring the dispatch(es) .      
 * however, when it comes to {@link AudioNode}s, 
 * the patterns of timing distortions introduced by {@link useEffect} can intensely disrupt the synth, so       
 * the codebase had to switch to `useLayoutEffect` .                   
 * note that React yet has another one, `useInsertionEffect`, but 
 * support is quite limited, and that's probably unnecessary given `useLayoutEffect`
*/     
const AUDIONODES_USEEFFECT : (
    keyof Pick<typeof React, "useEffect" | "useLayoutEffect" | "useInsertionEffect" >
) = (
    "useInsertionEffect"     
) ;      

     
















export {
    AUDIONODES_USEEFFECT , 
} ;   