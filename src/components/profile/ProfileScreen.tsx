import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileScreenNotActive from './components/ProfileScreenNotActive'
import ProfileScreenActive from './components/ProfileScreenActive'
import Constant from '@controller/Constant'

interface componentNameProps {}

const ProfileScreen = (props: componentNameProps) => {
    const isActive = false

    return (
        <SafeAreaView style={styles.container}>
            {/* <HeaderComponents /> */}
            {isActive ? <ProfileScreenActive /> : <ProfileScreenNotActive />}
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constant.color.backGround
    }
})
