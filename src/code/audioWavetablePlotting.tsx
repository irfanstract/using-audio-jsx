
import { 
   IterableOps ,
   Immutable ,
} from "./generalUse11";
import { 
   WavetableProperties ,
   
} from "./audioWavetableProperties";










/**   
 * with `period` being `1` .
 */
function wavetableNameAsUnitPhasePrj(...[shape ] : [
   (
      NonNullable<WavetableProperties["shape"] >
   ) ,
]): null | ((phase: number) => number ) {
   switch (shape) {

      case "sine" :
         return (phase) => (
            Math.sin(phase * 2 * Math.PI )
         ) ;

      case "sawtooth" :
         return (phs0) => {
            const phs1 = (
               (0.5 + phs0) % 1
            ) ;
            return (
               -1 + (phs1 * 2 )
            ) ;
         } ;

      case "triangle" :
         return (t0) => {
            const t1 = (
               t0 * 4 
            ) ;
            return (
               IterableOps.clamp((
                  Math.min((t1 % 4 ) , (2 - (t1 % 4 ) ) )
               ) , 0 , 1)
               +
               IterableOps.clamp((
                  Math.max(2 - (t1 % 4 ) , ((t1 % 4 ) - 4 ) )
               ) , -1 , 0 )
            ) ;
         } ;

      default :
         if (shape instanceof PeriodicWave ) {   
            return (
               wPeriodicWaveAsUnitPhasePrj(shape )
            ) ;
         }
         if (shape instanceof AudioBuffer ) {
            return (
               wAudioBufferAsUnitPhasePrj(shape )
            ) ;
         }
         
         return null ;

   }
} 
function wAudioBufferAsUnitPhasePrj(...[shape ] : [
   AudioBuffer ,
]): ReturnType<typeof wavetableNameAsUnitPhasePrj> {
   return (phase): number => {
      // TODO
      return (
         shape.getChannelData(0 )
         [Math.round(phase / shape.sampleRate ) ]
         || 
         0
      ) ;
   } ;
}
/**    
 * 
 * @deprecated
 */
function wPeriodicWaveAsUnitPhasePrj(...[shape ] : [
   PeriodicWave ,
]): ReturnType<typeof wavetableNameAsUnitPhasePrj> {   
   // TODO
   {
      const {  } = (shape) ;
      const spn = (
         // TODO
         Immutable.Range(1, 2 ** 3 , )
         .toArray()
      ) ;
      const unitSineMp = (
         wavetableNameAsUnitPhasePrj("sinel")
      )! ;
      ;
      return (phase): number => {
         // TODO
         return (
            spn
            .map((f: (typeof spn )[number]) => (
               (
                  // TODO
                  1
               ) * unitSineMp(phase * f ) 
            ) )
            .reduce((v1, v2) => (
               v1 + v2 
            ) )
         ) ;
      } ;
   }
}









export {
   wavetableNameAsUnitPhasePrj ,
   wAudioBufferAsUnitPhasePrj ,
} ;