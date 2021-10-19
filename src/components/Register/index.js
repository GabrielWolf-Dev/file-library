import React from 'react';
import { filterXSS } from 'xss';
import { Player } from '@lottiefiles/react-lottie-player';
import { useAuth } from '../../hooks/useAuth';
import { Redirect } from 'react-router-dom';
import { auth } from '../../firebase';

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
    Label
 } from '../UI';
import googleIcon from '../../assets/svg/google-icon.svg';

export default function Register() {
    const [isAuth, setIsAuth] = useAuth();

    function registerAccount(event){
        event.preventDefault();
        const form = event.target;

        const datas = new FormData(form);
        const email = filterXSS(datas.get('email'));
        const pass = filterXSS(datas.get('pass'));

        const isEmptyInputs = email !== '' || pass !== '';

        if(validationForm(email, pass) && isEmptyInputs){
            alert('ok');
            createAccount(email, pass, form);
        } else {
            setIsAuth({});
            alert("E-mail e senha inválidos");
        }  
    }
 
    function createAccount(email, pass, form){
        auth.createUserWithEmailAndPassword(email, pass)
        .then((user) => {
            setIsAuth({
            name: user.displayName,
            email: user.email,
            img: user.photoURL,
            uid: user.uid
          });

          form.reset();
        })
        .catch((error) => {
          console.error(error.code);
          console.log(error.message);
          // Printar mensagem de erro
          alert("Erro ao registrar-se");
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
                                />
                            </FieldSet>
                            <Button type="submit">Registrar</Button>
                        </Form>

                        <SubTitleAuth>Ou</SubTitleAuth>
                        <BtnAuthSocial>
                            <ContentBtnAuth>
                                Fazer login com

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
