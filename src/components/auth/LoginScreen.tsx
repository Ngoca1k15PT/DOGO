import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import InputCustom from './components/InputCustom';
import Constant from '../../controller/Constant';

interface componentNameProps {}

const LoginScreen = (props: componentNameProps) => {
  const [email, setEmail] = useState();
  const [passWord, setPassWord] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewImage}>
        <Image source={Constant.icons.imgLogin} style={styles.img} />
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
        customStyle={{marginHorizontal: 30}}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#1A1B22',
  },
  viewImage: {
    alignItems: 'center',
    marginTop: Constant.screen.height * 0.2,
  },
  img: {
    marginLeft: 30,
  },
});
