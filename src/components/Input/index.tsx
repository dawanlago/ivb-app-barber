import {View, Text, TextInput, TextInputProps} from 'react-native';
import React from 'react';

import {styles} from './styles';
import {colors} from '../../global/styles';

type Props = TextInputProps & {
  titleInput?: string;
  value?: string;
  isPassword?: boolean;
  passwordEqual?: boolean;
  placeholderInput: string;
};
export const Input: React.FC<Props> = ({
  titleInput = '',
  value,
  isPassword,
  passwordEqual,
  placeholderInput,

  ...rest
}: Props) => {
  return (
    <View style={styles.container}>
      {titleInput.length > 0 && (
        <View style={styles.containerTitle}>
          <Text style={styles.titleInput}>{titleInput}</Text>
          {isPassword && !passwordEqual && (
            <Text style={styles.passwordNotEqual}>As senhas não coincidem</Text>
          )}
        </View>
      )}
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholderInput}
        placeholderTextColor={colors.darkOpacity}
        {...rest}
      />
    </View>
  );
};
