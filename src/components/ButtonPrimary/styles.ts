import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../global/styles';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    width: '100%',
    backgroundColor: colors.btnPrimary,
    borderRadius: 5,
    marginBottom: 10,
  },

  textButton: {
    fontFamily: fonts.title,
    fontSize: 20,
    color: colors.textDark10,
  },
});
