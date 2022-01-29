import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PersonalProfile from '../../screen/personal/PersonalProfile';
import WorkProfile from '../../screen/work/WorkProfile';
import BankProfile from '../../screen/bank/BankProfile';
import SecurityProfile from '../../screen/security/SecurityProfile';
import ProfileScreen from '../../screen/profile/ProfileScreen';
import {personal, work, bank, security, profile} from '../../constant/contant';
import {Colors} from '../../constant/theme';

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator initialRouteName={profile}>
    <ProfileStack.Screen
      name={profile}
      component={ProfileScreen}
      options={{
        headerTransparent: true,
        headerTitle: '',
        // headerTintColor: "#E96B03",
      }}
    />
    <ProfileStack.Screen
      name={personal}
      component={PersonalProfile}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: Colors.primary,
        // headerShown: false,
      }}
    />
    <ProfileStack.Screen
      name={work}
      component={WorkProfile}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: Colors.primary,
      }}
    />
    <ProfileStack.Screen
      name={bank}
      component={BankProfile}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: Colors.primary,
      }}
    />
    <ProfileStack.Screen
      name={security}
      component={SecurityProfile}
      options={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: Colors.primary,
      }}
    />
  </ProfileStack.Navigator>
);

export default ProfileStackScreen;
