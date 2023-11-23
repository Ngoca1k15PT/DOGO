import React, { useRef, useState, useEffect } from 'react'
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import AgoraUIKit from 'agora-rn-uikit'
import Constant from '../../controller/Constant'

export default function ChatScreen() {
    const [videoCall, setVideoCall] = useState(true)

    const connectionData = {
        appId: '094ecb36a6c94fe49efa04144c1fec44',
        channel: 'test',
        token: null // enter your channel token as a string
    }

    const rtcCallbacks = {
        EndCall: () => setVideoCall(false)
    }

    return videoCall ? (
        <View style={{ flex: 1 }}>
            <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks} />
        </View>
    ) : (
        <View
            style={{
                flex: 1,
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <TouchableOpacity onPress={() => setVideoCall(true)} style={styles.buttonStart}>
                <Text>Start Call</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStart: {
        backgroundColor: 'green',
        padding: 20,
        borderRadius: 30
    }
})
