import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/StackNavigation';
import { styles } from './styles';

import useMoviesDetails from '../../hooks/useMoviesDetails';
import DetailsMovie from '../../components/DetailsMovie';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParamList, 'DetailScreen'> {}

const screenHeight = Dimensions.get('screen').height;

const DetailScreen = ({ route, navigation }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, cast, movieFull } = useMoviesDetails(movie.id);

  return (
    <ScrollView>
      <View style={[styles.imageContainer, { height: screenHeight * 0.7 }]}>
        <Image source={{ uri }} style={styles.image} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text style={styles.subTitle}>{movie.title}</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size={30} color="grey" />
      ) : (
        <DetailsMovie movieFull={movieFull!} cast={cast} />
      )}
      <View style={styles.img}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
