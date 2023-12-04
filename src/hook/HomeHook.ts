import { toast } from '@baronha/ting'
import RNProgressHud from 'progress-hud'
import firestore from '@react-native-firebase/firestore'
import { navigationRef } from '../components/navigation/RootNavigation'
import storage from '@react-native-firebase/storage'
import AppManager from '../controller/AppManager'

export const HomeHook = () => {

    const getData = async() => { 
        const data: any = []
        firestore()
            .collection('Videos')
            .get()
            .then(async (querySnapshot) => {
                await querySnapshot.forEach((documentSnapshot) => {
                    // console.log('data', data)
                    // console.log('aaa', documentSnapshot.data())
                    // setData([...data, documentSnapshot.data()])
                    data.push(documentSnapshot.data())
                })
            })
        return data
    }
    
     return {
       getData
    }
 }