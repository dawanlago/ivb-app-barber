import {View} from 'react-native';
import React from 'react';
import {Title} from '../../components/Title';

import {styles} from './styles';

import {ButtonBack} from '../../components/ButtonBack';

import Calendar from '../../components/Calendar';
import {ButtonAction} from '../../components/ButtonAction';

export const SelectDay = () => {
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
        <Calendar />
      </View>
      <ButtonAction titleButton="Continuar" price={100.0} />
    </View>
  );
};
