import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from '../screens/Login';
import {Home} from '../screens/Home';
import {CreateAccount} from '../screens/CreateAccount';
import {ServiceList} from '../screens/ServiceList';
import {SelectDay} from '../screens/SelectDay';
import {SelectBarber} from '../screens/SelectBarber';
import {SelectTime} from '../screens/SelectTime';
import {ScheduleConfirm} from '../screens/ScheduleConfirm';

const Stack = createNativeStackNavigator();

export type RootStackParamsList = {
  Login: undefined;
  Home: undefined;
  CreateAccount: undefined;
  ServiceList: undefined;
  SelectDay: undefined;
  SelectBarber: undefined;
  SelectTime: undefined;
  ScheduleConfirm: undefined;
};

const AuthRoutes: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{animation: 'slide_from_right'}}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScheduleConfirm"
          component={ScheduleConfirm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectTime"
          component={SelectTime}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectBarber"
          component={SelectBarber}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectDay"
          component={SelectDay}
          options={{headerShown: false}}
        />
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
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthRoutes;
