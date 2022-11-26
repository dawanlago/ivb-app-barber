import {View} from 'react-native';
import React from 'react';
import {Title} from '../../components/Title';

import {useUser} from '../../store/user';

import {styles} from './styles';

import Calendar from '../../components/Calendar';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title title="Agendamentos" />
      </View>
      <Calendar />
    </View>
  );
};
