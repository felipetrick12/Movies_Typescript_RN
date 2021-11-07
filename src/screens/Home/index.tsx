import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//Dependencies
import Carousel from 'react-native-snap-carousel';
//Components
import useMovies from '../../hooks/useMovies';
import MoviePoster from '../../components/MoviePoster';
import HorizontalSlider from '../../components/HorizontalSlider';

const Home = () => {
  const {
    moviesCurrent,
    moviesPopular,
    moviesRated,
    moviesUpcoming,
    isLoading,
  } = useMovies();
  const { top } = useSafeAreaInsets();
  const { width, height } = Dimensions.get('window');
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator color="red" size={50} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        <View style={{ height: 440 }}>
          <Carousel
            data={moviesCurrent!}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={width}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        {/* Populares */}
        <HorizontalSlider title={'Populares'} movies={moviesPopular!} />
        <HorizontalSlider
          title={'Proximos estrenos'}
          movies={moviesUpcoming!}
        />
        <HorizontalSlider title={'Pelicula amadas'} movies={moviesRated!} />
      </View>
    </ScrollView>
  );
};

export default Home;
