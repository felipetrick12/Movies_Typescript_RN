import React, { useContext } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Movie } from '../../interfaces/MovieInterface';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/StackNavigation';
import { getImageColor } from '../../helpers/getImageColor';
import { GradientContext } from '../../context/GradientContext';

interface Props {
  movie: Movie;
  width?: number;
  height?: number;
}

type DetailScreen = StackNavigationProp<RootStackParamList, 'DetailScreen'>;

const MoviePoster = ({ movie, width = 300, height = 420 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation<DetailScreen>();
  const { setPrevMainColors } = useContext(GradientContext);

  const handleNagivation = async () => {
    const [primary = 'green', secondary = 'red'] = await getImageColor(uri);
    setPrevMainColors({ primary, secondary });
    navigation.navigate('DetailScreen', movie);
  };
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
      onPress={() => handleNagivation()}>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default MoviePoster;
