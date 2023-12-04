import {
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    Easing,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import React, { useRef, useEffect, useCallback } from 'react'
import Video from 'react-native-video'
import { MusicalIcon, HeartIcon, ChatIcon, ArrowIcon, AddIcon } from '../../../assets/images/svg'
import Constant from '../../../controller/Constant'
import { getMusicNoteAnimation } from '../../../controller/Utils'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ScaledSheet } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/Ionicons'
import { navigationRef } from '../../navigation/RootNavigation'

type DataVideoProps = {
    data: any
    isActive: boolean
}

const currentHeight: any = StatusBar.currentHeight

export default function VideoItem({ data, isActive }: DataVideoProps) {
    const { urlVideo, caption, channelName, musicName, comments, avatarUri, likes } = data

    const discAnimatedValue = useRef(new Animated.Value(0)).current
    const musicNoteAnimatedValue1 = useRef(new Animated.Value(0)).current
    const musicNoteAnimatedValue2 = useRef(new Animated.Value(0)).current
    const { bottom, top } = useSafeAreaInsets()

    const discAnimation = {
        transform: [
            {
                rotate: discAnimatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg']
                })
            }
        ]
    }

    const musicNoteAnimation1 = getMusicNoteAnimation({
        animatedValue: musicNoteAnimatedValue1,
        isRotatedLeft: false
    })

    const musicNoteAnimation2 = getMusicNoteAnimation({
        animatedValue: musicNoteAnimatedValue2,
        isRotatedLeft: true
    })

    const discAnimationLoopRef = useRef<any>()
    const musicAnimationLoopRef = useRef<any>()

    const triggerAnimation = useCallback(() => {
        discAnimationLoopRef.current = Animated.loop(
            Animated.timing(discAnimatedValue, {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: false
            })
        )
        discAnimationLoopRef.current.start()

        musicAnimationLoopRef.current = Animated.loop(
            Animated.sequence([
                Animated.timing(musicNoteAnimatedValue1, {
                    toValue: 1,
                    duration: 3000,
                    easing: Easing.linear,
                    useNativeDriver: false
                }),
                Animated.timing(musicNoteAnimatedValue2, {
                    toValue: 1,
                    duration: 3000,
                    easing: Easing.linear,
                    useNativeDriver: false
                })
            ])
        )
        musicAnimationLoopRef.current.start()
    }, [discAnimatedValue, musicNoteAnimatedValue1, musicNoteAnimatedValue1])

    const onclickUpload = () => {
        navigationRef.navigate('UploadVideoScreen')
    }

    useEffect(() => {
        if (isActive) {
            triggerAnimation()
        } else {
            discAnimationLoopRef.current?.stop()
            musicAnimationLoopRef.current?.stop()
            discAnimatedValue.setValue(0)
            musicNoteAnimatedValue1.setValue(0)
            musicNoteAnimatedValue1.setValue(0)
        }
    }, [
        isActive,
        triggerAnimation,
        discAnimatedValue,
        musicNoteAnimatedValue1,
        musicNoteAnimatedValue2
    ])

    return (
        <View
            style={[
                styles.container,
                {
                    width: Constant.screen.width,
                    height:
                        // Constant.screen.height - bottom - 49 + StatusBar.currentHeight,
                        Constant.screen.height - 49 + currentHeight
                }
            ]}
        >
            <TouchableOpacity style={styles.btnUpload} onPress={onclickUpload}>
                <Icon name='camera' size={25} color={'#f8778a'} />
            </TouchableOpacity>
            <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
            <Video
                source={{ uri: urlVideo }}
                style={styles.video}
                resizeMode={'cover' as never}
                paused={!isActive}
                repeat={true}
            />
            <View style={styles.bottomSection}>
                <View style={styles.bottomLeftSection}>
                    <Text style={styles.channelName}>{channelName}</Text>
                    <Text style={styles.caption}>{caption}</Text>
                    <View style={styles.musicNameContainer}>
                        <MusicalIcon width={12} height={12} marginRight={8} fill={'#fff'} />
                        <Text style={styles.musicName}>{musicName}</Text>
                    </View>
                </View>
                <View style={styles.bottomRightSection}>
                    <Animated.Image
                        source={Constant.icons.icNoteMusic}
                        style={[styles.musicNote, musicNoteAnimation1]}
                    />
                    <Animated.Image
                        source={Constant.icons.icNoteMusic}
                        style={[styles.musicNote, musicNoteAnimation2]}
                    />
                    <Animated.Image
                        source={Constant.icons.icMusic}
                        style={[styles.musicDisc, discAnimation]}
                    />
                </View>
            </View>
            <View style={styles.verticalBar}>
                <View style={[styles.verticalBarItem, styles.avatarContainer]}>
                    <Image
                        source={{
                            uri:
                                avatarUri ||
                                'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg'
                        }}
                        style={styles.avatar}
                    />
                    <View style={styles.followButton}>
                        <AddIcon width={22} height={22} fill={'red'} />
                    </View>
                </View>
                <View style={styles.verticalBarItem}>
                    <HeartIcon width={32} height={32} fill={'#fff'} />
                    <Text style={styles.verticalBarText}>{999}</Text>
                </View>
                <View style={styles.verticalBarItem}>
                    <ChatIcon width={32} height={32} fill={'#fff'} />
                    <Text style={styles.verticalBarText}>{999}</Text>
                </View>
                <View style={styles.verticalBarItem}>
                    <ArrowIcon width={32} height={32} fill={'#fff'} />
                    <Text style={styles.verticalBarText}>Share</Text>
                </View>
            </View>
        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        width: Constant.screen.width
    },
    video: {
        position: 'absolute',
        width: Constant.screen.width,
        height: Constant.screen.height
        // width: 200,
        // height: 200
    },
    bottomSection: {
        position: 'absolute',
        bottom: 0,
        width: Constant.screen.width,
        flexDirection: 'row',
        paddingHorizontal: '8@ms',
        paddingBottom: '16@ms'
    },
    bottomLeftSection: {
        flex: 4
    },
    bottomRightSection: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    channelName: {
        color: 'white',
        fontWeight: 'bold'
    },
    caption: {
        color: 'white',
        marginVertical: '8@ms'
    },
    musicNameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    musicName: {
        color: '#fff'
    },
    musicDisc: {
        width: '40@ms',
        height: '40@ms'
    },
    verticalBar: {
        position: 'absolute',
        right: '8@ms',
        bottom: '72@ms'
    },
    verticalBarItem: {
        marginBottom: '24@ms',
        alignItems: 'center'
    },
    verticalBarText: {
        color: 'white',
        marginTop: '4@ms'
    },
    avatarContainer: {
        marginBottom: '48@ms'
    },
    avatar: {
        width: '48@ms',
        height: '48@ms',
        borderRadius: '24@ms'
    },
    followButton: {
        position: 'absolute',
        bottom: '-20@ms',
        width: '16@ms',
        height: '32@ms'
    },
    musicNote: {
        position: 'absolute',
        width: '16@ms',
        height: '16@ms',
        tintColor: 'white',
        right: '40@ms',
        bottom: '16@ms'
    },
    btnUpload: {
        position: 'absolute',
        zIndex: 999,
        top: '50@ms',
        right: '20@ms',
        height: '40@ms',
        width: '40@ms',
        borderWidth: 1,
        borderRadius: '20@ms',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#FF4D67'
    }
})
