import {View, Text, StyleSheet, StatusBar} from 'react-native';
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
        <VideoItem data={VideoModel[0]} />
      </View>
    </>
  );
}
