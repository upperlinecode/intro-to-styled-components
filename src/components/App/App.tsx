import Hero from "../Hero/Hero";
import RestaurantCard, { Tier } from "../RestaurantCard/RestaurantCard";
import { AppDiv, RestaurantWrapper } from "./App.styles";
import { restaurant_data } from "../../restaurant-data";

const calculateTier = (rating: number): Tier => {
  if (rating >= 4.8) {
    return "gold";
  } else if (rating >= 4.5) {
    return "silver";
  }
  return "bronze";
};

const App = () => {
  return (
    <AppDiv>
      <Hero />
      <RestaurantWrapper>
        {restaurant_data.map((restaurant) => (
          <RestaurantCard
            restaurant={restaurant}
            tier={calculateTier(restaurant.rating)}
          />
        ))}
      </RestaurantWrapper>
    </AppDiv>
  );
};

export default App;
