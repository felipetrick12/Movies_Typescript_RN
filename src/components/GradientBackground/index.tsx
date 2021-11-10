import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../../context/GradientContext';
import UseFade from '../../hooks/UseFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}
const GradientBackground = ({ children }: Props) => {
  const { currentColor, previosColor, setPrevMainColors } =
    useContext(GradientContext);

  const { opacity, fadeIn, fadeOut } = UseFade();

  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors(currentColor);
      fadeOut();
    });
  }, [currentColor]);
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[previosColor.primary, previosColor.secondary, 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.7 }}
      />
      <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity }}>
        <LinearGradient
          colors={[currentColor.primary, currentColor.secondary, 'white']}
          style={{ ...StyleSheet.absoluteFillObject }}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.5, y: 0.7 }}
        />
      </Animated.View>
      {children}
    </View>
  );
};

export default GradientBackground;
