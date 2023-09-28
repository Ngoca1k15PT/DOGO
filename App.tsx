import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import RootNavigation from './src/components/navigation/RootNavigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import {hideNavigationBar} from 'react-native-navigation-bar-color';

hideNavigationBar();

const App = () => {
  return (
    <View style={styles.container}>
      <RootNavigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
