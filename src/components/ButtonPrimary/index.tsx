import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React from 'react';

import {styles} from './styles';

type Props = TouchableOpacityProps & {
  titleButton: string;
};
export const ButtonPrimary: React.FC<Props> = ({
  titleButton,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.button}>
      <Text style={styles.textButton}>{titleButton}</Text>
    </TouchableOpacity>
  );
};
