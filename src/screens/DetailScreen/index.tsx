import React from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/StackNavigation';
import { styles } from './styles';

interface Props extends StackScreenProps<RootStackParamList, 'DetailScreen'> {}

const screenHeight = Dimensions.get('screen').height;

const DetailScreen = ({ route }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  console.log(movie);

  return (
    <ScrollView>
      <View style={[styles.imageContainer, { height: screenHeight * 0.7 }]}>
        <Image source={{ uri }} style={styles.image} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text style={styles.subTitle}>{movie.title}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
