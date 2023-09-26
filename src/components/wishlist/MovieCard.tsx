import React from 'react'
import Button from '../Button';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({movie}) => {

  return (
    <li key={movie.id} className='movie__card'>
      {movie.isNew && <p className='movie__card-tag'>New</p>}
      <div className='movie__card-container-img'>
        <img src={require(`../../assets/images/${movie.cover}`)} alt={movie.title} className='movie__card-img'/>
        <p className='movie__card-quality'>{movie.bestQuality}</p>
      </div>
      <div className='movie__card-container-infos'>
        <h2 className='movie__card-title'>{movie.title}</h2>
      </div>
      <div className="movie__card-container-infos--hover">
        <p className='movie__card-title'>{movie.title}</p>
        <div className='movie__card-categories'>
          {movie.categories.map((category, index) => (
            <Button key={category + index} label={category} icon="" styleType="category" />
          ))}
        </div>
        
      </div>
    </li>
  )
}

export default MovieCard