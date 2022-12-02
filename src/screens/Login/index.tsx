import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Title} from '../../components/Title';

import {styles} from './styles';
import {Input} from '../../components/Input';
import {ButtonPrimary} from '../../components/ButtonPrimary';
import {getServices} from '../../services/getServices';

import {ButtonGmail} from '../../components/ButtonGmail';
import {ButtonFacebook} from '../../components/ButtonFacebook';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../routes/auth.routes';
import {useNavigation} from '@react-navigation/native';

const logo = require('../../assets/image/logo.png');

interface IService {
  name: string;
  price: number;
  time: number;
}

type screenProp = NativeStackNavigationProp<RootStackParamsList, 'Login'>;
export const Login = () => {
  const navigation = useNavigation<screenProp>();
  const [services, setServices] = useState<IService[]>([]);

  useEffect(() => {
    getServices().then(res => {
      setServices(res);
    });
  }, []);

  function handleHome() {
    navigation.navigate('Home');
  }

  function handleCreateAccount() {
    navigation.navigate('CreateAccount');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View>
        <View style={styles.header}>
          <Title title="Bem vindo" />
          <Image source={logo} style={styles.logo} />
        </View>

        <View style={styles.contentLogin}>
          <Input placeholderInput="Email" />
          <Input placeholderInput="Senha" secureTextEntry={true} />
          <ButtonPrimary titleButton="Entrar" click={handleHome} />
          <View style={styles.socialLogin}>
            <ButtonGmail />
            <ButtonFacebook />
          </View>
        </View>
        <View style={styles.containerCreateAccount}>
          <TouchableOpacity
            activeOpacity={0.95}
            style={styles.createAccount}
            onPress={handleCreateAccount}>
            <Text style={styles.createAccountText}>
              Criar uma conta com email
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
