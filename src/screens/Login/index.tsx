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
import {Divisor} from '../../components/Divisor';
import {ButtonGmail} from '../../components/ButtonGmail';
import {ButtonFacebook} from '../../components/ButtonFacebook';

const logo = require('../../assets/image/logo.png');

interface IService {
  name: string;
  price: number;
  time: number;
}

export const Login = () => {
  const [services, setServices] = useState<IService[]>([]);

  useEffect(() => {
    getServices().then(res => {
      setServices(res);
    });
  }, []);

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
          <Input placeholderInput="Senha" />
          <ButtonPrimary titleButton="Entrar" />
          <Divisor titleDivisor="ou" />
          <ButtonGmail titleButton="Entrar com gmail" />
          <ButtonFacebook titleButton="Entrar com facebook" />
        </View>
        <TouchableOpacity activeOpacity={0.95} style={styles.createAccount}>
          <Text style={styles.createAccountText}>
            Criar uma conta com email
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
