import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../global/styles';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontFamily: fonts.title,
    color: colors.textDark,
  },
});
