import ImageColors from 'react-native-image-colors';

export const getImageColor = async (uri: string) => {
  const color = await ImageColors.getColors(uri, {});
  let primary;
  let secondary;
  switch (color.platform) {
    case 'android':
      // web result properties
      primary = color.dominant;
      secondary = color.average;
      break;
    case 'ios':
      // iOS result properties
      primary = color.primary;
      secondary = color.secondary;
      break;
    default:
      throw new Error('Unexpected platform key');
  }
  return [primary, secondary];
};
