import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../global/styles';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors.light10,
    width: '100%',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  containerDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginHorizontal: 15,
  },
  title: {
    fontFamily: fonts.title500,
    fontSize: 17,
    color: colors.textDark10,
  },
  info: {
    fontFamily: fonts.title,
    fontSize: 17,
    color: colors.textDark,
  },
  containerButton: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    fontFamily: fonts.title,
    fontSize: 17,
    color: colors.textDark,
    textDecorationLine: 'underline',
    textDecorationColor: colors.textDark,
  },
});
