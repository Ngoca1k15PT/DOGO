import auth from '@react-native-firebase/auth'
import { toast } from '@baronha/ting'
import RNProgressHud from 'progress-hud'
import Constant from '../controller/Constant'
import UserModel from '../model/UseModel'
import AppManager from '../controller/AppManager'
import { storage } from '../contract/Mmkv'
import { navigationRef } from '../components/navigation/RootNavigation'

export const LoginHook = () => {

    const handleLogin = (email: string, passWord: string) => {
        const ProgressHUDMaskType: any = RNProgressHud.ProgressHUDMaskType
        RNProgressHud.showWithStatus('Xin chờ...', ProgressHUDMaskType.Clear)
        auth()
            .signInWithEmailAndPassword(email, passWord)
            .then((res) => {
                toast({
                    title: 'Thành công 😎',
                    message: '😍 Đăng nhập thành công !',
                    preset: 'done'
                })

                let user = new UserModel(res.user)
                user.isActivity = true
                res.user.getIdToken().then((res) => {
                    user.accessToken = res
                })
                storage.set(Constant.keys.currentUser,JSON.stringify(user))
                AppManager.shared.currentUser = user
                setTimeout(() => {
                    navigationRef.reset({
                        index: 0,
                        routes: [{ name: 'TabBarNavigation'}]
                    })
                }, 2000)
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
