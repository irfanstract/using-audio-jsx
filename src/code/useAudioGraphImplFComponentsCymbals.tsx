




          
import { 
   CFnValue1 ,
   
   CHalfSecndBeep1 , CPersistingBeep , CWaveTable1 , CWhiteNoise ,    
   CBassDrumKickFluidly1 ,
   CSnareDrumFluidly1 , 
   
   CAmpModulated , CBiquadFilterModulated ,  CFreqDmAnalyF ,  CConstantValue , CAmpModulated0 ,    

   MetronomeCheckAndExpandingElem , 
   
} from "./audioLoopDemoComponents1"; 












const CContinousHiHatFluidly = (
   () => (
      <CAmpModulated0 value={<CConstantValue value={2 ** -2 } /> } >
            <CSnareDrumFluidly1 />
      </CAmpModulated0> 
   )
);



export {
   CContinousHiHatFluidly as CBriefHiHatFluidly ,
} ;