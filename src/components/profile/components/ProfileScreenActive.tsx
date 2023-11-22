import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import Constant from '@controller/Constant'
import DataProfileModel from '@controller/ListDataProfile'
import { useNavigation } from '@react-navigation/native'

type dataItem = {
    data: any
}

export type RootStackParamList = {
    LiveStreamScreen: undefined
}

const ItemList = ({ data }: dataItem) => {
    const navigation = useNavigation()

    const getIcon = () => {
        return data.status == false ? (
            <Image
                source={Constant.icons.icRightOut}
                style={styles.viewIconChevron}
                tintColor={'#FF4D67'}
            />
        ) : (
            <View />
        )
    }

    const handleOnclickItem = () => {
        navigation.navigate(Constant.screenName.LiveStreamScreen as never)
    }

    return (
        <TouchableOpacity style={styles.buttonView} onPress={handleOnclickItem}>
            <View style={styles.viewBodyButton}>
                <Image source={data.icon} style={styles.viewIcon} tintColor={'#FF4D67'} />
                <Text style={styles.textButton}>{data.title}</Text>
            </View>
            {getIcon()}
        </TouchableOpacity>
    )
}

const ProfileScreenActive = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.profileView}>
                    <Image
                        source={{
                            uri: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/30cc01b4-1c53-45f3-a990-b349ee1dd38b/width=450/00004-1163213725.jpeg'
                        }}
                        style={styles.avatar}
                    />
                    <Text style={styles.textName}>Đinh Hoàng Ngọc</Text>
                </View>
                {DataProfileModel.map((item) => {
                    return <ItemList data={item} />
                })}
            </ScrollView>
        </View>
    )
}

export default ProfileScreenActive

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonView: {
        height: 68,
        borderBottomWidth: 0.5,
        borderColor: '#2A2B39',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginHorizontal: 20
    },
    textButton: {
        color: 'white',
        fontFamily: Constant.fonts.americanTypewriterCondensed,
        marginLeft: 10,
        fontSize: 16
    },
    viewBodyButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewIcon: {
        width: 30,
        height: 30
    },
    viewIconChevron: {
        width: 15,
        height: 15
    },
    profileView: {
        alignItems: 'center',
        marginVertical: 25
    },
    avatar: {
        height: 120,
        width: 120,
        borderRadius: 60,
        resizeMode: 'cover'
    },
    textName: {
        color: Constant.color.lightPurple,
        fontSize: 22,
        fontFamily: Constant.fonts.americanTypewriterBold,
        marginTop: 8
    }
})
