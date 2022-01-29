import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {GlobalStyle} from '../../utils/Styles';
import {Colors} from '../../constant/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListComponent from './component/ListComponent';
import {personal, work, bank, security, profile} from '../../constant/contant';

const ProfileScreen = ({navigation}) => {
  const {container, headerText, center, normalText} = GlobalStyle;

  const handleNavigation = type => {
    console.log(type);
    navigation.navigate(type);
  };
  return (
    <>
      <View style={[container, center, {backgroundColor: Colors.primary}]}>
        <View style={{width: '100%', paddingVertical: hp(3)}}>
          <Text style={[headerText, {color: Colors.white}]}>
            Emefele Anthony
          </Text>
          <Text style={[normalText, {color: Colors.white}]}>
            emefele.anthony@fastcredit.ltd
          </Text>
        </View>
        <View style={styles.wrapper}>
          <ListComponent
            icon="account-box-multiple-outline"
            title="Profile"
            subTitle="Edit your profile "
            onPress={() => handleNavigation(personal)}
          />
          <ListComponent
            icon="network"
            title="Work"
            subTitle="Edit your work details"
            onPress={() => handleNavigation(work)}
          />
          <ListComponent
            icon="bank-outline"
            title="Bank"
            subTitle="Edit your banking details "
            onPress={() => handleNavigation(bank)}
          />
          <ListComponent
            icon="security"
            title="Security"
            subTitle="change password, transaction pin "
            onPress={() => handleNavigation(security)}
          />
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f4f6f5',
    padding: hp(2),
    borderRadius: hp(2),
    width: '100%',
  },
  list: {
    flexDirection: 'row',
  },
});
