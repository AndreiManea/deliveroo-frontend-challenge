import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import RestaurantList from './components/RestaurantList/RestaurantList';
import { restaurants } from './utils/data/restaurants';

function App() {
  return (
    <div className="py-4">
      <Navbar />
      <Header locationName="Fitzrovia" />
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export default App;
