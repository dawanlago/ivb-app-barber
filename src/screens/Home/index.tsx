import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Title } from '../../components/Title';

import { useUser } from '../../store/user';

import { styles } from './styles';
import { Input } from '../../components/Input';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import Calendar from '../../components/Calendar';

const logo = require('../../assets/image/logo.png');

export default function Home() {
  const { user } = useUser();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title title="Agendamentos" />
      </View>
      <Calendar />
    </View>
  );
}
