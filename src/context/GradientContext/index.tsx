import React, { createContext, useState } from 'react';
import { ContextProps, ImageColors, Props } from './interfaces';

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({ children }: Props) => {
  const [currentColor, setCurrentColor] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [previosColor, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colors: ImageColors) => {
    setCurrentColor(colors);
  };

  const setPrevMainColors = (colors: ImageColors) => {
    setPrevColors(colors);
  };

  return (
    <GradientContext.Provider
      value={{
        currentColor,
        previosColor,
        setMainColors,
        setPrevMainColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
