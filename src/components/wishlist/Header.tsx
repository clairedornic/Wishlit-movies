import React from 'react'
import SearchBar from './SearchBar'
import ViewChoice from './ViewChoice'
import Button from '../Button'
import Categories from './Categories'

interface HeaderProps {
    onCategoryChange: (category: string) => void;
    onViewChange: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({onCategoryChange, onViewChange}) => {

    const performSearch = (query: string) => {
       
    };

    const handleClick = () => {
       
    };

  return (
    <header className='header'>
        <div className='header__actions'>
            <h1 className='header__title'>Wishlist</h1>
            <div className='header__actions-container'>
                <SearchBar onSearch={performSearch } />
                <Button onClick={handleClick} icon="" label="Add a movie" styleType="primary" />
                <ViewChoice onViewChange={onViewChange} className='header__toggle-view'></ViewChoice>
            </div>
        </div>
        <Categories onCategoryChange={onCategoryChange} className='header__categories'/>
    </header>
  )
}

export default Header