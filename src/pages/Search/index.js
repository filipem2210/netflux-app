import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import requests from '../../services/requests';

import { REACT_APP_API_URL } from '@env';
const base_url_img = `${REACT_APP_API_URL}/static/images/movies`;

import { styles } from './styles';

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(requests.fetchAll);
      setMovies(data);
    }
    fetchData();
  }, []);

  const filter = (movies, query) => {
    return movies.filter(movie => movie.title.toLowerCase().includes(query))
  };

  const MoviesList = ({ movies, query }) => {
    const filtered = useMemo(() => filter(movies, query), [movies, query]);
    if (query.length >= 2) {
      return <FlatList
        data={filtered}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
      />;
    } else {
      return <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
      />;
    }
  }

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View>
        <Image
          resizeMode='contain'
          style={styles.itemImg}
          source={{ uri: base_url_img + item.backdrop_path }}
        />
      </View>
      <View style={styles.itemTitle}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <TouchableOpacity style={styles.playButton}>
        <Icon name="play-arrow" color="#fff" size={25} />
      </TouchableOpacity>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.viewSearch}>
        <TextInput
          style={styles.inputSearch}
          placeholderTextColor='rgba(255, 255, 255, .5)'
          placeholder="Search for a programme, film, genre..."
          autoFocus
          onChangeText={text => setQuery(text)}
        />
        <TouchableOpacity style={styles.iconSearch}>
          <Icon name="search" color="rgba(255, 255, 255, .5)" size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.searchTitle}>Popular Searches</Text>
        <MoviesList movies={movies} query={query} />
      </View>
    </KeyboardAvoidingView>
  )
}
