import {View, Text, StyleSheet, StatusBar, FlatList} from 'react-native';
import * as React from 'react';
import VideoModel from '../../controller/VideoData';
import VideoItem from './components/VideoItem';

export default function HomeScreen() {
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
          renderItem={({item, index}) => <VideoItem data={item} />}
        />
      </View>
    </>
  );
}
