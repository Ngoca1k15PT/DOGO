//Tab bar animation

import React, {useReducer, useEffect, useRef, useMemo} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  LayoutChangeEvent,
} from 'react-native';

// navigation
import {
  createBottomTabNavigator,
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/HomeScreen';
import VideoScreen from '../video/VideoScreen';
import ChatScreen from '../chat/ChatScreen';
import ProfileScreen from '../profile/ProfileScreen';
import Constant from '../../controller/Constant';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Svg, {Path} from 'react-native-svg';

import LottieView from 'lottie-react-native';

import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const TabBarNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={props => <AnimatedTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ref}) => (
            <LottieView
              ref={ref}
              source={require('../../assets/lottie/home.icon.json')}
              autoPlay
              loop={false}
              style={styles.icon}
            />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          tabBarIcon: ({ref}) => (
            <LottieView
              ref={ref}
              source={require('../../assets/lottie/setting.icon.json')}
              autoPlay
              loop={false}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ref}) => (
            <LottieView
              ref={ref}
              source={require('../../assets/lottie/chat.icon.json')}
              autoPlay
              loop={false}
              style={{
                width: 45,
                height: 45,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ref}) => (
            <LottieView
              ref={ref}
              source={require('../../assets/lottie/profile.icon.json')}
              autoPlay
              loop={false}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AnimatedTabBar = ({
  state: {index: activeIndex, routes},
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  const {bottom} = useSafeAreaInsets();

  const reducer = (state: any, action: {x: number; index: number}) => {
    return [...state, {x: action.x, index: action.index}];
  };

  const [layout, dispatch] = useReducer(reducer, []);

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({x: event.nativeEvent.layout.x, index});
  };

  const xOffsets = useDerivedValue(() => {
    if (layout.length !== routes.length) {
      return 0;
    }

    return [...layout].find(({index}) => index === activeIndex)?.x - 25;
  }, [activeIndex, layout]);

  const animationStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withTiming(xOffsets.value, {duration: 250})}],
    };
  });

  return (
    <View style={[styles.tabBar, {paddingBottom: bottom + 10}]}>
      <AnimatedSvg
        width={110}
        height={60}
        viewBox="0 0 110 60"
        style={[styles.activeBackground, animationStyles]}>
        <Path
          fill="#1A1B22"
          d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
        />
      </AnimatedSvg>
      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => {
          const active = index === activeIndex;
          const {options} = descriptors[route.key];

          return (
            <TabBarComponent
              key={route.key}
              active={active}
              options={options}
              onLayout={e => handleLayout(e, index)}
              onPress={() => navigation.navigate(route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

type TabBarComponentProps = {
  onLayout: (event: LayoutChangeEvent) => void;
  active?: boolean;
  onPress: () => void;
  options: BottomTabNavigationOptions;
};

const TabBarComponent = ({
  active,
  onLayout,
  onPress,
  options,
}: TabBarComponentProps) => {
  const ref = useRef<LottieView>(null);

  useEffect(() => {
    if (active && ref?.current) {
      ref.current?.play();
    }
  }, [active]);

  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [{scale: withTiming(active ? 1 : 0.5, {duration: 250})}],
    };
  });

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, {duration: 250}),
    };
  });

  return (
    <Pressable onPress={onPress} onLayout={onLayout} style={styles.component}>
      <Animated.View
        style={[styles.componentCircle, animatedComponentCircleStyles]}>
        <Animated.View
          style={[styles.iconContainer, animatedIconContainerStyles]}>
          {options.tabBarIcon ? options.tabBarIcon({ref}) : <Text>?</Text>}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export default TabBarNavigation;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#3E3E80',
  },
  activeBackground: {
    position: 'absolute',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // paddingVertical: 10,
  },
  component: {
    height: 60,
    width: 60,
    marginTop: -5,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    // backgroundColor: '#fff',
    backgroundColor: '#5E5E9D',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 36,
    width: 36,
  },
});
