
import Immutable from "immutable";           
import {  
} from "./generalUse11";    










// TODO
const fromTSeqComputedValueInterpolated = (
   function (...[ts0, valueAtT ]: [
      tStamps: readonly number[] | Immutable.Seq.Indexed<number> ,
      valueAtT: (t: number) => number ,
   ] ) {
      const ts = [...ts0 ] ;
      const tSegments = (
         Immutable.Range(1, ts.length, 1 )
         .toSeq()
         .map((i: number ): [t0: number, t1: number] => [ts[i + -1 ]!, ts[i ]! ] )
      ) ;
      return {
         valueAtT : (
            (requestedT : number ) => (
               (
                  tSegments
                  .flatMap(([t0, t1 ]): ([valueAtRequestedT: number] | [] ) => {
                        if (t0 <= requestedT && requestedT <= t1 ) {
                           const v0 = valueAtT(t0 ) ;
                           const v1 = valueAtT(t1 ) ;
                           const p = (requestedT - t0 ) / (t1 - t0 ) ;
                           return [v0 + (p * (v1 - v0 ) ) ] ;
                        }
                        return [] ;
                  } ) 
                  .first()
                  // TODO
               )
            )
         ) ,
      } ;
   }
) ;




export {
   fromTSeqComputedValueInterpolated ,
} ;