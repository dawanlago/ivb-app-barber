import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../global/styles';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  back: {
    fontFamily: fonts.title500,
    fontSize: 17,
    color: colors.textDark10,
    textDecorationLine: 'underline',
    textDecorationColor: colors.textDark10,
    marginBottom: 10,
  },
});
