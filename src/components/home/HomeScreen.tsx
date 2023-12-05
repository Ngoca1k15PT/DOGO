import { View, StatusBar, FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import VideoModel from '../../controller/VideoData'
import VideoItem from './components/VideoItem'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Constant from '../../controller/Constant'
import firestore from '@react-native-firebase/firestore'

export default function HomeScreen() {
    const [activeVideoIndex, setActiveVideoIndex] = useState(0)

    const { bottom } = useSafeAreaInsets()

    const [data, setData] = useState([])

    const getData = () => {
        firestore()
            .collection('Videos')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((documentSnapshot) => {
                    // console.log('data', data)
                    console.log('aaa', documentSnapshot.data())
                    // if (data.length == 0) {
                    //     setData([documentSnapshot.data()])
                    // } else {
                    let newdata = [...data, documentSnapshot.data()]
                    console.log('ndrt: ', newdata)

                    setData((prev) => [...prev, documentSnapshot.data()])
                    // }
                })
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <StatusBar barStyle={'light-content'} backgroundColor={'#262524'} />
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#262524'
                }}
            >
                <FlatList
                    data={data}
                    pagingEnabled
                    renderItem={({ item, index }) => (
                        <VideoItem data={item} isActive={activeVideoIndex == index} />
                    )}
                    onScroll={(e) => {
                        const index = Math.round(
                            e.nativeEvent.contentOffset.y / (Constant.screen.height - bottom - 10)
                        )
                        setActiveVideoIndex(index)
                    }}
                    style={styles.container}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
