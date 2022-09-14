
import { BoundedIdentityFunction, IterableOps, Immutable, } from "./generalUse11";
type ConditionallyPartial<C extends boolean, V extends undefined | null | object > = (
   never
   |
   ([C, true] extends [true, C ] ? Partial<V > : never )
   |
   ([C, false] extends [false, C ] ? V : never )
) ;








/**   
 * this shall cause a *download* to initiate.
 */
const blobConfirmUsrSave = (() => {
   type IDefineTheFileNameIncludingExt<A> = { intendedFileNameIncludingExt : A ; } ;
   type IDefineTheFileNameExtOnly<A> = { fileNameExt : A ; } ;
   type XArgs<GivenBlob extends Blob > = [
      (
         /**   
          * this is not `useYyy` and therefore 
          * *conditionality* can be used.
          */
         Blob
      ) , 
      (
         (
            (IDefineTheFileNameIncludingExt<string> & Partial<IDefineTheFileNameExtOnly<never> > )
            |
            (IDefineTheFileNameExtOnly<string> & Partial<IDefineTheFileNameIncludingExt<never> > )
         )
         &
         /**   
          * other properties.
          */
         {
            vrboLevel ?: (
               keyof Pick<Console, "debug" | "log" | "info" | "warn">
            ) ;
         }
      ) ,
   ] ;
   return (
      function blobConfirmSaveDo<B extends Blob>(...[
         src , 
         { 
            intendedFileNameIncludingExt, 
            fileNameExt, 
            vrboLevel = "log" ,
         } ,
      ] : XArgs<B> ) {
         /**   
          * {@link fileNameExt } with initial *period-sign*.
          */
         const fileNameExt1 = (
            fileNameExt ? (
               fileNameExt
               .replace(/^\.?/ , () => ".")
            ) : null
         ) ;
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
               + (fileNameExt1 ? fileNameExt1 : "")
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
   blobConfirmUsrSave ,
} ;