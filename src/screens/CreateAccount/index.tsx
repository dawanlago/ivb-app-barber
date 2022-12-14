import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Title} from '../../components/Title';
import {ButtonAction} from '../../components/ButtonAction';
import {Input} from '../../components/Input';
import {InputMask} from '../../components/InputMask';

import {useToast} from 'react-native-toast-notifications';
import Icon from 'react-native-vector-icons/Feather';

import {styles} from './styles';
import {colors} from '../../global/styles';

import {MASK_PHONE} from '../../global/constants';

import {createUserService} from '../../services/createUserService';

import {useUser} from '../../store/user';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../routes/auth.routes';
import {useNavigation} from '@react-navigation/native';

type screenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'CreateAccount'
>;
export const CreateAccount = () => {
  const {userSelected, setUserSelected} = useUser();
  const [name, setName] = useState<string>('');
  const [shortName, setShortName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');
  const [passwordEqual, setPasswordEqual] = useState<boolean>(true);

  const navigation = useNavigation<screenProp>();
  const toast = useToast();

  useEffect(() => {
    if (passwordRepeat !== password && passwordRepeat.length > 0) {
      setPasswordEqual(false);
    } else {
      setPasswordEqual(true);
    }
  }, [passwordRepeat, password]);

  function validCreateAccount() {
    if (
      name === '' ||
      email === '' ||
      phone === '' ||
      password === '' ||
      passwordRepeat === ''
    ) {
      toast.show('Preencha todos os campos obrigatórios!', {
        type: 'danger',
        placement: 'top',
        duration: 5000,
        animationType: 'slide-in',
      });
      return false;
    }
    if (password !== passwordRepeat) {
      toast.show('As senhas não são iguais!', {
        type: 'danger',
        placement: 'top',
        duration: 5000,
        animationType: 'slide-in',
      });
      return false;
    }
    return true;
  }

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
    if (!validCreateAccount()) {
      return;
    }
    createUserService({name, shortName, email, phone, password}).then(res => {
      if (!res.success) {
        createAccountFailed(String(res.message));
        return;
      }
      setUserSelected({...userSelected, email: email});
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
            keyboardType="email-address"
            placeholderInput=""
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <InputMask
            titleInput="Telefone"
            keyboardType="numeric"
            placeholderInput=""
            value={phone}
            onChangeText={(masked: string) => {
              setPhone(masked);
            }}
            mask={MASK_PHONE}
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
            isPassword={true}
            passwordEqual={passwordEqual}
            value={passwordRepeat}
            onChangeText={setPasswordRepeat}
          />
        </View>
      </ScrollView>
      <ButtonAction titleButton="Cadastrar" click={handleCreateUser} />
    </KeyboardAvoidingView>
  );
};
