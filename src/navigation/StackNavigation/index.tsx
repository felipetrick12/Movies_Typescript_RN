import React from 'react';
import Home from '../../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../../screens/DetailScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        title: 'Bienvenido',
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
