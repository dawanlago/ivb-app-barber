import {View} from 'react-native';
import React from 'react';
import {Title} from '../../components/Title';

import {styles} from './styles';

import {ButtonBack} from '../../components/ButtonBack';

import Calendar from '../../components/Calendar';
import {ButtonAction} from '../../components/ButtonAction';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../routes/auth.routes';
import {useNavigation} from '@react-navigation/native';

type screenProp = NativeStackNavigationProp<RootStackParamsList, 'SelectDay'>;

export const SelectDay = () => {
  const navigation = useNavigation<screenProp>();

  function handleSelectBarber() {
    navigation.navigate('SelectBarber');
  }

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ButtonBack click={handleGoBack} />
      <View style={styles.header}>
        <Title
          title="Vamos agendar?"
          subtitle="Informe o dia que você quer agendar."
        />
      </View>

      <View style={styles.content}>
        <Calendar />
      </View>
      <ButtonAction
        titleButton="Continuar"
        price={100.0}
        click={handleSelectBarber}
      />
    </View>
  );
};
