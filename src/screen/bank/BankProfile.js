import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {GlobalStyle} from '../../utils/Styles';

const BankProfile = () => {
  const {container} = GlobalStyle;
  return (
    <>
      <SafeAreaView style={[container]}>
        <Text>Bank Profile</Text>
      </SafeAreaView>
    </>
  );
};

export default BankProfile;
