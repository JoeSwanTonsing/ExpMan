import React from 'react';
import {SafeAreaView, View, Text, Button, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

//my components & Screens
import DrawerContent from './navigation/DrawerContent';
import HomeStack from './navigation/HomeStack';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Dashboard"
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="Dashboard" component={HomeStack} />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
