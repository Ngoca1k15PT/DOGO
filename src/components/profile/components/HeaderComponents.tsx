import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import Constant from '../../../controller/Constant'
import Icon from 'react-native-vector-icons/Ionicons'

const heightStatus = StatusBar.currentHeight

const HeaderComponents = () => {
    return (
        <View style={styles.containerHeader}>
            <TouchableOpacity>
                <Icon name='arrow-back-sharp' color={'white'} size={25} />
            </TouchableOpacity>
            <Text style={styles.textHeader}>Edit Profile</Text>
            <View />
        </View>
    )
}
export default HeaderComponents

const styles = StyleSheet.create({
    containerHeader: {
        marginTop: heightStatus,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center'
    },
    textHeader: {
        fontFamily: Constant.fonts.americanTypewriterCondensedBold,
        color: '#FFFFFF',
        fontSize: 26
    }
})
