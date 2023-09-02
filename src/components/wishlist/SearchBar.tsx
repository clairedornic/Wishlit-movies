import React, { useState } from 'react'
import iconSearch from '../../assets/icons/icon-search.svg'

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    
    const [query, setQuery] = useState('');
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        onSearch(newQuery);
    };

  return (
    <form className='search-bar'>
        <input
            type="text"
            placeholder=""
            value={query}
            onChange={handleInputChange}
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