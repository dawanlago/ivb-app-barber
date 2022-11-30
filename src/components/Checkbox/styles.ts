import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../global/styles';

export const styles = StyleSheet.create({
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  textCheckbox: {
    fontFamily: fonts.title,
    fontSize: 17,
    color: colors.textDark,
  },
});
