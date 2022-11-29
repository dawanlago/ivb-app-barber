import React from 'react';
import {LogBox, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';

import {Routes} from './routes';

import {colors} from './global/styles';
import {UserProvider} from './store/user';

LogBox.ignoreLogs([
  'AsyncStorage has been extracted from react-native core and will be removed in a future',
]);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});
