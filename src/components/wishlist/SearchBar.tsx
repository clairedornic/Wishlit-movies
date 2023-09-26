import React, { useState } from 'react'
import iconSearch from '../../assets/icons/icon-search.svg'
import useStoreWishlist from '../wishlist/wishlist.store'

const SearchBar = () => {
    const { initialMovies, movies, setMovies, filterMovies } = useStoreWishlist();
    const [query, setQuery] = useState('');

    const performSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setQuery(inputValue);

        if (inputValue === '') {
            setMovies(initialMovies);
        } else {
            filterMovies(inputValue);
        }
      };

  return (
    <form className='search-bar'>
        <input
            type="text"
            placeholder=""
            value={query}
            onChange={performSearch}
            className='search-bar__input'
        />
        <img 
            src={iconSearch} 
            className="search-bar__icon" 
            alt="Wen icon to represent the search"
        />
    </form>
  )
}

export default SearchBar