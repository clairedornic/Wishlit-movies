import React, { useState } from 'react';
import '../styles/wishlist/wishlist.scss';
import Header from '../components/wishlist/Header';
import MoviesView from '../components/wishlist/MoviesView';
import moviesData from '../assets/datas/data.json'
import { Movie } from '../types/Movie';

function App() {
  const initialMovies = moviesData.movie as Movie[];
  const [movies, setMovies] = useState(initialMovies);

  const performSearch = (query: string) => {
    if (query === '') {
      setMovies(initialMovies);
    } else {
      const filteredMovies = initialMovies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setMovies(filteredMovies);
    }
  };
  return (
    <div className="wishlist">
      <Header onSearch={performSearch} />
      <MoviesView movies={movies}></MoviesView>
    </div>
  );
}

export default App;
