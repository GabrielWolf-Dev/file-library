import React from 'react';
import { auth } from '../../firebase';
import { useAuth } from '../../hooks/useAuth';

import Header from '../Header';
import Footer from '../Footer';

import SettingsIcon from '@material-ui/icons/Settings';
import Logout from '../../assets/svg/logout.svg';

import {
    TitleBigger,
} from '../UI';
import {
    NavAccount,
    ImgAccount,
    FigCaptionImg,
    ButtonIcon,
} from './style';

export default function Dashboard() {
    const { isAuth, setIsAuth } = useAuth();

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
        <>
            <Header />
            <TitleBigger style={{ marginTop: '48px' }}>Dashboard</TitleBigger>
            <NavAccount>
                <figure style={{ height: '100%' }}>
                    <ImgAccount src={isAuth.img} alt={`Foto de ${isAuth.name}`} />

                    <FigCaptionImg>{isAuth.name}</FigCaptionImg>
                </figure>

                <div>
                    <ButtonIcon onClick={logout} style={{ marginRight: '8px' }}>
                        <img src={Logout} alt="Ícone de Deslogar" style={{width: '100%', height: '100%'}} />
                    </ButtonIcon>

                    <ButtonIcon onClick={() => alert('Abrir menu de Perfil')}>
                        <SettingsIcon style={{  width: '100%', height: '100%'}} />
                    </ButtonIcon>
                </div>
            </NavAccount>
            <Footer />
        </>
    )
}
