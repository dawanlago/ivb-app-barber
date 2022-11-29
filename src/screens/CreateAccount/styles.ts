import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../global/styles';
const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    height: height,
    backgroundColor: colors.light,
    paddingBottom: 55,
  },
  header: {
    marginTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  contentForm: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  contentImage: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 115,
    height: 115,
    borderColor: colors.darkOpacity,
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
  },
  textImage: {
    marginTop: 20,
    fontSize: 12,
    fontFamily: fonts.title500,
    color: colors.textDark10,
  },
});
