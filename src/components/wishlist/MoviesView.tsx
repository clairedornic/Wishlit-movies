import React from 'react'
import HeaderMovies from './HeaderMovies'
import GridView from './GridView';
import useWishlistStore from '../../components/wishlist/wishlist.store'

const MoviesView = () => {
  const { movies } = useWishlistStore();

  return (
    <main className='movies'>
        <HeaderMovies countMovies={movies.length}></HeaderMovies>
        <GridView movies={movies}></GridView>
    </main>
  )
}

export default MoviesView