import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { useAuth } from '../../hooks/useAuth';
import Search from '@material-ui/icons/Search';
import ViewList from '@material-ui/icons/ViewList';
import SettingsIcon from '@material-ui/icons/Settings';
import Add from '@material-ui/icons/Add';

import Header from '../Header';
import Footer from '../Footer';

import gridView from '../../assets/svg/grid_view.svg';
import Logout from '../../assets/svg/logout.svg';

import {
    TitleBigger,
    Input,
    Container,
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
    LabelSearch,
    ImgIcon,
    BtnAddFile
} from './style';

export default function Dashboard() {
    const [isGrid, setIsGrid] = useState(true);
    const { isAuth, setIsAuth } = useAuth();
    const layoutsFiles = {
        grid: {
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            gap: '24px'    
        },
        column: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            flexDirection: 'column'
        }
    };
    const [layoutFile, setLayoutFile] = useState(layoutsFiles.grid);

    function logout(){
        auth.signOut().then(() => {
            alert('Você se deslogou!');
            setIsAuth({});
          }).catch((error) => {
            console.log(error.message);
            alert('Erro ao deslogar-se');
          });
    }

    useEffect(() => isGrid ? setLayoutFile(layoutsFiles.grid) : setLayoutFile(layoutsFiles.column), [isGrid]);

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

                    {
                        isGrid ? (
                            <ViewList
                                style={{ cursor: 'pointer', fontSize: '32px' }}
                                onClick={() => setIsGrid(!isGrid)}
                            />
                        ) : (
                            <ImgIcon
                                src={gridView}
                                alt="Ícone de uma ilustração de grid layout"
                                onClick={() => setIsGrid(!isGrid)}
                            />
                        )
                    }
                    
                </BoxFilter>
            </AccountContainerFlex>
            <Container style={layoutFile}>
                <p>asasa</p>
                <p>asasa</p>
                <p>asasa</p>
            </Container>

            <BtnAddFile onClick={() => alert("Adicionar arquivos")}>
                <Add />
            </BtnAddFile>
            <Footer />
        </>
    )
}
