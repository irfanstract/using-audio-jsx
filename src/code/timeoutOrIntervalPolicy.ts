import { IterableOps } from "./generalUse11";









const intervalUsageCatchupPolicyEmitErrorOnce = (  
    IterableOps.memoize((            
        (v: IntervalUsageAcceptableCatchupPolicy | unknown ) => (
            console.error("unsupported 'catchup policy' argument " , { v } ) 
        )
    ) , IterableOps.identity )
) ;                                                                       
type IntervalUsageAcceptableCatchupPolicy = (
    (0 | false ) | "MAINTAIN_FIXED_COMPLETION_RATE" | "MAINTAIN_FIXED_PACE"        
) ;       
const IntervalUsageAcceptableCatchupPolicy = {} ; // TS-1205









export {
    intervalUsageCatchupPolicyEmitErrorOnce ,    
} ;
export {
    IntervalUsageAcceptableCatchupPolicy , 
} ;