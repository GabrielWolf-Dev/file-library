import React from 'react';
import { auth } from '../../firebase';
import { useAuth } from '../../hooks/useAuth';

export default function Dashboard() {
    const { setIsAuth } = useAuth();

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
        <div>
            <h1>Dashboard Page</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
