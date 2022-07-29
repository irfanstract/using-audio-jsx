import React, { useState, useReducer, useLayoutEffect, useEffect, useCallback, useMemo, useContext } from "react";



 
//
export default (
    React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> >((props , ref ) => {
        const { children, style = {} } = props ;
        return (
            <div ref={ref} {...props } style={{ position: "sticky", top: 0, left: 0, boxSizing: "border-box", backdropFilter: "blur(1.2px)", ...style }} >
                { children }
            </div>
        ) ;
    })
) ;