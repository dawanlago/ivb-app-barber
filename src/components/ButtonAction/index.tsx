import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';

import {styles} from './styles';

type Props = TouchableOpacityProps & {
  titleButton: string;
  price?: number;
};
export const ButtonAction: React.FC<Props> = ({
  titleButton,
  price,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.button}>
      <View style={styles.containerEmpty} />
      <View style={styles.containerButton}>
        <Text style={styles.textButton}>{titleButton}</Text>
      </View>
      <View style={styles.containerPrice}>
        <Text style={styles.textButton}>
          R$ {price?.toFixed(2).toString().replace('.', ',')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
