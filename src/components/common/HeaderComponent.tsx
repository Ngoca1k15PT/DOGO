import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { navigationRef } from '../navigation/RootNavigation'
import Constant from '../../controller/Constant'

const currentHeight: any = StatusBar.currentHeight
type Props = {
    title: string
}

const HeaderComponent = ({ title = '' }: Props) => {
    const handleOnclickBack = () => {
        navigationRef.goBack()
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleOnclickBack}>
                <Icon name='arrow-back' size={25} color={'#ffffff'} />
            </TouchableOpacity>
            <View>
                <Text style={styles.textTitle}>{title}</Text>
            </View>
            <View />
        </View>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({
    container: {
        marginTop: currentHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center'
    },
    textTitle: {
        fontFamily: Constant.fonts.americanTypewriterBold,
        fontSize: 20,
        color: '#ffffff'
    }
})
