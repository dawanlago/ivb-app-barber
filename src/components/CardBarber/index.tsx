import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import {styles} from './styles';
import {colors} from '../../global/styles';

interface Detail {
  name: string;
  image: string;
  services: string;
  default: boolean;
}

const img = require('../../assets/image/igor.png');

type Props = {
  barberDetails: Detail;
  click?: () => void;
};
export const CardBarber: React.FC<Props> = ({
  barberDetails,
  click,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      onPress={click}
      style={styles.container}
      activeOpacity={0.85}>
      {!barberDetails.image ? (
        !barberDetails.default && (
          <Icon name="user" size={90} color={colors.darkOpacity20} />
        )
      ) : (
        <Image source={img} style={styles.imageBarber} />
      )}
      <View
        style={
          !barberDetails.default
            ? styles.containerDetails
            : styles.containerDetailsDefault
        }>
        <Text style={styles.textBarber}>{barberDetails.name}</Text>
        {!barberDetails.default && (
          <Text style={styles.textServices}>{barberDetails.services}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
