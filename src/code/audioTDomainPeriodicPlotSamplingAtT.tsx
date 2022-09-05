
import { IterableOps } from "./generalUse11";
import { closedGradientTraceStateAtT } from "./timeDomainClosedGradientSampling1";










const periodicTRestrictedLinearlyApproachedValueAtT1 = (
   function (...[
       t ,
       {
           period: checkPer ,
       } ,
       props ,
   ] : [
       t: number ,
       config0: (
           {
               period : number ;
           }
       ) ,
       config1: (
           {

               startT : number ; 
               anEndT ?: number ;
               endT : number ;

               startValue ?: number ; 
               finalValue : number ;
           }
       ) ,
   ]) : ([number] | [] ) { 
       const {
           startT ,
           endT ,
           finalValue ,
       } = props ;
       const {
           anEndT = (
               startT
               +
               (0.25 * (endT - startT ) )
           ) ,
       } = props ;
       const {
           startValue = (
               finalValue
           ) ,
       } = props ;
       ;
       if (0 <= t ) {
       if ((
           Math.max(0, startT ) <= (t % checkPer ) 
           && 
           (t % checkPer ) < (startT <= endT ? endT : (checkPer + endT ) ) 
       )) {
           return [
           (
               closedGradientTraceStateAtT
           )(t % checkPer , { startT, anEndT: anEndT, startValue, anEndValue: finalValue }  ) ,
           ] ;
       }
       }
       return [] ;
   }
) ;



export {
   periodicTRestrictedLinearlyApproachedValueAtT1 ,
} ;