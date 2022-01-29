import React, {useState, useEffect} from 'react';
import {
  View,
  // Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {MyText as Text} from '../../components/MyText';
import CustomButton from '../../components/Button';
import {Colors} from '../../constant/theme';
import {dash, facial} from '../../constant/contant';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {get_request} from '../../services/makeRequest';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import {Picker} from '@react-native-picker/picker';
import {post_request} from '../../services/makeRequest';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RegisterScreen2 = ({navigation, route}) => {
  const [avatar, setAvatar] = useState('');
  const [frontDoc, setFrontDoc] = useState('');
  const [backDoc, setBackDoc] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [upload1, setUpload1] = useState(false);
  const [upload2, setUpload2] = useState(false);
  const [upload3, setUpload3] = useState(false);
  const [uploadFile, setUploadFile] = useState([]);
  const [selectedFileType, setSelectedFileType] = useState('');

  let number = route.params.number;

  console.log(number);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // getUserByPhone(number);
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const uploadHandler = async () => {
    console.log('Experiment starts here>>>>>>>>>>>>');
    if (uploadFile.length) {
      setLoading(true);
      const url = '/UploadFile';
      const response = await post_request(url, uploadFile);
      console.log(response);
      navigation.navigate(dash);
    } else {
      alert('Upload a file');
    }
  };
  const skipHandler = () => {
    navigation.navigate(dash);
  };

  const getUserByPhone = async phone => {
    try {
      const url = `/GetUserByPhone/${phone}`;
      const response = await get_request(url);
      if (response) {
        console.log('GET PHONE: ', response);
        // navigation.navigate(dash);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const docUpload = mime => {
    console.log('Upload');
    let options = {
      title: 'You can choose one image',
      maxWidth: 100,
      maxHeight: 100,
      cameraType: 'front',
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    if (mime === 'PHOTO') {
      launchCamera(options, response => {
        if (response.didCancel) {
          console.log('cancel');
        } else if (response.error) {
          console.log(response.errorMessage);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let source = response.assets[0];
          let p1 = {
            file_extention: source.type.split('/')[1],
            file_base64: source.base64,
            userid: '202201231555032348062181571',
            phone: '2348062181571',
            fileCat: mime,
          };
          console.log(p1);
          setUploadFile([...uploadFile, p1]);
          //uploadMyFile('PHOTO', source.base64);
          setUpload1(true);
        }
      });
    } else if (mime === 'MOI1-FRONT') {
      if (selectedFileType === '') {
        alert('select file type');
        return;
      }
      launchImageLibrary(options, response => {
        if (response.didCancel) {
          console.log('cancel');
        } else if (response.error) {
          console.log(response.errorMessage);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let source = response.assets[0];
          console.log(source.base64);
          let p1 = {
            file_extention: source.type,
            file_base64: source.base64,
            userid: '202201231555032348062181571',
            phone: '2348062181571',
            fileCat: mime,
          };
          console.log(p1);
          setUploadFile([...uploadFile, p1]);
          //uploadMyFile('PHOTO', source.base64);
          setUpload2(true);
        }
      });
    } else if (mime === 'MOI1-BACK') {
      if (selectedFileType === '') {
        alert('select file type');
        return;
      }
      launchImageLibrary(options, response => {
        if (response.didCancel) {
          console.log('cancel');
        } else if (response.error) {
          console.log(response.errorMessage);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let source = response.assets[0];
          console.log(source.base64);
          let p1 = {
            file_extention: source.type,
            file_base64: source.base64,
            userid: '202201231555032348062181571',
            phone: '2348062181571',
            fileCat: mime,
          };
          console.log(p1);
          setUploadFile([...uploadFile, p1]);
          //uploadMyFile('PHOTO', source.base64);
          setUpload3(true);
        }
      });
    }
  };
  const documentUpload = async _type => {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    console.log(res);
    console.log(_type);
  };

  const uploadMyFile = async (type, file) => {
    // let data = new FormData();
    // data.append('name', 'Image Upload');
    // data.append('file_attachment', file);
    let ext = 'png';

    const payload = [
      {
        file_extention: ext,
        file_base64: file,
        userid: '202201231555032348062181571',
        phone: '2348062181571',
        fileCat: type,
      },
    ];
    console.log(payload);
    const url = '/UploadFile';
    const response = await post_request(url, payload);
    console.log(response.status);
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapblock}>
          <View>
            <Text style={styles.header}>
              Launch Camera to capture your face
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.block,
              {
                width: '100%',
                backgroundColor: upload1 ? 'lightgreen' : 'white',
                justifyContent: 'space-between',
                flexDirection: 'row',
              },
            ]}
            onPress={() => docUpload('PHOTO')}>
            <Text>Capture face</Text>
            <View>
              {upload1 ? (
                <Ionicons
                  name="checkmark-circle"
                  size={20}
                  color={Colors.primary}
                />
              ) : null}
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.header}>Upload Government issued ID</Text>
          </View>
          <Picker
            selectedValue={selectedFileType}
            onValueChange={(value, index) => setSelectedFileType(value)}
            mode="dropdown" // Android only
            style={styles.picker}>
            <Picker.Item label="Please select ID type " value={null} />
            <Picker.Item label="National Identity Number" value="NIN" />
            <Picker.Item label="International Passport" value="PP" />
            <Picker.Item label="Driver's License" value="DL" />
            <Picker.Item label="Voter's Card" value="VC" />
          </Picker>
          <TouchableOpacity
            style={[
              styles.block,
              {
                width: '100%',
                backgroundColor: upload2 ? 'lightgreen' : 'white',
                justifyContent: 'space-between',
                flexDirection: 'row',
              },
            ]}
            onPress={() => docUpload('MOI1-FRONT')}>
            <Text>Upload doc (front view)</Text>
            <View>
              {upload2 ? (
                <Ionicons
                  name="checkmark-circle"
                  size={20}
                  color={Colors.primary}
                />
              ) : null}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.block,
              {
                width: '100%',
                backgroundColor: upload3 ? 'lightgreen' : 'white',
                justifyContent: 'space-between',
                flexDirection: 'row',
              },
            ]}
            onPress={() => docUpload('MOI1-BACK')}>
            <Text>Upload doc (back view)</Text>
            <View>
              {upload3 ? (
                <Ionicons
                  name="checkmark-circle"
                  size={20}
                  color={Colors.primary}
                />
              ) : null}
            </View>
          </TouchableOpacity>
        </View>
        <CustomButton
          title="Upload document"
          bgColor={Colors.primary}
          txtColor={Colors.white}
          onPress={uploadHandler}
          isLoading={loading}
        />
        <CustomButton
          title="Skip for now"
          bgColor={Colors.white}
          txtColor={Colors.primary}
          onPress={skipHandler}
        />
      </SafeAreaView>
    </>
  );
};
export default RegisterScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: hp(3),
    backgroundColor: Colors.white,
  },
  wrapblock: {
    marginBottom: hp(3),
  },
  block: {
    padding: hp(2),
    width: '100%',
    backgroundColor: '#f4f6f5',
    borderRadius: hp(1),
    elevation: 5,
    marginTop: hp(1),
  },
  header: {
    fontWeight: 'bold',
    fontSize: rf(2.1),
    paddingVertical: hp(2),
  },
  picker: {
    fontFamily: 'Century Gothic',
  },
});
