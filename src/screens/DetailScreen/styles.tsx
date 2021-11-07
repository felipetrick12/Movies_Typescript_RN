import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,

    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  image: {
    flex: 1,
  },
  body: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 16,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
