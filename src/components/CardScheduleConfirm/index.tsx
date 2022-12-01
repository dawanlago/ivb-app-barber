import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {styles} from './styles';

interface Detail {
  barberShop: string;
  address: string;
  district: string;
  cityState: string;
  day: string;
  time: string;
  services: string;
  barber: string;
}

type Props = {
  details: Detail;
};
export const CardScheduleConfirm: React.FC<Props> = ({
  details,
  ...rest
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerDetails}>
        <Text style={styles.title}>Local: </Text>
        <Text style={styles.info}>{details.barberShop}</Text>
      </View>
      <View style={styles.containerDetails}>
        <Text style={styles.title}>Endereço: </Text>
        <Text style={styles.info}>{details.address}</Text>
      </View>
      <View style={styles.containerDetails}>
        <Text>Bairro: </Text>
        <Text>{details.district}</Text>
      </View>
      <View style={styles.containerDetails}>
        <Text style={styles.title}>Cidade/UF: </Text>
        <Text style={styles.info}>{details.cityState}</Text>
      </View>
      <View style={styles.containerDetails}>
        <Text style={styles.title}>Dia: </Text>
        <Text style={styles.info}>{details.day}</Text>
      </View>
      <View style={styles.containerDetails}>
        <Text style={styles.title}>Hora: </Text>
        <Text style={styles.info}>{details.time}</Text>
      </View>
      <View style={styles.containerDetails}>
        <Text style={styles.title}>Serviços: </Text>
        <Text style={styles.info}>{details.services}</Text>
      </View>
      <View style={styles.containerDetails}>
        <Text style={styles.title}>Barbeiro: </Text>
        <Text style={styles.info}>{details.barber}</Text>
      </View>
      <TouchableOpacity style={styles.containerButton}>
        <Text style={styles.button}>
          Clique aqui para alterar o agendamento
        </Text>
      </TouchableOpacity>
    </View>
  );
};
