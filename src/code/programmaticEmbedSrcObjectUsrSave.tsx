
import { BoundedIdentityFunction, IterableOps, Immutable, } from "./generalUse11";








/**   
 * this shall cause a *download* to initiate.
 */
const blobConfirmSave = (() => {
   type IFE_EXT<A> = { intendedFileNameIncludingExt : A ; } ;
   type FE_EXT<A> = { fileNameExt : A ; } ;
   type XArgs = [
      (
         /**   
          * this is not `useYyy` and therefore 
          * *conditionality* can be used.
          */
         Blob
      ) , 
      (
         (
            (IFE_EXT<string> & Partial<FE_EXT<never> > )
            |
            (FE_EXT<string> & Partial<IFE_EXT<never> > )
         )
         &
         {
            vrboLevel ?: (
               keyof Pick<Console, "debug" | "log" | "info" | "warn">
            ) ;
         }
      ) ,
   ] ;
   return (
      function blobConfirmSaveDo(...[
         src , 
         { 
            intendedFileNameIncludingExt, 
            fileNameExt, 
            vrboLevel = "log" ,
         } ,
      ] : XArgs ) {
         const currentDateStr = (
            Date()
         ) ;
         const elem = (
            /**   
             * `A` in the HTML Namespace.
             */
            document.createElement("a") 
         ) ;
         elem.href = (
            URL.createObjectURL(src )
         ) ;
         elem.download = (
            null 
            ||
            (intendedFileNameIncludingExt || null )
            ||
            (
               src instanceof File ? 
               src.name : null 
            )
            ||
            (
               [
                  encodeURIComponent(src.type ) ,
                  currentDateStr ,
               ].join("-")
               + (fileNameExt ? ("." + fileNameExt ) : "")
            )
            // ||
            // true
         ) ;
         {
            // DEBUGGING
            ;
            console[vrboLevel]((
               `d-name : ${elem.download }`
            )) ;
            console[vrboLevel]((
               `d-href : ${elem.href }`
            )) ;
         }
         elem.click() ;
         setTimeout(() => {
            URL.revokeObjectURL(elem.href ) ;
         } , 120 * 1000 ) ;
         ;return ;
      }
   ) ;
})() ;





export {
   blobConfirmSave ,
} ;