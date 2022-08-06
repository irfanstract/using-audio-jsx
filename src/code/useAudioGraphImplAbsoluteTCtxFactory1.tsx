import React from "react";   










export default (() => {
    type TTScaleInf = { t: number ; tScale: number ; } ;      
    return (function FR1(): {                  
        currentTCtx: Pick<React.Context<number> , "Provider" > ;
        currentTScaleCtx: Pick<React.Context<number> , "Provider" >;  
        currentTInfCtx : { Consumer: React.FC<React.ConsumerProps<TTScaleInf > > } ; 

        useCurrentTInf : (
            () => { 
                t: number ; 
                tScale: number ;    
            }
        ) ;
            
    }  {       
        const currentTCtx = (          
            React.createContext<number>(-30000 )            
        ) ;                        
        const currentTScaleCtx = (           
            React.createContext<number>(1 )     
        ) ;                   
        const useCurrentTInf = (  
            function () {
                ;       
                const currentValues: (
                    ReturnType<(
                        ReturnType<typeof FR1 >["useCurrentTInf"]
                    )>
                ) = {
                    t: React.useContext(currentTCtx ) , 
                    tScale: React.useContext(currentTScaleCtx )  ,
                } ;                          
                return currentValues ;
            }
        );       
        const currentTInfCtx = {     
            Consumer : (       
                function WithCurrentTInfo({         
                    children ,       
                } : (            
                    React.ConsumerProps<TTScaleInf >   
                ) ) {    
                    const debug1 = ((): 0 |1 => 0 )() ;       
                    const currentValues = (
                        useCurrentTInf()
                    ) ;                        
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
            
            useCurrentTInf ,  
        } ;           
    }) ;
})() ;
