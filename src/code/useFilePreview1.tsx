

// import util from "util" ;
import { BoundedIdentityFunction, IterableOps, } from "./generalUse11";
import React, { 
   // Callbacks
   Dispatch,
   DispatchWithoutAction, 

   // Debug
   useDebugValue,
   // UseYyyEffect(s)
   useLayoutEffect, useEffect, 
   useInsertionEffect ,
   // UseImperativeHandle
   useImperativeHandle ,
   // UseMemo and UseReducer and UseRefObject
   useCallback, useMemo, useContext, useDeferredValue, 
   useState, useReducer, 
   useRef, 
} from "react";          
import { useSeqState } from "./useSeqState";
import { usingInterval, useIntervalDeferredValue, useAnimationFrameRefreshEffect } from "./usingTimeoutOrInterval"; 
import { 
    useCanForceRefresh , 

    useRefreshByInterval1 ,  
    useRefreshByInterval ,  
 
} from "./usingIntervalRefresh";      
import { useEventTarget } from "./usingTimeoutOrInterval";
import { useDepsChgCount } from "./usingComponentMountRenderStat";      
import { useObjectURL } from "./useEmbedSrcObjectUrl";







const BasicEmbedObjectPreview = (
   function BasicEmbedObjectPreviewC({ value } : { value: Blob ; }) {
      const valueUrl: string = (
         useObjectURL(value )
      ) ;
      const contentType: string = (
         value.type
      ) ;
      const {
         name: fileName ,
      } = ((): { name?: string ; } => (
         value instanceof File ?
         value
         : { }
      ) )() ;
      const style1 = (
         { width: "12em", height: "12em", background: "black" } as React.CSSProperties
      ) ;
      const utfTitle: string = (
         ["File" , fileName || "(unnamed)" ].join(" -- \n")
      ) ;
      if (contentType.match(/^image\//) ) {
         return (
            <a 
            title={utfTitle }
            target={"_blank"} 
            href={valueUrl }>
            <img 
            src={valueUrl }
            style={style1 } 
            />
            </a>
         ) ;
      }
      if (contentType.match(/^(audio|video)\//) ) {
         return (
            <video  
            title={utfTitle }
            src={valueUrl }
            controls
            style={style1 } 
            />
         ) ;
      }
      return (
         <embed 
         title={utfTitle }
         src={valueUrl }
         type={contentType }
         style={style1 } 
         />
      ) ;
   }
) ;





export {
   BasicEmbedObjectPreview ,
} ;