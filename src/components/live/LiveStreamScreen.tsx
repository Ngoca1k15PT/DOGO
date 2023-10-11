import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface componentNameProps {}

const LiveStreamScreen = (props: componentNameProps) => {
  return (
    <View style={styles.container}>
      <Text>componentName</Text>
    </View>
  );
};

export default LiveStreamScreen;

const styles = StyleSheet.create({
  container: {},
});
