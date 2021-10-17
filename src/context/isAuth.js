import React, { createContext, useState } from 'react';

export const IsAuthContext = createContext([]);

export const IsAuthProv = (props) => {
    const [isAuth, setIsAuth] = useState(false);

    return(
        <IsAuthContext.Provider value={[isAuth, setIsAuth]}>
            {props.children}
        </IsAuthContext.Provider>
    );
};