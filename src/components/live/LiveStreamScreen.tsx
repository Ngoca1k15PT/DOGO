import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import IVSPlayer from 'amazon-ivs-react-native-player';

interface componentNameProps {}

const LiveStreamScreen = (props: componentNameProps) => {
  const URL =
    'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8';

  return <IVSPlayer streamUrl={URL} />;
};

export default LiveStreamScreen;

const styles = StyleSheet.create({
  container: {},
});
