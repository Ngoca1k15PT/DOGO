import { toast } from '@baronha/ting'
import RNProgressHud from 'progress-hud'
import firestore from '@react-native-firebase/firestore'
import { navigationRef } from '../components/navigation/RootNavigation'
import storage from '@react-native-firebase/storage'
import AppManager from '../controller/AppManager'

export const UploadVideoHook = () => {

    const handleUpload = async(
        caption: string,
        nameMusic: string,
        video: any
    ) => { 
        let url = ''
        const pathToFile = `${video.path}`
        const ProgressHUDMaskType: any = RNProgressHud.ProgressHUDMaskType
        RNProgressHud.showWithStatus('Xin chờ...', ProgressHUDMaskType.Clear)
        await storage()
            .ref(
                video?.filename || Math.floor(Math.random() * Math.floor(999999999)) + '.mp4'
            )
            .putFile(pathToFile)
            .then(async (snapshot) => {
                url = await storage().ref(`${snapshot.metadata.fullPath}`).getDownloadURL()
                console.log('aa',url)
                firestore()
                .collection('Videos')
                .add({
                    idAcount: AppManager.shared.currentUser.uid,
                    caption: caption,
                    nameMusic: nameMusic,
                    urlVideo: url
                })
                .then(() => {
                    navigationRef.goBack()
                })
            })
            .catch((e) => {
                console.log('err', e)
            })
            .finally(() => RNProgressHud.dismiss())
    }
    
     return {
        handleUpload
    }
 }