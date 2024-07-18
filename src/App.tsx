import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import RestaurantList from './components/RestaurantList/RestaurantList';
import { restaurants } from './utils/data/restaurants';
// import useRestaurants from './utils/hooks/useRestaurants';

function App() {
  // const { data } = useRestaurants();
  return (
    <div className="py-4">
      <Navbar />
      <Header locationName="Fitzrovia" />
      <RestaurantList restaurants={restaurants} />
      {/* <RestaurantList restaurants={data ? data?.restaurants : restaurants} /> */}
    </div>
  );
}

export default App;
