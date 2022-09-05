
import { IterableOps } from "./generalUse11";









function closedGradientTraceStateAtT(...[
   t , 
   { startT, anEndT, startValue: startV, anEndValue } ,
] : [
   t: number ,
   config: {
       startT : number ; 
       anEndT : number ;
       startValue : number ;
       anEndValue : number ;
   } ,
] ): number {
   const p = (
       IterableOps.clamp((
           (t - startT ) 
           / (anEndT - startT )
       ) , 0, 1 )
   ) ;
   return (
       startV 
       + 
       (p * (anEndValue - startV ) )
   ) ;
} 



/**   
 * exactly {@link closedGradientTraceStateAtT }.
 * 
 * @deprecated
 * "sliding" has alternative *meaning*s.
 */
const linearSlidingStateAtT = (
   closedGradientTraceStateAtT
) ;
export {
   linearSlidingStateAtT as linearSlidingStateAtT ,
   closedGradientTraceStateAtT as closedGradientTraceStateAtT ,
} ;