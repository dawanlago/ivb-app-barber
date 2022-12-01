import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {styles} from './styles';

type Props = {
  click: () => void;
};
export const ButtonBack: React.FC<Props> = ({click}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={click}>
      <Text style={styles.back}>Voltar</Text>
    </TouchableOpacity>
  );
};
