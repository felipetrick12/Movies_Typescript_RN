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
  body: { marginTop: 10, marginHorizontal: 20 },
  body2: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 13,
    lineHeight: 15,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    lineHeight: 25,
  },
  img: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 20,
    left: 15,
  },
});
