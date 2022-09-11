
import { 
   IterableOps ,
   Immutable ,
} from "./generalUse11";











/**    
 * to avoid potentially unecessary *memory usage*,
 * uses of `Array` shall be substituted/replaced with {@link Immutable.Seq }.
 * 
 * currently *tuples* (`[x, y]`) are not supported.
 * *records* (`{x, y}`) are strongly preferred.
 * it's impractical to do *overload-resolutive* *type-checking* on *each iteration*. 
 * 
 */
function polylineAsPathD(...[points] : [
   Immutable.Seq.Indexed<(
      Record<"x" | "y", number> 
   )> ,
] ): NonNullable<JSX.IntrinsicElements["path"]["d"] > {
   return (
      [
         ...(
            points
            .map(({ x: t, y: v, }, i: number ) => (
               `${(i === 0 ) ? "M" : "L" } ${t} ${v}`
            ) )
         ) ,
         // no 'z' !
         "z" ,
      ]
      .join(" ")
   ) ;
}
/**   
 * exactly {@link polylineAsPathD }.
 * 
 * @deprecated
 */
const polylineToPathD: (
   typeof polylineAsPathD
) = (
   polylineAsPathD
) ;




export {
   polylineAsPathD ,
   polylineToPathD ,
} ;