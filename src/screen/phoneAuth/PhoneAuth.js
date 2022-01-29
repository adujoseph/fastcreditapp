import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import TextField from '../../components/TextField';
import CustomButton from '../../components/Button';
import {MyText as Text} from '../../components/MyText';
import {Colors} from '../../constant/theme';
import {register1, login, loginscreen} from '../../constant/contant';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthScreen = ({navigation}) => {
  const [confirm, setConfirm] = useState({});
  const [email, setEmail] = useState('');
  const [code, setCode] = useState();
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onFocusHandler = () => {
    setErrorMessage('');
  };
  const handleValidation = () => {};

  const submitHandler = async () => {
    setErrorMessage('');
    if (!phone) {
      setErrorMessage('Please enter a phone number');
      return;
    }
    let phonenumber = `+234${Number(phone)}`;
    setLoading(true);
    try {
      const confirmation = await auth().signInWithPhoneNumber(phonenumber);
      setLoading(false);
      setConfirm(confirmation);
    } catch (err) {
      setLoading(false);
      setErrorMessage(err.message);
    }
  };
  const confirmHandler = async () => {
    let phonenumber = `+234${Number(phone)}`;
    if (code === '') {
      setErrorMessage('enter code');
      return;
    }
    setLoading(true);
    try {
      console.log(confirm);
      const {user} = await confirm.confirm(code);
      // await AsyncStorage.setItem('number', phonenumber);
      console.log(user);
      if (user) {
        navigation.navigate(register1, {phonenumber});
      } else {
        setErrorMessage('Invalid Code');
      }
    } catch (err) {
      setLoading(false);
      setErrorMessage(err.message);
    }
  };

  if (Object.keys(confirm).length) {
    return (
      <View style={styles.container}>
        <Text>Please enter the 6-digit code sent to you at </Text>
        <OTPInputView
          style={{width: '100%', height: hp(10)}}
          pinCount={6}
          code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={val => setCode(val)}
          // autoFocusOnLoad
          codeInputFieldStyle={{margin: hp(0.6), color: 'black'}}
          codeInputHighlightStyle={{borderWidth: 1, color: 'black'}}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        <TouchableOpacity onPress={() => submitHandler()}>
          <Text
            clickable
            style={{
              color: Colors.primary,
              paddingVertical: hp(1),
              fontWeight: 'bold',
            }}>
            Didn't Receive? Resend code
          </Text>
        </TouchableOpacity>
        <View style={{paddingHorizontal: hp(1)}}>
          <Text style={{color: 'red'}}>{errorMessage}</Text>
        </View>
        <CustomButton
          title="Confirm"
          bgColor={Colors.primary}
          txtColor={Colors.white}
          onPress={confirmHandler}
          isLoading={loading}
        />
        <TouchableOpacity onPress={() => setConfirm({})}>
          <Text
            clickable
            style={{
              textAlign: 'center',
              color: Colors.primary,
              paddingVertical: hp(2),
            }}>
            Change Number
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <>
      <View style={styles.container}>
        <Text>Enter Phone Number</Text>
        <TextField
          label="Phone Number"
          value={phone}
          onChangeText={text => setPhone(text)}
          placeholder="Phone Number"
          keyboardType="number-pad"
          //   validated={isEmail}
          onFocus={() => onFocusHandler()}
          onBlur={() => handleValidation('email')}
          iconName="phone-portrait"
        />
        <View style={{paddingHorizontal: hp(1)}}>
          <Text style={{color: 'red'}}>{errorMessage}</Text>
        </View>
        <CustomButton
          title="Continue"
          bgColor={Colors.primary}
          txtColor={Colors.white}
          onPress={submitHandler}
          isLoading={loading}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(loginscreen)}
          style={{marginTop: hp(1.5)}}>
          <Text clickable style={{color: Colors.primary}}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: hp(3),
    backgroundColor: Colors.white,
  },
});
