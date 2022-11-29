import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../global/styles';

const WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 60,
  },
  imgFacebook: {
    width: 48,
    height: 48,
  },
});
