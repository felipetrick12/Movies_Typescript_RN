import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 10,
  },
});
