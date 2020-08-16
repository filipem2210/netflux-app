const requests = {
  fetchAll: '/movies',
  fetchTrending: '/movies/trending',
  fetchNetflixOriginals: '/movies/netflix',
  fetchTopRated: `/movies/top_rated`,
  fetchActionMovies: `/movies?genres=28`,
  fetchComedyMovies: `/movies?genres=35`,
  fetchHorrorMovies: `/movies?genres=27`,
  fetchDocumentaries: `/movies?genres=99`,
}

export default requests;
