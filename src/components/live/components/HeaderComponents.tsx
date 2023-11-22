import * as React from 'react'
import { Text, View, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native'
import Constant from '@controller/Constant'

interface componentNameProps {}

const HeaderComponents = (props: componentNameProps) => {
    return (
        <View style={[styles.container, { top: StatusBar.currentHeight }]}>
            <TouchableOpacity>
                <Image source={Constant.icons.icArrowLeft} />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderComponents

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        height: 48,
        position: 'absolute',
        left: 0,
        right: 0,
        justifyContent: 'center',
        paddingHorizontal: 10
    }
})
