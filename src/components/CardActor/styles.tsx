import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 20,
    height: 50,
    alignItems: 'center',
    paddingRight: 10,
  },
  content1: {
    flex: 1,
  },
  content2: {
    flex: 11,
  },
  text1: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    fontSize: 15,
  },
});
