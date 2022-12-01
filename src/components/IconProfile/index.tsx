import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {styles} from './styles';

const profile = require('../../assets/image/profile.jpg');

type Props = {
  click: () => void;
};

export const IconProfile: React.FC<Props> = ({click}: Props) => {
  return (
    <TouchableOpacity
      onPress={click}
      activeOpacity={1}
      style={styles.container}>
      <Image source={profile} style={styles.profile} />
    </TouchableOpacity>
  );
};
