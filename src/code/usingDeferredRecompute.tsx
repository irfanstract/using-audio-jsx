
import React from "react";






const useDeferredRecompute = (
   function <R>(f: () => R ): R {
      const key = (
         React.useDeferredValue((
            Math.random()
         ) )
      ) ;
      return (
         React.useMemo(() => (
            f()
         ) , [key ] )
      ) ;
   }
) ;


export {
   useDeferredRecompute ,
} ;