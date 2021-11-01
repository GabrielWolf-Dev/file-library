import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { db } from '../../firebase';

import pdfImg from '../../assets/img/pdfImg.png';
import gifImg from '../../assets/img/gifImg.png';
import fileImg from '../../assets/img/fileImg.png';

import {
    List,
    ItemList,
    ImgList
} from './style';

export default function ListFiles({ layoutFile, isGrid }){
    const { isAuth } = useAuth();
    const [files, setFiles] = useState([]);

    useEffect(() => {
        db.collection('lib').doc(isAuth.uid).collection('files')
        .onSnapshot(snapshot => setFiles(snapshot.docs.map(value => value.data())));
    }, [isAuth.uid]);

    // Dentro do container fazer uma validação para mudar o layout do component além do container
    return(
        <List style={layoutFile}>
                {
                    files.map((file, index) => 
                        isGrid ? (
                            <ItemList key={index}>
                                <ImgList
                                    src={file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/svg+xml' ? file.url 
                                    : file.type == 'application/pdf' ? pdfImg
                                    : file.type == 'image/gif' ? gifImg : fileImg}
                                    alt={file.name}
                                />
                            </ItemList>
                        ) : (<p>assas</p>)
                    )
                }
        </List>
    );
}