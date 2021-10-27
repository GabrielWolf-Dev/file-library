import React from 'react';
import { auth } from '../../firebase';
import { useAuth } from '../../hooks/useAuth';
import Search from '@material-ui/icons/Search';
import ViewList from '@material-ui/icons/ViewList';

import Header from '../Header';
import Footer from '../Footer';

import SettingsIcon from '@material-ui/icons/Settings';
import Logout from '../../assets/svg/logout.svg';

import {
    TitleBigger,
    Input,
} from '../UI';
import {
    NavAccount,
    ImgAccount,
    FigCaptionImg,
    ButtonIcon,
    AccountContainerFlex,
    BoxInputSearch,
    BoxFilter,
    SelectFilter,
    LabelSearch
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

            <AccountContainerFlex>
                <BoxInputSearch>
                    <Input
                        id="search"
                        type="text"
                        placeholder="Pesquisar"
                    />

                    <LabelSearch htmlFor="search">
                        <Search />
                    </LabelSearch>
                </BoxInputSearch>

                <BoxFilter>
                    <SelectFilter name="filter_files">
                        <option value="all">Todos</option>
                        <option value="phtos">Fotos</option>
                        <option value="documents">Documentos</option>
                    </SelectFilter>

                    
                    <ViewList
                        style={{ cursor: 'pointer', fontSize: '32px' }}
                        onClick={() => alert('Trocar para o sistema de coluna')}
                    />
                </BoxFilter>
            </AccountContainerFlex>
            <Footer />
        </>
    )
}
