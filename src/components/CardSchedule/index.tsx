import {Text, View} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import {styles} from './styles';

interface Detail {
  barber: string;
  service: string;
  price: number;
  time: string;
  day: string;
}

type Props = {
  details: Detail;
};
export const CardSchedule: React.FC<Props> = ({details, ...rest}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentSchedule}>
        <Text style={styles.dateTimeSchedule}>{details.time}</Text>
        <Text style={styles.dateTimeSchedule}>{details.day}</Text>
      </View>
      <View style={styles.contentDetails}>
        <Text style={styles.barber}>{details.barber}</Text>
        <Text style={styles.details}>{details.service}</Text>
        <Text style={styles.details}>
          R$ {details.price.toFixed(2).toString().replace('.', ',')}
        </Text>
      </View>
    </View>
  );
};
