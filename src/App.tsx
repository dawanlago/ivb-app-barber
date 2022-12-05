import React from 'react';
import {LogBox, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';

import {ToastProvider} from 'react-native-toast-notifications';

import {Routes} from './routes';

import {colors} from './global/styles';

LogBox.ignoreLogs([
  'AsyncStorage has been extracted from react-native core and will be removed in a future',
]);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ToastProvider offsetTop={50} style={styles.toast}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent={true}
        />
        <Routes />
      </ToastProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  toast: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
});
