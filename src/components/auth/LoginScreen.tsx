import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import InputCustom from './components/InputCustom'
import Constant from '../../controller/Constant'
import ButtonDefault from './components/ButtonDefault'
import { useNavigation } from '@react-navigation/native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { LoginHook } from '../../hook/LoginHook'
import { toast } from '@baronha/ting'
import { ScaledSheet } from 'react-native-size-matters'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface componentNameProps {}

const LoginScreen = (props: componentNameProps) => {
    const [email, setEmail] = useState()
    const [passWord, setPassWord] = useState()
    const [check, setCheck] = useState(true)
    const navigation = useNavigation()

    const { handleLogin } = LoginHook()

    const handleOnclickLogin = () => {
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
        } else {
            handleLogin(email, passWord)
        }
    }

    return (
        <KeyboardAwareScrollView style={styles.container} enableOnAndroid={true}>
            {/* <View style={styles.container}> */}
            <View style={styles.viewImage}>
                <Image source={Constant.icons.imgLogin} style={styles.img} />
            </View>
            <InputCustom
                value={email}
                setValue={setEmail}
                type={'mail'}
                textPlaceholder={'Email'}
                customStyle={styles.customStyle}
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
                    label='Đăng Nhập'
                    style={styles.buttonLogin}
                    styleLabel={{
                        color: 'white'
                    }}
                    onPress={handleOnclickLogin}
                />
                <View style={styles.viewRegister}>
                    <Text style={styles.textQuestion}>Nguời dùng mới ?</Text>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate(Constant.screenName.RegisterScreen as never)
                        }
                    >
                        <Text style={styles.textRegister}>Đăng ký ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* </View> */}
        </KeyboardAwareScrollView>
    )
}

export default LoginScreen

const styles = ScaledSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        height: Constant.screen.height,
        backgroundColor: Constant.color.backGround
    },
    viewImage: {
        alignItems: 'center',
        marginTop: '140@ms'
    },
    img: {
        marginLeft: '30@ms'
    },
    viewBottom: {
        marginHorizontal: '20@ms'
    },
    viewRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '20@ms'
    },
    textQuestion: {
        color: 'white',
        fontFamily: Constant.fonts.americanTypewriterCondensedBold,
        marginRight: '5@ms'
    },
    textRegister: {
        color: '#FF4D67',
        fontFamily: Constant.fonts.americanTypewriterBold
    },
    customStyle: {
        marginHorizontal: '30@ms',
        marginBottom: '20@ms'
    },
    buttonLogin: {
        backgroundColor: '#FF4D67',
        borderRadius: '26@ms',
        marginHorizontal: '40@ms',
        height: '48@ms',
        marginTop: '40@ms'
    },
    inputCustom: {
        marginHorizontal: '30@ms'
    },
    checkBox: {
        marginTop: '12@ms',
        marginHorizontal: '30@ms'
    }
})
