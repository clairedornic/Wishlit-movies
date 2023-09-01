import React from 'react';
import ReactDOM from 'react-dom/client';
import Wishlist from './Wishlist';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Wishlist />
  </React.StrictMode>
);
