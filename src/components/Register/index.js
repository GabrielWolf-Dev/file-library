import React from 'react';
import { filterXSS } from 'xss';
import { Player } from '@lottiefiles/react-lottie-player';
import { useAuth } from '../../hooks/useAuth';
import { Redirect } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import { 
    ContainerAuth,
    ContainerItemsRes,
    TitleBigger,
    SubTitleAuth,
    Input,
    Form,
    Button,
    BtnAuthSocial,
    IconAuthImg,
    BoxPlayerAnimation,
    FieldSet,
    Label
 } from '../UI';
import faceIcon from '../../assets/svg/face-icon.svg';
import googleIcon from '../../assets/svg/google-icon.svg';

export default function Register() {
    const [isAuth, setAuth] = useAuth(); 

    function registerAccount(event){
        event.preventDefault();

        const datas = new FormData(event.target);
        const email = filterXSS(datas.get('email'));
        const pass = filterXSS(datas.get('pass'));

        validationForm(email, pass);
    }

    function validationForm(email, pass){
        const regExpEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/;
        const regExpPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#?!])[0-9a-zA-Z$*&@#?!]{8,}$/;

        if(regExpEmail.test(email) && regExpPass.test(pass)){
            alert('ok');
            setAuth(true); // Inserir o token aqui
            // Fazer o registro com Firebase e redirecionar para a plataforma
        } else {
            setAuth(false);
            alert("E-mail e senha inválidos");
        }
    }

    return (
        !isAuth ? (
            <>
                <Header />
                <TitleBigger style={{ marginTop: '48px' }}>Registrar-se</TitleBigger>
                <ContainerItemsRes>
                    <Form onSubmit={registerAccount}>
                        <FieldSet>
                            <Label htmlFor="email">E-mail</Label>
                            <Input 
                                type="email"
                                id="email"
                                name="email"
                                placeholder="E-mail"
                            />
                        </FieldSet>
                        <FieldSet>
                            <Label htmlFor="pass">Senha</Label>
                            <Input
                                id="pass"
                                name="pass"
                                type="password"
                                placeholder="Senha"
                            />
                        </FieldSet>
                        <Button type="submit">Registrar</Button>
                    </Form>
                    <BoxPlayerAnimation>
                        <Player
                            style={{ width: '100%', height: '280px' }}
                            loop
                            autoplay
                            src="https://assets8.lottiefiles.com/packages/lf20_jcikwtux.json"
                        />
                    </BoxPlayerAnimation>
                </ContainerItemsRes>
                <ContainerAuth>
                    <SubTitleAuth>Ou</SubTitleAuth>
                    <BtnAuthSocial>
                        <IconAuthImg
                            src={faceIcon}
                            alt="Ícone do Facebook provida pelo Font Awesome"
                        />
                    </BtnAuthSocial>
                    <BtnAuthSocial>
                        <IconAuthImg
                            src={googleIcon}
                            alt="Ícone do Google provida pelo Font Awesome"
                        />
                    </BtnAuthSocial>
                </ContainerAuth>
                <Footer />
            </>
        ) : (
            <Redirect to={{ pathname: '/dashboard'}} />
        )
    )
}
