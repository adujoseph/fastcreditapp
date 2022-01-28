import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  // TextInput,
  View,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constant/theme';
import {TextInput} from 'react-native-paper';

// const TextField = ({
//   label,
//   value,
//   onChangeText,
//   placeholder,
//   validated,
//   onFocus,
//   iconName,
//   secureTextEntry,
//   onBlur,
// }) => {
//   return (
//     <>
//       <View style={[styles.textWrapper]}>
//         <View style={[styles.iconWrapper]}>
//           <Ionicons name={iconName} size={20} />
//         </View>
//         <View style={[styles.inputWrapper]}>
//           {/* <Text style={styles.label}>{label}</Text> */}
//           <TextInput
//             label={label}
//             value={value}
//             onChangeText={onChangeText}
//             placeholder={placeholder}
//             onFocus={onFocus}
//             style={styles.input}
//             secureTextEntry={secureTextEntry}
//             onBlur={onBlur}
//           />
//         </View>
//         <View style={[styles.iconWrapper]}>
//           <Ionicons
//             name={validated ? 'checkmark-circle' : null}
//             size={25}
//             color={validated ? Colors.secondary : 'transparent'}
//           />
//         </View>
//       </View>
//     </>
//   );
// };

const TextField = ({
  label,
  value,
  onChangeText,
  placeholder,
  validated,
  onFocus,
  iconName,
  secureTextEntry,
  onBlur,
}) => {
  return (
    <>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onFocus={onFocus}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        underlineColor="lightgray"
        activeOutlineColor="green"
        selectionColor="#000"
      />
    </>
  );
};
export default TextField;

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 0.2,
    borderRadius: hp(1),
    margin: hp(1),
    padding: hp(1),
  },
  inputWrapper: {
    flex: 0.85,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: hp(1),
    flex: 0.15,
  },
  input: {
    width: '100%',
    paddingLeft: hp(0.1),
    marginTop: hp(1),
    backgroundColor: 'transparent',
    fontFamily: 'Century Gothic',
    borderBottomWidth: 0.1,
    borderBottomColor: 'lightgray',
  },
  label: {
    fontSize: rf(2.1),
    marginLeft: hp(1),
  },
});
