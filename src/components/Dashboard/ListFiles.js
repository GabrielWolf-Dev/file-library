import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { db } from '../../firebase';
import { Player } from '@lottiefiles/react-lottie-player';

import pdfImg from '../../assets/img/pdfImg.png';
import gifImg from '../../assets/img/gifImg.png';
import fileImg from '../../assets/img/fileImg.png';

import {
    List,
    ItemList,
    ImgList,
    TableFiles,
    ThThead,
    ThTheadName,
    TdBody
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
                                                src={file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/svg       +xml'  ? file.url 
                                                : file.type == 'application/pdf' ? pdfImg
                                                : file.type == 'image/gif' ? gifImg : fileImg}
                                                alt={file.name}
                                            />
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
                                                <TdBody>{file.name}</TdBody>
                                                <TdBody>{file.size} MB</TdBody>
                                                <TdBody>{file.name}</TdBody>
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