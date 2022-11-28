import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';

import {styles} from './styles';
const logoGmail = require('../../assets/image/google_icon.png');

type Props = TouchableOpacityProps & {
  titleButton: string;
};
export const ButtonGmail: React.FC<Props> = ({titleButton}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.button}>
      <View style={styles.containerLogo}>
        <Image source={logoGmail} />
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.textButton}>{titleButton}</Text>
      </View>
    </TouchableOpacity>
  );
};
