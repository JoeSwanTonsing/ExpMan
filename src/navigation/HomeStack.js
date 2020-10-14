import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    initialRouteName="Dashboard"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#364156',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Dashboard"
      component={HomeScreen}
      options={{
        title: 'Dashboard',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={30}
            backgroundColor="#364156"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
