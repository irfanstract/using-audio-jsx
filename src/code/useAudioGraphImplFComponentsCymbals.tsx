




          
import { CConstantValue } from "./useAudioGraphImplFMathComponentsSupport1";
import { CFnValueByRelativeT } from "./useAudioGraphImplFMathComponentsSupport11";
import { 
   CAmpModulated as CAmpModulated0 ,
   CBiquadFilterModulated ,
} from "./useAudioGraphImplFromUseYyyNodes1";
import { CWhiteNoise } from "./useAudioGraphImplFComponentsWhiteNoise";
import { CSnareDrumFluidly1 } from "./useAudioGraphImplFComponentsSlapDrumKit1";












const CBriefHiHatFluidly = (
   () => {
      const period = 0.5 ;
      return (
      <CAmpModulated0 value={<CFnValueByRelativeT value={({ ctxT: t }) => (t <= period ? 1 : 0 ) } /> } >
      <CAmpModulated0 value={<CConstantValue value={2 ** -2 } /> } >
            <CWhiteNoise value={{ volume: 1 }} />
      </CAmpModulated0> 
      </CAmpModulated0>
      ) ;
   }
);



export {
   CBriefHiHatFluidly as CBriefHiHatFluidly ,
} ;