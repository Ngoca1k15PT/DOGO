import * as React from 'react'
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import Constant from '../../../controller/Constant'
import { ScaledSheet } from 'react-native-size-matters'

type Props = {
    style?: {}
    styleLabel?: TextStyle
    onPress?: () => void
    label?: string
    disabled?: boolean
}

const ButtonDefault = ({ disabled, style, styleLabel, label, onPress }: Props) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress} disabled={disabled}>
            <Text style={[styles.text, styleLabel]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default ButtonDefault

const styles = ScaledSheet.create({
    container: {},
    button: {
        height: '56@ms',
        borderRadius: '16@ms',
        marginTop: '20@ms',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: '15@ms',
        fontFamily: Constant.fonts.americanTypewriterBold
    }
})
