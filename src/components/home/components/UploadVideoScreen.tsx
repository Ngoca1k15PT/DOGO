import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import HeaderComponent from '../../common/HeaderComponent'
import InputCustom from '../../auth/components/InputCustom'
import Constant from '../../../controller/Constant'
import DocumentPicker from 'react-native-document-picker'
import Icon from 'react-native-vector-icons/Ionicons'
import ImagePicker from 'react-native-image-crop-picker'
import BottomDrawer, { BottomDrawerMethods } from 'react-native-animated-bottom-drawer'
import ButtonDefault from '../../auth/components/ButtonDefault'
import { UploadVideoHook } from '../../../hook/UploadVideoHook'
import AppManager from '../../../controller/AppManager'
import { navigationRef } from '../../navigation/RootNavigation'
import { toast } from '@baronha/ting'

const UploadVideoScreen = () => {
    const [caption, setCaption] = useState('')
    const [nameMusic, setNameMusic] = useState('')
    const [video, setVideo] = useState()
    const bottomDrawerRef: any = useRef<BottomDrawerMethods>(null)
    const { handleUpload } = UploadVideoHook()

    const handleOpentCamera = async () => {
        bottomDrawerRef.current.close()
        ImagePicker.openCamera({
            mediaType: 'video'
        })
            .then(async (res) => {
                setVideo(res as never)
            })
            .catch((e) => {
                console.log('err', e)
            })
    }

    const handleOpenLibrary = () => {
        bottomDrawerRef.current.close()
        ImagePicker.openPicker({
            mediaType: 'video'
        })
            .then(async (res) => {
                setVideo(res as never)
            })
            .catch((e) => {})
    }

    const handleOnclickUpload = () => {
        if (AppManager.shared.currentUser?.uid == null) {
            navigationRef.navigate('LoginScreen')
        } else if (!caption || !nameMusic) {
            toast({
                title: 'Lỗi 😓',
                message: '🙄Vui lòng nhập đầy đủ thông tin!!',
                preset: 'error'
            })
        } else {
            handleUpload(caption, nameMusic, video)
        }
    }

    return (
        <SafeAreaView style={styles.componnetContenr}>
            <HeaderComponent title='UpLoad Video' />
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.title}>Caption:</Text>
                    <InputCustom
                        value={caption}
                        setValue={setCaption}
                        type={'none'}
                        textPlaceholder={''}
                        check={false}
                        customStyle={{
                            borderColor: '#FF4D67'
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.title}>Music Name:</Text>
                    <InputCustom
                        value={nameMusic}
                        setValue={setNameMusic}
                        type={'none'}
                        textPlaceholder={''}
                        check={false}
                        customStyle={{
                            borderColor: '#FF4D67'
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.title}>Upload Video: </Text>
                    <TouchableOpacity
                        onPress={() => bottomDrawerRef.current.open()}
                        style={styles.buttonPick}
                    >
                        <Icon name='camera' size={150} color={'#FF4D67'} />
                    </TouchableOpacity>
                </View>
                <View>
                    <ButtonDefault
                        label='Upload'
                        style={styles.buttonUpload}
                        styleLabel={{ color: 'white' }}
                        onPress={handleOnclickUpload}
                    />
                </View>
            </ScrollView>
            <BottomDrawer ref={bottomDrawerRef} initialHeight={150}>
                {/* <View style={styles.contentContainer}> */}
                <TouchableOpacity style={styles.buttonModal} onPress={handleOpenLibrary}>
                    <Text style={styles.textModal}>Thư viện</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonModal} onPress={handleOpentCamera}>
                    <Text style={styles.textModal}>Camera</Text>
                </TouchableOpacity>
                {/* </View> */}
            </BottomDrawer>
        </SafeAreaView>
    )
}

export default UploadVideoScreen

const styles = StyleSheet.create({
    componnetContenr: {
        flex: 1,
        backgroundColor: Constant.color.backGround
    },
    container: {
        marginHorizontal: 20,
        flex: 1
    },
    title: {
        fontFamily: Constant.fonts.americanTypewriterBold,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
    },
    contentContainer: {
        flex: 1
        // alignItems: 'center'
    },
    buttonModal: {
        height: 48,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#6b6b6b'
    },
    textModal: {
        fontFamily: Constant.fonts.americanTypewriterBold,
        fontSize: 16,
        color: '#000000'
    },
    buttonPick: {
        borderWidth: 1.5,
        marginHorizontal: 25,
        minHeight: Constant.screen.height * 0.45,
        borderRadius: 5,
        borderColor: '#FF4D67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonUpload: {
        backgroundColor: '#FF4D67',
        borderRadius: 26,
        marginHorizontal: 40,
        height: 48,
        marginTop: 40
    }
})
