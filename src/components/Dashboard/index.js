import React, { useEffect, useRef, useState } from 'react';
import { storage, db  } from '../../firebase';
import { useAuth } from '../../hooks/useAuth';

import Add from '@material-ui/icons/Add';

import Header from '../Header';
import MenuAccount from './MenuAccount';
import Filters from './Filters';

import {
    TitleBigger,
    SubTitle,
    Button,
} from '../UI';
import {
    BtnAddFile,
    PopUpFileAdd,
    LabelFileInput,
    BgPopUpFile
} from './style';
import { white } from '../UI/colors';
import ListFiles from './ListFiles';

export default function Dashboard() {
    const [isGrid, setIsGrid] = useState(true);
    const [isOpenPopUp, setIsOpenPopUp] = useState(false);
    const { isAuth } = useAuth();
    const fileInput = useRef(null);

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

    function uploadFile(){
        let file = fileInput.current.files[0];

        if(file !== undefined){
            const uploadTask = storage.ref(`lib/${isAuth.uid}/files/${file.name}`).put(file);
            uploadTask.on('state_changed',(snapshot)=>{
                //const progressTemp = (snapshot.bytesTransferred/snapshot.totalBytes) * 1;
                //setProgress(progressTemp);
                console.log(snapshot);
            },
            error => { throw new Error(error) },
            () => {
                storage.ref(`lib/${isAuth.uid}/files/${file.name}`).getDownloadURL()
                .then((url)=>{
                    db.collection('lib').doc(isAuth.uid).collection("files").add({
                        name: file.name,
                        url: url,
                        type: file.type
                    })
                    //setProgress(0);

                    alert('Upload realizado com sucesso!');
                })
                .catch(error => {
                    alert('Erro');
                    console.error(error);
                });
            })
        } else {
            alert('Insira um arquivo para fazer o upload');
        }
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

            <MenuAccount />
            <Filters isGrid={isGrid} setIsGrid={setIsGrid} />
            <ListFiles isGrid={isGrid} layoutFile={layoutFile} />

            <BtnAddFile onClick={() => setIsOpenPopUp(!isOpenPopUp)}>
                <Add />
            </BtnAddFile>

            <PopUpFileAdd style={openPopUp}>
                <SubTitle style={{ color: white }}>Upload do arquivo</SubTitle>
                <LabelFileInput htmlFor="fileInput">Escolher arquivo</LabelFileInput>
                <input
                    type="file"
                    id="fileInput"
                    ref={fileInput}
                />

                <Button onClick={uploadFile}>Fazer Upload</Button>
            </PopUpFileAdd>
        </>
    )
}
