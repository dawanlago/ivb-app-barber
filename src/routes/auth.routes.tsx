import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from '../screens/Login';
import {Home} from '../screens/Home';
import {CreateAccount} from '../screens/CreateAccount';
import {ServiceList} from '../screens/ServiceList';

const Stack = createNativeStackNavigator();

export type RootStackParamsList = {
  Login: undefined;
  Home: undefined;
  CreateAccount: undefined;
  ServiceList: undefined;
};

const AuthRoutes: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{animation: 'slide_from_right'}}>
        <Stack.Screen
          name="ServiceList"
          component={ServiceList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthRoutes;
