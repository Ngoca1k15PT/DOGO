import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import InputCustom from './components/InputCustom';
import Constant from '../../controller/Constant';
import ButtonDefault from './components/ButtonDefault';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {toast} from '@baronha/ting';
import Spinner from 'react-native-loading-spinner-overlay';

interface componentNameProps {}

const RegisterScreen = (props: componentNameProps) => {
  const [email, setEmail] = useState();
  const [passWord, setPassWord] = useState();
  const [confirmPassWord, setConfirmPassWord] = useState();
  const [check, setCheck] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  const handleOnclickRegister = () => {
    setIsLoading(true);
    if (!email) {
      toast({
        title: 'Lỗi 😎',
        message: 'Email không được để trống!!',
        preset: 'error',
      });
    } else if (!passWord) {
      toast({
        title: 'Lỗi 😎',
        message: 'Mật khẩu không được để trống!!',
        preset: 'error',
      });
    } else if (passWord != confirmPassWord) {
      toast({
        title: 'Lỗi 😎',
        message: 'Mật khẩu không khớp!!',
        preset: 'error',
      });
    } else {
      <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />;
      auth()
        .createUserWithEmailAndPassword(email, passWord)
        .then(() => {
          toast({
            title: 'Thành công 😎',
            message: 'Đăng ký tài khoản thành công !',
            preset: 'done',
          });
          setTimeout(() => {
            navigation.goBack();
          }, 3000);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewImage}>
        <Image source={Constant.icons.imgRegister} style={styles.img} />
      </View>
      <InputCustom
        value={email}
        setValue={setEmail}
        type={'mail'}
        textPlaceholder={'Email'}
        customStyle={{
          marginHorizontal: 30,
          marginBottom: 20,
        }}
        check={false}
      />
      <InputCustom
        value={passWord}
        setValue={setPassWord}
        type={'security'}
        textPlaceholder={'Mật Khẩu'}
        customStyle={{
          marginHorizontal: 30,
          marginBottom: 20,
        }}
        check={check}
      />
      <InputCustom
        value={confirmPassWord}
        setValue={setConfirmPassWord}
        type={'security'}
        textPlaceholder={'Nhập Lại Mật Khẩu'}
        customStyle={{marginHorizontal: 30}}
        check={check}
      />
      <BouncyCheckbox
        size={20}
        fillColor="red"
        unfillColor="#FFFFFF"
        text="Hiển thị mật khẩu"
        iconStyle={{borderColor: 'red'}}
        innerIconStyle={{borderWidth: 2}}
        textStyle={{
          fontFamily: Constant.fonts.americanTypewriterCondensedBold,
          textDecorationLine: 'none',
          color: 'white',
        }}
        onPress={(isChecked: boolean) => {
          setCheck(!isChecked);
        }}
        style={{
          marginTop: 10,
          marginHorizontal: 30,
        }}
      />
      <View style={styles.viewBottom}>
        <ButtonDefault
          label="Đăng Ký"
          style={{
            backgroundColor: '#FF4D67',
            borderRadius: 26,
            marginHorizontal: 40,
            height: 48,
            marginTop: 40,
          }}
          styleLabel={{
            color: 'white',
          }}
          onPress={handleOnclickRegister}
        />
        <View style={styles.viewLogin}>
          <Text style={styles.textQuestion}>Đã có tài khoản ?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.textLogin}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#1A1B22',
  },
  viewImage: {
    alignItems: 'center',
    marginTop: Constant.screen.height * 0.15,
  },
  img: {
    // backgroundColor: 'red',
    marginLeft: 80,
  },
  viewBottom: {
    marginHorizontal: 20,
  },
  viewLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  textQuestion: {
    color: 'white',
    fontFamily: Constant.fonts.americanTypewriterCondensedBold,
    marginRight: 5,
  },
  textLogin: {
    color: '#FF4D67',
    fontFamily: Constant.fonts.americanTypewriterBold,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
