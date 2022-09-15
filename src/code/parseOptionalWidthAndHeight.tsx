
import { EitherBothSetOrBothUnset, } from "./generalUse11";
import { BoundedIdentityFunction, IterableOps, } from "./generalUse11";





const parseOptionalWidthAndHeight = (
   (...[properties] : [
      EitherBothSetOrBothUnset<{ width: number ; height: number ; }> ,
   ] ): {
      width: number;
      height: number;
   } => {
      const {
         width: width0 , 
         height: height0 ,
      } = properties ;
      return {
         width: width0 || height0 || 256 ,
         height: height0 || width0 || 256 ,
      } ;
   }
) ;
namespace parseOptionalWidthAndHeight {} 




export {
   parseOptionalWidthAndHeight ,
} ;