import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../global/styles';
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
    marginBottom: 50,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
