import React, { useState, useContext } from 'react';
import {MessageBox} from "../../components/styles";
import {Container, LogoContainer, AppTitle, GoogleLoginButton, ButtonText} from './styles';
import { Ionicons } from '@expo/vector-icons';
import * as Google from 'expo-google-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredencialContext } from '../../components/CredencialContext';

const Login = ({ navigation }) => {
  const [mensagem, setMensagem] = useState();
  const [tipoMensagem, setTipoMensagem] = useState();

  const {credenciais, setCredenciais} = useContext(CredencialContext);

  const handleMessage = (mensagem, tipo = '') => {
    setMensagem(mensagem);
    setTipoMensagem(tipo);
  };

  const handleGoogleLogin = () => {
    const config = {
      iosClientId: `397692547120-t1bmjrjesrubtl9tcstptlos8kvbbabe.apps.googleusercontent.com`,
      androidClientId: `397692547120-ojatg5sf1e349hl1ph8kgl6q4etmr01h.apps.googleusercontent.com`,
      scopes: ['profile', 'email', 'https://www.googleapis.com/auth/books']
    };

    Google.logInAsync(config)
      .then((result) => {
        const { accessToken, type, user } = result;
        if (type == 'success') {
          const { email, name, photoUrl } = user;
          persisteLogin({ accessToken, email, name, photoUrl });
        } else {
          handleMessage('Não foi possível fazer login no Google');
        }
      })
      .catch((error) => {
        handleMessage('Ocorreu algum erro. Tente novamente mais tarde');
        console.log(error);
      });
  };

  const persisteLogin = (userCredential) => {
    AsyncStorage.setItem('LorenzonBookCredencial', JSON.stringify(userCredential))
      .then(() => {
        setCredenciais(userCredential);
      })
      .catch((error) => {
        handleMessage('Erro ao gravar login');
        console.log(error);
      });
  };

  return (
    <Container>
      <LogoContainer>
        <Ionicons name="md-library" size={100} color="white" />
        <AppTitle>Lorenzon Books App</AppTitle>
      </LogoContainer>
      <GoogleLoginButton onPress={handleGoogleLogin}>
        <Ionicons name="logo-google" size={25} color="white" />
        <ButtonText>Login com Google</ButtonText>
      </GoogleLoginButton>
      <MessageBox tipo={tipoMensagem}>{mensagem}</MessageBox>
    </Container>
  );
};

export default Login;
