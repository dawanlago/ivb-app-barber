import {Text, View} from 'react-native';
import React from 'react';

import {styles} from './styles';

interface Detail {
  description: string;
  time: string;
  price: number;
}

type Props = {
  details: Detail;
};
export const CardService: React.FC<Props> = ({details, ...rest}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{details.description}</Text>
      <View style={styles.contentDetails}>
        <Text style={styles.details}>{details.time}min</Text>
        <Text style={styles.details}>
          R$ {details.price.toFixed(2).toString().replace('.', ',')}
        </Text>
      </View>
    </View>
  );
};
