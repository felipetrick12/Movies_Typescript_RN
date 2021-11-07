import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Movie } from '../../interfaces/MovieInterface';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/StackNavigation';

interface Props {
  movie: Movie;
  width?: number;
  height?: number;
}

type DetailScreen = StackNavigationProp<RootStackParamList, 'DetailScreen'>;

const MoviePoster = ({ movie, width = 300, height = 420 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation<DetailScreen>();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 7,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}
      onPress={() => navigation.navigate('DetailScreen', movie)}>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default MoviePoster;
