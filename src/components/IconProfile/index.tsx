import {Image, View} from 'react-native';
import React from 'react';

import {styles} from './styles';

const profile = require('../../assets/image/profile.jpg');

export const IconProfile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.profile} />
    </View>
  );
};
