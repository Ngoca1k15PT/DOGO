import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import TabBarNavigation from './TabBarNavigation'
import { StatusBar } from 'react-native'
import Constant from '../../controller/Constant'
import LiveStreamScreen from '../live/LiveStreamScreen'
import LoginScreen from '../auth/LoginScreen'
import RegisterScreen from '../auth/RegisterScreen'
import { storage } from '../../contract/Mmkv'
import AppManager from '../../controller/AppManager'
import EditProfileScreen from '../../components/profile/EditProfileScreen'
import UploadVideoScreen from '../home/components/UploadVideoScreen'
import RootStackParamList from './RootStackParamList'

const Stack = createStackNavigator<RootStackParamList>()

// ...

export const navigationRef = createNavigationContainerRef<RootStackParamList>()

const RootNavigation = () => {
    const checkLocalData = () => {
        try {
            var currentUser = storage.getString(Constant.keys.currentUser)
            if (currentUser) {
                AppManager.shared.currentUser = JSON.parse(currentUser)
            }
        } catch (e) {
            console.log('Lỗi', e)
        }
    }

    useEffect(() => {
        checkLocalData()
    }, [])

    return (
        <NavigationContainer ref={navigationRef}>
            <StatusBar barStyle={'light-content'} backgroundColor={Constant.color.backGround} />
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='TabBarNavigation' component={TabBarNavigation} />
                <Stack.Screen name='LiveStreamScreen' component={LiveStreamScreen} />
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
                <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
                <Stack.Screen name='EditProfileScreen' component={EditProfileScreen} />
                <Stack.Screen name='UploadVideoScreen' component={UploadVideoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation
