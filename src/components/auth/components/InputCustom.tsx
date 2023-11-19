import * as React from 'react';
import {Text, View, StyleSheet, TextInput, Image} from 'react-native';
import Constant from '../../../controller/Constant';
import Icon from 'react-native-vector-icons/Ionicons';

interface componentNameProps {
  value: any;
  setValue: any;
  type: any;
  customStyle: {};
  textPlaceholder: any;
  check: boolean;
}

const InputCustom = ({
  value,
  setValue,
  type,
  customStyle,
  textPlaceholder,
  check = true
}: componentNameProps) => {
  const checkTypeIcon = () => {
    switch (type) {
      case 'mail':
        return (
          <Icon
            name="mail-outline"
            size={24}
            color="#FF4D67"
            style={{marginRight: 15}}
          />
        );
      case 'security':
        return (
          <Image
            source={Constant.icons.icPolicy}
            style={styles.icon}
            tintColor={'#ff4d68d7'}
          />
        );
      default:
        break;
    }
  };

  return (
    <View style={[styles.container, customStyle]}>
      <TextInput
        value={value}
        onChangeText={text => setValue(text)}
        style={styles.inputStyle}
        placeholder={textPlaceholder}
        secureTextEntry={check}
      />
      {checkTypeIcon()}
    </View>
  );
};

export default InputCustom;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    // flex: 1,
    backgroundColor: '#dbdbdbc7',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  inputStyle: {
    flex: 1,
    marginLeft: 10,
  },
});
