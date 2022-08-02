import { Enum } from "./generalUseTypeDefs"; 
  





type LinearRegressiveModel = {  
    /**       
     * value when `t === 0`
     */    
    c0 : number ;           
    c1 : number ;    
    /**   
     * `(c1 - c0 ) / t `
     */
    f : number ;         
    t : number ;          
} ;
    
;
/**   
 * extrapolate-and-interpolate a linear eq satisfying `c0 + (t * f ) === c1 ` .   
 *     
 * note that the values `c1` and `t` will not be returned since
 * the expected way to reconstruct the equation will solely be the two values       
 */
function interpolateBetweenTwo({ c1, c0 , t } : Pick<LinearRegressiveModel, "c1" | "c0" | "t" > ) : Pick<LinearRegressiveModel, "c0" | "f" > {     
    const f = (c1 - c0 ) / t ;   
    const C = {c0: c0, f: f } as LinearRegressiveModel ;
    return C ;    
}    





export {
    interpolateBetweenTwo ,    
} ;
export type {
    LinearRegressiveModel ,  
}