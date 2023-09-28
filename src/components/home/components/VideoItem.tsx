import {StyleSheet, Text, View, Image, Animated, Easing} from 'react-native';
import React, {useRef, useEffect} from 'react';
import Video from 'react-native-video';
import {
  MusicalIcon,
  HeartIcon,
  ChatIcon,
  ArrowIcon,
  AddIcon,
} from '../../../assets/images/svg';
import Constant from '../../../controller/Constant';

type DataVideoProps = {
  data: any;
};

export default function VideoItem({data}: DataVideoProps) {
  const {uri, caption, channelName, musicName, comments, avatarUri, likes} =
    data;

  const discAnimatedValue = useRef(new Animated.Value(0)).current;

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

  useEffect(() => {
    Animated.loop(
      Animated.timing(discAnimatedValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  }, [discAnimatedValue]);

  return (
    <View style={styles.container}>
      <Video source={{uri}} style={styles.video} resizeMode="cover" />

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
    flex: 1,
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
});
