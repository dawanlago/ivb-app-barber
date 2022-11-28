import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../global/styles';

export const styles = StyleSheet.create({
  input: {
    height: 55,
    width: '100%',
    backgroundColor: colors.light,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.darkOpacity,
    marginBottom: 20,
    fontSize: 17,
    fontFamily: fonts.title500,
    paddingHorizontal: 10,
  },
});
