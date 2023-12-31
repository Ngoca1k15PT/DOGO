// file khai báo các hằng số
import { Dimensions } from 'react-native'

const Constant = {
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    screenName: {
        home: 'Home',
        chat: 'Chat',
        video: 'Video',
        profile: 'Profile',
        tabBarNavigation: 'TabBarNavigation',
        LiveStreamScreen: 'LiveStreamScreen',
        LoginScreen: 'LoginScreen',
        RegisterScreen: 'RegisterScreen',
        EditProfileScreen: 'EditProfileScreen',
        UploadVideoScreen: 'UploadVideoScreen'
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
        backGround: '#1A1B22'
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
        zapfino: 'Zapfino'
    },
    icons: {
        icMusic: require('../assets/images/img_music.png'),
        icNoteMusic: require('../assets/images/img_note_music.png'),
        imgNotLogin: require('../assets/images/img_not_login.png'),
        icEditProfile: require('../assets/images/ic_edit_profile.png'),
        icHelp: require('../assets/images/ic_help.png'),
        icLogOut: require('../assets/images/ic_log_out.png'),
        icSecurity: require('../assets/images/ic_security.png'),
        icTerms: require('../assets/images/ic_terms.png'),
        icRightOut: require('../assets/images/ic_chevron_right.png'),
        icSetting: require('../assets/images/ic_settings.png'),
        icPolicy: require('../assets/images/ic_policy.png'),
        icArrowLeft: require('../assets/images/ic_arrow_left.png'),
        icMail: require('../assets/images/ic_mail.png'),
        imgLogin: require('../assets/images/auth/img_login.png'),
        imgRegister: require('../assets/images/auth/img_register.png'),
        imgWelcome: require('../assets/images/img_welcome.png'),
        imgSplashOne: require('../assets/images/img_splash_one.png'),
        imgSplashTwo: require('../assets/images/img_splash_two.png'),
        imgSplashThree: require('../assets/images/img_splash_three.png')
    },
    keys: {
        currentUser: 'currentUser'
    }
}

export default Constant
