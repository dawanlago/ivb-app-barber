import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {styles} from './styles';

const logoGmail = require('../../assets/image/facebook_icon.png');

export const ButtonFacebook: React.FC = () => {
  return (
    <TouchableOpacity activeOpacity={0.85}>
      <Image source={logoGmail} style={styles.imgFacebook} />
    </TouchableOpacity>
  );
};
