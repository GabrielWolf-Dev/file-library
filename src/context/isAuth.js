import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

export const IsAuthContext = createContext([]);

export const IsAuthProv = (props) => {
    const [isAuth, setIsAuth] = useState({});

    useEffect(() => {
        auth.onAuthStateChanged(user => {
          if(user){
            setIsAuth({
              name: user.displayName,
              email: user.email,
              img: user.photoURL,
              uid: user.uid
            });
          }
        });
    }, []);

    return(
        <IsAuthContext.Provider value={[isAuth, setIsAuth]}>
            {props.children}
        </IsAuthContext.Provider>
    );
};