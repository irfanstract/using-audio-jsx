




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
import { K } from "./commonElements";
import { useSeqState } from "./useSeqState";
import { usingInterval, useIntervalDeferredValue, useAnimationFrameRefreshEffect } from "./usingTimeoutOrInterval"; 
import { 
    useCanForceRefresh , 

    useRefreshByInterval1 ,  
    useRefreshByInterval ,  
 
} from "./usingIntervalRefresh";      
import { useEventTarget } from "./usingTimeoutOrInterval";
import { useRealTimeQueryInterval1, } from "./usingTimeoutOrIntervalScannedValue";
import { useDepsChgCount } from "./usingComponentMountRenderStat";      
import { useWindowLocationHref } from "./useWindowLocationHrefChgEffect";
import { useCtxtualRoutingState } from "./useWindowLocationHrefBasedRouting1";
import { useBlobConcatState1 } from "./useMediaStreamBlobConcatState1";
import { useMediaReadStreamDemoBackForthColorAnim, } from "./useMediaStreamGenBackForthColorAnim1";
import { useMediaReadStreamDemo } from "./useMediaStreamDemo1";
import { useMediaStreamRec } from "./useMediaStreamRecordingSwitchToDest1";
import { useFileListInputState } from "./useFileUpload1";
import {
   useFileListInputState1 , 
   FileSelectDialogueExample ,
} from "./useFileUpload11";



import { AudioLoopDemoApp } from "./audioLoopDemo";
import { MediaStreamRecDemo1 } from "./useMediaStreamRecDemo1";
import { BasicEmbedObjectPreview } from "./useFilePreview1";
import MediaStreamAsVideoElementDemo from "./useMediaStreamAsVideoElementDemo1" ;
import { MediaStreamInterlaceBlobbingDemo11, } from "src/code/useMediaStreamRecDemo1";











const Delayed: (
   React.FC<{ children: React.ReactNode & object ; }>
) = (
   ({ children: payload, }) => {
      const P : (
         Pick<Performance, "now">
      ) = performance ;
      const initialT = (
         React.useMemo(() => P.now() , [] )
      ) ;
      const currentT = (
         useRealTimeQueryInterval1(() => P.now() , 250 , )
      ) ;
      return (
         <>
         { ((2000 <= (currentT - initialT ) ) && payload ) || null }
         </>
      ) ;
   }
) ;
const paragraphOverflowDemo = (() => {
   const p1 = (
      <p>
         The <code>box-shadow</code> property <br />
         enables you to cast a drop shadow from the frame of almost any element. <br />
         If a <code>border-radius</code> is specified on the element with a box shadow, <br />
         the box shadow takes on the same rounded corners. <br />
         The z-ordering of multiple box shadows <br />
         is the same as multiple text shadows (the first specified shadow is on top). <br />
      </p>
   ) ;
   return (
      <section>
      <div style={{ letterSpacing: "0.1em" }}>
      <a target={"_blank"} href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow">
         MDN <q>Box Shadow</q>
      </a>
      { p1 }
      { p1 }
      { p1 }
      <blockquote>
         { p1 }
      </blockquote>
      </div>
      </section>
   ) ;
})() ;
const AllDemoes = (
   function () {
      const {
         presentlyChoice: wh1 ,
         renderChoiceLink ,
         windowHref ,
      } = (
         useCtxtualRoutingState()
      ) ;
      const navList = (
         <ul className="navbar">
            <li>
               {(
                  renderChoiceLink({ value: "AudioLoopDemo" }, (
                     <> AudioLoopDemo </>
                  ))
               ) }
            </li>
            <li>
               {(
                  renderChoiceLink({ value: "MediaStreamRecDemo" }, (
                     <> Media Stream Rec Demo </>
                  ))
               ) }
            </li>
            <li>
               {(
                  renderChoiceLink({ value: "FileDialogDemo" }, (
                     <> File Open Dialogue Demo </>
                  ))
               ) }
            </li>
            <li>
               {(
                  renderChoiceLink({ value: "MSVED" }, (
                     <> Video Stream Gen </>
                  ))
               ) }
            </li>
            <li>
               {(
                  renderChoiceLink({ value: "StreamingInfrasInterlaceBlobSeqPlayback" }, "", )
               ) }
            </li>
         </ul>
      ) ;
      const e = ((): React.ReactElement => {
         ;
         if (wh1 === "AudioLoopDemo") {
            return (
               <AudioLoopDemoApp />
            ) ;
         } ;
         if (wh1 === "MediaStreamRecDemo") {
            return (
               <MediaStreamRecDemo1 />
            ) ;
         } ;
         if (wh1 === "FileDialogDemo") {
            const fileInput1 = (
               <FileSelectDialogueExample />
            ) ;
            return (
               fileInput1
            ) ;
         } ;
         if (wh1 === "MSVED") {
            return (
               <MediaStreamAsVideoElementDemo />
            ) ;
         } ;
         if (wh1 === "StreamingInfrasInterlaceBlobSeqPlayback") {
            return (
               <MediaStreamInterlaceBlobbingDemo11 />
            ) ;
         } ;
         return (
            <div>
               <div>
               { navList }
               </div>
               { paragraphOverflowDemo }
            </div>
         ) ;
      })() ;
      return (
         <div>
            <aside>
            <nav>
               <p>  
                  <code>{ windowHref }</code>
               </p>
               { navList }
               {(
                  renderChoiceLink({ value: "" }, (
                     <> Main </>
                  ))
               ) }
            </nav>
            </aside>
            { e }
         </div>
      ) ;
   }
) ;





export default AllDemoes ;