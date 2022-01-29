import React from 'react';
import {View, Text} from 'react-native';
import {GlobalStyle} from '../../utils/Styles';

const WorkProfile = () => {
  const {container} = GlobalStyle;
  return (
    <>
      <View style={[container]}>
        <Text>Work Profile</Text>
      </View>
    </>
  );
};

export default WorkProfile;
