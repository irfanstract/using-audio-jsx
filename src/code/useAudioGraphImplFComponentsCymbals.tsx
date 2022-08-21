




          
// import { 
//    CFnValue1 ,
   
//    CHalfSecndBeep1 , CPersistingBeep , CWaveTable1 , CWhiteNoise ,    
//    CBassDrumKickFluidly1 ,
//    CSnareDrumFluidly1 , 
   
//    CAmpModulated , CBiquadFilterModulated ,  CFreqDmAnalyF ,  CConstantValue , CAmpModulated0 ,    

//    MetronomeCheckAndExpandingElem , 
   
// } from "./useAudioGraphImplFComponents"; 
// CConstantValue , CAmpModulated0 , CSnareDrumFluidly1 ,
import { CConstantValue } from "./useAudioGraphImplFMathComponentsSupport1";
import { CAmpModulated as CAmpModulated0 } from "./useAudioGraphImplCurrentDestNdRefCtxC";
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