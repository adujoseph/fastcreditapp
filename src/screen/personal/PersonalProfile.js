import React from 'react';
import {View, Text} from 'react-native';
import {GlobalStyle} from '../../utils/Styles';

const PersonalProfile = () => {
  const {container} = GlobalStyle;
  return (
    <>
      <View style={[container]}>
        <Text>Personal Profile</Text>
      </View>
    </>
  );
};

export default PersonalProfile;
