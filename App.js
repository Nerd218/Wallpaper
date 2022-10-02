import React, { createContext } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Wallpaper_App/Screens/HomeScreen'
import CategoryScreen from '../Wallpaper_App/Screens/CategoryScreen'
import Splash from './Screens/Splash';
const Stack = createNativeStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
              gesturesEnabled: false
          }}
          
          />
          <Stack.Screen name="HomeScreen" component={HomeScreen} 
          options={{
            headerShown: false,
            gesturesEnabled: false
        }}/>
          <Stack.Screen name="CategoryScreen" component={CategoryScreen} 
          options={{
            headerShown: false,
            gesturesEnabled: false
        }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
export default App;