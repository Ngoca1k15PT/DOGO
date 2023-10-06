import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HeaderComponents from './components/HeaderComponents';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileScreenNotActive from './components/ProfileScreenNotActive';

interface componentNameProps {}

const ProfileScreen = (props: componentNameProps) => {
  const isActive = false;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponents />
      {isActive ? <View /> : <ProfileScreenNotActive />}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
