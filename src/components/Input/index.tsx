import {View, Text, TextInput, TextInputProps} from 'react-native';
import React from 'react';

import {styles} from './styles';
import {colors} from '../../global/styles';

type Props = TextInputProps & {
  titleInput?: string;
  value?: string;
  placeholderInput: string;
};
export const Input: React.FC<Props> = ({
  titleInput,
  value,
  placeholderInput,
  ...rest
}: Props) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholderInput}
      placeholderTextColor={colors.darkOpacity}
    />
  );
};
