import {View, StatusBar, FlatList} from 'react-native';
import React, {useState} from 'react';
import VideoModel from '../../controller/VideoData';
import VideoItem from './components/VideoItem';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Constant from '../../controller/Constant';

export default function HomeScreen() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const {bottom} = useSafeAreaInsets();

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#262524'} />
      <View
        style={{
          flex: 1,
          backgroundColor: '#262524',
        }}>
        <FlatList
          data={VideoModel}
          pagingEnabled
          renderItem={({item, index}) => (
            <VideoItem data={item} isActive={activeVideoIndex == index} />
          )}
          onScroll={e => {
            const index = Math.round(
              e.nativeEvent.contentOffset.y /
                (Constant.screen.height - bottom - 10),
            );
            setActiveVideoIndex(index);
          }}
        />
      </View>
    </>
  );
}
