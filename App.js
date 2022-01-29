import React from 'react';
import Routes from './src/routes/index';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {configureStore} from './src/store/Store';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Register2 from './src/screen/register2/Register2';
import {Colors} from './src/constant/theme';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Century Gothic',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Century Gothic',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Century Gothic',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Century Gothic',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Century Gothic',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Century Gothic',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Century Gothic',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Century Gothic',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'Century Gothic',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Century Gothic',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Century Gothic',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Century Gothic',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: Colors.secondary,
  },
  fonts: configureFonts(fontConfig),
};

const store = configureStore();

const App = () => {
  (async function getAppToken() {
    try {
      const url = 'https://apicore.fastcredit-ng.com/v1/fclapi/login';
      const payload = {
        Client_key: 'fcluser',
        Client_secret: 'f@3*c#4luser',
      };
      const response = await axios.post(url, payload);
      console.log('Data: ', response.data);
      await AsyncStorage.setItem('api_token', response.data.token);
    } catch (err) {
      console.log(err);
    }
  })();
  LogBox.ignoreAllLogs();
  return (
    <>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <Routes />
        </PaperProvider>
      </Provider>
    </>
  );
};

export default App;
