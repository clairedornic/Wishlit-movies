import React, { useState, useEffect } from 'react'
import Button from '../Button'
import iconPlus from '../../assets/icons/icon-plus.svg';
import useStoreWishlist from '../wishlist/wishlist.store'
interface CategoriesProps {
  className: string;
}

const Categories: React.FC<CategoriesProps> = ({className }) => {
  const { initialMovies, filterByTags } = useStoreWishlist();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const uniqueTags = Array.from(new Set(initialMovies.flatMap(movie => [...movie.categories, movie.bestQuality])));

  const handleTagClick = (tag: string) => {
    setSelectedTags(prevState => {
      if (prevState.includes(tag)) {
        return prevState.filter(t => t !== tag);
      } else {
        return [...prevState, tag];
      }
    });
  }

  useEffect(() => {
    filterByTags(selectedTags);
  }, [selectedTags]);

  return (
    <div className={`categories ${className}`}>
    <Button 
      label="All" 
      styleType={selectedTags.length === 0 ? 'filter active' : 'filter'}
      onClick={() => setSelectedTags([])} 
    />
    {uniqueTags.map(tag => (
      <Button 
        key={tag}
        label={tag} 
        icon={<img src={iconPlus} alt="Plus sign" />} 
        styleType={selectedTags.includes(tag) ? 'filter active' : 'filter'}
        onClick={() => handleTagClick(tag)} 
      />
    ))}
  </div>
  )
}

export default Categories