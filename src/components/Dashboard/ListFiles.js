import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { db } from '../../firebase';
import { Player } from '@lottiefiles/react-lottie-player';

import { CloudDownload, Delete } from '@material-ui/icons';
import pdfImg from '../../assets/img/pdfImg.png';
import gifImg from '../../assets/img/gifImg.png';
import fileImg from '../../assets/img/fileImg.png';
import micImg from '../../assets/img/micImg.png';
import movieImg from '../../assets/img/movieImg.png';

import {
    List,
    ItemList,
    ImgList,
    ContainerDescItem,
    NameItemList,
    TableFiles,
    ThThead,
    ThTheadName,
    TdBody,
    ButtonExpand,
    ButtonConfig,
    ContainerImg,
    BgPopUpFile,
    Options,
    LineOptions,
    OptionsWrapper,
    OptionsColumnLayout,
} from './style';
import { Button, Container, TitleBigger } from '../UI';
import { cianBlue, red } from '../UI/colors';

export default function ListFiles({ layoutFile, isGrid, handlePopUp, bgStyle }){
    const { isAuth } = useAuth();
    const [files, setFiles] = useState([]);
    const [fileImgExpand, setFileImgExpand] = useState({});
    const [isImgSelected, setIsImgSelected] = useState(false);
    const [showOptions, setShowOptions] = useState(true);
    const [isBgActive, setIsBgActive] = useState(bgStyle.hiddenBg);


    useEffect(() => {
        let isUnmounted = false;

        db.collection('lib').doc(isAuth.uid).collection('files')
        .onSnapshot(snapshot => {
            if(isUnmounted) return;
            
            const listFiles = snapshot.docs.map(value => value.data());
            setFiles(listFiles);
        });

        () => isUnmounted = true;
    }, [isAuth.uid]);

    function showImgFile(e){
        const list = e.target.closest('#itemList');
        const listImgName = list.firstChild.dataset.name;
        const listImgLink = list.firstChild.dataset.img;

        setFileImgExpand({
            name: listImgName,
            img: listImgLink
        });
        setIsImgSelected(true);
        setIsBgActive(bgStyle.showBg);
    }

    
    function hideImgFile(){
        setFileImgExpand({});
        setIsImgSelected(false);
        setIsBgActive(bgStyle.hiddenBg);
    }

    function showImgColumnGrid(e){
        const listImgLink = e.target.dataset.img;
        const listImgName = e.target.dataset.name;

        setFileImgExpand({
            name: listImgName,
            img: listImgLink
        });
        setIsImgSelected(true);
        setIsBgActive(bgStyle.showBg);
    }

    function handleOptions(e) {
        setShowOptions(!showOptions);
        
        e.target.nextElementSibling.style.display = showOptions ? 'block' : 'none';
    }

    function downloadFile(e){
        const img = e.target.closest('#itemList').children[0];
        const imgUrl = img.dataset.img;
        const nameImg = img.dataset.name;

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = () => {
          const blob = xhr.response;
        
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = nameImg;
            a.click();
            a.remove();
        };
        xhr.open('GET', imgUrl);
        xhr.send();
    }
    
    return(
        <>
            <BgPopUpFile onClick={hideImgFile} style={{
                ...isBgActive,
                zIndex: '3'
            }} />
            <ContainerImg style={{ display: isImgSelected ? 'block' : 'none' }}>
                <img
                    style={{ width: '100%', height: '100%' }}
                    src={fileImgExpand.img}
                    alt={fileImgExpand.name}
                />
            </ContainerImg>
            {
                files.length !== 0 ? (
                    <List style={layoutFile}>
                        {
                            isGrid ? 
                            files.map((file, index) => {
                                const isFileImg = file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/svg+xml';

                                return (
                                    <ItemList key={index} id="itemList">
                                            <ImgList
                                                style={{
                                                    backgroundImage: `url(${
                                                        isFileImg ? file.url 
                                                        : file.type == 'application/pdf' ? pdfImg
                                                        : file.type == 'image/gif' ? gifImg 
                                                        : file.type == 'audio/mpeg' ? micImg 
                                                        : file.type == 'video/x-matroska' || file.type == 'video/mp4' ? movieImg
                                                        : fileImg
                                                    })`
                                                }}
                                                data-img={isFileImg ? file.url : undefined}
                                                data-name={isFileImg ? file.name : undefined}
                                            ></ImgList>

                                            <ContainerDescItem>
                                                <NameItemList>{file.name}</NameItemList>

                                                <div style={{ position: 'relative' }}>
                                                    <ButtonExpand 
                                                        onClick={showImgFile}
                                                        style={{
                                                            display: isFileImg ? 'inline-block' : 'none',
                                                        }}
                                                    />

                                                    <ButtonConfig onClick={handleOptions} />
                                                    <Options>
                                                        <OptionsWrapper onClick={downloadFile}>
                                                            <CloudDownload style={{ color: cianBlue, marginRight: '8px' }} />
                                                            <span>Baixar</span>
                                                        </OptionsWrapper>

                                                        <LineOptions />

                                                        <OptionsWrapper>
                                                            <Delete style={{ color: red }} />
                                                            <span>Excluir</span>
                                                        </OptionsWrapper>
                                                    </Options>
                                                </div>
                                            </ContainerDescItem>
                                    </ItemList>
                                )
                            }) : (
                                <TableFiles cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <ThTheadName>Nome</ThTheadName>
                                            <ThThead>Tamanho</ThThead>
                                            <ThThead style={{ textAlign: 'right', paddingRight: '16px' }}>Opções</ThThead>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            files.map((file, index) => <tr key={index}>
                                                <TdBody style={{ textAlign: 'left' }}>{file.name}</TdBody>
                                                <TdBody>{file.size} MB</TdBody>
                                                <TdBody style={{ textAlign: 'right', position: 'relative' }}>
                                                        <ButtonExpand
                                                            data-name={file.name}
                                                            data-img={file.url}
                                                            onClick={showImgColumnGrid}
                                                            style={{
                                                                display: file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/svg+xml'
                                                                ? 'inline-block'
                                                                : 'none',
                                                                marginRight: '8px'
                                                            }}
                                                        />

                                                    <ButtonConfig onClick={handleOptions} />
                                                    
                                                        <OptionsColumnLayout>
                                                            <OptionsWrapper>
                                                                <CloudDownload style={{ color: cianBlue, marginRight: '8px' }} />
                                                                <span>Baixar</span>
                                                            </OptionsWrapper>

                                                            <LineOptions />

                                                            <OptionsWrapper>
                                                                <Delete style={{ color: red }} />
                                                                <span>Excluir</span>
                                                            </OptionsWrapper>
                                                        </OptionsColumnLayout>
                                                    
                                                </TdBody>
                                            </tr>)
                                        }
                                    </tbody>
                                </TableFiles>
                            )
                        }
                    </List>
                ) : (
                    <Container style={{ marginTop: '48px' }}>
                        <TitleBigger>Você não realizou upload dos seus arquivos :(</TitleBigger>
                        <Player
                            autoplay
                            loop
                            style={{ width: '400px' }}
                            src="https://assets6.lottiefiles.com/datafiles/vhvOcuUkH41HdrL/data.json"
                        />
                        <Button
                            onClick={handlePopUp}
                            style={{ maxWidth: '200px' }}
                        >Faça o seu 1º upload!</Button>
                    </Container>
                )
            }
        </>
    );
}
