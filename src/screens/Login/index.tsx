import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Title} from '../../components/Title';

import {useUser} from '../../store/user';

import {styles} from './styles';
import {Input} from '../../components/Input';
import {ButtonPrimary} from '../../components/ButtonPrimary';
import {getServices} from '../../services/getServices';

const logo = require('../../assets/image/logo.png');

interface Service {
  name: string;
}

export const Login = () => {
  const [services, setServices] = useState<[]>([]);

  useEffect(() => {
    getServices().then(res => {
      setServices(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title title="Bem vindo" />
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.contentLogin}>
        <Input placeholderInput="Email" />
        <Input placeholderInput="Senha" />
        <ButtonPrimary titleButton="Entrar" />
        {services.map((service: Service, index) => (
          <View key={index}>
            <Text>{service.name}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity activeOpacity={0.95} style={styles.createAccount}>
        <Text style={styles.createAccountText}>Criar uma conta com email</Text>
      </TouchableOpacity>
    </View>
  );
};
