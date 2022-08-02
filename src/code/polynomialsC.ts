import { Enum } from "./generalUseTypeDefs"; 
  





/**   
 * computes a linear eq reconstructing that
 */
function interpolateBetweenTwo({ c1, c0 , t } : { c1 : number ; c0: number ; t : number ; }) {     
    const f = (c1 - c0 ) / t ;   
    const C = {c0, f } as const ;
    return C ;    
}     





export {
    interpolateBetweenTwo ,    
} ;