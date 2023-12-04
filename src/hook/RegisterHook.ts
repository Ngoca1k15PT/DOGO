import auth from '@react-native-firebase/auth'
import { toast } from '@baronha/ting'
import RNProgressHud from 'progress-hud'
import firestore from '@react-native-firebase/firestore'
import { navigationRef } from '../components/navigation/RootNavigation'

export const RegisterHook = () => {

    const handleRegister = (email: string, passWord: string) => {
        const ProgressHUDMaskType: any = RNProgressHud.ProgressHUDMaskType
        RNProgressHud.showWithStatus('Xin chờ...', ProgressHUDMaskType.Clear)
        auth()
            .createUserWithEmailAndPassword(email, passWord)
            .then((res) => {
                toast({
                    title: 'Thành công 😎',
                    message: '😍 Đăng ký tài khoản thành công !',
                    preset: 'done'
                })
                firestore()
                    .collection('Users')
                    .doc(res.user.uid)
                    .set({ email: res.user.email })
                    .then(() => {
                        console.log('User added!')
                    })
                setTimeout(() => {
                    navigationRef.reset({
                        index: 0,
                        routes: [{ name: 'LoginScreen'}]
                    })
                }, 2000)
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
        handleRegister
    }
}
