import Hero from "../Hero/Hero";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { restaurant_data } from "../../restaurant-data";
import { calculateTier } from "../../utils";

const App = () => {
  return (
    <div className="AppDiv">
      <Hero />
      <div className="RestaurantWrapper">
        {restaurant_data.map((restaurant) => (
          <RestaurantCard
            restaurant={restaurant}
            tier={calculateTier(restaurant.rating)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
