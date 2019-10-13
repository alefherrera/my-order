import React from 'react';
import data from '../../data/drinks';
import MenuPage from '../MenuPage';

function DrinksPage() {
  return <MenuPage {...data} />;
}

export default DrinksPage;
