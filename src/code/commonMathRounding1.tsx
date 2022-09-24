
import * as IterableOps from "lodash";





const {
   ceil ,
   floor ,
   round ,
} = Math ;
/**   
 * the maximum lower multiply of `dvsor`.
 * {@link floor } with custom `divisor`.
 * 
 */
function floorBy(dvdend: number, dvsor: number ) {
   return  (
      floor(dvdend / dvsor ) * dvsor
   ) ;
}

const { 
   clamp,
} = IterableOps ;
const {
   max ,
   min ,
} = Math ;



export {
   clamp ,
   max ,
   min ,

   ceil ,
   floor ,
   floorBy ,
   round ,
} ;