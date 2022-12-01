import React, {ReactNode} from 'react';
import {
  View,
  Modal,
  ModalProps,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import {ButtonAction} from '../ButtonAction';
import {CardService} from '../CardService';
import {Title} from '../Title';

import {styles} from './styles';

interface Detail {
  description: string;
  price: number;
  time: string;
}

type Props = ModalProps & {
  heightModal?: string;
  data: [];
  click: () => void;
  closeModal: () => void;
};

export const ModalSubService: React.FC<Props> = ({
  heightModal,
  data,
  click,
  closeModal,
  ...rest
}: Props) => {
  return (
    <Modal transparent animationType="slide" statusBarTranslucent {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={250}
            style={[styles.container, {height: heightModal || '45%'}]}>
            <Text style={styles.title}>Que tal adicionar mais algo?</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({item}: {item: Detail}) => (
                <CardService details={item} click={() => {}} />
              )}
            />
          </KeyboardAvoidingView>
          <ButtonAction titleButton="Continuar sem adicionar" click={click} />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
