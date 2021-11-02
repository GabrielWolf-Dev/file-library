import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { db } from '../../firebase';
import { Player } from '@lottiefiles/react-lottie-player';

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
    ButtonConfig
} from './style';
import { Button, Container, TitleBigger } from '../UI';

export default function ListFiles({ layoutFile, isGrid, handlePopUp }){
    const { isAuth } = useAuth();
    const [files, setFiles] = useState([]);

    useEffect(() => {
        db.collection('lib').doc(isAuth.uid).collection('files')
        .onSnapshot(snapshot => setFiles(snapshot.docs.map(value => value.data())));
    }, [isAuth.uid]);
    
    return(
        <>
            {
                files.length !== 0 ? (
                    <List style={layoutFile}>
                        {
                            isGrid ? 
                            files.map((file, index) => {
                                return (
                                    <ItemList key={index}>
                                            <ImgList
                                                style={{
                                                    backgroundImage: `url(${
                                                        file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/svg+xml' ? file.url 
                                                        : file.type == 'application/pdf' ? pdfImg
                                                        : file.type == 'image/gif' ? gifImg 
                                                        : file.type == 'audio/mpeg' ? micImg 
                                                        : file.type == 'video/x-matroska' || file.type == 'video/mp4' ? movieImg
                                                        : fileImg
                                                    })`
                                                }}
                                            ></ImgList>

                                            <ContainerDescItem>
                                                <NameItemList>{file.name}</NameItemList>

                                                <div>
                                                    <ButtonExpand style={{ marginRight: '8px' }} />
                                                    <ButtonConfig />
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
                                            <ThThead>Opções</ThThead>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            files.map((file, index) => <tr key={index}>
                                                <TdBody style={{ textAlign: 'left' }}>{file.name}</TdBody>
                                                <TdBody>{file.size} MB</TdBody>
                                                <TdBody>
                                                    <ButtonExpand style={{ marginRight: '8px' }} />
                                                    <ButtonConfig />
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