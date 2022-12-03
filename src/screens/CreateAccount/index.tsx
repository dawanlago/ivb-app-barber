import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Title} from '../../components/Title';

import {useToast} from 'react-native-toast-notifications';

import {styles} from './styles';
import {Input} from '../../components/Input';

import {getServices} from '../../services/getServices';

import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../../global/styles';
import {ButtonAction} from '../../components/ButtonAction';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../routes/auth.routes';
import {useNavigation} from '@react-navigation/native';
import {createUser} from '../../services/createUser';

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
  const [name, setName] = useState<string>('');
  const [shortName, setShortName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');

  const navigation = useNavigation<screenProp>();
  const toast = useToast();

  useEffect(() => {
    getServices().then(res => {
      setServices(res);
    });
  }, [services]);

  function createAccountFailed(message: string) {
    toast.show(message, {
      type: 'warning',
      placement: 'top',
      duration: 5000,
      animationType: 'slide-in',
    });
  }

  function createAccountSuccess(shortName: string) {
    toast.show(
      `Pronto${
        shortName.length > 0 ? ', ' + shortName : ''
      }! Confirme a sua conta usando o link que enviamos para o seu email.`,
      {
        type: 'success',
        placement: 'top',
        duration: 5000,
        animationType: 'slide-in',
      },
    );
    handleLogin();
  }

  function handleCreateUser() {
    createUser({name, shortName, email, phone, password}).then(res => {
      if (!res.success) {
        createAccountFailed(res.message);
        return;
      }
      createAccountSuccess(shortName);
    });
  }

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
          <Input
            titleInput="Nome completo"
            placeholderInput=""
            value={name}
            onChangeText={setName}
          />
          <Input
            titleInput="Como prefere ser chamado? (opcional)"
            placeholderInput=""
            value={shortName}
            onChangeText={setShortName}
          />
          <Input
            titleInput="Email"
            placeholderInput=""
            value={email}
            onChangeText={setEmail}
          />
          <Input
            titleInput="Telefone"
            placeholderInput=""
            value={phone}
            onChangeText={setPhone}
          />
          <Input
            titleInput="Senha"
            placeholderInput=""
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
          />
          <Input
            titleInput="Repetir a senha"
            placeholderInput=""
            secureTextEntry={true}
            value={passwordRepeat}
            onChangeText={setPasswordRepeat}
          />
        </View>
      </ScrollView>
      <ButtonAction titleButton="Cadastrar" click={handleCreateUser} />
    </KeyboardAvoidingView>
  );
};
