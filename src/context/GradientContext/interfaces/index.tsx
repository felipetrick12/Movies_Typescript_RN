export interface Props {
  children: JSX.Element | JSX.Element[];
}

export interface ImageColors {
  primary: string;
  secondary: string;
}

export interface ContextProps {
  currentColor: ImageColors;
  previosColor: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setPrevMainColors: (colors: ImageColors) => void;
}
