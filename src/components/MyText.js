import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const MyText = ({clickable, children, style}) => {
  return (
    <>
      <Text
        style={[
          styles.text,
          {...style, textDecorationLine: clickable ? 'underline' : 'none'},
        ]}>
        {children}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontFamily: 'Century Gothic',
  },
});
