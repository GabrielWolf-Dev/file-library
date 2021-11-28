import React from 'react';
import { filterXSS } from 'xss';
import { Player } from '@lottiefiles/react-lottie-player';
import { useAuth } from '../../hooks/useAuth';
import { Redirect } from 'react-router-dom';
import { auth } from '../../firebase';
import { useMsgError } from '../../hooks/useMsgError';

import Header from '../Header';
import Footer from '../Footer';

import { 
    ContainerForm,
    ContainerItemsRes,
    TitleBigger,
    SubTitleAuth,
    Input,
    Form,
    Button,
    BtnAuthSocial,
    ContentBtnAuth,
    IconAuthImg,
    BoxPlayerAnimation,
    FieldSet,
    Label,
    ErrorMsg
 } from '../UI';
import googleIcon from '../../assets/svg/google-icon.svg';

export default function Register() {
    const { isAuth, setIsAuth, googleAuth } = useAuth();
    const { isError, setIsError, msgError, setMsgError } = useMsgError();

    function registerAccount(event){
        event.preventDefault();
        const form = event.target;

        const datas = new FormData(form);
        const email = filterXSS(datas.get('email'));
        const pass = filterXSS(datas.get('pass'));

        const isEmptyInputs = email !== '' || pass !== '';

        if(validationForm(email, pass) && isEmptyInputs){
            alert('ok');

            setIsError(false);
            createAccount(email, pass, form);
        } else {
            setIsAuth({});
            setIsError(true);
            setMsgError("E-mail ou senha inválidos");
        }  
    }
 
    function createAccount(email, pass, form){
        auth.createUserWithEmailAndPassword(email, pass)
        .then((user) => {
            setIsAuth({
            name: user.displayName,
            email: user.email,
            img: user.photoURL,
            uid: user.uid,
          });

          form.reset();
        })
        .catch((error) => {
          console.error(error.code);
          console.log(error.message);
          
          setIsError(true);
          setMsgError("Houve uma falha no registro, por favor tente novamente");
        });
    }

    function validationForm(email, pass){
        const regExpEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?([a-z]+)?$/;
        const regExpPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#?!])[0-9a-zA-Z$*&@#?!]{8,}$/;

        return regExpEmail.test(email) && regExpPass.test(pass) ? true : false;
    }

    return (
        Object.keys(isAuth).length !== 0 ? (
            <Redirect to={{ pathname: '/dashboard'}} />
        ) : (
            <>
            {isError ? (<ErrorMsg>{msgError}</ErrorMsg>) : false}
                <Header />
                <TitleBigger style={{ marginTop: '48px' }}>Registrar-se</TitleBigger>
                <ContainerItemsRes>
                    <ContainerForm>
                        <Form onSubmit={registerAccount}>
                            <FieldSet>
                                <Label htmlFor="email">E-mail</Label>
                                <Input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="E-mail"
                                />
                            </FieldSet>
                            <FieldSet>
                                <Label htmlFor="pass">Senha</Label>
                                <Input
                                    required
                                    id="pass"
                                    name="pass"
                                    type="password"
                                    placeholder="Senha"
                                    title="Senha deve conter no mínimo 8 caracteres contendo letra maiúscula, minúscula, número e um caracter especial"
                                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#?!])[0-9a-zA-Z$*&@#?!]{8,}$"
                                />
                            </FieldSet>
                            <Button type="submit">Registrar</Button>
                        </Form>

                        <SubTitleAuth>Ou</SubTitleAuth>
                        <BtnAuthSocial onClick={googleAuth}>
                            <ContentBtnAuth>
                                Registrar-se com

                                <IconAuthImg
                                    src={googleIcon}
                                    alt="Ícone do Google provida pelo Font Awesome"
                                />
                            </ContentBtnAuth>
                        </BtnAuthSocial>
                    </ContainerForm>

                    <BoxPlayerAnimation>
                        <Player
                            style={{ width: '100%', height: '280px' }}
                            loop
                            autoplay
                            src="https://assets8.lottiefiles.com/packages/lf20_jcikwtux.json"
                        />
                    </BoxPlayerAnimation>
                </ContainerItemsRes>
                <Footer />
            </>
        )
    )
}
