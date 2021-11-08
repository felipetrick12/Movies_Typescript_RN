import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';

import { MovieFull } from '../../interfaces/MovieInterface';
import { Cast } from '../../interfaces/CreditsInterfaces';

import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import CardActor from '../CardActor';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const DetailsMovie = ({ movieFull, cast }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <Icon name="star-outline" size={20} color="grey" />
        <Text> {movieFull.vote_average}</Text>
        <Text> - {movieFull.genres.map((item) => item.name).join(',')}</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>Historial</Text>
        <Text style={styles.overview}>{movieFull.overview}</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>Presupuesto</Text>
        <Text style={styles.overview}>
          {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Actores</Text>
        <FlatList
          data={cast}
          renderItem={({ item }: any) => <CardActor actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          style={{ height: 70 }}
        />
      </View>
    </View>
  );
};

export default DetailsMovie;
