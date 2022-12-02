import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../global/styles';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.light10,
    height: 75,
    width: 300,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  description: {
    fontFamily: fonts.title500,
    fontSize: 19,
    color: colors.textDark,
  },
  contentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    marginHorizontal: 15,
  },
  details: {
    fontFamily: fonts.title500,
    fontSize: 16,
    color: colors.textDark10,
  },
  detailsPrice: {
    fontFamily: fonts.title500,
    fontSize: 17,
    color: colors.textDark10,
  },
  containerTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
