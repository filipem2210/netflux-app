import React from 'react';

import Banner from '../../components/Banner';
import Row from '../../components/Row';

import requests from '../../services/requests';

import { Container } from './styles';

export default function Browse() {
  return (
    <Container>
      <Banner />

      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </Container>
  );
}
