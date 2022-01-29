import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {Colors} from '../../../constant/theme';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListComponent = ({icon, title, subTitle, onPress}) => {
  return (
    <>
      <TouchableOpacity style={styles.list} onPress={onPress}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: hp(2),
          }}>
          <Ionicons name={icon} size={25} />
        </View>
        <View style={styles.leftAlign}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subTitle}</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: hp(1),
            }}>
            <Ionicons name="chevron-right" size={20} color={Colors.primary} />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f4f6f5',
    padding: hp(2),
    borderRadius: hp(2),
  },
  list: {
    flexDirection: 'row',
  },
  leftAlign: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: hp(2),
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {},
});
