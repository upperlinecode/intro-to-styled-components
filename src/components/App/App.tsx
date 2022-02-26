import Hero from "../Hero/Hero";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { AppRoot, RestaurantWrapper } from "./App.styles";
import { restaurant_data } from "../../restaurant-data";
import { Tier } from "../../types";
import { calculateTier } from "../../utils";

const App = () => {
  return (
    <AppRoot>
      <Hero />
      <RestaurantWrapper>
        {restaurant_data.map((restaurant) => (
          <RestaurantCard
            restaurant={restaurant}
            tier={calculateTier(restaurant.rating)}
          />
        ))}
      </RestaurantWrapper>
    </AppRoot>
  );
};

export default App;
