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
    SubContent,
    WarningMsg,
    SuccessMsg
} from '../UI';
import {
    BtnAddFile,
    PopUpFileAdd,
    LabelFileInput,
    BgPopUpFile,
    LabelUpload,
    ProgressUpload
} from './style';
import { white } from '../UI/colors';
import ListFiles from './ListFiles';

export default function Dashboard() {
    const [isGrid, setIsGrid] = useState(true);
    const [isOpenPopUp, setIsOpenPopUp] = useState(false);
    const { isAuth } = useAuth();
    const fileInput = useRef(null);
    const [isFileSelected, setIsFileSelected] = useState("Nenhum arquivo foi selecionado");
    const [progress, setProgress] = useState(0);
    const [isProgress, setIsProgress] = useState(false);
    const [showMsgSuccess, setShowMsgSuccess] = useState(false);
    const [showMsgWarning, setShowMsgWarning] = useState(false);

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
        }
    };
    const bgStyle = {
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
            const convertToMB =  Math.trunc(file.size / 1024 / 1024);
            const maxMBValue = 200;

            if(convertToMB <= maxMBValue)
                uploadTask.on('state_changed',(snapshot) => {
                    const progressTemp = (snapshot.bytesTransferred / snapshot.totalBytes) * 1;
                    setProgress(progressTemp);
                    setIsProgress(true);
                },
                error => { throw new Error(error) },
                () => {
                    storage.ref(`lib/${isAuth.uid}/files/${file.name}`).getDownloadURL()
                    .then((url)=>{
                        db.collection('lib').doc(isAuth.uid).collection("files").add({
                            name: file.name,
                            url: url,
                            type: file.type,
                            size: convertToMB
                        });
                    
                        setProgress(0);
                        setIsProgress(false);
                        successMsg();
                    })
                    .catch(error => console.error(error));
                })
            else return warningMsg();
        } else {
            alert('Insira um arquivo para fazer o upload');
        }
    }

    function warningMsg(){
        setShowMsgWarning(true);
        setTimeout(() => setShowMsgWarning(false), 2000);
    }

    function successMsg(){
        setShowMsgSuccess(true);
        setTimeout(() => setShowMsgSuccess(false), 2000);
    }

    function handlePopUp(){
        setIsOpenPopUp(!isOpenPopUp);
    }

    function fileSelect(){
        const fileName = fileInput.current.files[0].name;

        if(fileInput !== null)
            setIsFileSelected(fileName);
        else
            setIsFileSelected("Nenhum arquivo foi selecionado");
    }

    useEffect(() => isGrid ? setLayoutFile(layouts.grid) : setLayoutFile(layouts.column), [isGrid]);
    useEffect(() => {
        isOpenPopUp ? setOpenPopUp(layouts.openPopUp) : setOpenPopUp(layouts.notOpenPopUp);
        isOpenPopUp ? setBgPopUp(bgStyle.showBg) : setBgPopUp(bgStyle.hiddenBg);
    }, [isOpenPopUp]);

    return (
        <>
            <BgPopUpFile onClick={handlePopUp} style={bgPopUp} />
            { showMsgWarning ? <WarningMsg>Tamanho máximo de 200 MB</WarningMsg> : false }
            { showMsgSuccess ? <SuccessMsg>Upload realizado com sucesso!</SuccessMsg> : false }
            
            <Header />
            <TitleBigger style={{ marginTop: '48px' }}>Dashboard</TitleBigger>

            <MenuAccount />
            <Filters isGrid={isGrid} setIsGrid={setIsGrid} />
            <ListFiles
                handlePopUp={handlePopUp}
                isGrid={isGrid}
                layoutFile={layoutFile}
                bgStyle={bgStyle}
            />

            <BtnAddFile onClick={handlePopUp}>
                <Add />
            </BtnAddFile>

            <PopUpFileAdd style={openPopUp}>
                <SubTitle style={{ color: white }}>Upload do arquivo</SubTitle>
                <LabelFileInput htmlFor="fileInput">Escolher arquivo</LabelFileInput>
                <input
                    onChange={fileSelect}
                    type="file"
                    id="fileInput"
                    ref={fileInput}
                />
                <SubContent>{isFileSelected}</SubContent>

                <Button onClick={uploadFile}>Fazer Upload</Button>

                <aside style={{ display: isProgress ? 'block' : 'none' }}>
                    <LabelUpload htmlFor="fileUpload">Fazendo upload...</LabelUpload>
                    <ProgressUpload id="fileUpload" value={progress} max="1"> {progress}% </ProgressUpload>
                </aside>
            </PopUpFileAdd>
        </>
    )
}
