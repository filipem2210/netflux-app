import React, {useState, useEffect} from 'react';
import { View, FlatList, Image, Text } from 'react-native';

import api from '../../services/api';

import { REACT_APP_API_URL } from '@env';
const base_url_img = `${REACT_APP_API_URL}/static/images/movies`;

import { styles } from './styles'

export default function Row ({ fetchUrl, title }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const { data } = await api.get(fetchUrl);
      setMovies(data);
    }
    getMovies();
  }, []);

  const renderItem = ({ item }) => (
    <Image
      resizeMode='contain'
      style={styles.carouselImg}
      source={{ uri: base_url_img + item.poster_path }}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
        horizontal
      />
    </View>
  );
}
