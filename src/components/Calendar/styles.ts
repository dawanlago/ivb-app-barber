import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../global/styles';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMonth: {
    fontSize: 20,
    fontFamily: fonts.title,
    color: colors.textDark10,
  },
  calendarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendar: {
    fontSize: 40,
    fontFamily: fonts.title,
    color: colors.textDark10,
    marginTop: 10,
  },
});
