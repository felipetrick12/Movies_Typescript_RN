import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import MovieDB from '../../api';
import { MovieDBNowPlaying } from '../../interfaces/MovieInterface';

const Home = () => {
  useEffect(() => {
    MovieDB.get<MovieDBNowPlaying>('/now_playing').then((result) => {
      console.log(result.data);
    });
  }, []);

  return (
    <View>
      <Text>Hola estoy muy contento de ti </Text>
    </View>
  );
};

export default Home;
