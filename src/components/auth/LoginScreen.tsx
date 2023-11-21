import React, { useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import InputCustom from './components/InputCustom'
import Constant from '../../controller/Constant'
import ButtonDefault from './components/ButtonDefault'
import { useNavigation } from '@react-navigation/native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

interface componentNameProps {}

const LoginScreen = (props: componentNameProps) => {
    const [email, setEmail] = useState()
    const [passWord, setPassWord] = useState()
    const [check, setCheck] = useState(true)
    const navigation = useNavigation()

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
                    marginBottom: 20
                }}
                check={false}
            />
            <InputCustom
                value={passWord}
                setValue={setPassWord}
                type={'security'}
                textPlaceholder={'Mật Khẩu'}
                customStyle={{ marginHorizontal: 30 }}
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
                style={{
                    marginTop: 10,
                    marginHorizontal: 30
                }}
            />
            <View style={styles.viewBottom}>
                <ButtonDefault
                    label='Đăng Nhập'
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
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: Constant.color.backGround
    },
    viewImage: {
        alignItems: 'center',
        marginTop: Constant.screen.height * 0.2
    },
    img: {
        marginLeft: 30
    },
    viewBottom: {
        marginHorizontal: 20
    },
    viewRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    textQuestion: {
        color: 'white',
        fontFamily: Constant.fonts.americanTypewriterCondensedBold,
        marginRight: 5
    },
    textRegister: {
        color: '#FF4D67',
        fontFamily: Constant.fonts.americanTypewriterBold
    }
})
