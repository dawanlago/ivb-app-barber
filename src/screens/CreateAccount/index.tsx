import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Title} from '../../components/Title';

import {styles} from './styles';
import {Input} from '../../components/Input';

import {getServices} from '../../services/getServices';

import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../../global/styles';
import {ButtonAction} from '../../components/ButtonAction';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../routes/auth.routes';
import {useNavigation} from '@react-navigation/native';

interface IService {
  name: string;
  price: number;
  time: number;
}
type screenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'CreateAccount'
>;
export const CreateAccount = () => {
  const [services, setServices] = useState<IService[]>([]);
  const navigation = useNavigation<screenProp>();
  useEffect(() => {
    getServices().then(res => {
      setServices(res);
    });
  }, [services]);

  function handleLogin() {
    navigation.navigate('Login');
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.header}>
        <Title
          title="Preencha seu cadastro"
          subtitle="Preencha os dados necessários para criar a sua conta."
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentForm}>
          <View style={styles.contentImage}>
            <Icon name="user" color={colors.darkOpacity80} size={50} />
            <Text style={styles.textImage}>Clique para alterar</Text>
          </View>
          <Input titleInput="Nome completo" placeholderInput="" />
          <Input
            titleInput="Como prefere ser chamado? (opcional)"
            placeholderInput=""
          />
          <Input titleInput="Email" placeholderInput="" />
          <Input titleInput="Telefone" placeholderInput="" />
          <Input titleInput="Senha" placeholderInput="" />
          <Input titleInput="Repetir a senha" placeholderInput="" />
        </View>
      </ScrollView>
      <ButtonAction titleButton="Cadastrar" click={handleLogin} />
    </KeyboardAvoidingView>
  );
};
