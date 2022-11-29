import {View, Text} from 'react-native';
import React from 'react';

import {styles} from './styles';

type Props = {
  title: string;
  subtitle?: string;
};

export const Title: React.FC<Props> = ({title, subtitle}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
