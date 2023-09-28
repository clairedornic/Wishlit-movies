import React from 'react';
import '../styles/wishlist/wishlist.scss';
import Header from '../components/wishlist/Header';
import MoviesView from '../components/wishlist/MoviesView';

function App() {
  return (
    <div className="wishlist">
      <Header></Header>
      <MoviesView></MoviesView>
    </div>
  );
}

export default App;
