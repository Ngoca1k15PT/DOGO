import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Constant from '../../../controller/Constant'
import { useNavigation } from '@react-navigation/native'

const ProfileScreenNotActive = () => {
    const navigation = useNavigation()

    const handleClickLogin = () => {
        navigation.navigate(Constant.screenName.LoginScreen as never)
    }

    const handleClickRegister = () => {
        navigation.navigate(Constant.screenName.RegisterScreen as never)
    }

    return (
        <View style={styles.container}>
            <Image source={Constant.icons.imgNotLogin} style={styles.imgHeaderNotLogin} />
            <View style={styles.body}>
                <TouchableOpacity style={styles.buttonBodyLogin} onPress={handleClickLogin}>
                    <Text style={styles.textButtonLogin}>Đăng Nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBodyRegister} onPress={handleClickRegister}>
                    <Text style={styles.textRegister}>Đăng Ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileScreenNotActive

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imgHeaderNotLogin: {
        width: Constant.screen.width / 1.5,
        height: Constant.screen.width / 1.5,
        alignSelf: 'center',
        marginTop: Constant.screen.height * 0.15
    },
    body: {
        flex: 1
    },
    buttonBodyLogin: {
        height: 48,
        borderWidth: 1,
        borderColor: '#FF4D67',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 40,
        borderRadius: 20,
        backgroundColor: '#FE5E75',
        marginVertical: 20
    },
    buttonBodyRegister: {
        height: 48,
        borderWidth: 2,
        borderColor: '#FF4D67',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 40,
        borderRadius: 20
    },
    textButtonLogin: {
        fontFamily: Constant.fonts.americanTypewriterCondensedBold,
        color: '#FFFFFF',
        fontSize: 16
    },
    textRegister: {
        fontFamily: Constant.fonts.americanTypewriterCondensedBold,
        color: '#FFFFFF',
        fontSize: 16
    }
})
