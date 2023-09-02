import React from 'react'
import Button from '../Button'

interface HeaderMoviesProps {
  countMovies: number
}

const HeaderMovies: React.FC<HeaderMoviesProps> = ({countMovies}) => {

  return (
    <div className='header'>
      <p className='header__title'>Titles <span className='header__count-movies'>({countMovies})</span></p>
      <Button label="Delete selection" icon="" styleType="delete" />
    </div>
  )
}

export default HeaderMovies