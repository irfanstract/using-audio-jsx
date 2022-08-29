









/**   
 * there are 
 * these two obvious 
 * possible interpretations of `number`s useed to specify *frequency-shift*s .
 * 
 * TBD : `MONOTONES_SHIFT`, `SEMITONES_SHIFT` . 
 */
 enum SupportedFShiftAmtInterpretation {
   F_MULTIPLICATION = "f-mul" ,
   OCTAVE_SHIFT = "octave-shift" ,
   SEMITONES_SHIFT = "semitones-shift" ,
}
const translateFShiftR = (() => {
   /**   
    * translates given {@link SupportedFShiftAmtInterpretation }
    * into {@link Array.map } callback.
    */
   function fMImpl(...[shiftType] : [
      mode: SupportedFShiftAmtInterpretation , 
   ]) : ((value: number ) => ({ fFactor : number ; detuneOctaves: number }) ) {
      switch (shiftType) {
         case SupportedFShiftAmtInterpretation.F_MULTIPLICATION :
            return (value ) => ({ 
               detuneOctaves: Math.log2(value ) ,
               fFactor : value ,
            }) ;
         case SupportedFShiftAmtInterpretation.OCTAVE_SHIFT :
            return (value) => ({ 
               detuneOctaves: value ,
               fFactor : 2 ** value ,
            }) ;
         case SupportedFShiftAmtInterpretation.SEMITONES_SHIFT :
            const octavesShiftModeFImpl = (
               fMImpl(SupportedFShiftAmtInterpretation.OCTAVE_SHIFT )
            ) ;
            return (value) => (
               octavesShiftModeFImpl(value / 12 )
            ) ;
      }
   } 
   return (
      function fShiftListTranslateImpl(...[[shiftType, values ] ] : [
         readonly [SupportedFShiftAmtInterpretation,  readonly number[] ] ,
      ] ) {
         return (
            values
            .map((
               fMImpl
            )(shiftType ))
         ) ; // TODO
      }
   ) ;
})() ;






export {
   SupportedFShiftAmtInterpretation ,
   translateFShiftR ,
} ;