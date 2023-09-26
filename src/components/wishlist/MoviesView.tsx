import React from 'react'
import HeaderMovies from './HeaderMovies'
import GridView from './GridView';

interface MoviesViewProps {
  movies: Movie[]
}

const MoviesView: React.FC<MoviesViewProps> = ({movies}) => {

  return (
    <main className='movies'>
        <HeaderMovies countMovies={movies.length}></HeaderMovies>
        <GridView movies={movies}></GridView>
    </main>
  )
}

export default MoviesView