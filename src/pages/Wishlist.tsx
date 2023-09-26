import React, { useState } from 'react';
import '../styles/wishlist/wishlist.scss';
import Header from '../components/wishlist/Header';
import MoviesView from '../components/wishlist/MoviesView';
import useWishlistStore from '../components/wishlist/wishlist.store'

function App() {
  const { movies } = useWishlistStore();

  return (
    <div className="wishlist">
      <Header></Header>
      <MoviesView movies={movies}></MoviesView>
    </div>
  );
}

export default App;
