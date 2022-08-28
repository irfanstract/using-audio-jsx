

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
const useBlobConcatDeferring = (
   function (...[{}, { type, data: blobs }] : [{}, { data: readonly Blob[] ; type: string ; } ] ): Blob {
      return (  
         React.useDeferredValue<() => Blob >((
            IterableOps.once((): Blob => ( 
               new Blob([...blobs ], { type: type })
            ))
         ))
         // actually run the returned functor
         ()
      ) ;
   }
) ;
const useBlobConcatState = (() => {
   type Args = [
      {
         /**   
          * {@link sizeLimit} shall be specified appropriately to prevent process crash ;
          * if {@link sizeLimit} is not feasible, explicitly set it to `Number.MAX_VALUE`.
          */
         sizeLimit: number ;
      } ,
   ] ;
   type RetunValue = (
      [
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
      ]
   );
   return (
      function useBlobConcatStateImpl(...[{ sizeLimit }] : Args ): RetunValue {
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
         const ops = { appendBlob, clear } ;
         ;
         return (
            // TODO
            React.useMemo(() => (
               ((): RetunValue => {
                  ;
                  const firstBlob: Blob | null = (
                     blobs[0 ]
                     ||
                     null 
                  ) ;
                  if (firstBlob) {
                     const type = firstBlob.type ;
                     const precomutedTotalSize = (
                        IterableOps.sum((
                           blobs
                           .map(b => b.size )
                        ))
                     );
                     if ((
                        sizeLimit
                        <
                        precomutedTotalSize
                     )) {
                        throw TypeError((
                           `pre-calc detected a total size violation : ${precomutedTotalSize }`
                        )) ;
                     }
                     const overallBlob = ( 
                        new Blob([...blobs ], { type: type })
                     ) ;
                     if ((
                        sizeLimit
                        <
                        overallBlob.size
                     )) {
                        throw TypeError((
                           `resulting Blob violated the size limit : size ${overallBlob.size }, type ${type } `
                        )) ;
                     }
                     return [{ overallBlob, type }, ops ] ;
                  } else {
                     return [{ overallBlob: null, type: null }, ops ] ;
                  }
               })()
            ) , [blobs ] )
         ) ;
      }
   ) ;
})() ;
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
   useBlobConcatDeferring,
   useBlobConcatState1,
   useBlobConcatState,
} ;