import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  StatusBar,
} from 'react-native';
import React, {useRef, useEffect, useCallback} from 'react';
import Video from 'react-native-video';
import {
  MusicalIcon,
  HeartIcon,
  ChatIcon,
  ArrowIcon,
  AddIcon,
} from '../../../assets/images/svg';
import Constant from '../../../controller/Constant';
import {getMusicNoteAnimation} from '../../../controller/Utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type DataVideoProps = {
  data: any;
  isActive: boolean;
};

export default function VideoItem({data, isActive}: DataVideoProps) {
  const {uri, caption, channelName, musicName, comments, avatarUri, likes} =
    data;

  const discAnimatedValue = useRef(new Animated.Value(0)).current;
  const musicNoteAnimatedValue1 = useRef(new Animated.Value(0)).current;
  const musicNoteAnimatedValue2 = useRef(new Animated.Value(0)).current;
  const {bottom, top} = useSafeAreaInsets();

  const discAnimation = {
    transform: [
      {
        rotate: discAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  const musicNoteAnimation1 = getMusicNoteAnimation({
    animatedValue: musicNoteAnimatedValue1,
    isRotatedLeft: false,
  });

  const musicNoteAnimation2 = getMusicNoteAnimation({
    animatedValue: musicNoteAnimatedValue2,
    isRotatedLeft: true,
  });

  const discAnimationLoopRef = useRef<any>();
  const musicAnimationLoopRef = useRef<any>();

  const triggerAnimation = useCallback(() => {
    discAnimationLoopRef.current = Animated.loop(
      Animated.timing(discAnimatedValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    );
    discAnimationLoopRef.current.start();

    musicAnimationLoopRef.current = Animated.loop(
      Animated.sequence([
        Animated.timing(musicNoteAnimatedValue1, {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(musicNoteAnimatedValue2, {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
    );
    musicAnimationLoopRef.current.start();
  }, [discAnimatedValue, musicNoteAnimatedValue1, musicNoteAnimatedValue1]);

  useEffect(() => {
    if (isActive) {
      triggerAnimation();
    } else {
      discAnimationLoopRef.current?.stop();
      musicAnimationLoopRef.current?.stop();
      discAnimatedValue.setValue(0);
      musicNoteAnimatedValue1.setValue(0);
      musicNoteAnimatedValue1.setValue(0);
    }
  }, [
    isActive,
    triggerAnimation,
    discAnimatedValue,
    musicNoteAnimatedValue1,
    musicNoteAnimatedValue2,
  ]);

  return (
    <View
      style={[
        styles.container,
        {height: Constant.screen.height - bottom - 15},
      ]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
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
          <Image source={{uri: avatarUri}} style={styles.avatar} />
          <View style={styles.followButton}>
            <AddIcon width={22} height={22} fill={'red'} />
          </View>
        </View>
        <View style={styles.verticalBarItem}>
          <HeartIcon width={32} height={32} fill={'#fff'} />
          <Text style={styles.verticalBarText}>{likes}</Text>
        </View>
        <View style={styles.verticalBarItem}>
          <ChatIcon width={32} height={32} fill={'#fff'} />
          <Text style={styles.verticalBarText}>{comments}</Text>
        </View>
        <View style={styles.verticalBarItem}>
          <ArrowIcon width={32} height={32} fill={'#fff'} />
          <Text style={styles.verticalBarText}>Share</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Constant.screen.width,
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  bottomLeftSection: {
    flex: 4,
  },
  bottomRightSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  channelName: {
    color: 'white',
    fontWeight: 'bold',
  },
  caption: {
    color: 'white',
    marginVertical: 8,
  },
  musicNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicName: {
    color: '#fff',
  },
  musicDisc: {
    width: 40,
    height: 40,
  },
  verticalBar: {
    position: 'absolute',
    right: 8,
    bottom: 72,
  },
  verticalBarItem: {
    marginBottom: 24,
    alignItems: 'center',
  },
  verticalBarText: {
    color: 'white',
    marginTop: 4,
  },
  avatarContainer: {
    marginBottom: 48,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  followButton: {
    position: 'absolute',
    bottom: -20,
    width: 16,
    height: 32,
  },
  musicNote: {
    position: 'absolute',
    width: 16,
    height: 16,
    tintColor: 'white',
    right: 40,
    bottom: 16,
  },
});
