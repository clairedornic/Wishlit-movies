import React from 'react'
import SearchBar from './SearchBar'
import ViewChoice from './ViewChoice'
import Button from '../Button'
import Categories from './Categories'

const Header = () => {

  return (
    <header className='header'>
        <div className='header__actions'>
            <h1 className='header__title'>Wishlist</h1>
            <div className='header__actions-container'>
                <SearchBar />
                <Button icon="" label="Add a movie" styleType="primary" />
                <ViewChoice className='header__toggle-view'></ViewChoice>
            </div>
        </div>
        <Categories className='header__categories'/>
    </header>
  )
}

export default Header