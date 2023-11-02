import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import IVSPlayer from 'amazon-ivs-react-native-player';
import HeaderComponents from './components/HeaderComponents';

interface componentNameProps {}

const LiveStreamScreen = (props: componentNameProps) => {
  const URL =
    'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8';

  const liveStream = () => {
    return <IVSPlayer streamUrl={URL} />;
  };

  return (
    <View style={styles.container}>
      <HeaderComponents />
      {liveStream()}
    </View>
  );
};

export default LiveStreamScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
