import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../global/styles';
const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    paddingHorizontal: 30,
    height: height,
    backgroundColor: colors.light,
  },
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  contentLogin: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  createAccount: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  createAccountText: {
    fontSize: 17,
    fontFamily: fonts.title500,
    textDecorationLine: 'underline',
    color: colors.textDark10,
  },
  logo: {
    marginTop: 10,
  },
});
