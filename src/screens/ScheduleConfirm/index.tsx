import {View} from 'react-native';
import React from 'react';
import {Title} from '../../components/Title';

import {styles} from './styles';

import {ButtonBack} from '../../components/ButtonBack';

import {ButtonAction} from '../../components/ButtonAction';
import {CardScheduleConfirm} from '../../components/CardScheduleConfirm';

export const ScheduleConfirm = () => {
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
  return (
    <View style={styles.container}>
      <ButtonBack />
      <View style={styles.header}>
        <Title
          title="Agora é com você"
          subtitle="Basta conferir os dados e estando correto é só confirmar."
        />
      </View>

      <View style={styles.content}>
        <CardScheduleConfirm details={schedule} />
      </View>
      <ButtonAction titleButton="Confirmar" price={100} />
    </View>
  );
};
