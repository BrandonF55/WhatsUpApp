import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import SettingsScreen from '../screens/SettingsScreen.jsx';
import ChatListScreen from '../screens/ChatListScreen.jsx';
import ChatSettingScreen from '../screens/ChatSettingScreen.jsx';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigation = () => {
  return (
    // bottom level navigation bottom of screen. 
    <Tab.Navigator screenOptions={{ headerTitle: ' ' }}>

      <Tab.Screen name="ChatList" component={ChatListScreen} options={{
         tabBarLabel: 'Chats',
         tabBarIcon: ({ color, size }) => <Entypo name="chat"  size={ size } color={ color } />
        
         }} />
         
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
         tabBarLabel: 'Settings', 
         tabBarIcon: ({ color, size }) => <Ionicons name="ios-settings-sharp" size={ size } color={ color } /> 
         
         }} />

    </Tab.Navigator>
  )
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="ChatSettings" component={ChatSettingScreen} options={{ headerTitle: 'Settings' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;