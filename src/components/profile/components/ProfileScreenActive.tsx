import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Constant from '../../../controller/Constant';
import DataProfileModel from '../../../controller/ListDataProfile';

type dataItem = {
  data: any;
};

const ItemList = ({data}: dataItem) => {
  const getIcon = () => {
    return data.status == false ? (
      <Image
        source={Constant.icons.icRightOut}
        style={styles.viewIconChevron}
        tintColor={'#FF4D67'}
      />
    ) : (
      <View />
    );
  };

  return (
    <TouchableOpacity style={styles.buttonView}>
      <View style={styles.viewBodyButton}>
        <Image
          source={data.icon}
          style={styles.viewIcon}
          tintColor={'#FF4D67'}
        />
        <Text style={styles.textButton}>{data.title}</Text>
      </View>
      {getIcon()}
    </TouchableOpacity>
  );
};

const ProfileScreenActive = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {DataProfileModel.map(item => {
          return <ItemList data={item} />;
        })}
      </ScrollView>
    </View>
  );
};

export default ProfileScreenActive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonView: {
    height: 68,
    borderBottomWidth: 0.5,
    borderColor: '#2A2B39',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
  textButton: {
    color: 'white',
    fontFamily: Constant.fonts.americanTypewriterCondensed,
    marginLeft: 10,
    fontSize: 16,
  },
  viewBodyButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewIcon: {
    width: 30,
    height: 30,
  },
  viewIconChevron: {
    width: 15,
    height: 15,
  },
});
