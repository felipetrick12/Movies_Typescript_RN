import React from 'react';
import { View, Animated, Button } from 'react-native';
import UseFade from '../../hooks/UseFade';

const FadeScreen = () => {
  const { opacity, fadeIn, fadeOut } = UseFade();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: '#084F6A',
          width: 150,
          maxHeight: 150,
          borderColor: 'white',
          borderWidth: 10,
          opacity: opacity,
          marginBottom: 10,
        }}
      />
      <View style={{ marginBottom: 10 }}>
        <Button title="fadeIn" onPress={fadeIn} />
      </View>
      <Button title="fadeIn" onPress={fadeOut} />
    </View>
  );
};

export default FadeScreen;
