import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {Colors} from '../constant/theme';

export const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: hp(3),
    backgroundColor: Colors.white,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: rf(3),
  },
  normalText: {
    fontSize: rf(2),
  },
});
