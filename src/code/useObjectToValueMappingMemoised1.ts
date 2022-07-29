



function newObjectToValueMappingMemoised<Arg extends object, ReturnVal>(
    INIT : (a: Arg) => ReturnVal, 
    limit : number = 1E5 ,
): ((a: Arg) => ReturnVal ) {
    const map = (            
        new WeakMap<Arg, ReturnVal >()       
    ) ;                                  
    return (                          
        (a: Arg): ReturnVal => {
            if (!map.has(a) ) {              
                const v: ReturnVal = (                 
                    INIT(a)     
                ) ;        
                map.set(a, v) ;   
            }                                        
            return (                 
                map.get(a )!
            ) ;
        }
    ) ;
}        














export {
    newObjectToValueMappingMemoised ,     
} ;