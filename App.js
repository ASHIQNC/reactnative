

import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FrontScreen } from './src/screens/Frontscreen'
import { Login } from './src/screens/Login';
import { Home } from './src/screens/Home';
import Detail from './src/screens/Details';
import SplashScreen from "react-native-splash-screen"
import { Forgetpassword } from './src/screens/Forgetpassword';


function App() {

  //we need to give this line for disepearing the splash screen when loaded the app and move to home screen
  // React.useEffect(() => {
  //   SplashScreen.hide();
  // });

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="FontScreen"
          component={FrontScreen}

        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Forgetpassword" component={Forgetpassword} />
      </Stack.Navigator>
    </NavigationContainer>

  );

}




export default App;
