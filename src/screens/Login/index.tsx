import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {Title} from '../../components/Title';

import {useToast} from 'react-native-toast-notifications';

import {ButtonPrimary} from '../../components/ButtonPrimary';
import {ButtonGmail} from '../../components/ButtonGmail';
import {ButtonFacebook} from '../../components/ButtonFacebook';
import {Input} from '../../components/Input';

import {styles} from './styles';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../routes/auth.routes';
import {useNavigation} from '@react-navigation/native';

import IService from '../../models/Service';

import {useUser} from '../../store/user';
import {loginService} from '../../services/loginService';

const logo = require('../../assets/image/logo.png');

type screenProp = NativeStackNavigationProp<RootStackParamsList, 'Login'>;
export const Login = () => {
  const navigation = useNavigation<screenProp>();

  const {userSelected, setUserSelected} = useUser();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const toast = useToast();
  // useEffect(() => {
  //   getServices().then(res => {
  //     setServices(res);
  //   });
  // }, []);

  // useEffect(() => {
  //   setEmail(userSelected.email);
  // }, [userSelected]);

  const loginFailed = (message: string) => {
    toast.show(message, {
      type: 'danger',
      placement: 'top',
      duration: 5000,
      animationType: 'slide-in',
    });
  };

  function handleLogin() {
    loginService(email, password).then(res => {
      if (!res.success) {
        loginFailed(String(res.message));
        return;
      }
      setUserSelected({...userSelected, email: email});
      navigation.navigate('Home');
    });
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
          <Input
            titleInput="Email"
            keyboardType="email-address"
            placeholderInput="Email"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            titleInput="Senha"
            placeholderInput="Senha"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            activeOpacity={0.95}
            style={styles.recoverPassword}
            onPress={handleCreateAccount}>
            <Text style={styles.textLink}>Esqueceu a sua senha?</Text>
          </TouchableOpacity>
          <ButtonPrimary titleButton="Entrar" click={handleLogin} />
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
            <Text style={styles.textLink}>Criar uma conta com email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
