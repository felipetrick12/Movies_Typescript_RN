import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

import { Cast } from '../../interfaces/CreditsInterfaces';

interface Props {
  actor: Cast;
}

const CardActor = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {uri && (
        <View style={styles.content1}>
          <Image
            source={{ uri }}
            style={{ width: 50, height: 50, borderRadius: 10, marginRight: 10 }}
          />
        </View>
      )}
      <View style={styles.content2}>
        <Text style={styles.text1}>{actor.name}</Text>
        <Text style={styles.text2}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CardActor;
