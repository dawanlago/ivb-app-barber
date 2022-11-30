import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../global/styles';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light10,
    height: 50,
    width: 300,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  details: {
    fontFamily: fonts.title500,
    fontSize: 16,
    color: colors.textDark10,
  },
});
