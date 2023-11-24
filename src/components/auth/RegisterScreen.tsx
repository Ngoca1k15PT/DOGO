import React, { useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import InputCustom from './components/InputCustom'
import Constant from '../../controller/Constant'
import ButtonDefault from './components/ButtonDefault'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useNavigation } from '@react-navigation/native'
import { toast } from '@baronha/ting'
import { RegisterHook } from '../../hook/RegisterHook'
import { ScaledSheet } from 'react-native-size-matters'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface componentNameProps {}

const RegisterScreen = (props: componentNameProps) => {
    const [email, setEmail] = useState()
    const [passWord, setPassWord] = useState()
    const [confirmPassWord, setConfirmPassWord] = useState()
    const [check, setCheck] = useState(true)
    const { handleRegister } = RegisterHook()

    const navigation = useNavigation()

    const handleOnclickRegister = () => {
        if (!email) {
            toast({
                title: 'Lỗi 😓',
                message: '🙄 Email không được để trống!!',
                preset: 'error'
            })
        } else if (!passWord) {
            toast({
                title: 'Lỗi 😓',
                message: '🙄 Mật khẩu không được để trống!!',
                preset: 'error'
            })
        } else if (passWord != confirmPassWord) {
            toast({
                title: 'Lỗi 😓',
                message: '🙄 Mật khẩu không khớp!!',
                preset: 'error'
            })
        } else {
            handleRegister(email, passWord)
        }
    }

    const handleOnclickLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: Constant.screenName.LoginScreen as never }]
        })
    }

    return (
        <KeyboardAwareScrollView style={styles.container} enableOnAndroid={true}>
            {/* <View style={styles.container}> */}
            <View style={styles.viewImage}>
                <Image source={Constant.icons.imgRegister} style={styles.img} />
            </View>
            <InputCustom
                value={email}
                setValue={setEmail}
                type={'mail'}
                textPlaceholder={'Email'}
                customStyle={styles.inputCustom}
                check={false}
            />
            <InputCustom
                value={passWord}
                setValue={setPassWord}
                type={'security'}
                textPlaceholder={'Mật Khẩu'}
                customStyle={styles.inputCustom}
                check={check}
            />
            <InputCustom
                value={confirmPassWord}
                setValue={setConfirmPassWord}
                type={'security'}
                textPlaceholder={'Nhập Lại Mật Khẩu'}
                customStyle={styles.inputCustomTwo}
                check={check}
            />
            <BouncyCheckbox
                size={20}
                fillColor='red'
                unfillColor='#FFFFFF'
                text='Hiển thị mật khẩu'
                iconStyle={{ borderColor: 'red' }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{
                    fontFamily: Constant.fonts.americanTypewriterCondensedBold,
                    textDecorationLine: 'none',
                    color: 'white'
                }}
                onPress={(isChecked: boolean) => {
                    setCheck(!isChecked)
                }}
                style={styles.checkBox}
            />
            <View style={styles.viewBottom}>
                <ButtonDefault
                    label='Đăng Ký'
                    style={{
                        backgroundColor: '#FF4D67',
                        borderRadius: 26,
                        marginHorizontal: 40,
                        height: 48,
                        marginTop: 40
                    }}
                    styleLabel={{
                        color: 'white'
                    }}
                    onPress={handleOnclickRegister}
                />
                <View style={styles.viewLogin}>
                    <Text style={styles.textQuestion}>Đã có tài khoản ?</Text>
                    <TouchableOpacity onPress={() => handleOnclickLogin()}>
                        <Text style={styles.textLogin}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* </View> */}
        </KeyboardAwareScrollView>
    )
}

export default RegisterScreen

const styles = ScaledSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        height: Constant.screen.height,
        backgroundColor: Constant.color.backGround
    },
    viewImage: {
        alignItems: 'center',
        marginTop: '120@ms'
    },
    img: {
        // backgroundColor: 'red',
        marginLeft: '80@ms'
    },
    viewBottom: {
        marginHorizontal: '20@ms'
    },
    viewLogin: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '20@ms'
    },
    textQuestion: {
        color: 'white',
        fontFamily: Constant.fonts.americanTypewriterCondensedBold,
        marginRight: '5@ms'
    },
    textLogin: {
        color: '#FF4D67',
        fontFamily: Constant.fonts.americanTypewriterBold
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
    inputCustom: {
        marginHorizontal: '30@ms',
        marginBottom: '20@ms'
    },
    inputCustomTwo: {
        marginHorizontal: '30@ms'
    },
    checkBox: {
        marginTop: '10@ms',
        marginHorizontal: '30@ms'
    }
})
