import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import { Routes } from './routes';

import { colors } from './global/styles';
import { UserProvider } from './store/user';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.light }}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <UserProvider>
        <Routes />
      </UserProvider>
    </SafeAreaView>
  );
}
