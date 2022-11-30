import {Text, View} from 'react-native';
import React from 'react';

import {styles} from './styles';

export const ButtonBack: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.back}>Voltar</Text>
    </View>
  );
};
