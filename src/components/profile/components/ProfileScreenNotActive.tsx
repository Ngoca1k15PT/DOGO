import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Constant from '../../../controller/Constant';

const ProfileScreenNotActive = () => {
  return (
    <View style={styles.container}>
      <Image
        source={Constant.icons.imgNotLogin}
        style={styles.imgHeaderNotLogin}
      />
      <View style={styles.body}>
        <TouchableOpacity style={styles.buttonBodyLogin}>
          <Text style={styles.textButtonLogin}>Đăng Nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBodyRegister}>
          <Text style={styles.textRegister}>Đăng Ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreenNotActive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgHeaderNotLogin: {
    width: Constant.screen.width / 1.5,
    height: Constant.screen.width / 1.5,
    alignSelf: 'center',
  },
  body: {
    flex: 1,
  },
  buttonBodyLogin: {
    height: 48,
    borderWidth: 1,
    borderColor: '#FF4D67',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#FE5E75',
    marginVertical: 25,
  },
  buttonBodyRegister: {
    height: 48,
    borderWidth: 1.5,
    borderColor: '#FF4D67',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 20,
  },
  textButtonLogin: {
    fontFamily: Constant.fonts.americanTypewriterCondensedBold,
    color: '#FFFFFF',
    fontSize: 16,
  },
  textRegister: {
    fontFamily: Constant.fonts.americanTypewriterCondensedBold,
    color: '#000000',
    fontSize: 16,
  },
});
