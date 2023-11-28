import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderComponents from './components/HeaderComponents'
import { ScaledSheet } from 'react-native-size-matters'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Constant from '../../controller/Constant'

const EditProfileScreen = () => {
    return (
        <KeyboardAwareScrollView style={styles.container}>
            <SafeAreaView>
                <HeaderComponents />
                <Text>EditProfileScreen</Text>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

export default EditProfileScreen

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constant.color.backGround
    }
})
