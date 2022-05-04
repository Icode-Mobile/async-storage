import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Presentation from '../Screens/Presentation';
import SignIn from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Presentation: any;
      SignIn: any;
      SignUp: any;
    }
  }
}

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Presentation'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Presentation' component={Presentation} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
