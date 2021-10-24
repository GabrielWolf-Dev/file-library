import React, { createContext, useState, useEffect } from 'react';
import { auth, providerGoogle } from '../firebase';

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

    function googleAuth(){
      auth.signInWithPopup(providerGoogle)
        .then(result => setIsAuth({
          name: result.user.displayName,
          email: result.user.email,
          img: result.user.photoURL,
          uid: result.user.uid
        }))
        .catch((error) => {
          console.log(error.code);
          console.error(error.message);
      });
    }

    return(
        <IsAuthContext.Provider value={{
          isAuth,
          setIsAuth,
          googleAuth
        }}>
            {props.children}
        </IsAuthContext.Provider>
    );
};