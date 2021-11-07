import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../../interfaces/MovieInterface';
import MoviePoster from '../MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}
const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View
      style={{
        height: title ? 270 : 220,
      }}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            margin: 10,
          }}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({ item }: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
