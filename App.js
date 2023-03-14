import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from "react";
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import SettingsScreen from "./screens/SettingsScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ChatListScreen from "./screens/ChatListScreen";
import ChatSettingScreen from "./screens/ChatSettingScreen";

SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigation = () => {
  return(
    // bottom level navigation.
   <Tab.Navigator> 
      <Tab.Screen name="ChatList" component={ChatListScreen}  />
      <Tab.Screen name="Settings" component={SettingsScreen}  />
   </Tab.Navigator>
  )
}

export default function App() {

  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {
    
    const prepare = async () => {
      try {
        await Font.loadAsync({
          "black": require("./assets/fonts//Roboto-Black.ttf"),
          "blackItalic": require("./assets/fonts/Roboto-BlackItalic.ttf"),
          "bold": require("./assets/fonts/Roboto-Bold.ttf"),
          "boldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
          "italic": require("./assets/fonts/Roboto-Italic.ttf"),
          "light": require("./assets/fonts/Roboto-Light.ttf"),
          "lightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),
          "medium": require("./assets/fonts/Roboto-Medium.ttf"),
          "mediumItalic": require("./assets/fonts/Roboto-MediumItalic.ttf"),
          "regular": require("./assets/fonts/Roboto-Regular.ttf"),
          "thin": require("./assets/fonts/Roboto-Thin.ttf"),
          "thinItalic": require("./assets/fonts/Roboto-ThinItalic.ttf"),
        });
      }
      catch (error) {
        console.log.error();
      }
      finally {
        setAppIsLoaded(true);
      }
    };

    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  if (!appIsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider
      style={styles.container}
      onLayout={onLayout}>
   

        <NavigationContainer> 

        <Stack.Navigator>  
          {/* top level navigation. */}
          <Stack.Screen name="Home" component={TabNavigation} />
          <Stack.Screen name="ChatSettings" component={ChatSettingScreen} options={{
            headerTitle: "Settings"
          }}/>
        
        </Stack.Navigator>
         
         </NavigationContainer>
      
    </SafeAreaProvider> 
    // this SafeAreProvider makes it so everything doesn't go above the
    //where the battery is on your phone.
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
 
  },
  label: {
    color: 'black',
    fontSize: 18,
    fontFamily: "regular"
  }
});