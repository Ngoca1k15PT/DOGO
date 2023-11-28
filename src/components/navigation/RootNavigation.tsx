import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
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

const Stack = createNativeStackNavigator()

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
        <NavigationContainer>
            <StatusBar barStyle={'light-content'} backgroundColor={Constant.color.backGround} />
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name={Constant.screenName.tabBarNavigation}
                    component={TabBarNavigation}
                />
                <Stack.Screen
                    name={Constant.screenName.LiveStreamScreen}
                    component={LiveStreamScreen}
                />
                <Stack.Screen name={Constant.screenName.LoginScreen} component={LoginScreen} />
                <Stack.Screen
                    name={Constant.screenName.RegisterScreen}
                    component={RegisterScreen}
                />
                <Stack.Screen
                    name={Constant.screenName.EditProfileScreen}
                    component={EditProfileScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation
