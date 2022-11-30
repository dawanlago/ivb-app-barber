import {View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {Title} from '../../components/Title';

import {styles} from './styles';

import {ButtonBack} from '../../components/ButtonBack';
import {CardService} from '../../components/CardService';
import {ModalSubService} from '../../components/ModalSubService';

interface Detail {
  description: string;
  price: number;
  time: string;
}

export const ServiceList = () => {
  const services = [
    {
      id: 1,
      description: 'Cabelo',
      price: 30.0,
      time: '30',
    },
    {
      id: 2,
      description: 'Barba',
      price: 25.0,
      time: '20',
    },
    {
      id: 3,
      description: 'Cabelo + Barba',
      price: 50.0,
      time: '50',
    },
  ];

  const subServices = [
    {
      id: 1,
      description: 'Progressiva',
      price: 70.0,
      time: '60',
    },
    {
      id: 2,
      description: 'Botox',
      price: 70.0,
      time: '60',
    },
    {
      id: 3,
      description: 'Alinhamento',
      price: 30.0,
      time: '30',
    },
  ];

  const [modalSubService, setModalSubService] = useState<boolean>(false);

  function handleCloseModal() {
    setModalSubService(false);
  }
  function handleOpenModal() {
    setModalSubService(true);
  }

  return (
    <View style={styles.container}>
      <ButtonBack />
      <View style={styles.header}>
        <Title
          title="O que pretende fazer?"
          subtitle="Escolha agora qual serviço quer fazer."
        />
      </View>

      <View style={styles.content}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={services}
          renderItem={({item}: {item: Detail}) => (
            <CardService details={item} click={() => handleOpenModal()} />
          )}
        />
      </View>
      {modalSubService && (
        <ModalSubService
          closeModal={() => handleCloseModal()}
          data={subServices}
        />
      )}
    </View>
  );
};
