
//
type WavetableProperties = (
   { 
      shape : (
         Exclude<OscillatorType, "custom">
         | 
         (PeriodicWave | AudioBuffer)
      ) ;
   }
) ;
const WavetableProperties = {} ; // TS-1205













export {
   WavetableProperties ,
} ;