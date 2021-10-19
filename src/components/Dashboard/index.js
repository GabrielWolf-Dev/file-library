import React from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAuth } from '../../hooks/useAuth';

export default function Dashboard() {
    const [isAuth, setIsAuth] = useAuth();

    function logout(){
        auth.signOut().then(() => {
            alert('Você se deslogou!');
            setIsAuth({});
          }).catch((error) => {
            console.log(error.message);
            alert('Erro ao deslogar-se');
          });
    }

    return (
        Object.keys(isAuth).length !== 0 ? (
            <div>
                <h1>Dashboard Page</h1>
                <button onClick={logout}>Logout</button>
            </div>
        ) : (
            <Redirect to={{ pathname: '/login'}} />
        )
    )
}
