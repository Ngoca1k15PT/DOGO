import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface componentNameProps {}

const HeaderComponents = (props: componentNameProps) => {
  return (
    <View style={styles.container}>
      <Text>componentName</Text>
    </View>
  );
};

export default HeaderComponents;

const styles = StyleSheet.create({
  container: {},
});
