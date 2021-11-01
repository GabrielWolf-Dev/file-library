import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { useAuth } from '../../hooks/useAuth';
import Search from '@material-ui/icons/Search';
import ViewList from '@material-ui/icons/ViewList';
import SettingsIcon from '@material-ui/icons/Settings';
import Add from '@material-ui/icons/Add';

import Header from '../Header';

import gridView from '../../assets/svg/grid_view.svg';
import Logout from '../../assets/svg/logout.svg';

import {
    TitleBigger,
    Input,
    Container,
    SubTitle,
    Button,
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
    BtnAddFile,
    PopUpFileAdd,
    LabelFileInput,
    BgPopUpFile
} from './style';
import { white } from '../UI/colors';

export default function Dashboard() {
    const [isGrid, setIsGrid] = useState(true);
    const [isOpenPopUp, setIsOpenPopUp] = useState(false);
    const { isAuth, setIsAuth } = useAuth();

    const layouts = {
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
        },
        openPopUp: {
            transform: 'scale(1) translate(-50%, -50%)',
            transition: 'all ease-out .3s',
            opacity: '1',
            visibility: 'visible'
        },
        notOpenPopUp: {
            transform: 'scale(0) translate(-50%, -50%)',
            transition: 'all ease-out .3s',
            opacity: '0',
            visibility: 'hidden'
        },
        showBg: {
            opacity: '1',
            visibility: 'visible'
        },
        hiddenBg: {
            opacity: '0',
            visibility: 'hidden'
        }
    };

    const [layoutFile, setLayoutFile] = useState(layouts.grid);
    const [openPopUp, setOpenPopUp] = useState(layouts.notOpenPopUp);
    const [bgPopUp, setBgPopUp] = useState(layouts.hiddenBg);

    function logout(){
        auth.signOut().then(() => {
            alert('Você se deslogou!');
            setIsAuth({});
          }).catch((error) => {
            console.log(error.message);
            alert('Erro ao deslogar-se');
          });
    }

    useEffect(() => isGrid ? setLayoutFile(layouts.grid) : setLayoutFile(layouts.column), [isGrid]);
    useEffect(() => {
        isOpenPopUp ? setOpenPopUp(layouts.openPopUp) : setOpenPopUp(layouts.notOpenPopUp);
        isOpenPopUp ? setBgPopUp(layouts.showBg) : setBgPopUp(layouts.hiddenBg);
    }, [isOpenPopUp]);

    return (
        <>
            <BgPopUpFile onClick={() => setIsOpenPopUp(!isOpenPopUp)} style={bgPopUp} />
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

            <BtnAddFile onClick={() => setIsOpenPopUp(!isOpenPopUp)}>
                <Add />
            </BtnAddFile>

            <PopUpFileAdd
                style={openPopUp}
            >
                <SubTitle style={{ color: white }}>Upload do arquivo</SubTitle>
                <LabelFileInput htmlFor="fileInput">Escolher arquivo</LabelFileInput>
                <input
                    type="file"
                    id="fileInput"
                />

                <Button>Fazer Upload</Button>
            </PopUpFileAdd>
        </>
    )
}
