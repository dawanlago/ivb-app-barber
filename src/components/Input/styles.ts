import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts} from '../../global/styles';
const WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    marginHorizontal: 30,
  },
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
  titleInput: {
    fontSize: 17,
    fontFamily: fonts.title500,
    color: colors.textDark10,
  },
});
