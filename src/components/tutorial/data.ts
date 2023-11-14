import { AnimationObject } from "lottie-react-native";

export interface TutorialData {
    id: number;
    animation: AnimationObject;
    text: string;
    textColor: string;
    backgroundColor: string;
}

const data: TutorialData[] = [
    {
        id: 1,
        animation: require('../../assets/lottie/splash_one.json'),
        text: 'Xin chao',
        textColor: '#ffffff',
        backgroundColor: '#FFFFFF'
    },
    {
        id: 2,
        animation: require('../../assets/lottie/splash_two.json'),
        text: 'Xin chao',
        textColor: '#FFFFFF',
        backgroundColor: '#FFFFFF'
    },
    {
        id: 3,
        animation: require('../../assets/lottie/splash_three.json'),
        text: 'Xin chao',
        textColor: '#FFFFFF',
        backgroundColor: '#FFFFFF'
    },
]