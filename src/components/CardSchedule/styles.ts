import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../global/styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.light10,
    height: 75,
    width: 300,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  contentSchedule: {
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  dateTimeSchedule: {
    fontFamily: fonts.title500,
    fontSize: 24,
    color: colors.textDark,
  },
  contentDetails: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  barber: {
    fontFamily: fonts.title500,
    fontSize: 20,
    color: colors.textDark10,
  },
  details: {
    fontFamily: fonts.title500,
    fontSize: 16,
    color: colors.textDark10,
  },
});
