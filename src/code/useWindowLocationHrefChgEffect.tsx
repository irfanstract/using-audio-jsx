
// import util from "util" ;     
import { IterableOps } from "./generalUse11";
import EventEmitter from "events";      
import React, { 
    useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react";
// import { isWindowActive, useWindowActivityStatus } from "./useWindowFocusState" 
import {           
    IntervalUsageAcceptableCatchupPolicy, 
    intervalUsageCatchupPolicyEmitErrorOnce  ,

} from "./timeoutOrIntervalPolicy";       
import { useRealTimeQueryInterval1 } from "./useNonHookValue";









// TODO
const {
   useWindowLocationChgEffect ,
} = (() => {
   return {
      useWindowLocationChgEffect : (
         function useWindowLocationChgEffectImpl(callback: () => void ) { 
            // const;
         }
      ) ,
   } ;
})() ;



