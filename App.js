import React, { useState } from 'react';
import Routes from './navigators/Routes';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredencialContext } from './components/CredencialContext';

export default function App() {
  const [appPronto, setAppPronto] = useState(false);
  const [credenciais, setCredenciais] = useState("");

  const checkCredenciais = () => {
    AsyncStorage.getItem('LorenzonBookCredencial')
      .then((result) => {
        if (result !== null) {
          setCredenciais(JSON.parse(result));
        } else {
          setCredenciais(null);
        }
      })
      .catch((error) => console.log(error));
  };

  if (!appPronto) {
    return <AppLoading startAsync={checkCredenciais} onFinish={() => setAppPronto(true)} onError={console.warn} />;
  }

  return (
    <CredencialContext.Provider value={{ credenciais, setCredenciais }}>
      <Routes />
    </CredencialContext.Provider>
  );
}
