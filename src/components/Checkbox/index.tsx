import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import {styles} from './styles';
import {colors} from '../../global/styles';

type Props = TouchableOpacityProps & {
  click: () => void;
  titleCheckbox: string;
  iconName?: string;
};
export const Checkbox: React.FC<Props> = ({
  click,
  titleCheckbox,
  iconName = 'square',
  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      onPress={click}
      activeOpacity={0.85}
      style={styles.checkbox}>
      <Icon
        name={iconName}
        size={24}
        color={colors.textDark10}
        style={styles.icon}
      />
      <Text style={styles.textCheckbox}>{titleCheckbox}</Text>
    </TouchableOpacity>
  );
};
