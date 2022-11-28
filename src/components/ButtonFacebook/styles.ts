import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../global/styles';

const WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    width: WIDTH - 60,
    backgroundColor: colors.facebookPrimary,
    borderRadius: 5,
    marginVertical: 10,
  },
  containerLogo: {
    alignItems: 'flex-start',
  },
  containerTitle: {
    alignItems: 'center',
    width: '80%',
  },
  textButton: {
    fontFamily: fonts.title500,
    fontSize: 20,
    color: colors.light,
  },
});
