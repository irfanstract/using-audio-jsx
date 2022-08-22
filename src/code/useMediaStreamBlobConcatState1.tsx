

// import util from "util" ;
import { BoundedIdentityFunction, } from "./generalUse11";
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
import { usingInterval, useIntervalDeferredValue } from "./usingTimeoutOrInterval"; 
import { 
    useCanForceRefresh , 

    useRefreshByInterval1 ,  
    useRefreshByInterval ,  
 
} from "./usingIntervalRefresh";      
import { useDepsChgCount } from "./usingComponentMountRenderStat";      










type BlobCSeqollectiveMutativeOps = {   

   /**  
    * append one
    */
   appendBlob: Dispatch<Blob> ;  

   /**   
    * reset
    */
   clear: DispatchWithoutAction ; 

} ;
const useBlobConcatState = (
   function (): [
      state: { 
         /**   
          * the collective state.
          */
         overallBlob: Blob | null ; 

         /**   
          * this' supposed to the `type` ; 
          * this will be `null` unless there's one in the list.
          */
         type: string | null ; 
      }, 
      amend: BlobCSeqollectiveMutativeOps ,
   ] {
      const [blobs, setBlobSeq ] = (
         useState<readonly Blob[] >([])
      ) ;
      const appendBlob = (
         function (appeand: Blob): void {
            setBlobSeq((sq0 ) => [...sq0, appeand ] );
         }
      ) ;
      const clear = (
         (): void => (
            setBlobSeq(() => [] )
         )
      ) ;
      const firstBlob: Blob | null = (
         blobs[0 ]
      ) ;
      const ops = { appendBlob, clear } ;
      ;
      if (firstBlob) {
         const type = firstBlob.type ;
         const overallBlob = ( 
            new Blob([...blobs ], { type: type })
         ) ;
         return [{ overallBlob, type }, ops ] ;
      } else {
         return [{ overallBlob: null, type: null }, ops ] ;
      }
   }
) ;
const useBlobConcatState1 = (
   function (...p: Parameters<typeof useBlobConcatState> ): [
      state: ReturnType<typeof useBlobConcatState>[0]["overallBlob"] , 
      amend: BlobCSeqollectiveMutativeOps,
   ] {
      const [{ overallBlob }, ops ] = (
         useBlobConcatState(...p )
      ) ;
      return [overallBlob, ops ] ;
   }
) ;






export {
   useBlobConcatState1,
   useBlobConcatState,
} ;