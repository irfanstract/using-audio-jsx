









/**    
 * extra amount of info becomes necassary as otherwise
 * there would be no practical way to determine the right number of simultaneously-mounted Comp(s).
 * 
 */
type LWpamPayloadMountSpanProperties = (
   {
      premountTime : number ;
      mountDuration : number ;
   }
) ;
const LWpamPayloadMountSpanProperties = {} ; // TS-1205
/**    
 * extra amount of info becomes necassary as otherwise
 * there would be no practical way to determine the right number of simultaneously-mounted Comp(s).
 * 
 */
class LWpamPayloadMountSpanProperties1 implements LWpamPayloadMountSpanProperties {
   constructor(
      public premountTime : number ,
      public mountDuration : number ,
   ) {}
   toString(): string {
      return JSON.stringify(this) ;
   }
} ;




export {
   LWpamPayloadMountSpanProperties ,
   LWpamPayloadMountSpanProperties1 ,
} ;