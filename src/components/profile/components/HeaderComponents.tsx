import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Constant from '../../../controller/Constant';

const HeaderComponents = () => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textHeader}>Profile</Text>
    </View>
  );
};
export default HeaderComponents;

const styles = StyleSheet.create({
  containerHeader: {
    alignItems: 'center',
  },
  textHeader: {
    fontFamily: Constant.fonts.americanTypewriterCondensedBold,
    color: '#000000',
    fontSize: 26,
  },
});
