import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import requests from '../../services/requests';

import { REACT_APP_API_URL } from '@env';
const base_url_img = `${REACT_APP_API_URL}/static/images/movies`;

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
          style={{ width: 170, height: 95 }}
          source={{ uri: base_url_img + item.backdrop_path }}
        />
      </View>
      <View style={{ width: '40%' }}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <TouchableOpacity style={{ padding: 10 }}>
        <Icon name="play-arrow" color="#fff" size={25} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#000'
    }}>
      <View style={styles.viewSearch}>
        <TextInput
          style={styles.inputSearch}
          placeholderTextColor='rgba(255, 255, 255, .5)'
          placeholder="Search for a programme, film, genre..."
          onChangeText={text => setQuery(text)}
        />
        <TouchableOpacity style={styles.iconSearch}>
          <Icon name="search" color="rgba(255, 255, 255, .5)" size={25} />
        </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.container}>
        <Text style={{
          color: '#fff',
          fontSize: 20,
          marginLeft: 10,
          marginVertical: 10,
        }}>Popular Searches</Text>
        <MoviesList movies={movies} query={query} />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  viewSearch: {
    backgroundColor: '#111',
    borderRadius: 5,
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 10,
  },
  inputSearch: {
    padding: 15,
    paddingLeft: 50,
    fontSize: 18,
    color: 'rgba(255, 255, 255, .5)',
  },
  iconSearch: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    marginVertical: 2,
    marginHorizontal: 10,
    justifyContent: 'space-between'
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});
