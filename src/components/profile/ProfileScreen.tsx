import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HeaderComponents from './components/HeaderComponents';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileScreenNotActive from './components/ProfileScreenNotActive';
import ProfileScreenActive from './components/ProfileScreenActive';

interface componentNameProps {}

const ProfileScreen = (props: componentNameProps) => {
  const isActive = false;

  return (
    <SafeAreaView style={styles.container}>
      {/* <HeaderComponents /> */}
      {isActive ? <ProfileScreenActive /> : <ProfileScreenNotActive />}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1B22',
  },
});
