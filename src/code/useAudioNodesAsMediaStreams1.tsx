import {  
   // Unix , 
   IterableOps ,      
   // util ,  
   memoize,     
   BoundedIdentityFunction,   
   // PERIODIC ,         
} from "./generalUse11" ;  
import { newObjectToValueMappingMemoised } from "./useObjectToValueMappingMemoised1"; 
import React, { 
   useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext, useDeferredValue, useRef ,
} from "react";
// import { ReactCompatibleJson } from "./commonElements"; 
// import { usingTimeout } from "./usingTimeoutOrInterval";  
// import {            
//     useMountDelay ,             
// } from "./useComponentDebug" ;
// import { useJsonStringifyInPerformanceSensitive } from "./useJsonStringify";  
import { fillWithWhiteNoise } from "./audioBufferFWhiteNoise"; 



import { AudioSourceNode, } from "./useAudioNodesBasicTypeDefs";
import {   USEYYYNODER, UABN_ARGPARSE, } from "./useAudioNodesMounting1";       
import { 
   ToUseYyNodeWithGivenInitProperties1,  
   useYyNodeWithGivenFadeoutTimeConstant1,   
   useParamNodeWithGiven,    
   useSingularSrcDestConnect ,
            
} from "./useAudioNodesMounting1";  
import { AUDIONODES_USEEFFECT, AUDIONODES_USE_AUDIONODEEFFECT } from "./useAudioNodesParamChgEffect1";
      
  









const logNonMsdAudioCtxSubclass = (
   IterableOps.throttle((c: BaseAudioContext ): void => {
      console["error"](
         TypeError((
            [
               `'ctx' is non-null, but  ` ,
               `'it's not instanceof 'AudioContext' (it is instead ${c }).` ,
               `MSD(s) (MediaStreamDestination) are only supported for 'AudioContext', ` ,
               `not plain 'BaseAudioCtx'.` ,
            ].join("\n")
         ))
      ) ;
   } , 1 * 60 * 1000 , { leading: true, } )
) ;
/**   
 * {@link React.useState the returned `AudioDestNode` will be same instance until the enclosing *component* *unmount* } .
 * 
 */
const useMediaStreamFromAudioNode: (
   (src: null | AudioSourceNode )
   => (null | MediaStreamAudioDestinationNode )
) = (
   function (src ) {
      const c = (
         src?.context
         || null   
      ) ;
      const mds = (
         React.useMemo(() => {
            if (c) {
               if (c instanceof AudioContext ) {
                  return (
                     c.createMediaStreamDestination()
                  ) ;
               }
               logNonMsdAudioCtxSubclass(c ) ;
            }
            return null ;
         } , [c] )
      ) ;
      useSingularSrcDestConnect(src, mds ) ;
      return (
         mds
      ) ;
   }
) ;
namespace useMediaStreamFromAudioNode {} // TS-2503
// eslint-disable-next-line import/first
import useAudioNodesAsMediaStream = useMediaStreamFromAudioNode ;
/**    
 * {@link useAudioNodesAsMediaStream } x {@link MediaStream `new MediaStream(...)` }.
 * 
 */
const useAudioNodesAsMediaStreamTracks: (
   (...args: Parameters<typeof useAudioNodesAsMediaStream > )
   => (null | Readonly<ReturnType<MediaStream["getTracks"] > > )
) = (
   (...[src, ...args ] ) => {
   ;
   const mds = (
      useAudioNodesAsMediaStream(src, ...args )
   ) ;
   return (
      // TODO
      React.useMemo(() => (
         mds
         ?.stream
         .getTracks()
         ||
         null
      ) , [src] )
   ) ;
   }
) ;





  
export {
   useMediaStreamFromAudioNode ,
   useAudioNodesAsMediaStream ,
   useAudioNodesAsMediaStreamTracks ,
} ;