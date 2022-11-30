import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../global/styles';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'flex-end',
  },
  container: {
    height: '50%',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: colors.light,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontFamily: fonts.title,
    fontSize: 24,
    color: colors.textDark,
    marginBottom: 10,
    marginTop: 20,
  },
});
