// file khai báo các hằng số
import {Dimensions} from 'react-native';

const Constant = {
  screen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  screenName: {
    home: 'Home',
    chat: 'Chat',
    video: 'Video',
    profile: 'Profile',
    tabBarNavigation: 'TabBarNavigation',
  },
  color: {
    primary: '#1DA1F2',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#808080',
    lightGray: '#D3D3D3',
    blue: '#1E90FF',
    lightBlue: '#00BFFF',
    red: '#FF0000',
    lightRed: '#FFA07A',
    green: '#008000',
    lightGreen: '#90EE90',
    yellow: '#FFFF00',
    lightYellow: '#FFFFE0',
    orange: '#FFA500',
    lightOrange: '#FFD700',
    purple: '#800080',
    lightPurple: '#BA55D3',
    pink: '#FFC0CB',
    lightPink: '#FFB6C1',
  },
  fonts: {
    americanTypewriterBold: 'AmericanTypewriter-Bold',
    americanTypewriter: 'AmericanTypewriter',
    americanTypewriterCondensedBold: 'AmericanTypewriter-CondensedBold',
    americanTypewriterCondensed: 'AmericanTypewriter-Condensed',
    americanTypewriterCondensedLight: 'AmericanTypewriter-CondensedLight',
    americanTypewriterLight: 'AmericanTypewriter-Light',
    didotBold: 'Didot-Bold',
    didotItalic: 'Didot-Italic',
    didot: 'Didot',
    symbol: 'Symbol',
    zapfino: 'Zapfino',
  },
  icons: {
    icMusic: require('../assets/images/img_music.png'),
  },
};

export default Constant;
