




          
import { CConstantValue } from "./useAudioGraphImplFMathComponentsSupport1";
import { CFnValueByRelativeT } from "./useAudioGraphImplFMathComponentsSupport11";
import { 
   CAmpModulated as CAmpModulated0 ,
   CBiquadFilterModulated ,
} from "./useAudioGraphImplFromUseYyyNodes1";
import { CWhiteNoise } from "./useAudioGraphImplFComponentsWhiteNoise";
import { CSnareDrumFluidly1 } from "./useAudioGraphImplFComponentsSlapDrumKit1";












const CBriefHiHatFluidly = (
   () => (
      <CAmpModulated0 value={<CConstantValue value={2 ** -2 } /> } >
            <CSnareDrumFluidly1 />
      </CAmpModulated0> 
   )
);



export {
   CBriefHiHatFluidly as CBriefHiHatFluidly ,
} ;