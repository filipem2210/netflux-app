import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../../services/api';
import requests from '../../services/requests';

import { BannerImage } from './styles';

import logo from '../../assets/logo.png';

const { height: screenHeight } = Dimensions.get('window');

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
    <View style={{ height: screenHeight / 2 }}>

      <View style={{
        position: 'absolute',
        top: 0,
        zIndex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <TouchableOpacity>
          <Image
            source={logo}
            resizeMode='contain'
            style={{
              height: 50,
              width: 40,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{ color: '#fff' }}
          >Series</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{ color: '#fff' }}
          >Films</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{ color: '#fff' }}
          >My List</Text>
        </TouchableOpacity>
      </View>

      <BannerImage source={{ uri: base_url_img + movie?.backdrop_path }} />

      <View style={{
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        width: '100%',
      }}>

        <Text style={{
          color: '#fff',
          textAlign: 'center',
          fontSize: 35
        }}>{movie?.title}</Text>

        <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}>
          <View style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <TouchableOpacity style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
              <MaterialCommunityIcons name='plus' size={iconSize} color={iconColor} />
              <Text style={{ color: '#fff', fontSize: 12 }}>My List</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 3,
              paddingHorizontal: 5,
              color: '#000',
              backgroundColor: '#fff',
              borderRadius: 5,
              marginHorizontal: 20,
            }}>
              <MaterialCommunityIcons name='play' size={iconSize} color={'#000'} />
              <Text style={{
                color: '#000',
                backgroundColor: '#fff',
                fontSize: 12,
                paddingVertical: 5,
                paddingHorizontal: 10,
              }}>
                Play
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
              <MaterialCommunityIcons name='information-outline' size={iconSize} color={iconColor} />
              <Text style={{ color: '#fff', fontSize: 12 }}>Info</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}
