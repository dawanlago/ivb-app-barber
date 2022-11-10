import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Title } from '../../components/Title';

import { useUser } from '../../store/user';

import { styles } from './styles';
import { Input } from '../../components/Input';
import { ButtonPrimary } from '../../components/ButtonPrimary';

const logo = require('../../assets/image/logo.png');

export default function Login() {
  const { user } = useUser();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title title="Bem vindo" />
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.contentLogin}>
        <Input placeholderInput="Email" value={user.name} />
        <Input placeholderInput="Senha" value={user.password} />
        <ButtonPrimary titleButton="Entrar" />
      </View>
      <TouchableOpacity activeOpacity={0.95} style={styles.createAccount}>
        <Text style={styles.createAccountText}>Criar uma conta com email</Text>
      </TouchableOpacity>
    </View>
  );
}
