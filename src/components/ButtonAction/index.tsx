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
  click: () => void;
};
export const ButtonAction: React.FC<Props> = ({
  titleButton,
  price,
  click,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.button}
      onPress={click}>
      {!!price && <View style={styles.containerEmpty} />}
      <View
        style={price ? styles.containerButton : styles.containerButtonNotPrice}>
        <Text style={styles.textButton}>{titleButton}</Text>
      </View>
      {!!price && (
        <View style={styles.containerPrice}>
          <Text style={styles.textButton}>
            R$ {price?.toFixed(2).toString().replace('.', ',')}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
