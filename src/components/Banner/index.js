import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../../services/api';
import requests from '../../services/requests';

import { styles } from './styles';

import logo from '../../assets/logo.png';

import { REACT_APP_API_URL } from '@env';
const base_url_img = `${REACT_APP_API_URL}/static/images/movies`;

const iconSize = 25;
const iconColor = '#fff';

export default function Banner() {
  const [movie, setMovie] = useState([]);

  function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(requests.fetchNetflixOriginals);
      const randomNumber = randomInt(0, data.length);
      const randomMovie = data[randomNumber];
      setMovie(randomMovie);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity>
          <Image source={logo} resizeMode='contain' style={styles.logo} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.navOption}>Series</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.navOption}>Films</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.navOption}>My List</Text>
        </TouchableOpacity>
      </View>

      <Image style={styles.bannerImg} source={{ uri: base_url_img + movie?.backdrop_path }} />

      <View style={styles.banner}>
        <Text style={styles.title}>{movie?.title}</Text>

        <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}>
          <View style={styles.options}>
            <TouchableOpacity style={styles.myList}>
              <MaterialCommunityIcons name='plus' size={iconSize} color={iconColor} />
              <Text style={styles.myListText}>My List</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.play}>
              <MaterialCommunityIcons name='play' size={iconSize} color={'#000'} />
              <Text style={styles.playText}>Play</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.info}>
              <MaterialCommunityIcons name='information-outline' size={iconSize} color={iconColor} />
              <Text style={styles.infoText}>Info</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}
