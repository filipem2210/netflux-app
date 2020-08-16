import React, { useState, useRef, useEffect } from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { Title, CarouselImage } from './styles';

import api from '../../services/api';

const { width: screenWidth } = Dimensions.get('window');

import { REACT_APP_API_URL } from '@env';
const base_url_img = `${REACT_APP_API_URL}/static/images/movies`;

export default function Row({ fetchUrl, title }) {
  const carouselRef = useRef(null);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const { data } = await api.get(fetchUrl);
      setMovies(data);
    }
    getMovies();
  }, []);

  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity>
          <CarouselImage
            resizeMode='contain'
            source={{ uri: base_url_img + item.poster_path }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Title>{title}</Title>
      <Carousel
        ref={carouselRef}
        data={movies}
        renderItem={_renderItem}
        itemWidth={130}
        sliderWidth={screenWidth}
        activeSlideAlignment={"start"}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
    </View>
  );
}
