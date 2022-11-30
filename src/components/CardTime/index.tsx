import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import {styles} from './styles';

interface Detail {
  id: number;
  time: string;
  selected: boolean;
}

type Props = {
  details: Detail;
  click: () => void;
};
export const CardTime: React.FC<Props> = ({details, click, ...rest}: Props) => {
  return (
    <TouchableOpacity
      onPress={click}
      style={styles.container}
      activeOpacity={0.85}>
      <Text style={styles.details}>{details.time}</Text>
    </TouchableOpacity>
  );
};
