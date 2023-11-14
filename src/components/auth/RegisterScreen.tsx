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

interface componentNameProps {}

const RegisterScreen = (props: componentNameProps) => {
  const [email, setEmail] = useState();
  const [passWord, setPassWord] = useState();

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
      />
      <InputCustom
        value={passWord}
        setValue={setPassWord}
        type={'security'}
        textPlaceholder={'Nhập Lại Mật Khẩu'}
        customStyle={{marginHorizontal: 30}}
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
        />
        <View style={styles.viewLogin}>
          <Text style={styles.textQuestion}>Đã có tài khoản ?</Text>
          <TouchableOpacity>
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
});
