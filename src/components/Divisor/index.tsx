import {Text, View} from 'react-native';
import React from 'react';

import {styles} from './styles';

type Props = {
  titleDivisor: string;
};
export const Divisor: React.FC<Props> = ({titleDivisor}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.textDivisor}>{titleDivisor}</Text>
      <View style={styles.line} />
    </View>
  );
};
