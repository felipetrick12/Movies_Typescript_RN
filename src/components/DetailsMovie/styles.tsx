import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
  },
  containerIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  body: {
    marginTop: 10,
  },
  overview: {
    width: '95%',
    textAlign: 'justify',
  },
});
