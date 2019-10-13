import React from 'react';
import data from '../../data/desserts';
import MenuPage from '../MenuPage';

function DessertsPage() {
  return <MenuPage {...data} />;
}

export default DessertsPage;
