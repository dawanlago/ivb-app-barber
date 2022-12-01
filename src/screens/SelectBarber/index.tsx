import {FlatList, View} from 'react-native';
import React from 'react';
import {Title} from '../../components/Title';

import {styles} from './styles';

import {ButtonBack} from '../../components/ButtonBack';

import {ButtonAction} from '../../components/ButtonAction';
import {CardBarber} from '../../components/CardBarber';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../routes/auth.routes';
import {useNavigation} from '@react-navigation/native';

const img = require('../../assets/image/igor.png');

type screenProp = NativeStackNavigationProp<
  RootStackParamsList,
  'SelectBarber'
>;

interface Barber {
  name: string;
  image: string;
  services: string;
  default: boolean;
}

export const SelectBarber = () => {
  const navigation = useNavigation<screenProp>();
  const barbers = [
    {
      id: 1,
      name: 'Igor Vieira',
      image: img,
      services: 'Barba e Cabelo',
      default: false,
    },
    {
      id: 2,
      name: 'Lucas',
      image: '',
      services: 'Barba e Cabelo',
      default: false,
    },
    {
      id: 3,
      name: 'Uanderson',
      image: '',
      services: 'Barba e Cabelo',
      default: false,
    },
    {
      id: 4,
      name: 'Escolha para mim',
      image: '',
      services: 'Barba e Cabelo',
      default: true,
    },
  ];
  function handleSelectTime() {
    navigation.navigate('SelectTime');
  }

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ButtonBack click={handleGoBack} />
      <View style={styles.header}>
        <Title
          title="A hora do profissional"
          subtitle="Escolha algum barbeiro ou qualquer um para fazer o serviço."
        />
      </View>

      <View style={styles.content}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={barbers}
          renderItem={({item}: {item: Barber}) => (
            <CardBarber barberDetails={item} />
          )}
        />
      </View>
      <ButtonAction
        titleButton="Continuar"
        price={100.0}
        click={handleSelectTime}
      />
    </View>
  );
};
