import React from "react";   










export default (() => {
    type TTScaleInf = { t: number ; tScale: number ; } ;      
    return (function (): {            
        currentTCtx: Pick<React.Context<number> , "Provider" > ;
        currentTScaleCtx: Pick<React.Context<number> , "Provider" >;  
        currentTInfCtx : { Consumer: React.FC<React.ConsumerProps<TTScaleInf > > } ;
            
    }  {  
        const currentTCtx = (      
            React.createContext<number>(-30000 )      
        ) ;                        
        const currentTScaleCtx = (           
            React.createContext<number>(1 )     
        ) ;                 
        const currentTInfCtx = {
            Consumer : (       
                function WithCurrentTInfo({         
                    children ,       
                } : (            
                    React.ConsumerProps<TTScaleInf >   
                ) ) {               
                    const debug1 = ((): 0 |1 => 0 )() ;       
                    const currentValues = {
                        t: React.useContext(currentTCtx ) , 
                        tScale: React.useContext(currentTScaleCtx )  ,
                    } ;                  
                    React.useLayoutEffect(() => {
                        (debug1 === 1 ) && console.log(currentValues) ;
                    }, [...Object.values(currentValues ) ]);        
                    return (
                        <>{ children(currentValues ) }</>
                    ) ;              
                }   
            ) ,
        } ;
        return {         
            currentTCtx ,     
            currentTScaleCtx ,    
            currentTInfCtx ,                 
        } ;           
    }) ;
})() ;
