import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../global/styles';

const WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    minWidth: WIDTH,
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.btnPrimary,
    borderTopStartRadius: 5,
    borderTopEndRadiusRadius: 5,
  },

  textButton: {
    fontFamily: fonts.title500,
    fontSize: 20,
    color: colors.textDark10,
  },
});
