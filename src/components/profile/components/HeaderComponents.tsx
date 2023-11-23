import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import Constant from '../../../controller/Constant'

const HeaderComponents = () => {
    return (
        <View style={styles.containerHeader}>
            <Text style={styles.textHeader}>Hồ Sơ</Text>
        </View>
    )
}
export default HeaderComponents

const styles = StyleSheet.create({
    containerHeader: {
        alignItems: 'center'
    },
    textHeader: {
        fontFamily: Constant.fonts.americanTypewriterCondensedBold,
        color: '#FFFFFF',
        fontSize: 26
    }
})
