import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../global/styles';

const WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    width: WIDTH - 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    borderWidth: 1,
    borderColor: colors.darkOpacity,
    height: 1,
    flex: 1,
  },
  textDivisor: {
    marginHorizontal: 20,
    fontSize: 20,
    fontFamily: fonts.title500,
    color: colors.textDark10,
  },
});
