import { BoundedIdentityFunction, } from "./generalUse11";
import React, { 
    useState, useReducer,      
    useLayoutEffect, useEffect,
    useCallback, useMemo, useDeferredValue,  useContext, 
    useImperativeHandle,   
    useTransition, 
    useDebugValue ,
} from "react";          
import { usingInterval, useIntervalDeferredValue } from "./usingTimeoutOrInterval"; 
import { 
    useCanForceRefresh , 

    useRefreshByInterval1 ,  
    useRefreshByInterval ,  
 
} from "./usingIntervalRefresh";      
import { useDepsChgCount } from "./usingComponentMountRenderStat";      







const useRealTimeQueryIntervalSS = (
   function <V>(...[f, ...intervalPolicy ] : [
      impl: () => V ,
      ...intervalPolicy: (
         [(
            Parameters<typeof usingInterval>
         )] extends [readonly [infer F, ...(infer Args )] ]
         ?
         Args
         : never
      ) ,
   ] ) {
      const [v, setV] = (
         React.useState<V >((
            f()
         ))
      ) ;
      React.useLayoutEffect(() => (
         usingInterval(() => {
            const value = f() ;
            setV(() => value ) ;
         } , ...intervalPolicy )
      ), [] );
      return v ;
   }
) ;




export {
   useRealTimeQueryIntervalSS ,
} ;