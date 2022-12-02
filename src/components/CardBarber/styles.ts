import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../global/styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.light10,
    height: 100,
    width: 300,
    borderRadius: 5,
    marginBottom: 10,
  },
  imageBarber: {
    width: 90,
    height: 90,
    marginRight: 10,
  },
  containerDetails: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
  containerDetailsDefault: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textBarber: {fontSize: 18, fontFamily: fonts.title, color: colors.textDark},
  textServices: {
    fontSize: 15,
    fontFamily: fonts.title500,
    color: colors.textDark10,
  },
});
