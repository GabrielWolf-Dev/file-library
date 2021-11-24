import React, { createContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { useAuth } from '../hooks/useAuth';

export const FilesDbContext = createContext({});

export const FilesDbProv = (props) => {
    const [files, setFiles] = useState([]);
    const [filterFile, setFilterFile] = useState('all');
    const { isAuth } = useAuth();

    useEffect(() => {
        if(filterFile === 'all'){
            db.collection('lib').doc(isAuth.uid).collection('files')
            .onSnapshot(snapshot => {
                const listFiles = snapshot.docs.map(value => {
                return {
                        ...value.data(),
                        id: value.id
                    };
                });

                setFiles(listFiles);
            });
        } else {
            db.collection('lib').doc(isAuth.uid).collection('files')
            .where('extFile', '==', filterFile)
            .onSnapshot(snapshot => {
                const listFiles = snapshot.docs.map(value => {
                return {
                        ...value.data(),
                        id: value.id
                    };
                });

                setFiles(listFiles);
            });
        }
    }, [isAuth.uid, filterFile]);

    return(
        <FilesDbContext.Provider value={{
            files,
            setFiles,
            filterFile,
            setFilterFile
        }}>
            {props.children}
        </FilesDbContext.Provider>
    );
};