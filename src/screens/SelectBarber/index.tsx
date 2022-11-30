import {FlatList, View} from 'react-native';
import React from 'react';
import {Title} from '../../components/Title';

import {styles} from './styles';

import {ButtonBack} from '../../components/ButtonBack';

import {ButtonAction} from '../../components/ButtonAction';
import {CardBarber} from '../../components/CardBarber';

const img = require('../../assets/image/igor.png');

interface Barber {
  name: string;
  image: string;
  services: string;
}

export const SelectBarber = () => {
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
  return (
    <View style={styles.container}>
      <ButtonBack />
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
      <ButtonAction titleButton="Continuar" price={100.0} />
    </View>
  );
};
