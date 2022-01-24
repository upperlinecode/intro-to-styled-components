interface Restaurant {
  category: string;
  companyName: string;
  address: string;
  streetAddress: string;
  city: string;
  state: string;
  Zip: number;
  mobile: string | null;
  website: string;
  email: string | null;
  rating: number;
  reviewCount: number;
}

export type Tier = "bronze" | "silver" | "gold";

const RestaurantCard = (props: { restaurant: Restaurant; tier: Tier }) => {
  const { companyName, streetAddress, city, category, website, rating } =
    props.restaurant;

  return (
    <div className="RestaurantCardDiv">
      <div className="ImageContainer">
        <img
          src="http://imageipsum.com/250x250"
          alt="randomly retrieved placeholder - unknown contents"
        />
      </div>
      <div className="CardBody">
        <h1>{companyName}</h1>
        <h3>
          {category} - {rating} ⭐️ - {city}
        </h3>
        <h5>{streetAddress}</h5>
        <p className="CardDescription">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem saepe
          magni, odit debitis blanditiis esse non nihil perspiciatis asperiores
          voluptate officia excepturi cum! Voluptate, perferendis adipisci
          accusantium voluptatem et sit?
        </p>
        <div>
          <a
            href={`https://maps.google.com/maps?q=${companyName}+${category}+${city}`}
          >
            Find Locations
          </a>
          {website && <a href={website}>Visit Website</a>}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
