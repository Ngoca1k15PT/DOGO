import auth from '@react-native-firebase/auth'
import { toast } from '@baronha/ting'
import RNProgressHud from 'progress-hud'
import { useNavigation } from '@react-navigation/native'
import Constant from '../../controller/Constant'

export const RegisterHook = () => {
    const navigation = useNavigation()

    const handleRegister = (email: string, passWord: string) => {
        const ProgressHUDMaskType: any = RNProgressHud.ProgressHUDMaskType
        RNProgressHud.showWithStatus('Xin chờ...', ProgressHUDMaskType.Clear)
        auth()
            .createUserWithEmailAndPassword(email, passWord)
            .then(() => {
                toast({
                    title: 'Thành công 😎',
                    message: '😍 Đăng ký tài khoản thành công !',
                    preset: 'done'
                })
                setTimeout(() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: Constant.screenName.LoginScreen as never }]
                    })
                }, 3000)
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('Địa chỉ email đó đã được sử dụng!')
                    toast({
                        title: 'Lỗi 😓',
                        message: '🙄 Địa chỉ email đã được sử dụng!!',
                        preset: 'error'
                    })
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('Địa chỉ email đó không hợp lệ!')
                    toast({
                        title: 'Lỗi 😓',
                        message: '🙄 Địa chỉ email đó không hợp lệ!!',
                        preset: 'error'
                    })
                }

                console.error(error)
            })
            .finally(() => RNProgressHud.dismiss())
    }

    return {
        handleRegister
    }
}
