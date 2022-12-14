import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../global/styles';
const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    paddingHorizontal: 30,
    paddingVertical: 50,
    height: height,
    backgroundColor: colors.light,
  },
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
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
  recoverPassword: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: -10,
    marginBottom: 10,
  },
  textLink: {
    fontSize: 17,
    fontFamily: fonts.title500,
    textDecorationLine: 'underline',
    color: colors.textDark10,
  },
  logo: {
    marginTop: 10,
  },
  socialLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    marginVertical: 20,
  },
  containerCreateAccount: {
    justifyContent: 'flex-end',
    marginTop: 20,
  },
});
