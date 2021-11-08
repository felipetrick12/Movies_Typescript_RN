import React from 'react';
import Home from '../../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../../screens/DetailScreen';
import { Movie } from '../../interfaces/MovieInterface';

export type RootStackParamList = {
  Home: undefined;
  DetailScreen: Movie;
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
