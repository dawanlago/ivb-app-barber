import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {styles} from './styles';
const logoGmail = require('../../assets/image/google_icon.png');

export const ButtonGmail: React.FC = () => {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.button}>
      <Image source={logoGmail} style={styles.imgGmail} />
    </TouchableOpacity>
  );
};
