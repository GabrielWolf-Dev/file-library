import React, { useRef } from 'react';
import { filterXSS } from 'xss';
import { useAuth } from '../../hooks/useAuth.js';
import firebase from 'firebase/compat/app';
import { storage } from '../../firebase';

import {
    ProfileContainer,
    ImgUser,
    ContainerEmailGoogle,
    LabelEmail,
    ImgProfile,
    HideAsideProfile,
    LabelInputProfile
} from './style.js';
import {
    Content,
    Label,
    Form,
    Input,
    TitleBigger,
    Button
} from '../UI';
import { cianBlue } from '../UI/colors.js';

import SettingsIcon from '@material-ui/icons/Settings';
import Edit from '@material-ui/icons/Edit';
import profile from '../../assets/svg/profile.svg';
import imgProfile from '../../assets/svg/imgProfile.svg';

export default function Profile({ asideProfile, showAsideProfile }){
    const { isAuth } = useAuth();
    const photoInput = useRef(null);
    const user = firebase.auth().currentUser;

    function updateProfile(e){
        e.preventDefault();
        const form = e.target;

        const datas = new FormData(form);
        const name = filterXSS(datas.get('name'));
        const email = filterXSS(datas.get('email'));

        if(name !== ''){
            user.updateProfile({ displayName: name })
            .then(() => {
                alert('Atualização realizada com sucesso!');
                window.location.reload();
            })
            .catch((error) => {
                console.error(error.message);
    
                alert('Ocorreu algum erro!');
            });
        }

        if(name === '' || name !== '') {
            if(validationEmail(email)){
                user.updateEmail(email)
                .then(() => {
                    alert('Email atualizado :)');
                    window.location.reload();
                })
                .catch((error) => {
                    console.error(error.message);
        
                    alert('Ocorreu algum erro!');
                });
            }
        }

        form.reset();
    }

    function updatePhoto(){
        const photo = photoInput.current.files[0];
        console.log(isAuth.img);
        const uploadPhoto = storage.ref(`lib/${isAuth.uid}/photo/${photo.name}`).put(photo);
        const oldPhotoRef = storage.refFromURL(isAuth.img);

        // Delete the photo
        oldPhotoRef.delete()
        .then(function() { console.log('Foto antiga removida'); })
        .catch(function(error) {
            console.error(error);
        });

        // Upload Photo
        uploadPhoto.on('state_changed',(snapshot) => {},
        error => { throw new Error(error) },
        () => {
            storage.ref(`lib/${isAuth.uid}/photo/${photo.name}`).getDownloadURL()
            .then((url)=>{
                user.updateProfile({ photoURL: url })
                .then(() => {
                    alert('Sua foto de perfil foi atualizada!');
                    window.location.reload();
                })
                .catch((error) => {
                console.error(error.message);
    
                alert('Ocorreu algum erro!');
                });
            })
            .catch(error => console.error(error));
        });
    }

    function validationEmail(email){
        const regExpEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/;

        return regExpEmail.test(email) ? true : false;
    }

    return(
        <ProfileContainer
            style={{
                left: asideProfile ? '0' : '-100%'
            }}
        >
            <HideAsideProfile>
                <SettingsIcon
                    onClick={showAsideProfile}
                    style={{
                        fontSize: '2.25rem',
                        color: cianBlue
                    }}
                />
            </HideAsideProfile>

            <TitleBigger style={{ padding: '48px 0' }}>Perfil</TitleBigger>
            {
                isAuth.providerData === 'google.com'
                ? (
                    <>
                        <ImgUser
                            src={isAuth.img}
                            alt={isAuth.name}
                        />

                        <Content
                            style={{
                                display: 'inline-block',
                                lineHeight: '42px',
                                verticalAlign: 'top'
                            }}
                        >{isAuth.name}</Content>

                        <ContainerEmailGoogle>
                            <LabelEmail>Email:</LabelEmail>
                            <Content style={{ display: 'inline-block' }}>{isAuth.email}</Content>
                        </ContainerEmailGoogle>
                    </>
                )
                : (
                    <div>
                        <ImgUser
                            src={isAuth.img === null ? imgProfile : isAuth.img}
                            alt={isAuth.name}
                        />

                        <Content
                            style={{
                                display: 'inline-block',
                                lineHeight: '42px',
                                verticalAlign: 'top'
                            }}
                        >
                            <LabelInputProfile htmlFor={"photoInput"}>
                                <span>Editar foto</span>
                                <Edit 
                                    style={{
                                        marginLeft: '8px',
                                        fontSize: '1.8rem',
                                        verticalAlign: 'middle',
                                        cursor: 'pointer'
                                    }}
                                />
                            </LabelInputProfile>
                            <input
                                onChange={updatePhoto}
                                type="file"
                                id="photoInput"
                                ref={photoInput}
                            />
                            
                        </Content>

                        <Form
                            onSubmit={updateProfile}
                            style={{
                                textAlign: 'left',
                                margin: '48px auto 24px auto'
                            }}
                        >
                            <Label htmlFor="name">Nome: </Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder={isAuth.name === null ? isAuth.email.split("@")[0] : isAuth.name}
                            />
                            
                            <div style={{ marginTop: '24px' }}></div>

                            <Label htmlFor="email">E-mail: </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder={isAuth.email}
                            />

                            <center>
                                <Button type="submit">Atualizar</Button>
                            </center>
                        </Form>
                    </div>
                )
            }

            <ImgProfile
                src={profile}
                alt="Ilutração de um usuário acessando as configurações do seu perfil de uma plataforma"
            />
        </ProfileContainer>
    );
}