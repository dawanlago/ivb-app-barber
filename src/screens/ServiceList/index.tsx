import {View, FlatList} from 'react-native';
import React from 'react';
import {Title} from '../../components/Title';

import {styles} from './styles';

import {ButtonBack} from '../../components/ButtonBack';
import {CardService} from '../../components/CardService';

interface Detail {
  description: string;
  price: number;
  time: string;
}

export const ServiceList = () => {
  const services = [
    {
      id: 1,
      description: 'Cabelo',
      price: 30.0,
      time: '30',
    },
    {
      id: 2,
      description: 'Barba',
      price: 25.0,
      time: '20',
    },
    {
      id: 3,
      description: 'Cabelo + Barba',
      price: 50.0,
      time: '50',
    },
  ];

  return (
    <View style={styles.container}>
      <ButtonBack />
      <View style={styles.header}>
        <Title
          title="O que pretende fazer?"
          subtitle="Escolha agora qual serviço quer fazer."
        />
      </View>

      <View style={styles.content}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={services}
          renderItem={({item}: {item: Detail}) => (
            <CardService details={item} />
          )}
        />
      </View>
    </View>
  );
};
