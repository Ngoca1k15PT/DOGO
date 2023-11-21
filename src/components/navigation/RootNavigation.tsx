import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import TabBarNavigation from './TabBarNavigation'
import { StatusBar } from 'react-native'
import Constant from '../../controller/Constant'
import LiveStreamScreen from '../live/LiveStreamScreen'
import LoginScreen from '../auth/LoginScreen'
import RegisterScreen from '../auth/RegisterScreen'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation
