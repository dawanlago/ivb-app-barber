import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../global/styles';
const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    paddingTop: 30,
    height: height,
    backgroundColor: colors.light,
  },
  header: {
    marginBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  contentEmptySchedule: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptySchedule: {
    fontSize: 30,
    fontFamily: fonts.title500,
    color: colors.textDark90,
    textAlign: 'center',
  },
});
