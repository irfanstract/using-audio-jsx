
import { IterableOps } from "./generalUse11";
import React, { useReducer, useState } from "react";   
import { K, ComponentProps, ContextReturnType } from "./commonElements";    
import { usingInterval, useIntervalDeferredValue, useAnimationFrameRefreshEffect } from "./usingTimeoutOrInterval"; 
import { 
    useCanForceRefresh , 

    useRefreshByInterval1 ,  
    useRefreshByInterval ,  
 
} from "./usingIntervalRefresh";      
import { useEventTarget } from "./usingTimeoutOrInterval";
import { useDepsChgCount } from "./usingComponentMountRenderStat";        
import { CBC } from "./useStateInCallback";
import { 
    useOneWayCompletiveState ,      
            
} from "./useCompletion";    
import { useAsyncMemo } from "./useAsyncMemo";          









/**   
 * equivalent to `<video>` with some exceptions.
 * 
 * `src` must be a value-or-obj assignable to {@link HTMLVideoElement.srcObject }.
 * 
 * other attribs will be passed unchanged for the actual `<video>` element.
 * 
 */
const MediaStreamVideoC: (
   React.FC<(
      Omit<JSX.IntrinsicElements["video"] , "src" | "ref" >
      &
      { src: HTMLVideoElement["srcObject"]; }
      &
      { fwdRef ?: React.Ref<null | HTMLVideoElement> ; }
   )>
) = (
   ({ src, fwdRef: appLevelRef, ...props }, ) => {
      const [refed1, ref] = (
         React.useState<null | HTMLVideoElement>(null )
      ) ;
      React.useImperativeHandle((
         appLevelRef
      ), () => refed1, ) ;
      useHtmlVideoProgrammaticSrc(refed1 , src , ) ;
      const fallbackContent : (
         null 
         | (React.ReactNode & object )
      ) = (
         <svg 
         viewBox="0 0 256 256" 
         style={{ 
            width: "9em", 
            height: "9em", 
            background: "black", 
         }} 
         >
         </svg>
      ) ;
      const defaultShallAutoplay: boolean = (
         src instanceof MediaStream 
      );
      const {
         autoPlay: supposedToAutoplay = (
            defaultShallAutoplay
         ) ,
      } = (
         props
      ) ;
      const defaultShallDisplayControls = (
         !supposedToAutoplay
         // 
         // TODO
      );
      return (
         <video 
         ref={ ref }
         {...{ 
            controls: (
               defaultShallDisplayControls
            ) ,
            autoPlay: (
               supposedToAutoplay
            ) ,
            ...props
         } }
         >
         { fallbackContent }
         </video>
      ) ;
   }
) ;
const useHtmlVideoProgrammaticSrc: (
   (...args: [
      assignee: null | HTMLMediaElement ,
      obj: HTMLMediaElement["srcObject"] ,

      constraints?: { id ?: never ; childNodes ?: never ; getTracks ?: never ; } & {

         /**   
          * unless the callback would call `setState`/`dispatch`,
          * `useInsertionEffect` would be applicable.
          */
         callbackTiming ?: (
            keyof Pick<typeof React, "useEffect" | "useLayoutEffect" | "useInsertionEffect">
         ) ;

         /**   
          * defaulting to `"error"`,
          * this would control logging in case `assignee.src` were initially non-null.
          */
         unexpectedInitiallyNonNullSrcAcceptability ?: (
            keyof Pick<Console, "error" | "warn" | "info" | "log" | "debug">
         ) ;

      } ,

   ] ) 
   => void
) = (
   (...args ) => {
      const [
         assignee, 
         src, 
         {
            callbackTiming = "useEffect" ,
            unexpectedInitiallyNonNullSrcAcceptability = "error" ,
         } = {},
      ] = args ;
      const xConsole = (
         console
      );
      // TODO
      React[callbackTiming](() => {
         if (assignee ) {
         ;
         ;
         /**    
          * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject#browser_compatibility
          * 
          * definition in `dom.d.ts` 
          * does not properly account for variations in browser support (<https://caniuse.com>).
          * in dated browsers `HTMLVideoElem` does not define `srcObject`, but 
          * `dom.d.ts` asserts existence, 
          * causing `not("srcObject" in {@link assignee } )` to specialise {@link assignee } (in)to `never` .
          * (therefore)
          * the `as boolean` 
          * would be necessary to opaquate the checking to prevent inferring `never`.
          * 
          */
         if (("srcObject" in assignee ) as boolean ) {
            if (assignee.srcObject !== null ) {
               xConsole[unexpectedInitiallyNonNullSrcAcceptability]?.(
                  `assertion error : 'srcObject' is for-some-reason already non-null at this point `
               ) ;
            }
            assignee.srcObject = (
               src
            ) ;
            return () => {} ;
         } else {
            if (assignee.src !== "" ) {
               xConsole[unexpectedInitiallyNonNullSrcAcceptability]?.(
                  `assertion error : 'src' is for-some-reason already non-null at this point `
               ) ;
            }
            const srcAsObjUrl = (
               (src instanceof MediaSource) &&
               URL.createObjectURL(src )
            ) ;
            if (srcAsObjUrl) {
               assignee.src = (
                  srcAsObjUrl
               ) ;
               return () => {
                  if (assignee.src !== srcAsObjUrl ) {
                     xConsole[unexpectedInitiallyNonNullSrcAcceptability]?.(
                        `assertion error : something outside has changed 'it.src'`
                     ) ;
                  }
                  assignee.src = (
                     ""
                  ) ;
                  URL.revokeObjectURL(srcAsObjUrl) ;
               } ;
            }
         }
         }
      } , [assignee , src ]) ;
   }
) ;




export {
   MediaStreamVideoC as MediaStreamVideoC ,
} ;
