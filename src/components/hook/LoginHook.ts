import auth from '@react-native-firebase/auth'
import { toast } from '@baronha/ting'
import RNProgressHud from 'progress-hud'
import { useNavigation } from '@react-navigation/native'
import Constant from '../../controller/Constant'

export const LoginHook = () => {
    const navigation = useNavigation()

    const handleLogin = (email: string, passWord: string) => {
        const ProgressHUDMaskType: any = RNProgressHud.ProgressHUDMaskType
        RNProgressHud.showWithStatus('Xin chờ...', ProgressHUDMaskType.Clear)
        auth()
            .signInWithEmailAndPassword(email, passWord)
            .then(() => {
                toast({
                    title: 'Thành công 😎',
                    message: '😍 Đăng nhập thành công !',
                    preset: 'done'
                })
                setTimeout(() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: Constant.screenName.tabBarNavigation as never }]
                    })
                }, 3000)
            })
            .catch((error) => {
                if (error.code === 'auth/invalid-email') {
                    console.log('Địa chỉ email không hợp lệ!')
                    toast({
                        title: 'Lỗi 😓',
                        message: '🙄 Địa chỉ email không hợp lệ!!',
                        preset: 'error'
                    })
                }

                console.error(error)
            })
            .finally(() => RNProgressHud.dismiss())
    }

    return {
        handleLogin
    }
}
