import {View, FlatList} from 'react-native';
import React from 'react';
import {Title} from '../../components/Title';

import {styles} from './styles';

import {ButtonBack} from '../../components/ButtonBack';

import {ButtonAction} from '../../components/ButtonAction';
import {CardTime} from '../../components/CardTime';

interface Detail {
  id: number;
  time: string;
  selected: boolean;
}

export const SelectTime = () => {
  const schedules = [
    {
      id: 1,
      time: '08:30',
      selected: false,
    },
    {
      id: 2,
      time: '09:00',
      selected: false,
    },
    {
      id: 3,
      time: '09:30',
      selected: false,
    },
    {
      id: 4,
      time: '10:30',
      selected: false,
    },
    {
      id: 5,
      time: '11:30',
      selected: false,
    },
    {
      id: 6,
      time: '12:00',
      selected: false,
    },
    {
      id: 7,
      time: '14:00',
      selected: false,
    },
    {
      id: 9,
      time: '15:30',
      selected: false,
    },
    {
      id: 10,
      time: '16:00',
      selected: false,
    },
    {
      id: 11,
      time: '18:00',
      selected: false,
    },
    {
      id: 12,
      time: '19:30',
      selected: false,
    },
  ];

  return (
    <View style={styles.container}>
      <ButtonBack />
      <View style={styles.header}>
        <Title
          title="Vamos agendar?"
          subtitle="Informe o dia que você quer agendar."
        />
      </View>

      <View style={styles.content}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={schedules}
          renderItem={({item}: {item: Detail}) => (
            <CardTime details={item} click={() => {}} />
          )}
        />
      </View>
      <ButtonAction titleButton="Continuar" price={100} />
    </View>
  );
};
