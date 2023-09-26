import React from 'react'
import MovieCard from './MovieCard';

interface GridViewProps {
  movies: Movie[]
}

const GridView: React.FC<GridViewProps> = ({movies}) => {
  
  return (
    <ul className='movies__grid'>
        {movies.map((movie) => (
           <MovieCard key={movie.id} movie={movie} />
        ))}
    </ul>
  )
}

export default GridView