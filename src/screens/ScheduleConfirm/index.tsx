import {View} from 'react-native';
import React from 'react';
import {Title} from '../../components/Title';

import {styles} from './styles';

import {ButtonBack} from '../../components/ButtonBack';

import {ButtonAction} from '../../components/ButtonAction';
import {CardScheduleConfirm} from '../../components/CardScheduleConfirm';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../routes/auth.routes';
import {useNavigation} from '@react-navigation/native';

type screenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'ScheduleConfirm'
>;

export const ScheduleConfirm = () => {
  const navigation = useNavigation<screenProp>();
  const schedule = {
    barberShop: 'Igor Vieira Barbearia',
    address: 'Avenida Jardim Guanabara, 7',
    district: 'Boa Vista',
    cityState: 'Vitória da Conquista - BA',
    day: '02 de Dezembro de 2022',
    time: '15:30',
    services: 'Cabelo + Alinhamento',
    barber: 'Igor Vieira',
  };

  function handleHome() {
    navigation.navigate('Home');
  }

  function handleServiceList() {
    navigation.navigate('ServiceList');
  }

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ButtonBack click={handleGoBack} />
      <View style={styles.header}>
        <Title
          title="Agora é com você"
          subtitle="Basta conferir os dados e estando correto é só confirmar."
        />
      </View>

      <View style={styles.content}>
        <CardScheduleConfirm details={schedule} click={handleServiceList} />
      </View>
      <ButtonAction titleButton="Confirmar" price={100} click={handleHome} />
    </View>
  );
};
