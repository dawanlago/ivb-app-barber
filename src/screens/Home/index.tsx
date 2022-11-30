import {View, FlatList, Text} from 'react-native';
import React, {useState} from 'react';
import {Title} from '../../components/Title';

import {styles} from './styles';
import {Checkbox} from '../../components/Checkbox';

import {CardSchedule} from '../../components/CardSchedule';
import {ButtonAction} from '../../components/ButtonAction';
import {IconProfile} from '../../components/IconProfile';

interface Detail {
  barber: string;
  service: string;
  price: number;
  time: string;
  day: string;
}

export const Home = () => {
  const [emptySchedule, setEmptySchedule] = useState<boolean>(true);
  const schedule = [
    {
      id: 1,
      barber: 'Igor Vieira',
      service: 'Cabelo + alinhamento',
      price: 100.0,
      time: '09:30',
      day: '28/11/22',
    },
    {
      id: 2,
      barber: 'Igor Vieira',
      service: 'Cabelo',
      price: 30.0,
      time: '09:30',
      day: '10/11/22',
    },
    {
      id: 3,
      barber: 'Igor Vieira',
      service: 'Cabelo + alinhamento',
      price: 100.0,
      time: '17:30',
      day: '25/10/22',
    },
    {
      id: 4,
      barber: 'Igor Vieira',
      service: 'Cabelo',
      price: 30.0,
      time: '15:00',
      day: '13/10/22',
    },
    {
      id: 5,
      barber: 'Igor Vieira',
      service: 'Cabelo',
      price: 30.0,
      time: '09:00',
      day: '23/09/22',
    },
    {
      id: 6,
      barber: 'Igor Vieira',
      service: 'Cabelo',
      price: 30.0,
      time: '09:00',
      day: '23/09/22',
    },
    {
      id: 7,
      barber: 'Igor Vieira',
      service: 'Cabelo',
      price: 30.0,
      time: '09:00',
      day: '23/09/22',
    },
    {
      id: 8,
      barber: 'Igor Vieira',
      service: 'Cabelo',
      price: 30.0,
      time: '09:00',
      day: '23/09/22',
    },
    {
      id: 9,
      barber: 'Igor Vieira',
      service: 'Cabelo',
      price: 30.0,
      time: '09:00',
      day: '23/09/22',
    },
    {
      id: 10,
      barber: 'Igor Vieira',
      service: 'Cabelo',
      price: 30.0,
      time: '09:00',
      day: '23/09/22',
    },
  ];

  function handleShowAllShedule() {
    setEmptySchedule(!emptySchedule);
  }

  return (
    <View style={styles.container}>
      <IconProfile />
      <View style={styles.header}>
        <Title
          title="Agendamentos"
          subtitle="Abaixo estão os seus agendamentos."
        />
      </View>
      <Checkbox
        click={handleShowAllShedule}
        iconName={emptySchedule ? 'square' : 'check-square'}
        titleCheckbox="Mostrar agendamentos efetuados"
      />
      <View
        style={emptySchedule ? styles.contentEmptySchedule : styles.content}>
        {emptySchedule ? (
          <Text style={styles.emptySchedule}>Nenhum agendamento em aberto</Text>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={schedule}
            renderItem={({item}: {item: Detail}) => (
              <CardSchedule details={item} />
            )}
          />
        )}
      </View>
      <ButtonAction titleButton="Iniciar agendamento" />
    </View>
  );
};
