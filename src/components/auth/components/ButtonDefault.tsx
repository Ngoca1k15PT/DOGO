import * as React from 'react'
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import Constant from '../../../controller/Constant'

type Props = {
    style?: ViewStyle
    styleLabel?: TextStyle
    onPress?: () => void
    label?: string
    disabled?: boolean
}

const ButtonDefault = ({ disabled, style, styleLabel, label, onPress }: Props) => {
    return (
        <TouchableOpacity
            style={{ ...styles.button, ...style }}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={{ ...styles.text, ...styleLabel }}>{label}</Text>
        </TouchableOpacity>
    )
}

export default ButtonDefault

const styles = StyleSheet.create({
    container: {},
    button: {
        height: 56,
        borderRadius: 16,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        fontFamily: Constant.fonts.americanTypewriterBold
    }
})
