import React, { useState } from 'react';
import '../styles/wishlist/wishlist.scss';
import Header from '../components/wishlist/Header';
import MoviesView from '../components/wishlist/MoviesView';

function App() {
  const [selectedCategories, setSelectedCategories] = useState<string>('All');
  const [selectedView, setSelectedView] = useState<string>('grid');

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(category);
  };

  const handleViewChange = (view: string) => {
    setSelectedView(view);
  };

  return (
    <div className="wishlist">
      <Header onCategoryChange={handleCategoryChange} onViewChange={handleViewChange}/>
      <MoviesView></MoviesView>
    </div>
  );
}

export default App;
