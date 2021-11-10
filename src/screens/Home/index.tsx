import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//Dependencies
import Carousel from 'react-native-snap-carousel';
//Components
import useMovies from '../../hooks/useMovies';
import MoviePoster from '../../components/MoviePoster';
import HorizontalSlider from '../../components/HorizontalSlider';
import GradientBackground from '../../components/GradientBackground';
import { getImageColor } from '../../helpers/getImageColor';
import { GradientContext } from '../../context/GradientContext';

const Home = () => {
  const {
    moviesCurrent,
    moviesPopular,
    moviesRated,
    moviesUpcoming,
    isLoading,
  } = useMovies();

  const { top } = useSafeAreaInsets();
  const { width } = Dimensions.get('window');
  const { setMainColors } = useContext(GradientContext);

  const getPosterColor = async (index: number) => {
    const movie = moviesCurrent[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary = 'green', secondary = 'red'] = await getImageColor(uri);
    setMainColors({ primary, secondary });
  };

  useEffect(() => {
    if (moviesCurrent.length > 0) {
      getPosterColor(0);
    }
  }, [moviesCurrent]);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator color="red" size={50} />
      </View>
    );
  }
  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          <View style={{ height: 440 }}>
            <Carousel
              data={moviesCurrent!}
              renderItem={({ item }: any) => <MoviePoster movie={item} />}
              sliderWidth={width}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={(index) => getPosterColor(index)}
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
    </GradientBackground>
  );
};

export default Home;
