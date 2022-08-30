




          
import { CConstantValue } from "./useAudioGraphImplFMathComponentsSupport1";
import { CFnValueByRelativeT } from "./useAudioGraphImplFMathComponentsSupport11";
import { 
   CAmpModulated as CAmpModulated0 ,
   CBiquadFilterModulated ,
} from "./useAudioGraphImplFromUseYyyNodes1";
import { CWhiteNoise } from "./useAudioGraphImplFComponentsWhiteNoise";
import { CSnareDrumFluidly1 } from "./useAudioGraphImplFComponentsSlapDrumKit1";












const CBriefHiHatFluidly = (
   ({ duration: period = 0.5 } : { duration ?: number ; } ) => {
      return (
      <CAmpModulated0 value={<CConstantValue value={2 ** -3.6 } /> } >
      <CAmpModulated0 value={<CFnValueByRelativeT value={({ ctxT: t }) => ((0 <= t && t <= period) ? 1 : 0 ) } /> } >
         <CBiquadFilterModulated
         type="highpass"
         freqArgumentInterpretation="timedomain-normalised"
         freqArgument={<CConstantValue value={55 / 48000 } /> }
         >
         <CBiquadFilterModulated
         type="lowpass"
         freqArgumentInterpretation="timedomain-normalised"
         freqArgument={<CConstantValue value={10000 / 48000 } /> }
         >
            <CWhiteNoise value={{ volume: 1 }} />
         </CBiquadFilterModulated>
         </CBiquadFilterModulated>
      </CAmpModulated0> 
      </CAmpModulated0>
      ) ;
   }
);



export {
   CBriefHiHatFluidly as CBriefHiHatFluidly ,
} ;